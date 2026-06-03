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
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_FORM_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

export async function sendContactEmail(
  payload: ContactEmailPayload,
): Promise<{ ok: true } | { ok: false; message: string; pendingDns?: boolean }> {
  const config = getEmailConfig();
  if (!config) {
    return {
      ok: false,
      message:
        "Email delivery is not fully configured yet. Please visit during stated meeting times.",
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
    const { error } = await resend.emails.send({
      from: config.from,
      to: [config.to],
      replyTo: payload.email,
      subject: `[${siteConfig.shortName}] ${payload.subject}`,
      text: lines.join("\n"),
    });

    if (error) {
      const message = error.message ?? "Email could not be sent.";
      const pendingDns =
        message.toLowerCase().includes("domain") ||
        message.toLowerCase().includes("verify") ||
        message.toLowerCase().includes("not verified");

      return {
        ok: false,
        message: pendingDns
          ? "Your message was received by our server, but email delivery is waiting on domain verification. Please try again after DNS is configured, or visit during stated meetings."
          : "We could not deliver your message by email. Please try again later or visit during stated meetings.",
        pendingDns,
      };
    }

    return { ok: true };
  } catch {
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
