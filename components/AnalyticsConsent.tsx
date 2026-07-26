"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

const measurementId = "G-VXZ1G44LSD";
const consentKey = "bloxdungeon_consent_v1";
const productionHosts = new Set(["bloxdungeon.com"]);

type ConsentChoice = "analytics_granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    BloxDungeonPrivacyChoices?: {
      open: () => void;
    };
  }
}

function isProductionHost() {
  return typeof window !== "undefined" && productionHosts.has(window.location.hostname);
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(args);
}

function updateConsent(choice: ConsentChoice) {
  const analyticsGranted = choice === "analytics_granted";

  gtag("consent", "update", {
    analytics_storage: analyticsGranted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
}

export function AnalyticsConsentDefaults() {
  const defaults = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });
    gtag('set', 'ads_data_redaction', true);
    gtag('set', 'url_passthrough', false);
  `;

  return <Script id="bd-consent-defaults" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: defaults }} />;
}

export function AnalyticsConsentManager() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [gtagReady, setGtagReady] = useState(false);

  useEffect(() => {
    let storedChoice: ConsentChoice | null = null;

    try {
      const stored = window.localStorage.getItem(consentKey);
      storedChoice = stored === "analytics_granted" || stored === "denied" ? stored : null;
    } catch {
      storedChoice = null;
    }

    if (storedChoice) {
      setChoice(storedChoice);
      updateConsent(storedChoice);
    } else {
      setIsOpen(true);
    }

    window.BloxDungeonPrivacyChoices = {
      open: () => setIsOpen(true)
    };

    return () => {
      delete window.BloxDungeonPrivacyChoices;
    };
  }, []);

  useEffect(() => {
    if (!gtagReady || choice !== "analytics_granted" || !isProductionHost()) {
      return;
    }

    window.gtag?.("js", new Date());
    window.gtag?.("config", measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  }, [choice, gtagReady]);

  useEffect(() => {
    const trackContentSelection = (event: MouseEvent) => {
      if (choice !== "analytics_granted" || !isProductionHost()) {
        return;
      }

      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics-content]") : null;
      if (!target) {
        return;
      }

      const contentType = target.dataset.analyticsContent;
      const itemId = target.dataset.analyticsSlug;
      if (!contentType || !itemId) {
        return;
      }

      window.gtag?.("event", "select_content", {
        content_type: contentType,
        item_id: itemId
      });
    };

    document.addEventListener("click", trackContentSelection);
    return () => document.removeEventListener("click", trackContentSelection);
  }, [choice]);

  const saveChoice = useCallback((nextChoice: ConsentChoice) => {
    try {
      window.localStorage.setItem(consentKey, nextChoice);
    } catch {
      // The in-memory update still applies for this page view if storage is unavailable.
    }

    setChoice(nextChoice);
    updateConsent(nextChoice);
    setIsOpen(false);
  }, []);

  const acceptAnalytics = () => saveChoice("analytics_granted");
  const rejectAnalytics = () => saveChoice("denied");

  return (
    <>
      {choice === "analytics_granted" && isProductionHost() ? (
        <Script
          id="bd-ga4-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
          onReady={() => setGtagReady(true)}
        />
      ) : null}
      {isOpen ? (
        <div className="consent-banner" role="dialog" aria-modal="false" aria-labelledby="consent-title">
          <div>
            <h2 id="consent-title">Analytics choices</h2>
            <p>
              BloxDungeon uses Google Analytics only with your choice to understand page visits,
              content use, and aggregate site improvements. Advertising consent is managed separately.
            </p>
          </div>
          <div className="consent-actions">
            <button className="button primary" type="button" onClick={acceptAnalytics}>
              Accept analytics
            </button>
            <button className="button" type="button" onClick={rejectAnalytics}>
              Reject analytics
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
