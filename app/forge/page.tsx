import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { forgeResearchRows, officialMechanics } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Forge Guide",
  description: "Iron Soul: Dungeon forge guide explaining the crafting loop, ore collection, upgrade planning, and what forge data still needs verification.",
  path: "/forge/",
  keywords: ["iron soul dungeon forge", "iron soul forge guide", "iron soul dungeon crafting"]
});

export default function ForgePage() {
  const faq = faqJsonLd([
    {
      question: "Is the Iron Soul: Dungeon forge confirmed by official sources?",
      answer: "Yes. The official Roblox description describes collecting crystalized ore, bringing it to ancient forges, and crafting powerful weapons."
    },
    {
      question: "Does BloxDungeon publish forge recipe costs?",
      answer: "Not yet. Ore counts, recipes, and best-forge tables are held until they can be verified from in-game testing or a traceable source."
    }
  ]);

  return (
    <PageShell
      eyebrow="Forge"
      title="Iron Soul: Dungeon Forge Guide"
      description="The forge is the center of Iron Soul progression. This page separates verified crafting-loop basics from recipes still waiting on source-backed data."
      path="/forge/"
    >
      <JsonLd data={faq} />
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
        <StatusTable rows={officialMechanics.filter((item) => ["Forge loop", "Material drops", "Skill tree"].includes(item.label))} />

        <h2>Forge Data Roadmap</h2>
        <StatusTable rows={forgeResearchRows} />

        <h2>Safe Forge Planning Before Exact Recipes</h2>
        <p>
          Until recipe costs are verified, the safest forge advice is to separate farming sessions from
          upgrade sessions. Farm materials first, then decide whether your next run needs damage, survival,
          or a weapon swap. That keeps the guide useful without pretending hidden formulas are known.
        </p>
        <p>
          BloxDungeon will add ore tables, weapon recipes, and upgrade priorities only after each value has
          a source note. If a value comes from testing rather than official text, it will be labeled as
          community-tested.
        </p>

        <h2>Useful Internal Links</h2>
        <p>
          Forge planning connects directly to <a href="/materials/">Materials</a>,{" "}
          <a href="/weapons/">Weapons</a>, <a href="/skill-tree/">Skill Tree</a>,{" "}
          <a href="/runes/">Runes</a>, and <a href="/grinding/">XP and Coin Grinding</a>.
        </p>
      </div>
    </PageShell>
  );
}
