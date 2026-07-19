import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Iron Soul: Dungeon Weapons Research Status",
    description: "Research status for future verified Iron Soul: Dungeon weapon data.",
    path: "/weapons/"
  }),
  robots: { index: false, follow: true }
};

export default function WeaponsPage() {
  return (
    <PageShell
      eyebrow="Weapons"
      title="Iron Soul: Dungeon Weapons Research Status"
      description="This non-indexed research page records what must be verified before BloxDungeon publishes a weapon guide."
      path="/weapons/"
    >
      <div className="content">
        <div className="notice warning">
          <strong>This is not a finished weapon guide.</strong>
          <p>
            The page is excluded from search indexing and the sitemap until weapon names, values, and source
            evidence are available. It remains accessible so existing links do not break.
          </p>
        </div>
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
          Start with the <a href="/forge/">Forge Recipe and Crafting Guide</a>, then use{" "}
          <a href="/materials/">Materials</a> for crafting context,{" "}
          <a href="/builds/">Builds</a>, <a href="/skill-tree/">Skill Tree</a>, and{" "}
          <a href="/attributes/">Attributes</a> for build direction, and{" "}
          <a href="/best-runes/">Best Runes</a> for upgrade planning.
        </p>
      </div>
    </PageShell>
  );
}
