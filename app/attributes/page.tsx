import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Attributes Guide",
  description: "Iron Soul: Dungeon attributes guide for planning attack, forge, and survivor-style builds with verified-data boundaries.",
  path: "/attributes/",
  keywords: ["iron soul dungeon attributes", "iron soul dungeon builds", "iron soul dungeon skill tree"]
});

export default function AttributesPage() {
  return (
    <PageShell
      eyebrow="Attributes"
      title="Iron Soul: Dungeon Attributes Guide"
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
