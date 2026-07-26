"use client";

import { useEffect, useState } from "react";

type GoogleFundingChoices = {
  callbackQueue?: Array<Record<string, () => void>>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFundingChoices;
    BloxDungeonPrivacyChoices?: {
      open: () => void;
    };
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

  return (
    <div className="privacy-choice-actions">
      <button
        className="privacy-choice-button"
        data-ad-exclusion-zone="privacy-choice-control"
        onClick={() => window.BloxDungeonPrivacyChoices?.open()}
        type="button"
      >
        Analytics cookie settings
      </button>
      {available ? (
        <button
          className="privacy-choice-button"
          data-ad-exclusion-zone="privacy-choice-control"
          onClick={() => window.googlefc?.showRevocationMessage?.()}
          type="button"
        >
          Google ad privacy settings
        </button>
      ) : null}
    </div>
  );
}
