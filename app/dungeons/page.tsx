import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import {
  dungeonRegions,
  dungeonOpportunityRows,
  evidenceGaps,
  gscCurrentWindow,
  gscReviewDate,
  officialMechanics,
  progressionPathRows,
  rareMaterialWatchlistRows,
  verificationChecklist
} from "@/content/iron-soul";
import { gameSnapshot } from "@/content/site";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Dungeons, Dragon Tear, and Rare Materials",
  description:
    "Iron Soul: Dungeon dungeons guide covering Dragon Tear search demand, rare material watchlist items, verified region types, prep logic, and evidence boundaries.",
  path: "/dungeons/",
  keywords: [
    "iron soul dungeon dungeons",
    "iron soul dungeon dragon tear",
    "iron soul dungeon dragon horn",
    "iron soul dungeon rare materials",
    "iron soul dungeon dragon tombs"
  ]
});

export default function DungeonsPage() {
  const faq = faqJsonLd([
    {
      question: "Which Iron Soul: Dungeon regions are officially described?",
      answer:
        "The official Roblox description mentions dragon tombs, ancient battlefields, and ruins swallowed by time."
    },
    {
      question: "Where do you get Dragon Tear in Iron Soul: Dungeon?",
      answer:
        "BloxDungeon is tracking Dragon Tear as a search-confirmed material query, but no drop source or rate is published until it can be verified from in-game evidence or a traceable source."
    },
    {
      question: "Does this page list boss HP or dungeon drop rates?",
      answer:
        "No. Boss HP, route maps, and drop rates are held until they can be verified from in-game testing or a traceable source."
    },
    {
      question: "How should I prepare for Iron Soul: Dungeon dungeons?",
      answer:
        "Prepare around a weapon plan, material goal, and build direction. Those three choices matter more than copying an unverified route."
    },
    {
      question: "When will boss and route tables be added?",
      answer:
        "They will be added only after boss names, mechanics, rewards, and source dates can be verified."
    }
  ]);

  return (
    <PageShell
      eyebrow="Dungeons"
      title="Iron Soul: Dungeon Dungeons, Dragon Tear, and Rare Materials"
      description="A source-first dungeon hub for Iron Soul: Dungeon, focused on Dragon Tear demand, rare material watchlists, verified region types, and practical prep before deeper boss data is available."
      path="/dungeons/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Dungeon interest is rising; exact loot data is still held.</strong>
          <p>
            GSC review {gscReviewDate} for {gscCurrentWindow} shows this page getting more impressions
            than the previous week, but clicks are still weak. We can safely answer dungeon prep and
            material-watchlist intent, while exact boss names, HP values, route maps, and drop rates need
            stronger evidence before publication.
          </p>
        </div>

        <h2>Search Opportunity This Week</h2>
        <p>
          The best near-term growth path is improving how this page answers dungeon-material intent. Dragon
          Tear and Dragon Horn belong here as watchlist terms until a source-backed drop route exists.
        </p>
        <StatusTable rows={dungeonOpportunityRows} />

        <h2>Verified Dungeon Themes</h2>
        <p>
          The official Roblox description frames Iron Soul as a dungeon RPG set across broken floating
          lands. It specifically names lost lands, dragon tombs, ancient battlefields, and time-swallowed ruins.
        </p>
        <StatusTable rows={dungeonRegions} />

        <h2>Dungeon Prep Checklist</h2>
        <p>
          Before pushing into harder dungeon attempts, line up three things: a weapon plan, a material goal,
          and a build direction. That keeps a run from becoming a random grind.
        </p>
        <StatusTable
          rows={[
            {
              label: "Weapon plan",
              status: "Recommended",
              note: "Use the weapons and forge pages to decide what kind of upgrade would help the next run."
            },
            {
              label: "Material goal",
              status: "Recommended",
              note: "Track whether you are farming crystalized ore, rare materials, or future recipe inputs."
            },
            {
              label: "Build direction",
              status: "Recommended",
              note: "Attacker, forge master, and survivor paths should change how you prepare for dungeon pressure."
            }
          ]}
        />

        <h2>Recommended Progression Path</h2>
        <p>
          Dungeons should set the target for the rest of your planning. If a dungeon is too slow, look at
          damage and weapons. If it is too punishing, compare survivor choices. If upgrades are blocked,
          return to materials and forge planning.
        </p>
        <StatusTable rows={progressionPathRows} />

        <h2>Dragon Tear and Rare Material Watchlist</h2>
        <p>
          Search Console is starting to surface rare-material queries such as Dragon Tear. Those terms are
          useful signals, but they are not enough to publish a drop source, drop rate, or recipe use without
          in-game evidence.
        </p>
        <StatusTable rows={rareMaterialWatchlistRows} />

        <h2>What We Will Add Later</h2>
        <p>
          The next useful dungeon upgrade is a source-backed boss and route table. Each row should include
          the dungeon name, encounter type, material rewards, source note, and last checked date. Until then,
          boss claims stay off this page.
        </p>
        <StatusTable rows={evidenceGaps.filter((item) => ["Boss HP", "Drop rates"].includes(item.label))} />

        <h2>Related Pages</h2>
        <p>
          Dungeon planning connects directly to <a href="/materials/">materials</a>,{" "}
          <a href="/forge/">forge upgrades</a>, <a href="/skill-tree/">skill tree builds</a>, and{" "}
          <a href="/weapons/">weapons</a>.
        </p>

        <h2>Source Boundary</h2>
        <StatusTable rows={[...officialMechanics.filter((item) => item.label === "Dungeons"), ...verificationChecklist]} />
      </div>
    </PageShell>
  );
}
