import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested BloxDungeon page does not exist.",
  robots: { index: false, follow: true },
  alternates: { canonical: null }
};

export default function NotFoundPage() {
  return (
    <main className="page">
      <div className="container content">
        <p className="eyebrow">404</p>
        <h1>That dungeon path does not exist.</h1>
        <p className="lead">
          The URL may be outdated or mistyped. No advertising should be displayed on this error page.
        </p>
        <div className="button-row" data-ad-exclusion-zone="error-recovery-actions">
          <Link className="button primary" href="/">Return Home</Link>
          <Link className="button" href="/forge/">Open Forge Guide</Link>
          <Link className="button" href="/contact/">Report a Broken Link</Link>
        </div>
      </div>
    </main>
  );
}
