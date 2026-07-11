import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { attributeBuildRows, buildGuideRows, gscDeepArticleWindow, gscReviewDate } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Best Builds Guide",
  description:
    "Iron Soul: Dungeon best builds guide for attacker, forge master, and survivor planning with source boundaries around stats, runes, weapons, and races.",
  path: "/builds/",
  keywords: [
    "iron soul dungeon best build",
    "iron soul dungeon builds",
    "iron soul dungeon best stats",
    "iron soul dungeon best attributes"
  ]
});

export default function BuildsPage() {
  const faq = faqJsonLd([
    {
      question: "What is the best build in Iron Soul: Dungeon?",
      answer:
        "BloxDungeon does not claim one universal best build. Choose attacker, forge master, or survivor based on the dungeon, weapon, rune, race, and stat context."
    },
    {
      question: "Are exact build formulas verified?",
      answer:
        "No. Exact stat formulas, rune effects, race bonuses, and weapon values need source evidence before best-in-slot claims are published."
    }
  ]);

  return (
    <PageShell
      eyebrow="Builds"
      title="Iron Soul: Dungeon Best Builds Guide"
      description="A source-first best-build guide for Iron Soul: Dungeon that groups choices by attacker, forge master, and survivor goals."
      path="/builds/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Build demand is real; best-in-slot claims need proof.</strong>
          <p>
            GSC review {gscReviewDate} for {gscDeepArticleWindow} shows best-build, best-attributes,
            best-stats, and tier-list intent. This page connects those searches without pretending exact
            formulas are known.
          </p>
        </div>

        <h2>Build Evidence Status</h2>
        <StatusTable rows={buildGuideRows} />

        <h2>Best Build Directions</h2>
        <p>
          Pick the build direction from the failure pattern. Slow clears point toward attacker planning.
          Upgrade bottlenecks point toward forge master routing. Failed dungeon attempts point toward
          survivor choices.
        </p>
        <StatusTable rows={attributeBuildRows} />

        <h2>Build Components</h2>
        <p>
          A real best build needs more than one table. Compare <a href="/attributes/">Attributes</a>,{" "}
          <a href="/best-runes/">Best Runes</a>, <a href="/weapons/">Weapons</a>,{" "}
          <a href="/race-tier-list/">Race Tier List</a>, and the{" "}
          <a href="/forge/">Forge Recipe and Crafting Guide</a> before copying any
          ranking.
        </p>
      </div>
    </PageShell>
  );
}
