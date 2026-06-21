import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { officialMechanics, runeResearchRows } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Runes Guide",
  description: "Iron Soul: Dungeon runes guide with build-planning notes and a source-first policy for rune effects and values.",
  path: "/runes/",
  keywords: ["iron soul dungeon runes", "iron soul runes guide", "iron soul dungeon best runes"]
});

export default function RunesPage() {
  const faq = faqJsonLd([
    {
      question: "Are Iron Soul: Dungeon rune effects verified here?",
      answer: "Not yet. This page is prepared for rune names, effects, and build use cases, but exact effects stay unpublished until traceable evidence is available."
    },
    {
      question: "Why does this rune guide talk about builds before listing values?",
      answer: "The official game page confirms a skill tree and multiple playstyle paths. Rune coverage needs to preserve that build context before any best-rune ranking is useful."
    }
  ]);

  return (
    <PageShell
      eyebrow="Runes"
      title="Iron Soul: Dungeon Runes Guide"
      description="Runes are a major player-search topic. This first version explains how we will organize rune evidence before publishing exact effects."
      path="/runes/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Rune data is being separated from build context.</strong>
          <p>
            We will not list a rune effect unless the rune name, effect, and source context are clear.
          </p>
        </div>

        <h2>Rune Coverage Plan</h2>
        <p>
          The official Roblox page confirms that Iron Soul has a skill tree with attacker, forge master,
          and survivor-style paths. Rune coverage should map into those build paths instead of ranking
          everything as one flat list.
        </p>
        <StatusTable rows={runeResearchRows} />

        <h2>Confirmed Build Context</h2>
        <StatusTable rows={officialMechanics.filter((item) => item.label === "Skill tree")} />

        <h2>How to Use This Page Now</h2>
        <p>
          Treat this as a research hub. If a rune claim appears without a source, it stays off the public table
          until confirmed.
        </p>

        <h2>Planned Rune Table Format</h2>
        <p>
          The first verified rune table should include the rune name, exact effect text, best build context,
          source type, and last checked date. That format will let players compare runes without hiding the
          evidence level behind a generic tier badge.
        </p>

        <h2>Related Build Planning</h2>
        <p>
          Before ranking runes, choose a direction on the <a href="/skill-tree/">Skill Tree</a> page and
          compare it with <a href="/attributes/">Attributes</a>, <a href="/materials/">Materials</a>, and{" "}
          <a href="/dungeons/">Dungeons</a>.
        </p>
      </div>
    </PageShell>
  );
}
