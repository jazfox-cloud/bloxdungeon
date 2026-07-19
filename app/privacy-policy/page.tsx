import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PrivacyChoicesLink from "@/components/PrivacyChoicesLink";
import EmailLink from "@/components/EmailLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for BloxDungeon.",
  path: "/privacy-policy/"
});

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      description="This policy explains how BloxDungeon and its service providers handle technical data, advertising cookies, and messages from visitors."
      path="/privacy-policy/"
    >
      <div className="content">
        <p><strong>Last updated:</strong> July 18, 2026.</p>

        <h2>Overview</h2>
        <p>
          BloxDungeon is a static-first informational website. We do not require accounts, logins,
          payments, public profiles, comments, or chat to read guide content. The site does not provide an
          on-site contact form.
        </p>

        <h2>Information Processed to Operate the Site</h2>
        <p>
          Cloudflare and other hosting or security infrastructure may process IP addresses, browser and device
          information, requested URLs, timestamps, referral data, and security signals to deliver and protect
          the site. This technical processing can occur even though BloxDungeon does not ask visitors to create
          an account.
        </p>

        <h2>Analytics</h2>
        <p>
          BloxDungeon does not currently load Google Analytics or another separate analytics tag in the site
          application. If analytics is introduced later, this policy and the consent experience must be updated
          before non-essential analytics storage is used where consent is required. Analytics URLs and event
          names must not contain names, email addresses, Roblox credentials, or other directly identifying data.
        </p>

        <h2>Cookies and Local Storage</h2>
        <p>
          The current BloxDungeon application does not set advertising or analytics cookies and does not use
          localStorage or sessionStorage. Infrastructure providers may use essential security mechanisms. If
          non-essential storage is introduced, visitors in applicable regions must receive the required choices
          before that storage is used.
        </p>

        <h2>Advertising and Cookies</h2>
        <p>
          BloxDungeon does not currently display advertising or load Google AdSense code. If advertising is
          enabled in the future, third-party vendors, including Google, may use cookies or similar technologies
          to serve, limit, personalize, and measure ads. Google&apos;s use of advertising cookies can enable it and
          its partners to serve ads based on visits to this site and other sites.
        </p>
        <p>
          Visitors can manage personalized Google advertising through <a href="https://adssettings.google.com/">Google Ads Settings</a>.
          Additional industry opt-out choices are available at <a href="https://www.aboutads.info/choices/">aboutads.info</a>.
          Opting out of personalized advertising does not necessarily remove all advertising.
        </p>
        <p>
          Before AdSense is enabled, BloxDungeon must activate Google&apos;s consent management platform or another
          Google-certified CMP for the regions where Google requires it. The message must offer consent, do not
          consent, and manage-options choices, and must prevent non-essential advertising or analytics storage
          before the applicable choice is obtained.
        </p>

        <h2 id="privacy-choices">Privacy Choices</h2>
        <p>
          No advertising or analytics consent record is currently created by BloxDungeon. Once Google&apos;s CMP is
          configured, an eligible visitor can use the control below to reopen the official privacy message and
          change a prior choice. The control appears only when the official Google Privacy &amp; Messaging API is
          available; BloxDungeon does not substitute a home-made consent banner for a certified CMP.
        </p>
        <PrivacyChoicesLink />

        <h2>Email Communications</h2>
        <p>
          If you choose to email BloxDungeon, your email provider and the BloxDungeon mailbox provider process
          your address, message, and any information you include. Do not send passwords, authentication tokens,
          or unnecessary personal information. You may request deletion of a prior message by using the contact
          details below, subject to security and legal retention needs.
        </p>

        <h2>Children</h2>
        <p>
          Roblox has a young audience. BloxDungeon does not offer accounts, public nicknames, leaderboards,
          comments, chat, or user-generated content, and it does not knowingly request personal information from
          children. The site operator must complete and document the child-directed-content assessment before
          personalized advertising is enabled; this policy does not replace that decision.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy requests or content-source questions, email <EmailLink /> or visit the <a href="/contact/">contact page</a>.
        </p>
      </div>
    </PageShell>
  );
}
