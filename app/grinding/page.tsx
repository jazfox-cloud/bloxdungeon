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
          These are good long-tail pages once route data is verified.
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
      </div>
    </PageShell>
  );
}
