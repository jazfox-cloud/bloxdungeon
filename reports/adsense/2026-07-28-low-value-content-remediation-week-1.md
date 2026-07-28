# BloxDungeon AdSense Low Value Content Remediation - Week 1

Date: 2026-07-28  
Mode: `REJECTION_REMEDIATION`  
Known AdSense reason: Low value content  
Final decision: `NOT_READY_TO_REAPPLY_ADSENSE`

## Executive Verdict

BloxDungeon is not ready to reapply to AdSense yet. The first remediation round removed the strongest low-value signals from the indexable surface by noindexing research/status pages, removing them from the sitemap, and reducing homepage/navigation prominence. The remaining blocker is content depth: several useful pages still depend on official-description concepts and source-boundary explanations rather than verified in-game values, routes, tables, or tested player evidence.

## Authorization Boundary

Authorized this round: read repository, audit production, create this report, modify BloxDungeon code/content, test, commit, push, deploy, and verify production.  
Not authorized this round: log in to AdSense, click re-review, change AdSense account settings, enable Auto ads, add real ad units, invent game data, or modify RisingBlox.

## Policy Evidence Checked

Policy checked on 2026-07-28 using official Google sources:

- Google Publisher Policies: inventory value, replicated content, ads interfering with content, more ads than publisher-content.
- AdSense CMP and EU user consent requirements for EEA, UK, and Switzerland.
- AdSense policy issue/status guidance for consent-related restrictions.
- Google ads.txt and Publisher ID expectations.

Observed production before local fixes: `https://bloxdungeon.com/sitemap.xml` exposed 23 URLs. Multiple indexable pages contained "pending", "watchlist", "data roadmap", "review queue", or "what we will add later" signals.

## Repository Baseline

- Project path: `/Users/jazfox/Documents/rloxgame`
- Branch: `main`
- Baseline HEAD: `f73bf705dca3eea386547349736b2e4783990909`
- Existing untracked files before this task: `reports/`
- Build: `npm run build`
- Lint/typecheck: `npm run lint`
- Existing tests: `npm test`, `npm run test:export`
- Production domain: `https://bloxdungeon.com`

## Page Classification

| URL | Classification | Action |
| --- | --- | --- |
| `/` | `KEEP_INDEXED` | Reworded homepage to feature only current usable guides/tools. |
| `/guide/` | `KEEP_INDEXED` | Keep as beginner path. |
| `/forge/` | `KEEP_INDEXED` | Keep; removed public GSC/Data Roadmap wording. Still needs verified recipe evidence later. |
| `/materials/` | `KEEP_INDEXED` | Keep; useful concept loop with source boundaries. |
| `/dungeons/` | `KEEP_INDEXED` | Keep; removed public GSC/watchlist/later wording. Needs boss/drop evidence later. |
| `/skill-tree/` | `KEEP_INDEXED` | Keep as role-direction guide; no exact formulas claimed. |
| `/level-up-fast/` | `KEEP_INDEXED` | Keep as safe bottleneck guide. |
| `/codes/` | `KEEP_INDEXED` | Keep; no fake codes, source policy visible. |
| `/tools/progression-planner/` | `KEEP_INDEXED` | Keep as real interactive utility. |
| `/runes/` | `NOINDEX_HOLD` | Noindex/follow, remove from sitemap, keep accessible until rune data is verified. |
| `/best-runes/` | `NOINDEX_HOLD` | Noindex/follow, remove from sitemap; title now research status. |
| `/attributes/` | `NOINDEX_HOLD` | Noindex/follow, remove from sitemap; exact formulas still missing. |
| `/builds/` | `NOINDEX_HOLD` | Noindex/follow, remove from sitemap; best-build claims are not evidence-backed yet. |
| `/race-tier-list/` | `NOINDEX_HOLD` | Noindex/follow, remove from sitemap; race names/effects/reroll proof missing. |
| `/grinding/` | `NOINDEX_HOLD` | Noindex/follow, remove from sitemap; XP/coin route evidence missing. |
| `/updates/` | `NOINDEX_HOLD` | Noindex/follow, remove from sitemap; utility/review status only. |
| `/guide/casual-games/` | `NOINDEX_HOLD` | Noindex/follow, remove from sitemap; off-topic support content for now. |
| `/weapons/` | `NOINDEX_HOLD` | Already noindex and absent from sitemap. |
| `/relics/` | `NOINDEX_HOLD` | Already noindex and absent from sitemap. |
| `/sources/` | `LEGAL_OR_UTILITY` | Keep indexed; verification policy supports trust. |
| `/about/` | `LEGAL_OR_UTILITY` | Keep indexed. |
| `/contact/` | `LEGAL_OR_UTILITY` | Keep indexed. |
| `/privacy-policy/` | `LEGAL_OR_UTILITY` | Keep indexed; privacy choices available. |
| `/terms/` | `LEGAL_OR_UTILITY` | Keep indexed. |
| `/disclaimer/` | `LEGAL_OR_UTILITY` | Keep indexed. |

