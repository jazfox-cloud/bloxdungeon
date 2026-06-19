export const siteConfig = {
  name: "BloxDungeon",
  domain: "https://bloxdungeon.com",
  title: "BloxDungeon - Iron Soul: Dungeon Guide, Codes, Forge, Runes, and Weapons",
  description:
    "Independent Iron Soul: Dungeon guide for Roblox players, covering verified codes status, forge basics, runes, attributes, race rerolls, weapons, and grinding routes.",
  keywords: [
    "Iron Soul Dungeon guide",
    "Iron Soul Dungeon codes",
    "Iron Soul Dungeon forge",
    "Iron Soul Dungeon runes",
    "Iron Soul Dungeon weapons",
    "Iron Soul Dungeon race tier list",
    "Roblox Iron Soul"
  ]
};

export const gameSnapshot = {
  name: "Iron Soul: Dungeon",
  universeId: "9910245722",
  rootPlaceId: "117533937949084",
  creator: "Iron Soul",
  creatorType: "Roblox group with verified badge",
  genre: "RPG / Action RPG",
  created: "2026-03-20",
  updated: "2026-06-16",
  visits: "77.5M+",
  playing: "9.5K+",
  favorites: "122.9K+",
  maxPlayers: "16",
  lastChecked: "2026-06-19",
  robloxUrl: "https://www.roblox.com/games/117533937949084/Iron-Soul-Dungeon",
  robloxApiUrl: "https://games.roblox.com/v1/games?universeIds=9910245722"
};

export const sourceNotes = [
  {
    name: "Roblox official game API",
    url: gameSnapshot.robloxApiUrl,
    use: "Canonical game identity, creator, genre, visit snapshot, created date, updated date, and current playing count."
  },
  {
    name: "Roblox official game page",
    url: gameSnapshot.robloxUrl,
    use: "Official description and direct play page."
  },
  {
    name: "LudusDex Roblox trend report",
    url: "https://ludusdex.com/data/reports/2026-06-19/roblox-trend-morning-report.md",
    use: "Trend radar and SEO-window signal, not a source for in-game item values."
  },
  {
    name: "YouTube search results",
    url: "https://www.youtube.com/results?search_query=Iron+Soul+Dungeon+Roblox",
    use: "Player demand signals for guide topics such as forge, runes, attributes, race rerolls, weapons, grinding, and codes."
  }
];

export const routes = [
  { path: "/", title: "Iron Soul: Dungeon Guide", priority: 1.0, changeFrequency: "daily" },
  { path: "/codes/", title: "Iron Soul: Dungeon Codes", priority: 0.95, changeFrequency: "daily" },
  { path: "/guide/", title: "Iron Soul: Dungeon Beginner Guide", priority: 0.9, changeFrequency: "weekly" },
  { path: "/forge/", title: "Iron Soul: Dungeon Forge Guide", priority: 0.9, changeFrequency: "weekly" },
  { path: "/runes/", title: "Iron Soul: Dungeon Runes Guide", priority: 0.85, changeFrequency: "weekly" },
  { path: "/attributes/", title: "Iron Soul: Dungeon Attributes Guide", priority: 0.85, changeFrequency: "weekly" },
  { path: "/race-tier-list/", title: "Iron Soul: Dungeon Race Tier List", priority: 0.85, changeFrequency: "weekly" },
  { path: "/weapons/", title: "Iron Soul: Dungeon Weapons Guide", priority: 0.85, changeFrequency: "weekly" },
  { path: "/grinding/", title: "Iron Soul: Dungeon XP and Coin Grinding", priority: 0.8, changeFrequency: "weekly" },
  { path: "/updates/", title: "Iron Soul: Dungeon Updates", priority: 0.75, changeFrequency: "daily" },
  { path: "/sources/", title: "Sources and Verification Policy", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about/", title: "About BloxDungeon", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy-policy/", title: "Privacy Policy", priority: 0.4, changeFrequency: "yearly" }
] as const;

export const pageCards = [
  {
    href: "/codes/",
    title: "Codes",
    description: "Verified active-code status, expired-code tracking, and a clear no-fake-codes policy.",
    tags: ["codes", "last checked", "rerolls"]
  },
  {
    href: "/forge/",
    title: "Forge",
    description: "A structured guide to the crafting loop, ore collection, forge runs, and upgrade planning.",
    tags: ["forge", "crafting", "materials"]
  },
  {
    href: "/runes/",
    title: "Runes",
    description: "Rune notes and build-planning framework. Exact effects are added only when verified.",
    tags: ["runes", "builds", "testing"]
  },
  {
    href: "/attributes/",
    title: "Attributes",
    description: "How to think about attack, survivability, and utility paths without inventing hidden formulas.",
    tags: ["attributes", "skill tree", "builds"]
  },
  {
    href: "/race-tier-list/",
    title: "Race Tier List",
    description: "A pending-verification tier-list hub for race rerolls and community-tested build value.",
    tags: ["race rerolls", "tier list", "evidence needed"]
  },
  {
    href: "/weapons/",
    title: "Weapons",
    description: "Weapon categories, high-damage search intent, and placeholders for verified weapon data.",
    tags: ["weapons", "damage", "staff"]
  }
];
