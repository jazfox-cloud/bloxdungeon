import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { levelUpFastRows, progressionPathRows } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon How to Level Up Fast",
  description:
    "Iron Soul: Dungeon how to level up fast guide with safe progression routing, XP planning, forge bottlenecks, and evidence rules for rates.",
  path: "/level-up-fast/",
  keywords: [
    "iron soul dungeon how to level up fast",
    "iron soul dungeon level up fast",
    "iron soul dungeon xp guide",
    "iron soul dungeon grinding"
  ]
});

export default function LevelUpFastPage() {
  const faq = faqJsonLd([
    {
      question: "How do you level up fast in Iron Soul: Dungeon?",
      answer:
        "Use dungeon results to identify the bottleneck: damage if clears are slow, survival if runs end early, and forge or materials if upgrades are blocked."
    },
    {
      question: "Does BloxDungeon publish XP-per-hour rates?",
      answer:
        "No. XP-per-hour and coin-per-hour rates need measured testing or traceable source notes before they are published."
    }
  ]);

  return (
    <PageShell
      eyebrow="Leveling"
      title="Iron Soul: Dungeon How to Level Up Fast"
      description="A safe leveling guide for Iron Soul: Dungeon focused on progression bottlenecks, dungeon prep, forge timing, and XP evidence rules."
      path="/level-up-fast/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Fast leveling advice should start from the bottleneck.</strong>
          <p>
            This page is built for level-up-fast and XP-guide intent, but it avoids fake rate tables. Use it
            to decide the next productive action before stronger route testing is available.
          </p>
        </div>

        <h2>Fast Leveling Framework</h2>
        <StatusTable rows={levelUpFastRows} />

        <h2>Progression Path</h2>
        <p>
          The fastest path is usually the one that removes the current blocker. If you fail dungeons, improve
          survival. If you clear too slowly, improve damage and weapons. If upgrades are blocked, farm the
          material or forge step that unlocks the next build change.
        </p>
        <StatusTable rows={progressionPathRows} />

        <h2>What to Check Next</h2>
        <p>
          Use <a href="/dungeons/">Dungeons</a> to pick the pressure point, <a href="/forge/">Forge</a> to
          plan upgrades, <a href="/best-runes/">Best Runes</a> for build support, and{" "}
          <a href="/builds/">Builds</a> to choose a role.
        </p>
      </div>
    </PageShell>
  );
}
