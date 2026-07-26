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
        <p><strong>Last updated:</strong> July 26, 2026.</p>

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
          BloxDungeon uses Google Analytics 4 to understand page visits, content use, aggregate interaction
          performance, and whether site improvements are working. Google Analytics is loaded only on the
          production domain and only after a visitor accepts analytics cookies. We do not set a Google Analytics
          User-ID, and analytics event parameters must not contain names, email addresses, Roblox credentials,
          free-text messages, or other directly identifying data.
        </p>

        <h2>Cookies and Local Storage</h2>
        <p>
          BloxDungeon uses localStorage only to remember whether a visitor accepted or rejected analytics
          cookies. Hosting, security, analytics, consent, and advertising providers may use cookies or similar
          technologies as described in this policy. Visitors in applicable regions must receive the required
          choices before non-essential analytics or advertising storage is used.
        </p>

        <h2>Advertising and Cookies</h2>
        <p>
          BloxDungeon loads Google AdSense code and may display advertising. Third-party vendors, including
          Google, may use cookies or similar technologies to serve, limit, personalize, and measure ads.
          Google&apos;s use of advertising cookies can enable it and its partners to serve ads based on visits to
          this site and other sites.
        </p>
        <p>
          Visitors can manage personalized Google advertising through <a href="https://adssettings.google.com/">Google Ads Settings</a>.
          Additional industry opt-out choices are available at <a href="https://www.aboutads.info/choices/">aboutads.info</a>.
          Opting out of personalized advertising does not necessarily remove all advertising.
        </p>
        <p>
          BloxDungeon must use Google&apos;s consent management platform or another Google-certified CMP for the
          regions where Google requires it. That AdSense certified CMP still needs to be configured in the
          advertising account. The message must offer consent, do not consent, and manage-options choices, and
          must prevent non-essential advertising storage before the applicable choice is obtained.
        </p>

        <h2 id="privacy-choices">Privacy Choices</h2>
        <p>
          Use the controls below to reopen analytics choices or, when Google&apos;s CMP is active, the official
          Google ad privacy message. Rejecting or withdrawing analytics consent stops later Google Analytics
          storage updates from being granted. BloxDungeon&apos;s analytics choice banner is not a Google-certified
          CMP and does not substitute for the certified CMP required for AdSense in applicable regions.
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
