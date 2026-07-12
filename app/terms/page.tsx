import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import EmailLink from "@/components/EmailLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Terms of Use", description: "Terms governing use of BloxDungeon guides, tools, and game information.", path: "/terms/" });

export default function TermsPage() {
  return <PageShell eyebrow="Terms" title="Terms of Use" description="Rules and disclaimers for using BloxDungeon guides and tools." path="/terms/"><div className="content"><p>Last updated July 11, 2026.</p><h2>Informational content</h2><p>BloxDungeon provides independent editorial guides, planning tools, and public game-data snapshots. Game systems can change without notice, so verify important decisions in the current game and official developer channels.</p><h2>No affiliation or warranty</h2><p>Roblox, Iron Soul: Dungeon, and related names belong to their respective owners. BloxDungeon is not affiliated with or endorsed by them. Content and tools are provided as-is without a guarantee that every value, route, code, or strategy remains current.</p><h2>Tools and account safety</h2><p>BloxDungeon does not distribute executors, cheats, modified clients, or credential tools. Never enter a Roblox password or authentication token into a third-party guide site. You remain responsible for decisions made using a planner or guide.</p><h2>Acceptable use</h2><p>Do not interfere with the site, misuse its tools, or republish substantial portions of its editorial work as your own. External sites are governed by their own terms and privacy practices.</p><h2>Contact</h2><p>Questions about these terms can be sent to <EmailLink />.</p></div></PageShell>;
}
