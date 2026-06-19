import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="nav-wrap">
            <Link href="/" className="brand" aria-label="BloxDungeon home">
              <strong>{siteConfig.name}</strong>
              <span>Iron Soul guides and verified data</span>
            </Link>
            <nav className="nav" aria-label="Main navigation">
              <Link href="/codes/">Codes</Link>
              <Link href="/guide/">Guide</Link>
              <Link href="/forge/">Forge</Link>
              <Link href="/runes/">Runes</Link>
              <Link href="/race-tier-list/">Race Tier List</Link>
              <Link href="/weapons/">Weapons</Link>
              <Link href="/sources/">Sources</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <strong>{siteConfig.name}</strong>
              <br />
              Independent Roblox guide site. Not affiliated with Roblox or Iron Soul.
            </div>
            <div className="footer-links">
              <Link href="/about/">About</Link>
              <Link href="/sources/">Sources</Link>
              <Link href="/privacy-policy/">Privacy</Link>
              <a href="https://risingblox.com/">RisingBlox network</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
