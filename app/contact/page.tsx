import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import EmailLink from "@/components/EmailLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Contact BloxDungeon", description: "Contact BloxDungeon about corrections, sources, privacy, or site feedback.", path: "/contact/" });

export default function ContactPage() {
  return <PageShell eyebrow="Contact" title="Contact BloxDungeon" description="Send source-backed corrections, privacy requests, or site feedback." path="/contact/"><div className="content"><p>Email <EmailLink /> for corrections, accessibility reports, privacy requests, or general feedback. This site does not use an on-site contact form.</p><p>For a game-data correction, include the page URL, the exact statement or value to review, the date you observed it, and an official or clearly identified community source. Do not send passwords, authentication tokens, private Roblox account information, or unnecessary personal data.</p><p>BloxDungeon cannot provide Roblox account support and cannot issue, activate, or redeem game codes. BloxDungeon is an independent fan guide and is not affiliated with Roblox Corporation or the Iron Soul development group.</p></div></PageShell>;
}
