import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Contact BloxDungeon", description: "Contact BloxDungeon about corrections, sources, privacy, or site feedback.", path: "/contact/" });

export default function ContactPage() {
  return <PageShell eyebrow="Contact" title="Contact BloxDungeon" description="Send source-backed corrections, privacy requests, or site feedback." path="/contact/"><div className="content"><p>Email <a href="mailto:hello@bloxdungeon.com">hello@bloxdungeon.com</a> for corrections, accessibility reports, privacy requests, or general feedback.</p><p>For a game-data correction, include the page URL, the exact statement or value to review, and an official or clearly identified community source. We do not provide Roblox account support and cannot issue, activate, or redeem game codes.</p><p>BloxDungeon is an independent fan guide and is not affiliated with Roblox Corporation or the Iron Soul development group.</p></div></PageShell>;
}
