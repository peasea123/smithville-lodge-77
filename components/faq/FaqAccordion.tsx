"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ivory-dark rounded-sm border border-ivory-dark bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ivory/50"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-serif text-lg font-medium text-navy">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-gold/40 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className={`overflow-hidden transition-all ${isOpen ? "max-h-96" : "max-h-0"}`}
              hidden={!isOpen}
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-stone">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
