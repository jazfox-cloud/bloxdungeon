import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { materialRows } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Materials and Crystalized Ore Guide",
  description:
    "Iron Soul: Dungeon materials guide covering crystalized ore, rare materials, forge links, and source-first rules for future drop tables.",
  path: "/materials/",
  keywords: ["iron soul dungeon materials", "crystalized ore iron soul", "iron soul dungeon rare materials"]
});

export default function MaterialsPage() {
  const faq = faqJsonLd([
    {
      question: "Is crystalized ore confirmed in Iron Soul: Dungeon?",
      answer:
        "Yes. The official Roblox description says players slay monsters to collect crystalized ore and bring it to ancient forges."
    },
    {
      question: "Does this page list material drop rates?",
      answer:
        "Not yet. Exact drop rates, quantities, and boss-specific tables need source-backed testing before publication."
    }
  ]);

  return (
    <PageShell
      eyebrow="Materials"
      title="Iron Soul: Dungeon Materials and Crystalized Ore Guide"
      description="Track the material loop safely: crystalized ore, rare materials, forge inputs, and what evidence is needed before drop tables go live."
      path="/materials/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice trust">
          <strong>Material categories are confirmed; quantities are not.</strong>
          <p>
            Crystalized ore and rare materials appear in the official description. Specific counts,
            rates, and recipe costs still need in-game evidence.
          </p>
        </div>

        <h2>Verified Material Loop</h2>
        <p>
          Iron Soul&apos;s official loop is simple at the concept level: defeat monsters, collect
          crystalized ore and rare materials, bring them to ancient forges, and craft stronger weapons.
          That gives us enough to build a materials hub without inventing drop tables.
        </p>
        <StatusTable rows={materialRows} />

        <h2>Material Tracking Checklist</h2>
        <p>
          When exact material data becomes available, each row should answer four questions: where it drops,
          what it is used for, how recent the source is, and whether the value came from official text or
          community testing.
        </p>
        <StatusTable
          rows={[
            {
              label: "Source",
              status: "Required",
              note: "Official text, in-game screenshot, update note, or repeatable test."
            },
            {
              label: "Use case",
              status: "Required",
              note: "Forge recipe, upgrade path, dungeon prep, or weapon plan."
            },
            {
              label: "Last checked",
              status: "Required",
              note: "Material tables can change after updates, so each row needs a date."
            }
          ]}
        />

        <h2>How Materials Connect to Progression</h2>
        <p>
          Materials sit between <a href="/dungeons/">dungeon runs</a> and <a href="/forge/">forge upgrades</a>.
          If you are not sure what to farm next, choose a build direction on the{" "}
          <a href="/skill-tree/">skill tree page</a>, then work backward to the weapon or upgrade you want.
        </p>

        <h2>Future Drop Table Rules</h2>
        <p>
          BloxDungeon will not publish a drop table unless the material name, source, evidence type, and
          last checked date are visible. That keeps the page useful for SEO without turning it into a copied
          rumor list.
        </p>
      </div>
    </PageShell>
  );
}
