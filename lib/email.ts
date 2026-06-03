import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
  subject: string;
  phone?: string;
  interest?: string;
};

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_FORM_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

/** Ensures From uses the verified Resend subdomain (contact.chl77.org). */
function validateFromAddress(from: string): string | null {
  const requiredHost = `@${siteConfig.emailSendingDomain}`;
  if (!from.includes(requiredHost)) {
    return `RESEND_FROM_EMAIL must send from ${requiredHost} (verified in Resend). Current value does not include that domain. Update Vercel and redeploy.`;
  }
  return null;
}

function formatSendError(apiMessage: string): string {
  const lower = apiMessage.toLowerCase();

  if (
    lower.includes("not verified") ||
    lower.includes("domain is not") ||
    lower.includes("add and verify")
  ) {
    return `Email could not be sent: the From address must use @${siteConfig.emailSendingDomain} (verified in Resend). Check RESEND_FROM_EMAIL in Vercel.`;
  }

  if (lower.includes("only send testing emails")) {
    return "Email could not be sent: Resend test mode only allows sending to your account email. Use a verified domain and production From address.";
  }

  if (lower.includes("invalid") && lower.includes("from")) {
    return `Email could not be sent: invalid From address. Use format: Center Hill Lodge <inquiries@${siteConfig.emailSendingDomain}>`;
  }

  return `Email could not be sent. Please try again later or visit during stated meetings.`;
}

export async function sendContactEmail(
  payload: ContactEmailPayload,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const config = getEmailConfig();
  if (!config) {
    return {
      ok: false,
      message:
        "Email delivery is not fully configured yet. Please visit during stated meeting times.",
    };
  }

  const fromError = validateFromAddress(config.from);
  if (fromError) {
    console.error("[contact-email]", fromError);
    return {
      ok: false,
      message:
        "Email delivery is misconfigured on the server. Please try again after the lodge updates its email settings.",
    };
  }

  const resend = new Resend(config.apiKey);
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    payload.interest ? `Interest: ${payload.interest}` : null,
    "",
    payload.message,
  ].filter((line): line is string => line !== null);

  try {
    const { data, error } = await resend.emails.send({
      from: config.from,
      to: [config.to],
      replyTo: payload.email,
      subject: `[${siteConfig.shortName}] ${payload.subject}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("[contact-email] Resend error:", error);
      return {
        ok: false,
        message: formatSendError(error.message ?? "Unknown error"),
      };
    }

    if (!data?.id) {
      console.error("[contact-email] Resend returned no message id");
      return {
        ok: false,
        message:
          "Email could not be confirmed as sent. Please try again or visit during stated meetings.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("[contact-email] Unexpected error:", err);
    return {
      ok: false,
      message:
        "Email delivery is temporarily unavailable. Please try again later.",
    };
  }
}

export function isEmailDeliveryConfigured() {
  return getEmailConfig() !== null;
}
