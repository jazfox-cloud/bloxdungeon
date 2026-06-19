import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { gameSnapshot } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Updates",
  description: "Iron Soul: Dungeon update tracking page with Roblox API update date, site review notes, and planned verification tasks.",
  path: "/updates/",
  keywords: ["iron soul dungeon update", "iron soul dungeon new update", "iron soul dungeon patch"]
});

export default function UpdatesPage() {
  return (
    <PageShell
      eyebrow="Updates"
      title="Iron Soul: Dungeon Updates"
      description="Update tracking for Iron Soul: Dungeon, including official Roblox updated date and BloxDungeon review tasks."
      path="/updates/"
    >
      <div className="content">
        <h2>Latest Known Official Update</h2>
        <p>
          Roblox API currently reports the game updated on <strong>{gameSnapshot.updated}</strong>. This
          timestamp is a technical update signal, not a full patch note.
        </p>

        <h2>Review Queue</h2>
        <ul>
          <li>Find official or community-visible patch notes.</li>
          <li>Verify whether new forge, rune, weapon, or race data changed.</li>
          <li>Refresh codes status after each visible game update.</li>
          <li>Update sitemap and internal links when new verified pages are added.</li>
        </ul>
      </div>
    </PageShell>
  );
}
