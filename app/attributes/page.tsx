import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { attributeBuildRows } from "@/content/iron-soul";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Best Attributes Guide",
  description: "Iron Soul: Dungeon best attributes guide for attack, forge master, and survivor-style builds with verified-data boundaries.",
  path: "/attributes/",
  keywords: ["iron soul dungeon attributes", "iron soul dungeon best attributes", "iron soul dungeon best stats"]
});

export default function AttributesPage() {
  return (
    <PageShell
      eyebrow="Attributes"
      title="Iron Soul: Dungeon Best Attributes Guide"
      description="Plan your build direction around attack, forging, or survival while exact attribute formulas remain under verification."
      path="/attributes/"
    >
      <div className="content">
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
          Use this page with <a href="/skill-tree/">Skill Tree</a>,{" "}
          <a href="/race-tier-list/">Race Tier List</a>, and <a href="/weapons/">Weapons</a>.
          A build is only meaningful when the race, weapon, rune, and attribute context are all visible.
        </p>
      </div>
    </PageShell>
  );
}
