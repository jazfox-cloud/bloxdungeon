import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { officialEventSnapshot } from "@/content/official-events";
import { getEventLifecycle, getNextLifecycleBoundary } from "@/lib/event-lifecycle";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Iron Soul: Dungeon Official Update Log",
    description: "Non-indexed log of traceable Iron Soul: Dungeon events from Roblox official sources.",
    path: "/updates/",
    keywords: ["iron soul dungeon update", "iron soul dungeon new update", "iron soul dungeon patch"]
  }),
  robots: { index: false, follow: true }
};

export default function UpdatesPage() {
  const events = officialEventSnapshot.events.map((event) => ({
    ...event,
    status: getEventLifecycle(event, officialEventSnapshot.verifiedAtUtc)
  }));
  const nextLifecycleBoundary = getNextLifecycleBoundary(
    officialEventSnapshot.events,
    officialEventSnapshot.verifiedAtUtc
  );

  return (
    <PageShell
      eyebrow="Updates"
      title="Iron Soul: Dungeon Official Update Log"
      description="This non-indexed log records official Roblox events without turning announcements into speculative patch notes."
      path="/updates/"
    >
      <div className="content">
        <div className="notice trust">
          <strong>Official event records only.</strong>
          <p>
            Statuses below are evaluated against each event&apos;s published UTC window at the verification
            timestamp. Event text does not prove unlisted stats, recipes, rates, discounts, or balance changes.
          </p>
        </div>

        <h2>Versioned Snapshot</h2>
        <div className="table-wrap">
          <table>
            <tbody>
              <tr><th>Dataset version</th><td>{officialEventSnapshot.datasetVersion}</td></tr>
              <tr><th>Verified at</th><td>{officialEventSnapshot.verifiedAtUtc}</td></tr>
              <tr><th>Official game updated at</th><td>{officialEventSnapshot.officialGameUpdatedAtUtc}</td></tr>
              <tr><th>Historical coverage</th><td>{officialEventSnapshot.historicalCoverage.status}</td></tr>
              <tr><th>Next lifecycle review</th><td>{nextLifecycleBoundary ?? "No future boundary in this snapshot"}</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Current Official Event Log</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Event / update</th>
                <th>Announced UTC</th>
                <th>Start UTC</th>
                <th>End UTC</th>
                <th>Source updated UTC</th>
                <th>Affected systems / pages</th>
                <th>Evidence</th>
                <th>Verified</th>
                <th>Status</th>
                <th>Uncertainty</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td><strong>{event.name}</strong><br />Event ID {event.id}</td>
                  <td>{event.announcedAtUtc}</td>
                  <td>{event.startUtc}</td>
                  <td>{event.endUtc}</td>
                  <td>{event.sourceUpdatedAtUtc}</td>
                  <td>
                    {event.affectedSystems}. Related pages:{" "}
                    {event.affectedPages.map((path, index) => (
                      <span key={path}>{index > 0 ? ", " : ""}<a href={path}>{path}</a></span>
                    ))}
                  </td>
                  <td><a href={officialEventSnapshot.sourceUrl}>{officialEventSnapshot.sourceType}</a></td>
                  <td>{officialEventSnapshot.verifiedAtUtc}</td>
                  <td><strong>{event.status}</strong></td>
                  <td>{event.uncertainty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Historical Coverage</h2>
        <p>
          <strong>{officialEventSnapshot.historicalCoverage.status}.</strong>{" "}
          The official endpoint was queried from {officialEventSnapshot.historicalCoverage.queriedFromUtc} and
          returned {officialEventSnapshot.historicalCoverage.resultCount} records with no next or previous page
          cursor. {officialEventSnapshot.historicalCoverage.note}
        </p>

        <h2>Stale-Event Handling</h2>
        <p>
          Lifecycle status is calculated from the stored official UTC start and end timestamps, using the visible
          verification timestamp as the deterministic reference. Recheck the official source at the next lifecycle
          boundary, <strong>{nextLifecycleBoundary}</strong>, then publish a new dataset version. An expired window
          becomes ENDED; an invalid or contradictory window becomes UNKNOWN.
        </p>

        <h2>Latest Known Official Game Update Signal</h2>
        <p>
          The <a href="https://games.roblox.com/v1/games?universeIds=9910245722">Roblox official game API</a>{" "}
          reported the experience updated at <strong>{officialEventSnapshot.officialGameUpdatedAtUtc}</strong> when
          checked at <strong>{officialEventSnapshot.verifiedAtUtc}</strong>. This timestamp is a technical update
          signal, not a full patch note.
        </p>
        <p>
          A changed API timestamp can result from many kinds of game maintenance. BloxDungeon does not infer
          a new weapon, code, recipe, boss, or balance change from the timestamp alone. A gameplay claim moves
          into a guide only when the official description, a developer-controlled announcement, or a repeatable
          in-game observation supports it.
        </p>

        <h2>Evidence Gaps After This Check</h2>
        <p>
          The official event records do not provide Dual Pistols stats or recipes, Black Thursday&apos;s exact
          offer, Sakura Village drop rates, boss stats, race effects, or attribute formulas. Those fields stay
          pending until a developer-controlled source or a reproducible in-game test supplies them.
        </p>

        <h2>Maintenance Checklist</h2>
        <ul>
          <li>Recheck the official event API before and after each published UTC window.</li>
          <li>Verify whether a developer-controlled source publishes exact forge, weapon, race, or attribute changes.</li>
          <li>Refresh codes status after each visible game update.</li>
          <li>Move an event to ENDED only after its official end time passes or the developer changes its record.</li>
        </ul>

        <h2>How an Update Is Reviewed</h2>
        <ol>
          <li>Record the Roblox API update timestamp and the date BloxDungeon checked it.</li>
          <li>Compare the official game description and developer-controlled channels with the prior review.</li>
          <li>Recheck code status and any exact values that an update could invalidate.</li>
          <li>Label incomplete evidence as pending instead of filling a table from copied claims.</li>
          <li>Update the affected guide, source note, and checked date together.</li>
        </ol>

        <h2>What Players Should Recheck After a Patch</h2>
        <p>
          Before spending materials or rerolls, check whether a claimed recipe, race effect, rune effect, or
          code is tied to the current version. General progression advice may remain useful, while exact item
          costs and effects can become wrong immediately after a balance change. The <a href="/sources/">source
          policy</a> explains the evidence labels used across the site, and the <a href="/codes/">codes page</a>
          records the latest public code check.
        </p>
      </div>
    </PageShell>
  );
}
