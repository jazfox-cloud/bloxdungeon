# BloxDungeon

Independent Iron Soul: Dungeon guide site for Roblox players.

## Stack

- Next.js App Router
- Static export (`output: "export"`)
- TypeScript
- Plain CSS, no Tailwind runtime dependency
- Source-backed content policy for codes, stats, drops, weapons, races, and build claims

## Local Development

Use the Codex bundled Node runtime or any Node.js 20+ installation.

```bash
pnpm install
pnpm exec next dev
```

## Build

```bash
pnpm install
pnpm exec next build
```

The static output is generated in:

```text
out/
```

## Cloudflare Pages

Recommended settings:

- Build command: `pnpm install && pnpm exec next build`
- Output directory: `out`
- Production branch: `main`
- Custom domain: `bloxdungeon.com`

## Source Policy

BloxDungeon does not publish fake active codes, unsourced weapon damage, boss HP, drop rates, race rankings, or material counts. Pages may include pending sections when search demand exists but source-backed game data is still being verified.
