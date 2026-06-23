import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { evidenceGaps, progressionPathRows, skillTreePaths, verificationChecklist } from "@/content/iron-soul";
import { gameSnapshot } from "@/content/site";
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
    },
    {
      question: "Which Iron Soul: Dungeon skill tree path should beginners choose?",
      answer:
        "Choose based on your current bottleneck: attacker if fights take too long, forge master if crafting decisions block progress, and survivor if dungeon pressure ends runs too early."
    },
    {
      question: "Is forge master better than attacker?",
      answer:
        "Not universally. Forge master and attacker solve different problems, so a fair comparison needs dungeon goal, material state, weapon plan, and verified skill effects."
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
        <div className="notice trust">
          <strong>Last checked {gameSnapshot.lastChecked}.</strong>
          <p>
            Build directions are official, but exact skill values, point costs, cooldowns,
            and hidden formulas are still held for evidence.
          </p>
        </div>

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

        <h2>Recommended Progression Path</h2>
        <p>
          Use the skill tree after you understand the dungeon pressure and material goal. That order makes
          your build choices easier to explain and easier to revise after updates.
        </p>
        <StatusTable rows={progressionPathRows} />

        <h2>What We Will Not Claim Yet</h2>
        <p>
          We are not publishing best point allocations, cooldown tables, hidden scaling formulas, or
          one-size-fits-all builds until there is a source trail. Those claims will need screenshots,
          repeatable testing, or reliable update notes.
        </p>
        <StatusTable rows={[...verificationChecklist, ...evidenceGaps.filter((item) => item.label === "Boss HP")]} />
      </div>
    </PageShell>
  );
}
