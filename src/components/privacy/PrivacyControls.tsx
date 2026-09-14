"use client";

import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { useEffect, useState } from "react";

export const PRIVACY_CHOICE_KEY = "rebuild-rise-analytics-choice";
export const OPEN_PRIVACY_CHOICES_EVENT = "rebuild-rise:open-privacy-choices";

type PrivacyChoice = "accepted" | "declined" | null;

export function PrivacyControls() {
  const [choice, setChoice] = useState<PrivacyChoice>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(PRIVACY_CHOICE_KEY);
    const openChoices = () => {
      setOpen(true);
    };

    window.addEventListener(OPEN_PRIVACY_CHOICES_EVENT, openChoices);
    const frame = window.requestAnimationFrame(() => {
      setChoice(saved === "accepted" || saved === "declined" ? saved : null);
      setOpen(saved !== "accepted" && saved !== "declined");
      setReady(true);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(OPEN_PRIVACY_CHOICES_EVENT, openChoices);
    };
  }, []);

  function saveChoice(nextChoice: Exclude<PrivacyChoice, null>) {
    window.localStorage.setItem(PRIVACY_CHOICE_KEY, nextChoice);
    setChoice(nextChoice);
    setOpen(false);
  }

  return (
    <>
      {ready && choice === "accepted" ? (
        <Analytics
          beforeSend={(event) => ({
            ...event,
            url: event.url.split("?")[0].split("#")[0],
          })}
        />
      ) : null}

      {ready && open ? (
        <aside
          className="fixed inset-x-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[60] mx-auto max-w-[44rem] border border-olive/45 bg-forest-deep p-5 text-cream shadow-[0_18px_50px_rgba(18,38,22,0.34)] sm:bottom-6 sm:p-6 lg:bottom-6"
          aria-labelledby="privacy-choices-heading"
          aria-describedby="privacy-choices-description"
        >
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-leaf">
                Privacy choices
              </p>
              <h2 id="privacy-choices-heading" className="mt-2 font-display text-[1.45rem] font-medium leading-tight text-cream">
                Anonymous analytics are optional.
              </h2>
              <p id="privacy-choices-description" className="mt-2 max-w-[58ch] font-sans text-xs leading-[1.7] text-cream-muted">
                We use no advertising cookies. If you agree, privacy-focused Vercel Analytics records anonymous page visits without storing your form entries. Your choice is saved on this device. Read our{" "}
                <Link href="/privacy" className="font-medium text-cream underline decoration-olive underline-offset-4">
                  privacy notice
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <button
                type="button"
                onClick={() => saveChoice("declined")}
                className="inline-flex min-h-11 items-center justify-center border border-olive/60 px-4 font-sans text-sm font-medium text-cream hover:bg-root"
              >
                No thanks
              </button>
              <button
                type="button"
                onClick={() => saveChoice("accepted")}
                className="inline-flex min-h-11 items-center justify-center bg-cream px-4 font-sans text-sm font-medium text-forest hover:bg-ivory"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
}
