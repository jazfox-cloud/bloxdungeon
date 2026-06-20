import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { casualGames } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Roblox Casual Games to Play After Iron Soul Grinding",
  description:
    "A relaxed Roblox casual games guide for Iron Soul: Dungeon players who want a break from forging, grinding, rerolls, and dungeon routes.",
  path: "/guide/casual-games/",
  keywords: ["roblox casual games", "casual games", "best casual games in roblox"]
});

export default function CasualGamesGuidePage() {
  const faq = faqJsonLd([
    {
      question: "Why is a dungeon guide site covering Roblox casual games?",
      answer:
        "Iron Soul: Dungeon has long grinding, forge, and build-planning loops. A casual-games guide helps players find a lower-pressure break without leaving Roblox."
    },
    {
      question: "Are these casual games ranked?",
      answer:
        "No. This page lists well-known casual Roblox picks by use case instead of claiming a precise ranking."
    }
  ]);

  return (
    <PageShell
      eyebrow="Casual Games"
      title="Roblox Casual Games to Play When You Need a Break"
      description="Tired of farming ore, checking forge paths, or planning rerolls? These casual Roblox picks give Iron Soul players a lighter session between dungeon runs."
      path="/guide/casual-games/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <p>
          Iron Soul: Dungeon is built around active combat, rare material drops, forge decisions, skill-tree
          planning, and dungeon clearing. That loop is satisfying, but it can also turn into a long grind
          when you are chasing the next weapon or reroll.
        </p>
        <p>
          A good casual game break should be easy to enter, low pressure, and playable in a shorter session.
          The picks below are not a hard ranking. They are familiar Roblox experiences that fit different
          kinds of downtime.
        </p>
        <p>
          If you want a broader curated list of chill experiences, explore our full guide on{" "}
          <a href="https://risingblox.com/tag/casual-games-roblox/">Roblox casual games</a>.
        </p>

        <h2>5 Casual Roblox Picks After Dungeon Grinding</h2>
        <div className="grid two">
          {casualGames.map((game) => (
            <article className="card" key={game.name}>
              <h3>{game.name}</h3>
              <p>{game.fit}</p>
            </article>
          ))}
        </div>

        <h2>How to Choose Your Break Game</h2>
        <p>
          If Iron Soul has you focused on damage, loot, and resource efficiency, pick a casual game that asks
          for a different kind of attention. Social roleplay, short round-based games, decorating, or simple
          job loops are better breaks than another optimization-heavy RPG.
        </p>
        <p>
          Keep the session short enough that it stays a reset. When you come back to Iron Soul, check your
          next goal: a forge run, a dungeon route, a skill-tree decision, or a code/reroll check.
        </p>

        <h2>Back to Iron Soul</h2>
        <p>
          Once you are ready to grind again, start with the <a href="/forge/">forge guide</a>,{" "}
          <a href="/runes/">runes guide</a>, or <a href="/race-tier-list/">race tier list hub</a>. For more
          relaxed Roblox discovery, use RisingBlox&apos;s broader{" "}
          <a href="https://risingblox.com/tag/casual-games-roblox/">Roblox casual games</a> guide.
        </p>
      </div>
    </PageShell>
  );
}
