import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import {
  dungeonRegions,
  dungeonLongTailRows,
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
  title: "Iron Soul: Dungeon Guide, Regions, Drops, and Preparation",
  description:
    "Iron Soul: Dungeon guide to verified regions, dungeon preparation, progression decisions, rare material evidence, and future boss and drop tables.",
  path: "/dungeons/",
  keywords: [
    "iron soul dungeon dungeons",
    "iron soul dungeon dragon tear",
    "iron soul dungeon dragon horn",
    "iron soul dungeon discord",
    "iron soul dungeon discord server",
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
      question: "Does BloxDungeon link an Iron Soul: Dungeon Discord server?",
      answer:
        "Not until the Discord server can be verified as official or developer-controlled. Discord queries are tracked as a watchlist item."
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
      title="Iron Soul: Dungeon Guide, Regions, Drops, and Preparation"
      description="Plan dungeon runs around a weapon goal, material target, and build direction, with verified regions and clear evidence boundaries for boss and drop data."
      path="/dungeons/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Dungeon demand cooled this week; the page now prioritizes player preparation.</strong>
          <p>
            GSC review {gscReviewDate} for {gscCurrentWindow} versus the prior seven days shows lower
            overall demand and an average position near page two. This page therefore answers dungeon
            preparation and progression first. Exact boss names, HP values, route maps, and drop rates still
            need stronger evidence before publication.
          </p>
        </div>

        <h2>How to Prepare for the Next Dungeon</h2>
        <p>
          Choose the problem you need the next run to solve: weapon power, missing forge materials, or build
          survivability. Use that answer to set one farming goal instead of following an unverified route.
        </p>
        <StatusTable rows={progressionPathRows} />

        <h2>Long-Tail Dungeon Watchlist</h2>
        <p>
          The latest GSC pull shows broad dungeon impressions but weak clicks, plus material and Discord
          variants. These terms are useful for headings and FAQs, but exact loot routes and official links
          stay gated behind verification.
        </p>
        <StatusTable rows={dungeonLongTailRows} />

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

        <h2>Dungeon Search and Evidence Status</h2>
        <p>
          Search demand helps prioritize research, but it does not verify a drop route or item effect. These
          are the dungeon topics currently worth tracking as stronger evidence becomes available.
        </p>
        <StatusTable rows={dungeonOpportunityRows} />

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
          <a href="/forge/">the Forge Recipe and Crafting Guide</a>, <a href="/skill-tree/">skill tree builds</a>, and{" "}
          <a href="/weapons/">weapons</a>.
        </p>

        <h2>Source Boundary</h2>
        <StatusTable rows={[...officialMechanics.filter((item) => item.label === "Dungeons"), ...verificationChecklist]} />
      </div>
    </PageShell>
  );
}
