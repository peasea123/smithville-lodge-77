"use client";

import { useState, type FormEvent } from "react";
import { TurnstileField } from "@/components/forms/TurnstileField";

type ContactFormProps = {
  subject?: string;
  showInterestField?: boolean;
};

export function ContactForm({
  subject = "General inquiry",
  showInterestField = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const captchaSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const captchaConfigured = Boolean(captchaSiteKey);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!captchaConfigured) {
      setErrorMessage("Captcha is not configured yet. Please try again later.");
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(form);
    const captchaToken = formData.get("cf-turnstile-response");
    if (typeof captchaToken !== "string" || !captchaToken.trim()) {
      setSubmitting(false);
      setErrorMessage("Please complete the captcha verification.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        setErrorMessage(
          data?.error ?? "We could not submit your message. Please try again.",
        );
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setErrorMessage(
        "A network error occurred while submitting your message. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-sm border border-gold/40 bg-navy/5 px-6 py-8 text-center"
        role="status"
      >
        <p className="font-serif text-lg font-semibold text-navy">
          Thank you for your message
        </p>
        <p className="mt-2 text-sm text-stone">
          This form is now protected by captcha, but message delivery is still being
          finalized. Please use the contact details on this page for urgent
          inquiries.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="subject" value={subject} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy">
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-sm border border-ivory-dark bg-white px-4 py-2.5 text-charcoal outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-sm border border-ivory-dark bg-white px-4 py-2.5 text-charcoal outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy">
          Phone <span className="text-stone font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-sm border border-ivory-dark bg-white px-4 py-2.5 text-charcoal outline-none focus:border-gold focus:ring-1 focus:ring-gold"
        />
      </div>

      {showInterestField && (
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-navy">
            Your interest
          </label>
          <select
            id="interest"
            name="interest"
            className="mt-1 w-full rounded-sm border border-ivory-dark bg-white px-4 py-2.5 text-charcoal outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          >
            <option value="learn">Learning about Freemasonry</option>
            <option value="membership">Membership inquiry</option>
            <option value="visit">Visiting the lodge</option>
            <option value="charity">Charity or community partnership</option>
            <option value="other">Other</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full resize-y rounded-sm border border-ivory-dark bg-white px-4 py-2.5 text-charcoal outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          placeholder="Share your question respectfully. Membership is never solicited."
        />
      </div>

      <p className="text-xs text-stone">
        By submitting, you understand this form is for inquiries only. Religion and
        politics are not appropriate topics for initial contact.
      </p>

      {captchaConfigured ? (
        <div>
          <p className="text-sm font-medium text-navy">
            Complete the captcha verification <span className="text-gold">*</span>
          </p>
          <div className="mt-2">
            <TurnstileField siteKey={captchaSiteKey!} />
          </div>
        </div>
      ) : (
        <p className="text-sm text-red-700" role="alert">
          The contact form is temporarily unavailable. Please visit the lodge at 101
          W Market during stated meetings (first Monday of each month, 7:00 PM).
        </p>
      )}

      {errorMessage && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!captchaConfigured || submitting}
        className="w-full rounded-sm bg-navy px-6 py-3 text-sm font-semibold tracking-wide text-ivory uppercase transition-colors hover:bg-navy-light sm:w-auto"
      >
        {submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
