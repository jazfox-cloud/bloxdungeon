import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { rareMaterialWatchlistRows, relicResearchRows } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Relics Guide",
  description:
    "Iron Soul: Dungeon relics guide and watchlist with evidence requirements before relic names, effects, rarity, or farming routes are published.",
  path: "/relics/",
  keywords: ["iron soul dungeon relics", "iron soul relics guide", "iron soul dungeon relic farming"]
});

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
      title="Iron Soul: Dungeon Relics Guide"
      description="A relics watchlist for Iron Soul: Dungeon that explains what evidence is needed before real relic tables go live."
      path="/relics/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice warning">
          <strong>Relic details are not verified yet.</strong>
          <p>
            This page exists to reserve and organize relic intent, not to invent relic names, effects, drop
            rates, or farming routes.
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
