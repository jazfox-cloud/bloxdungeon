import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { skillTreePaths } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Skill Tree and Builds",
  description:
    "Iron Soul: Dungeon skill tree guide covering attacker, forge master, and survivor build directions without inventing unverified skill formulas.",
  path: "/skill-tree/",
  keywords: ["iron soul dungeon skill tree", "iron soul dungeon builds", "iron soul dungeon attacker forge survivor"]
});

export default function SkillTreePage() {
  const faq = faqJsonLd([
    {
      question: "What build directions are officially described for Iron Soul: Dungeon?",
      answer:
        "The official Roblox description names relentless attacker, forge master, and survivor-style paths."
    },
    {
      question: "Does this guide include exact skill point formulas?",
      answer:
        "No. Exact point costs, cooldowns, damage scaling, and best allocations require separate verification before they are published."
    }
  ]);

  return (
    <PageShell
      eyebrow="Skill Tree"
      title="Iron Soul: Dungeon Skill Tree and Builds"
      description="Plan around the official build directions: attacker, forge master, and survivor. Exact skill formulas stay pending until source-backed data appears."
      path="/skill-tree/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <h2>Official Build Directions</h2>
        <p>
          Iron Soul&apos;s official description confirms that players unlock and upgrade a skill tree.
          It also names three playstyle directions: a relentless attacker, a forge master, and a survivor built to last.
        </p>
        <StatusTable rows={skillTreePaths} />

        <h2>How to Pick a Direction</h2>
        <p>
          Pick your first direction based on the problem you are actually facing. If fights take too long,
          start with attacker logic. If your progression is blocked by crafting decisions, study the forge
          route. If dungeon pressure is ending runs too early, build around survival first.
        </p>
        <StatusTable
          rows={[
            {
              label: "Attacker",
              status: "Best when damage is the bottleneck",
              note: "Useful for faster clears, but exact damage scaling remains unverified."
            },
            {
              label: "Forge master",
              status: "Best when crafting is the bottleneck",
              note: "Pairs naturally with material tracking and forge planning."
            },
            {
              label: "Survivor",
              status: "Best when dungeon pressure is the bottleneck",
              note: "Useful when harder content punishes low durability or poor recovery."
            }
          ]}
        />

        <h2>How This Connects to Other Systems</h2>
        <p>
          The skill tree is not isolated. It should shape how you think about{" "}
          <a href="/attributes/">attributes</a>, <a href="/runes/">runes</a>,{" "}
          <a href="/materials/">materials</a>, and <a href="/dungeons/">dungeon prep</a>.
        </p>

        <h2>What We Will Not Claim Yet</h2>
        <p>
          We are not publishing best point allocations, cooldown tables, hidden scaling formulas, or
          one-size-fits-all builds until there is a source trail. Those claims will need screenshots,
          repeatable testing, or reliable update notes.
        </p>
      </div>
    </PageShell>
  );
}
