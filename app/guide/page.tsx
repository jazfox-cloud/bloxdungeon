import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Beginner Guide",
  description: "Beginner guide for Iron Soul: Dungeon covering combat, forge runs, runes, attributes, weapons, and safe progression planning.",
  path: "/guide/",
  keywords: ["iron soul dungeon guide", "iron soul dungeon beginner guide", "roblox iron soul guide"]
});

export default function GuidePage() {
  return (
    <PageShell
      eyebrow="Beginner Guide"
      title="Iron Soul: Dungeon Beginner Guide"
      description="A clean starting path for new players: learn the combat loop, collect ore, forge weapons, test runes, and plan attributes without relying on fake stats."
      path="/guide/"
    >
      <div className="content">
        <h2>Core Loop</h2>
        <p>
          Iron Soul: Dungeon is built around defeating creatures, collecting crystalized ore and materials,
          returning to ancient forges, and using upgrades to push into harder dungeons.
        </p>

        <StatusTable
          rows={[
            { label: "Combat", status: "Verified from Roblox description", note: "Dynamic combat against dungeon creatures is part of the official game description." },
            { label: "Crafting loop", status: "Verified from Roblox description", note: "Gather, forge, and upgrade is explicitly described by the official page." },
            { label: "Skill tree", status: "Verified from Roblox description", note: "The game describes attack, forge-master, and survivor style paths." },
            { label: "Exact formulas", status: "Pending", note: "Damage, drop, and forge formulas need stronger evidence before publication." }
          ]}
        />

        <h2>Recommended First Steps</h2>
        <ol>
          <li>Use the <a href="/tools/progression-planner/">Progression Planner</a> if you are not sure whether your next step is dungeon prep, materials, forge, skill tree, or code checking.</li>
          <li>Use the <a href="/forge/">Forge Recipe and Crafting Guide</a> to connect ore, materials, and weapon upgrades before spending resources.</li>
          <li>Play through early fights long enough to understand enemy pacing and material drops.</li>
          <li>Use forge upgrades deliberately instead of chasing every rumored recipe.</li>
          <li>Track whether your build needs damage, survivability, or utility before spending rerolls.</li>
          <li>Use the Runes and Attributes pages to compare build directions as verified data improves.</li>
        </ol>

        <h2>Next Pages</h2>
        <p>
          Start with <a href="/dungeons/">Dungeons</a>, then plan <a href="/materials/">Materials</a>,{" "}
          <a href="/forge/">Forge Recipe and Crafting Guide</a>, <a href="/skill-tree/">Skill Tree</a>,{" "}
          <a href="/runes/">Runes</a>, <a href="/attributes/">Attributes</a>, and{" "}
          <a href="/weapons/">Weapons</a>.
        </p>
        <p>
          If the grind starts feeling heavy, take a lighter Roblox break with our{" "}
          <a href="/guide/casual-games/">casual games guide</a>, then come back when you are ready
          to plan the next forge run.
        </p>
      </div>
    </PageShell>
  );
}
