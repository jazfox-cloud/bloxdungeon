import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { dungeonRegions, officialMechanics } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Dungeons Guide",
  description:
    "Iron Soul: Dungeon dungeons guide covering verified dungeon region types, prep logic, and what boss or route data still needs evidence.",
  path: "/dungeons/",
  keywords: ["iron soul dungeon dungeons", "iron soul dungeon dragon tombs", "iron soul dungeon guide"]
});

export default function DungeonsPage() {
  const faq = faqJsonLd([
    {
      question: "Which Iron Soul: Dungeon regions are officially described?",
      answer:
        "The official Roblox description mentions dragon tombs, ancient battlefields, and ruins swallowed by time."
    },
    {
      question: "Does this page list boss HP or dungeon drop rates?",
      answer:
        "No. Boss HP, route maps, and drop rates are held until they can be verified from in-game testing or a traceable source."
    }
  ]);

  return (
    <PageShell
      eyebrow="Dungeons"
      title="Iron Soul: Dungeon Dungeons Guide"
      description="A source-first dungeon hub for Iron Soul: Dungeon, focused on verified region types and practical prep before deeper boss data is available."
      path="/dungeons/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice">
          <strong>Dungeon regions are confirmed; boss data is not.</strong>
          <p>
            We can safely describe the official dungeon themes, but exact boss names, HP values,
            route maps, and drop rates need stronger evidence before publication.
          </p>
        </div>

        <h2>Verified Dungeon Themes</h2>
        <p>
          The official Roblox description frames Iron Soul as a dungeon RPG set across broken floating
          lands. It specifically names lost lands, dragon tombs, ancient battlefields, and time-swallowed ruins.
        </p>
        <StatusTable rows={dungeonRegions} />

        <h2>Dungeon Prep Checklist</h2>
        <p>
          Before pushing into harder dungeon attempts, line up three things: a weapon plan, a material goal,
          and a build direction. That keeps a run from becoming a random grind.
        </p>
        <StatusTable
          rows={[
            {
              label: "Weapon plan",
              status: "Recommended",
              note: "Use the weapons and forge pages to decide what kind of upgrade would help the next run."
            },
            {
              label: "Material goal",
              status: "Recommended",
              note: "Track whether you are farming crystalized ore, rare materials, or future recipe inputs."
            },
            {
              label: "Build direction",
              status: "Recommended",
              note: "Attacker, forge master, and survivor paths should change how you prepare for dungeon pressure."
            }
          ]}
        />

        <h2>What We Will Add Later</h2>
        <p>
          The next useful dungeon upgrade is a source-backed boss and route table. Each row should include
          the dungeon name, encounter type, material rewards, source note, and last checked date. Until then,
          boss claims stay off this page.
        </p>

        <h2>Related Pages</h2>
        <p>
          Dungeon planning connects directly to <a href="/materials/">materials</a>,{" "}
          <a href="/forge/">forge upgrades</a>, <a href="/skill-tree/">skill tree builds</a>, and{" "}
          <a href="/weapons/">weapons</a>.
        </p>

        <h2>Source Boundary</h2>
        <StatusTable rows={officialMechanics.filter((item) => item.label === "Dungeons")} />
      </div>
    </PageShell>
  );
}
