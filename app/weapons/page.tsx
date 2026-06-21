import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Weapons Guide",
  description: "Iron Soul: Dungeon weapons guide covering weapon search demand, forge links, high-damage questions, and verified-data requirements.",
  path: "/weapons/",
  keywords: ["iron soul dungeon weapons", "iron soul dungeon strongest weapon", "iron soul dungeon high damage"]
});

export default function WeaponsPage() {
  return (
    <PageShell
      eyebrow="Weapons"
      title="Iron Soul: Dungeon Weapons Guide"
      description="Weapons are one of the strongest Iron Soul search topics. This page prepares categories and evidence rules before exact damage values are published."
      path="/weapons/"
    >
      <div className="content">
        <h2>Current Weapon Topics</h2>
        <p>
          YouTube demand includes strongest weapon, staff, light sword, high damage, and new-update weapon reviews.
          Those topics are useful, but each exact stat needs verification.
        </p>

        <StatusTable
          rows={[
            { label: "Weapon names", status: "Collecting", note: "Names can be added after reliable gameplay or in-game source checks." },
            { label: "Damage values", status: "Pending", note: "Damage numbers need repeatable tests or source-backed tables." },
            { label: "Forge materials", status: "Pending", note: "Material requirements belong on the Forge page after verification." },
            { label: "High damage builds", status: "Drafting", note: "Can be explained as a strategy page once weapon and attribute context is known." }
          ]}
        />

        <h2>Related Pages</h2>
        <p>
          See <a href="/forge/">Forge</a> and <a href="/materials/">Materials</a> for crafting context,{" "}
          <a href="/skill-tree/">Skill Tree</a> and <a href="/attributes/">Attributes</a> for build direction,
          and <a href="/runes/">Runes</a> for upgrade planning.
        </p>
      </div>
    </PageShell>
  );
}
