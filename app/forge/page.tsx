import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Forge Guide",
  description: "Iron Soul: Dungeon forge guide explaining the crafting loop, ore collection, upgrade planning, and what forge data still needs verification.",
  path: "/forge/",
  keywords: ["iron soul dungeon forge", "iron soul forge guide", "iron soul dungeon crafting"]
});

export default function ForgePage() {
  return (
    <PageShell
      eyebrow="Forge"
      title="Iron Soul: Dungeon Forge Guide"
      description="The forge is the center of Iron Soul progression. This page separates verified crafting-loop basics from recipes still waiting on source-backed data."
      path="/forge/"
    >
      <div className="content">
        <div className="notice">
          <strong>Recipe data is not complete yet.</strong>
          <p>We will not publish ore counts, rarity claims, or best-recipes tables until those values are sourced.</p>
        </div>

        <h2>What Is Verified</h2>
        <p>
          The official Roblox description confirms a gather, forge, and upgrade loop where monsters drop
          rare materials and each forge run can change how your character fights.
        </p>

        <h2>Forge Data Roadmap</h2>
        <StatusTable
          rows={[
            { label: "Ore sources", status: "Pending", note: "Needs in-game testing or reliable video evidence." },
            { label: "Weapon recipes", status: "Pending", note: "No recipe table will be published without a source." },
            { label: "Upgrade priority", status: "Drafting", note: "Can be written as strategy guidance before exact formulas are known." },
            { label: "Best recipes", status: "Hold", note: "Best-recipe claims require repeatable evidence." }
          ]}
        />

        <h2>Useful Internal Links</h2>
        <p>
          Forge planning connects directly to <a href="/weapons/">Weapons</a>, <a href="/runes/">Runes</a>,
          and <a href="/grinding/">XP and Coin Grinding</a>.
        </p>
      </div>
    </PageShell>
  );
}
