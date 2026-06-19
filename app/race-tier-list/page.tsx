import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Race Tier List",
  description: "Iron Soul: Dungeon race tier list hub for race rerolls, build context, and verification status before public rankings.",
  path: "/race-tier-list/",
  keywords: ["iron soul dungeon race tier list", "best race iron soul dungeon", "iron soul race rerolls"]
});

export default function RaceTierListPage() {
  return (
    <PageShell
      eyebrow="Race Rerolls"
      title="Iron Soul: Dungeon Race Tier List"
      description="Race reroll demand is real, but rankings need evidence. This page is prepared for tier data once the race list and build context are verified."
      path="/race-tier-list/"
    >
      <div className="content">
        <div className="notice warning">
          <strong>Tier rankings are pending verification.</strong>
          <p>
            We do not publish S-tier or D-tier race claims until the race name, effect, and testing context are traceable.
          </p>
        </div>

        <h2>Tier List Requirements</h2>
        <StatusTable
          rows={[
            { label: "Race names", status: "Pending", note: "Needs a source-backed race list." },
            { label: "Race effects", status: "Pending", note: "Effects must be tied to in-game evidence or reliable community testing." },
            { label: "Build context", status: "Required", note: "A race may rank differently for forge, survival, or damage builds." },
            { label: "Reroll method", status: "Researching", note: "Codes and reroll methods need verification before being listed." }
          ]}
        />

        <h2>Why This Page Exists Early</h2>
        <p>
          YouTube search titles show active demand for race rerolls and race rankings. Publishing the hub now
          lets the site collect and organize evidence before pretending the ranking is settled.
        </p>
      </div>
    </PageShell>
  );
}