## Blocker / Major / Minor / Hold

Blocker:
- Several public guide topics still lack verified game-specific tables or observed values: rune effects, race effects, weapon stats, relics, XP rates, boss HP, drop rates, exact forge recipe costs.
- Production has not yet been redeployed with the new noindex/sitemap state.

Major:
- Before fixes, homepage and navigation promoted research pages as core guides.
- Before fixes, public copy exposed GSC/search/review wording that made the site look like an unfinished publisher project.
- Before fixes, sitemap included pages whose content was explicitly pending or future-oriented.

Minor:
- AdSense script is present with `ca-pub-2134598094429002`; no hidden ad slots were found by tests.
- GA4 remains behind consent and production host checks.

Hold:
- No AdSense reapplication until production reflects this cleanup and at least one further content round adds verified player-facing evidence to the strongest guide pages.

## Changes Made

- Added `indexed: false` route metadata for `/runes/`, `/best-runes/`, `/attributes/`, `/builds/`, `/race-tier-list/`, `/grinding/`, `/updates/`, and `/guide/casual-games/`.
- Updated sitemap generation to exclude routes with `indexed: false`.
- Added `robots: { index: false, follow: true }` metadata to the newly held pages.
- Removed Runes and Race Tier List from the main navigation; added Materials and Skill Tree instead.
- Reduced homepage cards to current usable guides/tools and removed research/best/tier pages from featured cards.
- Reworded public copy to remove GSC, Search Console, Data Roadmap, Review Queue, and "what we will add later" presentation from the indexable surface.
- Reduced planner links to noindex research pages.

## Noindex Pages

`/runes/`, `/best-runes/`, `/attributes/`, `/builds/`, `/race-tier-list/`, `/grinding/`, `/updates/`, `/guide/casual-games/`, `/weapons/`, `/relics/`.

## Removed From Sitemap

Newly removed: `/runes/`, `/best-runes/`, `/attributes/`, `/builds/`, `/race-tier-list/`, `/grinding/`, `/updates/`, `/guide/casual-games/`.  
Already absent: `/weapons/`, `/relics/`.

## Removed From Homepage Or Main Navigation

Homepage/core card removals: `/runes/`, `/best-runes/`, `/attributes/`, `/builds/`, `/race-tier-list/`.  
Main navigation removals: `/runes/`, `/race-tier-list/`.

## Retained Core Pages

`/`, `/guide/`, `/forge/`, `/materials/`, `/dungeons/`, `/skill-tree/`, `/level-up-fast/`, `/codes/`, `/tools/progression-planner/`, plus legal/source/contact pages.

## Verification

- `npm run lint`: passed.
- `npm test`: passed, 7 tests.
- `npm run test:export`: passed, 7 tests.
- `npm run build`: passed.
- Build-output sitemap check: 15 sitemap URLs; newly noindex pages absent.
- Build-output noindex check: newly held pages contain `noindex, follow`.
- GA4/Consent Mode regression: existing tests passed.
- AdSense script/ads.txt regression: existing tests passed.
- Production pre-fix crawl: 23 sitemap URLs with low-value signals observed.

## Human Actions

- Do not click AdSense re-review yet.
- Do not enable Auto ads yet.
- Gather or verify game evidence for: forge recipe costs, rune names/effects, race names/effects, reroll method, weapon names/stats, relic existence/effects, boss/drop data, XP/coin route tests.

## AdSense Submission Decision

`NOT_READY_TO_REAPPLY_ADSENSE`

The first deterministic cleanup closes the most obvious sitemap/navigation/indexing risks, but the site still needs a stronger verified-content round before reapplication is supportable.
