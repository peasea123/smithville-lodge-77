"use client";

import { useState, type FormEvent } from "react";

type ContactFormProps = {
  subject?: string;
  showInterestField?: boolean;
};

export function ContactForm({
  subject = "General inquiry",
  showInterestField = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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
          This form is not yet connected to email. A lodge officer will configure
          delivery before launch. For now, please use the contact details on this
          page if you need a prompt response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="subject" value={subject} />

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

      <button
        type="submit"
        className="w-full rounded-sm bg-navy px-6 py-3 text-sm font-semibold tracking-wide text-ivory uppercase transition-colors hover:bg-navy-light sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
