import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StatusTable from "@/components/StatusTable";
import { gameSnapshot } from "@/content/site";
import { codeCheckLog, evidenceGaps, verificationChecklist } from "@/content/iron-soul";
import { faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Iron Soul: Dungeon Codes",
  description: "Verified Iron Soul: Dungeon codes status, last checked date, source policy, and safe redemption notes without fake code lists.",
  path: "/codes/",
  keywords: ["iron soul dungeon codes", "codes for iron soul", "roblox iron soul dungeon codes"]
});

export default function CodesPage() {
  const faq = faqJsonLd([
    {
      question: "Are there verified active Iron Soul: Dungeon codes right now?",
      answer: "BloxDungeon only lists codes after they are verified from official or community-visible sources. If no code is verified, this page shows a no verified active codes state."
    },
    {
      question: "Why not copy every code from YouTube titles?",
      answer: "Video titles are demand signals, not proof. We do not publish a code as active unless the code itself and its status can be checked."
    },
    {
      question: "How often is this Iron Soul: Dungeon codes page checked?",
      answer: "This page keeps a visible check log and is refreshed around game updates, traffic spikes, or credible code claims. The latest check shown here is 2026-07-03."
    },
    {
      question: "Where do Iron Soul: Dungeon code claims usually fail verification?",
      answer: "Most weak claims fail because they repeat a video title or copied list without showing the exact code, reward, redemption result, or current active status."
    },
    {
      question: "Will expired Iron Soul: Dungeon codes be listed?",
      answer: "Yes, but only after there is enough reliable code history to separate active, expired, and unverified claims."
    }
  ]);

  return (
    <PageShell
      eyebrow="Codes"
      title="Iron Soul: Dungeon Codes"
      description="A trust-first codes page for Iron Soul: Dungeon. We track demand and source checks, but we do not invent working codes."
      path="/codes/"
    >
      <JsonLd data={faq} />
      <div className="content">
        <div className="notice trust">
          <strong>No verified active codes right now.</strong>
          <p>
            Last checked {gameSnapshot.lastChecked}. We found strong codes search demand, but active-code
            claims must be verified before appearing here.
          </p>
        </div>

        <h2>Current Code Status</h2>
        <StatusTable
          rows={[
            {
              label: "Active codes",
              status: "Pending verification",
              note: "No active code is listed until the exact code and reward are verified."
            },
            {
              label: "Expired codes",
              status: "Not published yet",
              note: "Expired lists will be added only when we have enough reliable code history."
            },
            {
              label: "Source quality",
              status: "Strict",
              note: "YouTube titles can trigger a review, but they do not prove a code is working."
            }
          ]}
        />

        <h2>Daily Check Log</h2>
        <StatusTable
          rows={codeCheckLog.map((entry) => ({
            label: `${entry.date} - ${entry.source}`,
            status: entry.source,
            note: entry.result
          }))}
        />

        <h2>How We Check Codes</h2>
        <p>
          We look for official Roblox descriptions, developer-visible channels, in-game announcements,
          and repeated community evidence. If a code cannot be traced, we leave it out.
        </p>
        <StatusTable rows={verificationChecklist} />

        <h2>What Would Count as Verified?</h2>
        <ul>
          <li>A code shown in an official Roblox description, update note, or developer-controlled channel.</li>
          <li>A code captured from the in-game redemption UI with a clear reward result.</li>
          <li>A code confirmed by repeated recent community evidence, with stale claims moved out quickly.</li>
        </ul>

        <h2>What Still Needs Evidence</h2>
        <StatusTable rows={evidenceGaps.filter((item) => item.label === "Active codes")} />

        <h2>After You Find Rerolls</h2>
        <p>
          Race rerolls and build choices are closely connected, so the next useful stop is the{" "}
          <a href="/race-tier-list/">Race Tier List</a>. That page currently labels tier data as pending until
          stronger evidence is collected.
        </p>
        <p>
          If you are planning progress before a real code appears, follow the path from{" "}
          <a href="/materials/">Materials</a> to <a href="/forge/">Forge</a>, then compare{" "}
          <a href="/skill-tree/">Skill Tree</a> choices before spending rerolls.
        </p>
      </div>
    </PageShell>
  );
}
