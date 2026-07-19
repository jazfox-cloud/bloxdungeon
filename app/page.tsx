import Link from "next/link";
import { gameSnapshot, pageCards, sourceNotes } from "@/content/site";
import { JsonLd } from "@/lib/seo";

export default function HomePage() {
  const gameJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: gameSnapshot.name,
    genre: gameSnapshot.genre,
    url: gameSnapshot.robloxUrl,
    author: {
      "@type": "Organization",
      name: gameSnapshot.creator
    },
    gamePlatform: "Roblox",
    numberOfPlayers: gameSnapshot.maxPlayers
  };

  return (
    <main>
      <JsonLd data={gameJsonLd} />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Independent Roblox RPG Guide</p>
            <h1>Iron Soul: Dungeon guide, codes, forge, runes, and weapons.</h1>
            <p className="lead">
              BloxDungeon tracks Iron Soul: Dungeon with a source-first policy: official Roblox data,
              visible community signals, and clearly labeled pending sections when gameplay values are not verified yet.
            </p>
            <div className="button-row" data-ad-exclusion-zone="primary-navigation-actions">
              <Link className="button primary" href="/forge/">Open Forge Recipe Guide</Link>
              <Link className="button" href="/guide/">Start with the Guide</Link>
              <Link className="button" href="/tools/progression-planner/">Open Planner</Link>
              <Link className="button" href="/codes/">Check Codes</Link>
              <a className="button" href="https://risingblox.com/">
                Explore RisingBlox
              </a>
            </div>
          </div>
          <aside className="stat-panel" aria-label="Verified game snapshot">
            <p className="eyebrow">Roblox API Snapshot</p>
            <div className="stat-grid">
              <div className="stat"><span>Visits</span><strong>{gameSnapshot.visits}</strong></div>
              <div className="stat"><span>Playing</span><strong>{gameSnapshot.playing}</strong></div>
              <div className="stat"><span>Favorites</span><strong>{gameSnapshot.favorites}</strong></div>
              <div className="stat"><span>Genre</span><strong>{gameSnapshot.genre}</strong></div>
            </div>
            <p className="muted" style={{ marginTop: 14 }}>
              Last checked {gameSnapshot.lastChecked}. Live counts can change quickly.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Core Guides</h2>
            <p className="muted">
              These pages match current search demand around forge, runes, attributes, race rerolls,
              weapons, grinding, and codes.
            </p>
          </div>
          <div className="grid">
            {pageCards.map((card) => (
              <Link className="card" href={card.href} key={card.href}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="tag-row">
                  {card.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="card">
            <h2>Why BloxDungeon Exists</h2>
            <p>
              Iron Soul: Dungeon has fresh Roblox and YouTube demand, but many pages around codes and
              builds repeat claims without showing where the information came from.
            </p>
            <p>
              Our first job is to organize the player questions clearly. Exact stats are added only after
              we can point to a source or mark them as community-tested.
            </p>
          </div>
          <div className="card">
            <h2>Source Stack</h2>
            <ul>
              {sourceNotes.slice(0, 3).map((source) => (
                <li key={source.name}>
                  <a href={source.url}>{source.name}</a>: {source.use}
                </li>
              ))}
            </ul>
            <Link href="/sources/">Read the full verification policy</Link>
          </div>
          <div className="card">
            <h2>Part of RisingBlox</h2>
            <p>
              BloxDungeon is the dedicated Iron Soul: Dungeon deep-dive. For broader Roblox trend tracking,
              codes pages, and beginner guides across more games, visit{" "}
              <a href="https://risingblox.com/">RisingBlox</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
