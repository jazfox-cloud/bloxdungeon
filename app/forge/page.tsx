import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import {
  evidenceGaps,
  forgeLongTailRows,
  forgeRecipeTrackerRows,
  forgeResearchRows,
  officialMechanics,
  progressionPathRows,
  verificationChecklist
} from "@/content/iron-soul";
import { gameSnapshot } from "@/content/site";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Forge Recipe and Crafting Guide",
  description:
    "Iron Soul: Dungeon forge recipe and crafting guide tracking forging, recipe evidence, ore planning, weapon recipe claims, and source boundaries.",
  path: "/forge/",
  keywords: [
    "iron soul dungeon forge recipe",
    "iron soul forge recipe",
    "iron soul dungeon crafting recipe",
    "iron soul dungeon forging guide",
    "recipe iron soul"
  ]
});

export default function ForgePage() {
  const faq = faqJsonLd([
    {
      question: "Is the Iron Soul: Dungeon forge confirmed by official sources?",
      answer: "Yes. The official Roblox description describes collecting crystalized ore, bringing it to ancient forges, and crafting powerful weapons."
    },
    {
      question: "Does BloxDungeon publish forge recipe costs?",
      answer: "Not yet. Ore counts, crafting recipes, and best-forge tables are held until they can be verified from in-game testing or a traceable source."
    },
    {
      question: "Is this also an Iron Soul crafting guide?",
      answer:
        "Yes. The forge page covers crafting, forging, recipe, and weapon-recipe intent, but exact material counts stay unpublished until verified."
    },
    {
      question: "What should I decide before using the forge?",
      answer: "Decide whether your current bottleneck is dungeon survival, damage, material farming, or weapon direction. The forge should solve a specific progression problem."
    },
    {
      question: "How does the forge connect to the skill tree?",
      answer: "The official description names attacker, forge master, and survivor paths. Forge choices should support whichever path solves your current dungeon problem."
    }
  ]);

  return (
    <PageShell
      eyebrow="Forge"
      title="Iron Soul: Dungeon Forge Recipe and Crafting Guide"
      description="The forge is the center of Iron Soul progression. This page separates verified crafting-loop basics from crafting and recipe claims still waiting on source-backed data."
      path="/forge/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Recipe data is not complete yet.</strong>
          <p>
            Last checked {gameSnapshot.lastChecked}. We will not publish ore counts, rarity claims,
            or best-recipes tables until those values are sourced.
          </p>
        </div>

        <h2>What Is Verified</h2>
        <p>
          The official Roblox description confirms a gather, forge, and upgrade loop where monsters drop
          rare materials and each forge run can change how your character fights.
        </p>
        <StatusTable rows={officialMechanics.filter((item) => ["Forge loop", "Material drops", "Skill tree"].includes(item.label))} />

        <h2>Long-Tail Forge Queries to Cover</h2>
        <p>
          GSC still shows forge recipe as the strongest query family, with related crafting recipe, forging
          guide, and short recipe variants. They belong on this page because the player intent is the same:
          understand the forge loop before trusting any exact material count.
        </p>
        <StatusTable rows={forgeLongTailRows} />

        <h2>Forge Data Roadmap</h2>
        <StatusTable rows={forgeResearchRows} />

        <h2>Forge Recipe Tracker</h2>
        <p>
          Players are already searching for Iron Soul Dungeon forge recipes, crafting recipes, and weapon
          recipes. The tracker below keeps those targets visible while preventing unverified material counts
          from being published as fact.
        </p>
        <StatusTable rows={forgeRecipeTrackerRows} />

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

        <h2>Forge Planning Flow</h2>
        <p>
          The safest path is to move from dungeon pressure to material goals, then use the forge as the
          spending step. That keeps upgrades tied to a real problem instead of a rumored best recipe.
        </p>
        <StatusTable rows={progressionPathRows} />

        <h2>Verification Rules for Future Forge Tables</h2>
        <StatusTable rows={verificationChecklist} />

        <h2>Data Still Held Back</h2>
        <StatusTable rows={evidenceGaps.filter((item) => ["Recipe costs", "Drop rates"].includes(item.label))} />

        <h2>Useful Internal Links</h2>
        <p>
          Forge planning connects directly to <a href="/materials/">Materials</a>,{" "}
          <a href="/weapons/">Weapons</a>, <a href="/skill-tree/">Skill Tree</a>,{" "}
          <a href="/builds/">Builds</a>, <a href="/best-runes/">Best Runes</a>,{" "}
          <a href="/relics/">Relics</a>, and <a href="/level-up-fast/">Level Up Fast</a>.
        </p>
      </div>
    </PageShell>
  );
}
