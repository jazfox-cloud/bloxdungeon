import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
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
        <h2>Overview</h2>
        <p>
          BloxDungeon is a static-first informational website. We do not require accounts, logins,
          or payments to read guide content.
        </p>

        <h2>Analytics and Hosting</h2>
        <p>
          Our hosting, analytics, and security providers may process IP addresses, browser and device
          information, requested URLs, timestamps, and referral data to operate, protect, and improve the site.
        </p>
        <h2>Advertising and Cookies</h2>
        <p>BloxDungeon may use third-party advertising services, including Google AdSense. Third-party vendors, including Google, may use cookies to serve and measure ads based on a visitor&apos;s prior visits to this website or other websites.</p>
        <p>Visitors can control or opt out of personalized Google advertising through <a href="https://adssettings.google.com/">Google Ads Settings</a>. Additional industry opt-out choices are available at <a href="https://www.aboutads.info/choices/">aboutads.info</a>.</p>

        <h2>Children</h2>
        <p>
          Roblox has a young audience. BloxDungeon does not knowingly collect personal information from children.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy requests or content-source questions, email <a href="mailto:hello@bloxdungeon.com">hello@bloxdungeon.com</a> or visit the contact page.
        </p>
      </div>
    </PageShell>
  );
}
