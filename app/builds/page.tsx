import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { attributeBuildRows, buildGuideRows, gscDeepArticleWindow, gscReviewDate } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Iron Soul: Dungeon Builds Research Status",
    description:
      "Non-indexed research status for future Iron Soul: Dungeon builds, stats, runes, weapons, and race evidence.",
    path: "/builds/",
    keywords: [
      "iron soul dungeon best build",
      "iron soul dungeon builds",
      "iron soul dungeon best stats",
      "iron soul dungeon best attributes"
    ]
  }),
  robots: { index: false, follow: true }
};

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
      title="Iron Soul: Dungeon Builds Research Status"
      description="This non-indexed research page keeps build-direction notes while exact best-build claims wait for source-backed evidence."
      path="/builds/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Build demand is real; best-in-slot claims need proof.</strong>
          <p>
            Best-build, best-attribute, and tier-list questions are real. This page stays out of search
            while it connects those questions without pretending exact formulas are known.
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
