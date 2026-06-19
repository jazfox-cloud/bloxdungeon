import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { gameSnapshot, sourceNotes } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sources and Verification Policy",
  description: "BloxDungeon source policy for Iron Soul: Dungeon, including Roblox API, official page, trend reports, YouTube demand, and pending data rules.",
  path: "/sources/",
  keywords: ["BloxDungeon sources", "Iron Soul Dungeon sources", "verified Roblox guide data"]
});

export default function SourcesPage() {
  return (
    <PageShell
      eyebrow="Verification"
      title="Sources and Verification Policy"
      description="BloxDungeon separates official facts, demand signals, community testing, and unverified claims so players can see what is known and what still needs proof."
      path="/sources/"
    >
      <div className="content">
        <h2>Current Official Snapshot</h2>
        <div className="table-wrap">
          <table>
            <tbody>
              <tr><th>Game</th><td>{gameSnapshot.name}</td></tr>
              <tr><th>Universe ID</th><td>{gameSnapshot.universeId}</td></tr>
              <tr><th>Root Place ID</th><td>{gameSnapshot.rootPlaceId}</td></tr>
              <tr><th>Creator</th><td>{gameSnapshot.creator} ({gameSnapshot.creatorType})</td></tr>
              <tr><th>Genre</th><td>{gameSnapshot.genre}</td></tr>
              <tr><th>Created</th><td>{gameSnapshot.created}</td></tr>
              <tr><th>Updated</th><td>{gameSnapshot.updated}</td></tr>
              <tr><th>Last checked</th><td>{gameSnapshot.lastChecked}</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Source List</h2>
        <div className="grid two">
          {sourceNotes.map((source) => (
            <div className="card" key={source.name}>
              <h3>{source.name}</h3>
              <p>{source.use}</p>
              <a href={source.url}>{source.url}</a>
            </div>
          ))}
        </div>

        <h2>What We Do Not Publish Without Evidence</h2>
        <ul>
          <li>Fake or untested active codes.</li>
          <li>Boss health, weapon damage, drop rates, or material counts without a source.</li>
          <li>Race tier rankings without race effects and build context.</li>
          <li>Hourly XP, coin, or ore rates without repeatable testing.</li>
        </ul>
      </div>
    </PageShell>
  );
}
