import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { bestRunesRows, gscDeepArticleWindow, gscReviewDate, runeResearchRows } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Iron Soul: Dungeon Best Runes Research Status",
    description:
      "Non-indexed research status for future Iron Soul: Dungeon best-rune rankings, source requirements, and build context.",
    path: "/best-runes/",
    keywords: [
      "iron soul dungeon best runes",
      "iron soul dungeon runes",
      "what is the best rune in iron soul dungeon",
      "iron soul runes guide"
    ]
  }),
  robots: { index: false, follow: true }
};

export default function BestRunesPage() {
  const faq = faqJsonLd([
    {
      question: "What is the best rune in Iron Soul: Dungeon?",
      answer:
        "BloxDungeon does not name a universal best rune yet. Rune value should be judged by build role, dungeon pressure, and verified effect text."
    },
    {
      question: "Why are exact rune effects not listed?",
      answer:
        "Exact rune effects need an in-game screenshot, update note, or repeatable test before they are published as verified data."
    }
  ]);

  return (
    <PageShell
      eyebrow="Best Runes"
      title="Iron Soul: Dungeon Best Runes Research Status"
      description="This non-indexed research page records how rune rankings will be verified before a public best-runes guide is published."
      path="/best-runes/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Best-rune demand exists; exact effects still need proof.</strong>
          <p>
            Player demand exists, including best-rune questions. This page keeps exact rune rankings
            unpublished until the source trail is strong enough.
          </p>
        </div>

        <h2>Best Runes Evidence Status</h2>
        <StatusTable rows={bestRunesRows} />

        <h2>How to Think About Best Runes</h2>
        <p>
          The safe answer is not one rune for every player. A rune that helps slow dungeon clears may be
          different from a rune that supports forge routing, survival, or boss attempts. Start by choosing
          the problem your build needs to solve.
        </p>

        <h2>Rune Research Roadmap</h2>
        <StatusTable rows={runeResearchRows} />

        <h2>Related Deep Guides</h2>
        <p>
          Pair rune planning with <a href="/builds/">Builds</a>, <a href="/attributes/">Attributes</a>,{" "}
          <a href="/weapons/">Weapons</a>, <a href="/forge/">Forge</a>, and{" "}
          <a href="/level-up-fast/">Level Up Fast</a>.
        </p>
      </div>
    </PageShell>
  );
}
