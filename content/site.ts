export const siteConfig = {
  name: "BloxDungeon",
  domain: "https://bloxdungeon.com",
  title: "BloxDungeon - Iron Soul: Dungeon Guide, Codes, Forge, Materials, and Planner",
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
  updated: "2026-07-10",
  visits: "119.4M+",
  playing: "14.8K+",
  favorites: "182.7K+",
  maxPlayers: "16",
  lastChecked: "2026-07-10",
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
    use: "Trend radar for topic discovery, not a source for in-game item values."
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
  { path: "/tools/progression-planner/", title: "Iron Soul: Dungeon Progression Planner", priority: 0.9, changeFrequency: "weekly" },
  { path: "/forge/", title: "Iron Soul: Dungeon Forge Recipe and Crafting Guide", priority: 0.9, changeFrequency: "weekly" },
  { path: "/dungeons/", title: "Iron Soul: Dungeon Dungeons, Dragon Tear, and Rare Materials", priority: 0.88, changeFrequency: "weekly" },
  { path: "/skill-tree/", title: "Iron Soul: Dungeon Skill Tree and Builds", priority: 0.88, changeFrequency: "weekly" },
  { path: "/materials/", title: "Iron Soul: Dungeon Materials and Crystalized Ore", priority: 0.86, changeFrequency: "weekly" },
  { path: "/runes/", title: "Iron Soul: Dungeon Runes Guide", priority: 0.85, changeFrequency: "weekly", indexed: false },
  { path: "/best-runes/", title: "Iron Soul: Dungeon Best Runes Research Status", priority: 0.85, changeFrequency: "weekly", indexed: false },
  { path: "/attributes/", title: "Iron Soul: Dungeon Best Attributes and Best Stats", priority: 0.85, changeFrequency: "weekly", indexed: false },
  { path: "/builds/", title: "Iron Soul: Dungeon Builds Research Status", priority: 0.85, changeFrequency: "weekly", indexed: false },
  { path: "/race-tier-list/", title: "Iron Soul: Dungeon Race Tier List Research Status", priority: 0.85, changeFrequency: "weekly", indexed: false },
  { path: "/level-up-fast/", title: "Iron Soul: Dungeon How to Level Up Fast", priority: 0.82, changeFrequency: "weekly" },
  { path: "/grinding/", title: "Iron Soul: Dungeon XP and Coin Grinding", priority: 0.8, changeFrequency: "weekly", indexed: false },
  { path: "/updates/", title: "Iron Soul: Dungeon Updates and Patch Review", priority: 0.75, changeFrequency: "daily", indexed: false },
  { path: "/guide/casual-games/", title: "Roblox Casual Games After Iron Soul", priority: 0.65, changeFrequency: "monthly", indexed: false },
  { path: "/sources/", title: "Sources and Verification Policy", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about/", title: "About BloxDungeon", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact/", title: "Contact BloxDungeon", priority: 0.4, changeFrequency: "yearly" },
  { path: "/privacy-policy/", title: "Privacy Policy", priority: 0.4, changeFrequency: "yearly" },
  { path: "/terms/", title: "Terms of Use", priority: 0.4, changeFrequency: "yearly" },
  { path: "/disclaimer/", title: "Disclaimer", priority: 0.4, changeFrequency: "yearly" }
] as const;

export const pageCards = [
  {
    href: "/forge/",
    title: "Forge Recipe Guide",
    description: "Verified forge-loop basics, ore collection context, crafting boundaries, and upgrade planning without unsourced recipe costs.",
    tags: ["forge recipe", "crafting", "forging"]
  },
  {
    href: "/codes/",
    title: "Codes",
    description: "Verified active-code status, expired-code tracking, and a clear no-fake-codes policy.",
    tags: ["codes", "last checked", "rerolls"]
  },
  {
    href: "/guide/",
    title: "Beginner Guide",
    description: "A practical starting path for dungeons, materials, forge choices, skill-tree direction, and safer progression decisions.",
    tags: ["start here", "progression", "guide"]
  },
  {
    href: "/tools/progression-planner/",
    title: "Progression Planner",
    description: "A lightweight tool that turns your current bottleneck into the next guide, material, forge, or build step.",
    tags: ["tool", "planner", "builds"]
  },
  {
    href: "/dungeons/",
    title: "Dungeons",
    description: "Dungeon regions, Dragon Tear and Dragon Horn watchlists, Discord checks, and boss-route evidence boundaries.",
    tags: ["dungeons", "Dragon Tear", "Discord"]
  },
  {
    href: "/skill-tree/",
    title: "Skill Tree",
    description: "Attacker, forge master, and survivor build paths with clear boundaries around unverified formulas.",
    tags: ["skill tree", "builds", "paths"]
  },
  {
    href: "/materials/",
    title: "Materials",
    description: "Crystalized ore, rare materials, and the source-first checklist for future drop tables.",
    tags: ["materials", "ore", "drops"]
  },
  {
    href: "/level-up-fast/",
    title: "Level Up Fast",
    description: "Progression-bottleneck guide for XP, dungeon pressure, forge timing, and safer grinding.",
    tags: ["leveling", "XP", "progression"]
  },
];
