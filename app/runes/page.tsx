import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Runes Guide",
  description: "Iron Soul: Dungeon runes guide with build-planning notes and a source-first policy for rune effects and values.",
  path: "/runes/",
  keywords: ["iron soul dungeon runes", "iron soul runes guide", "iron soul dungeon best runes"]
});

export default function RunesPage() {
  return (
    <PageShell
      eyebrow="Runes"
      title="Iron Soul: Dungeon Runes Guide"
      description="Runes are a major player-search topic. This first version explains how we will organize rune evidence before publishing exact effects."
      path="/runes/"
    >
      <div className="content">
        <h2>Rune Coverage Plan</h2>
        <p>
          YouTube search demand repeatedly mentions runes and best-rune guides. The next step is to collect
          source-backed rune names, effects, and build use cases.
        </p>
        <StatusTable
          rows={[
            { label: "Rune names", status: "Pending source list", note: "Needs Discord, wiki, in-game screenshots, or reliable gameplay references." },
            { label: "Rune effects", status: "Pending", note: "Exact effects will not be guessed from titles." },
            { label: "Best runes", status: "Not ranked yet", note: "Rankings need testing context: build, weapon type, and progression stage." }
          ]}
        />

        <h2>How to Use This Page Now</h2>
        <p>
          Treat this as a research hub. If a rune claim appears without a source, it stays off the public table
          until confirmed.
        </p>
      </div>
    </PageShell>
  );
}
