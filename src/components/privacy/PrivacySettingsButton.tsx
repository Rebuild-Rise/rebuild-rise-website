"use client";

import {
  OPEN_PRIVACY_CHOICES_EVENT,
} from "@/components/privacy/PrivacyControls";

export function PrivacySettingsButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new Event(OPEN_PRIVACY_CHOICES_EVENT));
      }}
      className="font-sans text-xs text-cream-muted underline decoration-olive underline-offset-4 hover:text-cream"
    >
      Privacy choices
    </button>
  );
}
