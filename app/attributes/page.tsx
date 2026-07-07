import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import {
  attributeBuildRows,
  attributeLongTailRows,
  attributeOpportunityRows,
  gscCurrentWindow,
  gscReviewDate
} from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Best Attributes, Stats, and Builds",
  description:
    "Iron Soul: Dungeon best attributes, best stats, and build-direction guide for attack, forge master, and survivor-style builds with verified-data boundaries.",
  path: "/attributes/",
  keywords: [
    "iron soul dungeon attributes",
    "iron soul dungeon best attributes",
    "iron soul dungeon best stats",
    "iron soul dungeon stats",
    "iron soul attributes",
    "iron soul stats",
    "iron soul dungeon best build"
  ]
});

export default function AttributesPage() {
  const faq = faqJsonLd([
    {
      question: "What are the best attributes in Iron Soul: Dungeon?",
      answer:
        "The safest current answer is role-based: attacker for slow clears, forge master for crafting and material bottlenecks, and survivor for failed dungeon attempts. Exact stat formulas are not published until verified."
    },
    {
      question: "Does BloxDungeon publish exact stat formulas?",
      answer:
        "No. Point costs, scaling, caps, and breakpoints need in-game testing or a traceable source before they are listed."
    }
  ]);

  return (
    <PageShell
      eyebrow="Attributes"
      title="Iron Soul: Dungeon Best Attributes, Stats, and Builds"
      description="Plan your best stats and build direction around attack, forging, or survival while exact attribute formulas remain under verification."
      path="/attributes/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Best-stats demand exists, but formulas are not verified.</strong>
          <p>
            GSC review {gscReviewDate} for {gscCurrentWindow} still shows impressions for attributes,
            best attributes, and best stats. This page answers the build decision without inventing point
            spreads, caps, or damage formulas.
          </p>
        </div>

        <h2>Search Opportunity This Week</h2>
        <p>
          The page is already ranking around position 7 for the attributes cluster, so the next improvement
          is clearer matching for "best attributes" and "best stats" queries while keeping the evidence line
          visible.
        </p>
        <StatusTable rows={attributeOpportunityRows} />

        <h2>Stats and Build Long-Tail Coverage</h2>
        <p>
          The latest GSC pull shows best attributes, stats, and best build variants. This page should answer
          the stats wording directly, then route broader build decisions to the Builds guide.
        </p>
        <StatusTable rows={attributeLongTailRows} />

        <h2>Build Directions</h2>
        <p>
          The official description mentions choosing abilities that fit your playstyle, including relentless
          attacker, forge master, and survivor paths.
        </p>

        <StatusTable
          rows={[
            { label: "Attack path", status: "Officially referenced", note: "Can be discussed as a build direction, not as a formula yet." },
            { label: "Forge master path", status: "Officially referenced", note: "Connects to crafting and material efficiency." },
            { label: "Survivor path", status: "Officially referenced", note: "Likely useful for harder dungeons; exact stat values pending." },
            { label: "Attribute formulas", status: "Pending", note: "Do not publish numbers until tested or sourced." }
          ]}
        />

        <h2>Best Attributes by Build Direction</h2>
        <p>
          The safest answer to "best attributes" is role-based. Iron Soul: Dungeon has attack, forge, and
          survival pressure, so a good stat plan should start with the problem your current runs are failing
          to solve.
        </p>
        <StatusTable rows={attributeBuildRows} />

        <h2>How to Pick Your Next Stat Focus</h2>
        <p>
          If clears are slow, compare attacker choices first. If upgrades are blocked, plan around forge and
          material efficiency. If dungeon attempts end early, prioritize survival before chasing damage.
          Exact point spreads will be added only when the formulas or in-game results are source-backed.
        </p>

        <h2>Best Next Step</h2>
        <p>
          Use this page with <a href="/builds/">Builds</a>, <a href="/skill-tree/">Skill Tree</a>,{" "}
          <a href="/race-tier-list/">Race Tier List</a>, <a href="/best-runes/">Best Runes</a>, and{" "}
          <a href="/weapons/">Weapons</a>.
          A build is only meaningful when the race, weapon, rune, and attribute context are all visible.
        </p>
      </div>
    </PageShell>
  );
}
