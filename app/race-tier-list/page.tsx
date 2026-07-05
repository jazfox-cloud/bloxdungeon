import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import {
  gscCurrentWindow,
  gscReviewDate,
  raceEvidenceRows,
  raceRecoveryRows,
  raceTierChecklist
} from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Race Tier List and Best Race Guide",
  description:
    "Iron Soul: Dungeon race tier list and best race hub for race rerolls, build context, and verification status before public rankings.",
  path: "/race-tier-list/",
  keywords: [
    "iron soul dungeon race tier list",
    "iron soul dungeon tier list",
    "iron soul race tier list",
    "best race iron soul dungeon",
    "iron soul race rerolls"
  ]
});

export default function RaceTierListPage() {
  const faq = faqJsonLd([
    {
      question: "Does BloxDungeon have a verified Iron Soul: Dungeon race tier list?",
      answer: "Not yet. The tier list hub is live because players search for race rerolls, but race names, effects, and build context still need verification before ranks are published."
    },
    {
      question: "What information is needed before ranking races?",
      answer: "A complete race list, exact race effects, reroll method, and build context are required before any S-to-D ranking can be trusted."
    },
    {
      question: "Is this a weapon tier list?",
      answer:
        "No. This URL is for race and reroll intent. Weapon-tier queries should be answered on the weapons page once weapon effects and source notes are verified."
    }
  ]);

  return (
    <PageShell
      eyebrow="Race Rerolls"
      title="Iron Soul: Dungeon Race Tier List and Best Race Guide"
      description="Race reroll and best-race demand are real, but rankings need evidence. This page is prepared for tier data once the race list and build context are verified."
      path="/race-tier-list/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice warning">
          <strong>Tier rankings are pending verification.</strong>
          <p>
            GSC review {gscReviewDate} for {gscCurrentWindow} shows the tier-list cluster lost visibility,
            especially broad tier-list queries. We are tightening this page around race and reroll intent,
            but we still do not publish S-tier or D-tier race claims until the race name, effect, and
            testing context are traceable.
          </p>
        </div>

        <h2>Search Recovery Focus</h2>
        <p>
          The page should win back the queries it can answer honestly: race tier list, best race, race rerolls,
          and race effects. Broad weapon-tier or generic tier-list intent should be routed elsewhere instead
          of weakening this page.
        </p>
        <StatusTable rows={raceRecoveryRows} />

        <h2>Tier List Requirements</h2>
        <StatusTable rows={raceTierChecklist} />

        <h2>Best Race Evidence Status</h2>
        <p>
          Search demand for the best race and race rerolls is already visible, but the ranking itself still
          needs a complete source trail. This section tracks what can be said now and what is still blocked.
        </p>
        <StatusTable rows={raceEvidenceRows} />

        <h2>Why This Page Exists Early</h2>
        <p>
          Search Console and YouTube-style search behavior show active demand for race rerolls and race rankings.
          Publishing the hub now lets the site collect and organize evidence before pretending the ranking is settled.
        </p>

        <h2>How the First Real Ranking Will Work</h2>
        <p>
          Once the race list is verified, each race should be graded by role: damage pressure, dungeon safety,
          forge-route value, and reroll cost. A single universal S tier is usually too vague for an RPG with
          multiple build paths.
        </p>
        <p>
          The first public table should include a source column and a last-checked date. If a ranking comes
          from community testing instead of official text, the row should say so clearly.
        </p>

        <h2>How Race Rerolls Will Be Verified</h2>
        <p>
          Race reroll claims need the same proof standard as codes: the exact source, the reward or reroll
          method, the result, and a last-checked date. If a reroll comes from a code, it belongs on the{" "}
          <a href="/codes/">codes page</a> first; if it comes from an item or UI action, it needs a separate
          screenshot or test note.
        </p>

        <h2>Related Pages</h2>
        <p>
          Race rerolls connect closely to <a href="/codes/">codes</a>, <a href="/attributes/">attributes</a>,
          and <a href="/runes/">runes</a>. Check those pages before spending rerolls on a build you have not planned.
        </p>
      </div>
    </PageShell>
  );
}
