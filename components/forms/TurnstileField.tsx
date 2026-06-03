"use client";

import Script from "next/script";
import { useCallback, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

type TurnstileFieldProps = {
  siteKey: string;
};

export function TurnstileField({ siteKey }: TurnstileFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [loadError, setLoadError] = useState(false);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || widgetIdRef.current) {
      return;
    }

    setLoadError(false);
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "light",
      "error-callback": () => setLoadError(true),
      "expired-callback": () => {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      },
    });
  }, [siteKey]);

  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div ref={containerRef} className="min-h-[65px]" />
      {loadError && (
        <div
          className="mt-3 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          <p className="font-medium">Captcha could not connect to Cloudflare.</p>
          <p className="mt-2">
            This usually means the Turnstile widget in Cloudflare does not list
            this website&apos;s domain yet. In{" "}
            <a
              href="https://dash.cloudflare.com/?to=/:account/turnstile"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Cloudflare Turnstile
            </a>
            , edit your widget and add these hostnames (no https://):
          </p>
          <ul className="mt-2 list-inside list-disc">
            {siteConfig.domains.map((host) => (
              <li key={host}>
                <code className="text-xs">{host}</code>
              </li>
            ))}
            <li>
              <code className="text-xs">localhost</code> (for local dev)
            </li>
          </ul>
          <p className="mt-2 text-xs">
            Save in Cloudflare, then redeploy on Vercel. Also try a hard refresh
            or disable ad blockers.
          </p>
        </div>
      )}
    </div>
  );
}
