import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileVerificationResult = {
  success: boolean;
};

function getRemoteIp(request: NextRequest) {
  const cloudflareIp = request.headers.get("cf-connecting-ip")?.trim();
  if (cloudflareIp) {
    return cloudflareIp;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }

  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
}

async function verifyTurnstile(
  token: string,
  remoteIp: string | undefined,
): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return {
      ok: false,
      status: 500,
      message: "Captcha service is not configured on the server.",
    };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) {
    body.append("remoteip", remoteIp);
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body,
    });

    if (!response.ok) {
      return {
        ok: false,
        status: 502,
        message: "Captcha verification is temporarily unavailable.",
      };
    }

    const data =
      (await response.json()) as Partial<TurnstileVerificationResult>;

    if (!data.success) {
      return {
        ok: false,
        status: 400,
        message: "Captcha verification failed. Please try again.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      status: 502,
      message: "Captcha verification is temporarily unavailable.",
    };
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const subjectField = formData.get("subject");
  const phone = formData.get("phone");
  const interest = formData.get("interest");
  const honeypot = formData.get("website");
  const captchaToken = formData.get("cf-turnstile-response");

  if (typeof honeypot === "string" && honeypot.trim()) {
    return NextResponse.json(
      { error: "Invalid submission detected." },
      { status: 400 },
    );
  }

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (typeof captchaToken !== "string" || !captchaToken.trim()) {
    return NextResponse.json(
      { error: "Please complete the captcha verification." },
      { status: 400 },
    );
  }

  const verifyResult = await verifyTurnstile(
    captchaToken,
    getRemoteIp(request),
  );

  if (!verifyResult.ok) {
    return NextResponse.json(
      { error: verifyResult.message },
      { status: verifyResult.status },
    );
  }

  const subject =
    typeof subjectField === "string" && subjectField.trim()
      ? subjectField.trim()
      : "General inquiry";

  const emailResult = await sendContactEmail({
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    subject,
    phone: typeof phone === "string" && phone.trim() ? phone.trim() : undefined,
    interest:
      typeof interest === "string" && interest.trim()
        ? interest.trim()
        : undefined,
  });

  if (!emailResult.ok) {
    return NextResponse.json(
      { error: emailResult.message },
      { status: emailResult.pendingDns ? 503 : 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
