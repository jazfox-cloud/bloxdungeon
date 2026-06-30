import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProgressionPlanner from "@/components/ProgressionPlanner";
import StatusTable from "@/components/StatusTable";
import { progressionPathRows, verificationChecklist } from "@/content/iron-soul";
import { gameSnapshot } from "@/content/site";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Progression Planner",
  description:
    "A lightweight Iron Soul: Dungeon progression planner that helps choose your next dungeon, material, forge, skill tree, or code-check step.",
  path: "/tools/progression-planner/",
  keywords: ["iron soul dungeon planner", "iron soul dungeon progression", "iron soul dungeon build planner"]
});

export default function ProgressionPlannerPage() {
  const faq = faqJsonLd([
    {
      question: "Does the Iron Soul: Dungeon planner use hidden formulas?",
      answer:
        "No. The planner uses verified progression concepts from the official description and avoids unverified damage, drop, recipe, or skill formulas."
    },
    {
      question: "What should I do if I am only looking for codes?",
      answer:
        "Use the codes option in the planner or open the codes page. BloxDungeon only lists active codes after the exact code, reward, and current status can be verified."
    },
    {
      question: "Is this a calculator?",
      answer:
        "It is a planning tool rather than a stat calculator. A numeric calculator would require verified skill values, recipe costs, and damage formulas."
    }
  ]);

  return (
    <PageShell
      eyebrow="Tool"
      title="Iron Soul: Dungeon Progression Planner"
      description="Choose your current bottleneck and build direction, then get a safe next-step path without relying on unverified stats."
      path="/tools/progression-planner/"
    >
      <JsonLd data={faq} />
      <div className="content wide">
        <div className="notice trust">
          <strong>Updated {gameSnapshot.lastChecked}.</strong>
          <p>
            This planner is intentionally source-first. It helps route players between dungeons,
            materials, forge planning, skill tree choices, and code checks without inventing hidden values.
          </p>
        </div>

        <ProgressionPlanner />

        <h2>Why This Tool Exists</h2>
        <p>
          Iron Soul: Dungeon search demand is strong around codes, forge, materials, dungeons, and build
          paths. A planner gives players a useful action without pretending that exact formulas are public.
        </p>
        <StatusTable rows={progressionPathRows} />

        <h2>Data Boundaries</h2>
        <p>
          The planner does not calculate DPS, drop odds, or recipe efficiency yet. Those require verified
          data. For now, it works as a routing tool that points you to the safest next guide.
        </p>
        <StatusTable rows={verificationChecklist} />
      </div>
    </PageShell>
  );
}
