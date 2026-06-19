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
      description="BloxDungeon is a static guide site. This policy explains the basic data posture for visitors."
      path="/privacy-policy/"
    >
      <div className="content">
        <h2>Overview</h2>
        <p>
          BloxDungeon is currently a static informational website. We do not require accounts, logins,
          or payments to read guide content.
        </p>

        <h2>Analytics and Hosting</h2>
        <p>
          The site may use hosting logs or privacy-conscious analytics in the future to understand page
          performance and search demand. If third-party analytics or ads are added, this policy should be updated.
        </p>

        <h2>Children</h2>
        <p>
          Roblox has a young audience. BloxDungeon does not knowingly collect personal information from children.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy or content-source questions, use the contact path provided by the site owner once public.
        </p>
      </div>
    </PageShell>
  );
}
