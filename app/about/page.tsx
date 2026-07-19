import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About BloxDungeon",
  description: "About BloxDungeon, an independent Iron Soul: Dungeon guide and Roblox RPG research site connected to the RisingBlox network.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About BloxDungeon"
      description="BloxDungeon is an independent guide site focused on Iron Soul: Dungeon and source-backed Roblox RPG data."
      path="/about/"
    >
      <div className="content">
        <p>
          BloxDungeon exists to build cleaner, more transparent Roblox guide pages. The first focus is
          Iron Soul: Dungeon because it has fresh RPG demand and a wide set of player questions around
          codes, forge systems, runes, attributes, race rerolls, weapons, and grinding.
        </p>
        <p>
          This site is part of the broader RisingBlox research network, but it is intentionally narrower:
          BloxDungeon focuses on deep RPG and dungeon-guide coverage instead of broad Roblox trend browsing.
        </p>
        <p>
          BloxDungeon is not affiliated with Roblox Corporation or the Iron Soul development group.
          Roblox, Iron Soul: Dungeon, and other names or trademarks referenced on the site belong to their
          respective owners. This statement explains the site&apos;s independent status; it is not a claim of
          copyright permission.
        </p>

        <h2>What the Site Publishes</h2>
        <p>
          The site combines public game identity and update data with player-focused decision guides. Its most
          useful pages explain what is verified, what remains uncertain, and how to plan a forge, dungeon, build,
          or progression decision without presenting untested values as facts.
        </p>

        <h2>How Information Is Checked</h2>
        <p>
          Roblox-controlled pages and APIs are used for official identity, descriptions, dates, and public game
          statistics. Exact recipes, effects, rates, codes, or rankings require a traceable official source or a
          repeatable in-game test with context. Community and search demand can trigger research, but they do not
          by themselves verify a gameplay claim. The full labels and current source list are published on the{" "}
          <a href="/sources/">Sources and Verification Policy</a> page.
        </p>

        <h2>Updates and Corrections</h2>
        <p>
          Each factual review records a checked date. When a game update makes a statement uncertain, the site
          should mark it pending or remove the exact claim until it can be checked again. Readers can report a
          correction through the <a href="/contact/">contact page</a> with the affected URL and supporting source.
        </p>
      </div>
    </PageShell>
  );
}
