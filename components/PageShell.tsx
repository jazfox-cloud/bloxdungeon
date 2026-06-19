import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
};

export default function PageShell({ eyebrow, title, description, path, children }: PageShellProps) {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: title, path }
  ]);

  return (
    <main className="page">
      <JsonLd data={crumbs} />
      <div className="container">
        <header className="page-header">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <div className="button-row">
            <Link className="button primary" href="/sources/">
              View Source Policy
            </Link>
            <Link className="button" href="/updates/">
              Update Log
            </Link>
          </div>
        </header>
        {children}
      </div>
    </main>
  );
}
