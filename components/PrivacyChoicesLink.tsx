"use client";

import { useEffect, useState } from "react";

type GoogleFundingChoices = {
  callbackQueue?: Array<Record<string, () => void>>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFundingChoices;
  }
}

export default function PrivacyChoicesLink() {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    window.googlefc = window.googlefc ?? {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue ?? [];
    window.googlefc.callbackQueue.push({
      CONSENT_API_READY: () => {
        setAvailable(typeof window.googlefc?.showRevocationMessage === "function");
      }
    });
  }, []);

  if (!available) {
    return null;
  }

  return (
    <button
      className="privacy-choice-button"
      data-ad-exclusion-zone="privacy-choice-control"
      onClick={() => window.googlefc?.showRevocationMessage?.()}
      type="button"
    >
      Privacy and cookie settings
    </button>
  );
}
