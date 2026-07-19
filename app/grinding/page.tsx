import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon XP and Coin Grinding",
  description: "Iron Soul: Dungeon grinding guide for XP and coins, with route notes and verification requirements for hourly rates or farming claims.",
  path: "/grinding/",
  keywords: ["iron soul dungeon xp grinding", "iron soul dungeon coin grinding", "iron soul dungeon farming"]
});

export default function GrindingPage() {
  return (
    <PageShell
      eyebrow="Grinding"
      title="Iron Soul: Dungeon XP and Coin Grinding"
      description="A farming and progression hub for XP, coins, ore, and materials. Exact rates are marked pending until tested."
      path="/grinding/"
    >
      <div className="content">
        <h2>What Players Are Searching</h2>
        <p>
          Video demand includes XP methods, coin grinding, noob-to-pro progress, and material collection.
          Those topics are useful only when the route, version, and measurement method are clear. BloxDungeon
          does not publish coins-per-hour or XP-per-hour numbers until a repeatable test can support them.
        </p>

        <StatusTable
          rows={[
            { label: "XP routes", status: "Pending", note: "Needs in-game route testing or reliable walkthrough evidence." },
            { label: "Coin rates", status: "Pending", note: "No coins-per-hour claims until measured." },
            { label: "Ore farming", status: "Connected to forge", note: "Will link to forge recipes once material data is confirmed." },
            { label: "Beginner progression", status: "Safe to cover", note: "General sequence guidance can be written without exact rates." }
          ]}
        />

        <h2>Leveling Deep Dive</h2>
        <p>
          For the long-tail leveling article, use <a href="/level-up-fast/">How to Level Up Fast</a>. It
          turns dungeon failures, forge bottlenecks, and build direction into safer next-step decisions.
        </p>

        <h2>A Safe Grinding Decision Loop</h2>
        <ol>
          <li><strong>Name the bottleneck.</strong> Decide whether the next run is blocked by survival, clear speed, materials, or an unclear forge goal.</li>
          <li><strong>Choose one resource goal.</strong> The official game description confirms crystalized ore and rare materials, but not every item name or drop rate.</li>
          <li><strong>Use short test sessions.</strong> Track the route, starting state, ending state, deaths, and game version before comparing methods.</li>
          <li><strong>Do not treat one run as a rate.</strong> Random drops, interruptions, and build differences can make a single session misleading.</li>
          <li><strong>Spend with a purpose.</strong> Connect the resource goal to the next forge, weapon, or build problem instead of farming indefinitely.</li>
        </ol>

        <h2>What a Verified Route Needs</h2>
        <p>
          A future route table should identify the dungeon or area, route start and finish, session length,
          build context, deaths or resets, measured rewards, sample count, game version, and checked date. If
          those details are missing, the route can be a research lead but should not be described as the fastest
          or best farm.
        </p>

        <h2>Related Planning</h2>
        <p>
          Use <a href="/dungeons/">Dungeons</a> to prepare for run pressure, <a href="/materials/">Materials</a>
          to separate ore from unverified rare-item claims, and the <a href="/tools/progression-planner/">Progression
          Planner</a> to choose a next step without hidden rate assumptions.
        </p>
      </div>
    </PageShell>
  );
}
