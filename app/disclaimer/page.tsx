import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer",
  description: "Independent-site, accuracy, trademark, and game-information disclaimer for BloxDungeon.",
  path: "/disclaimer/"
});

export default function DisclaimerPage() {
  return (
    <PageShell
      eyebrow="Disclaimer"
      title="BloxDungeon Disclaimer"
      description="Important limits on affiliation, game-data accuracy, external links, and third-party rights."
      path="/disclaimer/"
    >
      <div className="content">
        <p><strong>Last updated:</strong> July 18, 2026.</p>

        <h2>Independent and Unofficial</h2>
        <p>
          BloxDungeon is an independent, unofficial information site. It is not affiliated with, endorsed by,
          or sponsored by Roblox Corporation, the Iron Soul development group, or any developer of a game
          discussed on the site.
        </p>

        <h2>Names and Trademarks</h2>
        <p>
          Roblox, Iron Soul: Dungeon, and other referenced names and trademarks belong to their respective
          owners. They are used to identify the games and services being discussed. This disclaimer does not
          grant BloxDungeon permission to use copyrighted images, audio, video, or other protected materials.
        </p>

        <h2>Game Information Changes</h2>
        <p>
          Games can change without notice. Public API snapshots, codes, recipes, effects, rates, routes, and
          rankings can become outdated or can vary by version. BloxDungeon labels pending or unverified claims
          and publishes exact values only when a source or repeatable test can be recorded. Verify important
          decisions in the current game and official developer channels.
        </p>

        <h2>No Account Support</h2>
        <p>
          BloxDungeon cannot access Roblox accounts, restore items, issue currency, activate codes, or provide
          official customer support. Never send passwords or authentication tokens to a guide site.
        </p>

        <h2>Corrections and External Links</h2>
        <p>
          External sites control their own content and privacy practices. To report an error, use the{" "}
          <a href="/contact/">contact page</a> and include the affected URL, the claim to review, and a source.
          The <a href="/sources/">Sources and Verification Policy</a> explains how evidence labels are assigned.
        </p>
      </div>
    </PageShell>
  );
}
