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
  other: {
    "google-adsense-account": "ca-pub-2134598094429002"
  },
  icons: {
    icon: "/favicon.svg"
  },
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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2134598094429002"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header className="site-header" data-ad-exclusion-zone="site-navigation">
          <div className="nav-wrap">
            <Link href="/" className="brand">
              <strong>{siteConfig.name}</strong>
              <span>Iron Soul guides and verified data</span>
            </Link>
            <nav className="nav" aria-label="Main navigation">
              <Link href="/codes/">Codes</Link>
              <Link href="/tools/progression-planner/">Planner</Link>
              <Link href="/guide/">Guide</Link>
              <Link href="/forge/">Forge</Link>
              <Link href="/runes/">Runes</Link>
              <Link href="/race-tier-list/">Race Tier List</Link>
              <Link href="/sources/">Sources</Link>
              <a href="https://risingblox.com/">RisingBlox</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer" data-ad-exclusion-zone="legal-and-privacy-controls">
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
              <Link href="/privacy-policy/#privacy-choices">Privacy choices</Link>
              <Link href="/terms/">Terms</Link>
              <Link href="/disclaimer/">Disclaimer</Link>
              <Link href="/contact/">Contact</Link>
              <a href="https://risingblox.com/">RisingBlox network</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
