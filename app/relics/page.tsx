import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { rareMaterialWatchlistRows, relicResearchRows } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Iron Soul: Dungeon Relics Research Status",
    description: "Research status for future verified Iron Soul: Dungeon relic data.",
    path: "/relics/"
  }),
  robots: { index: false, follow: true }
};

export default function RelicsPage() {
  const faq = faqJsonLd([
    {
      question: "Are Iron Soul: Dungeon relics verified?",
      answer:
        "Not yet on BloxDungeon. Relic names, effects, rarity, and farming routes need source evidence before they are published."
    },
    {
      question: "Why publish a relics page now?",
      answer:
        "Relics are part of the planned Iron Soul deep-article cluster, but this page is intentionally a watchlist until real evidence appears."
    }
  ]);

  return (
    <PageShell
      eyebrow="Relics"
      title="Iron Soul: Dungeon Relics Research Status"
      description="This non-indexed research page explains what evidence is still needed before a real relic guide can be published."
      path="/relics/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice warning">
          <strong>This is not a finished relic guide.</strong>
          <p>
            The page is excluded from search indexing and the sitemap until relic names, effects, rarity, and
            farming evidence are available. It remains accessible so existing links do not break.
          </p>
        </div>

        <h2>Relics Evidence Status</h2>
        <StatusTable rows={relicResearchRows} />

        <h2>Adjacent Evidence to Watch</h2>
        <p>
          Until relics are verified, the closest useful evidence comes from dungeon rewards, rare materials,
          Dragon Tear, Dragon Horn, and forge inputs. Those topics can suggest what to verify next without
          turning guesses into guide data.
        </p>
        <StatusTable rows={rareMaterialWatchlistRows} />

        <h2>Related Deep Guides</h2>
        <p>
          Watch <a href="/dungeons/">Dungeons</a>, <a href="/materials/">Materials</a>,{" "}
          <a href="/forge/">Forge</a>, and <a href="/level-up-fast/">Level Up Fast</a> for the evidence
          trail that would support a real relic table later.
        </p>
      </div>
    </PageShell>
  );
}
