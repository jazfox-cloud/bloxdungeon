import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About BloxDungeon",
  description: "About BloxDungeon, an independent Iron Soul: Dungeon guide and Roblox RPG research site connected to the RisingBlox network.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="About BloxDungeon"
      description="BloxDungeon is an independent guide site focused on Iron Soul: Dungeon and source-backed Roblox RPG data."
      path="/about/"
    >
      <div className="content">
        <p>
          BloxDungeon exists to build cleaner, more transparent Roblox guide pages. The first focus is
          Iron Soul: Dungeon because it has fresh RPG demand and a wide set of player questions around
          codes, forge systems, runes, attributes, race rerolls, weapons, and grinding.
        </p>
        <p>
          This site is part of the broader RisingBlox research network, but it is intentionally narrower:
          BloxDungeon focuses on deep RPG and dungeon-guide coverage instead of broad Roblox trend browsing.
        </p>
        <p>
          BloxDungeon is not affiliated with Roblox Corporation or the Iron Soul development group.
        </p>
      </div>
    </PageShell>
  );
}
