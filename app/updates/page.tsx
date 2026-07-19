import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { gameSnapshot } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Updates and Patch Review",
  description: "Iron Soul: Dungeon update tracking page with Roblox API update date, site review notes, and planned verification tasks.",
  path: "/updates/",
  keywords: ["iron soul dungeon update", "iron soul dungeon new update", "iron soul dungeon patch"]
});

export default function UpdatesPage() {
  return (
    <PageShell
      eyebrow="Updates"
      title="Iron Soul: Dungeon Updates and Patch Review"
      description="Update tracking for Iron Soul: Dungeon, including official Roblox updated date, code checks, and BloxDungeon review tasks."
      path="/updates/"
    >
      <div className="content">
        <h2>Latest Known Official Update</h2>
        <p>
          Roblox API currently reports the game updated on <strong>{gameSnapshot.updated}</strong>. This
          timestamp is a technical update signal, not a full patch note.
        </p>
        <p>
          A changed API timestamp can result from many kinds of game maintenance. BloxDungeon does not infer
          a new weapon, code, recipe, boss, or balance change from the timestamp alone. A gameplay claim moves
          into a guide only when the official description, a developer-controlled announcement, or a repeatable
          in-game observation supports it.
        </p>

        <h2>July 7 Review Notes</h2>
        <p>
          The public Roblox description still confirms forge, rare materials, skill tree paths, dungeons,
          and crafting loop language. It does not show an official active code list, exact recipe costs,
          rune effects, race effects, boss HP, or drop rates.
        </p>

        <h2>Review Queue</h2>
        <ul>
          <li>Find official or community-visible patch notes.</li>
          <li>Verify whether new forge, rune, weapon, or race data changed.</li>
          <li>Refresh codes status after each visible game update.</li>
          <li>Update sitemap and internal links when new verified pages are added.</li>
        </ul>

        <h2>How an Update Is Reviewed</h2>
        <ol>
          <li>Record the Roblox API update timestamp and the date BloxDungeon checked it.</li>
          <li>Compare the official game description and developer-controlled channels with the prior review.</li>
          <li>Recheck code status and any exact values that an update could invalidate.</li>
          <li>Label incomplete evidence as pending instead of filling a table from copied claims.</li>
          <li>Update the affected guide, source note, and checked date together.</li>
        </ol>

        <h2>What Players Should Recheck After a Patch</h2>
        <p>
          Before spending materials or rerolls, check whether a claimed recipe, race effect, rune effect, or
          code is tied to the current version. General progression advice may remain useful, while exact item
          costs and effects can become wrong immediately after a balance change. The <a href="/sources/">source
          policy</a> explains the evidence labels used across the site, and the <a href="/codes/">codes page</a>
          records the latest public code check.
        </p>
      </div>
    </PageShell>
  );
}
