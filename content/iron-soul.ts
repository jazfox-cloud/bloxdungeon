export const verificationDate = "2026-06-30";

export const officialMechanics = [
  {
    label: "Forge loop",
    status: "Officially described",
    note: "The Roblox description says players collect crystalized ore, bring it to ancient forges, and craft weapons."
  },
  {
    label: "Material drops",
    status: "Officially described",
    note: "The game page describes defeating creatures for rare materials."
  },
  {
    label: "Skill tree",
    status: "Officially described",
    note: "The official description names attacker, forge master, and survivor-style paths."
  },
  {
    label: "Dungeons",
    status: "Officially described",
    note: "The game page mentions dragon tombs, ancient battlefields, and ruined lands."
  }
];

export const dungeonRegions = [
  {
    label: "Dragon tombs",
    status: "Officially described",
    note: "The Roblox description names dragon tombs as one type of lost land players can enter."
  },
  {
    label: "Ancient battlefields",
    status: "Officially described",
    note: "Ancient battlefields are listed as a dungeon region type, but exact routes and encounters are not public here yet."
  },
  {
    label: "Ruins swallowed by time",
    status: "Officially described",
    note: "Ruins are confirmed as a dungeon setting. Boss names, HP, and loot tables still need separate evidence."
  },
  {
    label: "Greater rewards",
    status: "Officially described",
    note: "The official page says clearing lingering darkness leads to greater rewards without listing exact drop rates."
  }
];

export const skillTreePaths = [
  {
    label: "Relentless attacker",
    status: "Officially described",
    note: "A damage-focused path is named in the official description, but exact skill values remain unverified."
  },
  {
    label: "Forge master",
    status: "Officially described",
    note: "The forge master direction connects skill choices to the crafting loop and material planning."
  },
  {
    label: "Survivor built to last",
    status: "Officially described",
    note: "A survivor path is confirmed as a playstyle direction for harder dungeon attempts."
  },
  {
    label: "Exact ability formulas",
    status: "Needs evidence",
    note: "Point costs, cooldowns, scaling, and best allocations should not be published until verified."
  }
];

export const materialRows = [
  {
    label: "Crystalized ore",
    status: "Officially described",
    note: "The Roblox description says players collect crystalized ore and bring it to ancient forges."
  },
  {
    label: "Rare materials",
    status: "Officially described",
    note: "Creature defeats are described as dropping rare materials, but individual item names and rates are not listed."
  },
  {
    label: "Forge inputs",
    status: "Partly verified",
    note: "Ore and materials connect to crafting; exact recipe quantities still need in-game evidence."
  },
  {
    label: "Drop tables",
    status: "Not published",
    note: "No boss or dungeon drop table should go live without source notes, dates, and testing context."
  }
];

export const codeCheckLog = [
  {
    date: verificationDate,
    source: "Roblox official game page",
    result: "No public code list or active code was visible in the official game description."
  },
  {
    date: verificationDate,
    source: "Roblox public game API",
    result: "Game identity, creator, update time, visits, favorites, and current players were refreshed."
  },
  {
    date: verificationDate,
    source: "Public search demand",
    result: "Codes and reroll queries still exist, but no source-backed active code was promoted to active status."
  }
];

export const verificationChecklist = [
  {
    label: "Official game page",
    status: "High confidence",
    note: "Use for game identity, creator, official description, public update text, and direct play link."
  },
  {
    label: "Roblox public API",
    status: "High confidence",
    note: "Use for universe ID, root place ID, update timestamp, visits, favorites, playing count, and vote snapshots."
  },
  {
    label: "In-game screenshot or test",
    status: "Required for exact values",
    note: "Needed before publishing codes, skill values, recipe costs, drop rates, boss HP, or item effects."
  },
  {
    label: "Community claim",
    status: "Signal only",
    note: "Can trigger a review, but it is not enough to publish exact data without a source trail."
  }
];

export const progressionPathRows = [
  {
    label: "Dungeons",
    status: "Start here",
    note: "Choose the content pressure you are preparing for before farming blindly."
  },
  {
    label: "Materials",
    status: "Farm with a goal",
    note: "Track crystalized ore and rare materials around the next forge or weapon decision."
  },
  {
    label: "Forge",
    status: "Spend deliberately",
    note: "Convert materials into weapon progress only after deciding what problem the build needs to solve."
  },
  {
    label: "Skill Tree",
    status: "Lock the role",
    note: "Attacker, forge master, and survivor choices should match your dungeon and forge bottleneck."
  }
];

export const evidenceGaps = [
  {
    label: "Boss HP",
    status: "Not published",
    note: "Needs repeatable in-game testing or reliable patch/source notes."
  },
  {
    label: "Drop rates",
    status: "Not published",
    note: "Needs sample size, source date, and clear dungeon or enemy context."
  },
  {
    label: "Recipe costs",
    status: "Not published",
    note: "Needs screenshot or test evidence for each material count."
  },
  {
    label: "Active codes",
    status: "Not published",
    note: "Needs exact code, reward, redemption result, and current status."
  }
];

export const forgeResearchRows = [
  {
    label: "Ore names and sources",
    status: "Partly verified",
    note: "Crystalized ore and rare materials are official; exact map sources still need screenshots or tested routes."
  },
  {
    label: "Forge purpose",
    status: "Verified",
    note: "The official page describes ancient forges as the place where collected ore becomes powerful weapons."
  },
  {
    label: "Recipe costs",
    status: "Needs evidence",
    note: "No ore-count table is published until the values come from in-game testing or a traceable source."
  },
  {
    label: "Best forge path",
    status: "Strategy only",
    note: "We can explain decision logic, but exact best-in-slot claims wait for repeatable data."
  }
];

export const forgeRecipeTrackerRows = [
  {
    label: "Forge recipe system",
    status: "Verified concept",
    note: "The official description confirms collecting crystalized ore and using ancient forges to craft weapons."
  },
  {
    label: "Iron Soul Dungeon forge recipe",
    status: "Search-confirmed demand",
    note: "Search Console shows players looking for forge recipes, so this page tracks recipe evidence without publishing unsourced costs."
  },
  {
    label: "Crafting recipe table",
    status: "Held for evidence",
    note: "A recipe table will be added only when each weapon, material name, and quantity has a screenshot or test note."
  },
  {
    label: "Weapon recipe claims",
    status: "Needs source trail",
    note: "Individual weapon recipes are not treated as verified until the exact in-game recipe panel or reliable update note is available."
  },
  {
    label: "Staff recipe / special recipes",
    status: "Watchlist",
    note: "Specific recipe queries are monitored, but special recipe names remain off the guide until they can be confirmed."
  }
];

export const attributeBuildRows = [
  {
    label: "Best attributes for attacker",
    status: "Role guidance",
    note: "Use this direction when dungeon clears feel too slow. Exact damage scaling and point breakpoints are still pending."
  },
  {
    label: "Best attributes for forge master",
    status: "Role guidance",
    note: "Use this direction when your main bottleneck is material planning, crafting progress, or weapon upgrade timing."
  },
  {
    label: "Best attributes for survivor",
    status: "Role guidance",
    note: "Use this direction when runs fail because you cannot stay alive long enough to finish dungeon objectives."
  },
  {
    label: "Universal best stats",
    status: "Not claimed",
    note: "There is no source-backed universal stat build yet. Ranking stats without weapon, race, rune, and dungeon context would be misleading."
  }
];

export const runeResearchRows = [
  {
    label: "Rune names",
    status: "Collecting evidence",
    note: "No public rune list is treated as verified until names are tied to screenshots, update notes, or reliable gameplay references."
  },
  {
    label: "Rune effects",
    status: "Needs evidence",
    note: "Effect text and build value will be added only with source context."
  },
  {
    label: "Build fit",
    status: "Framework ready",
    note: "Runes will be grouped by attacker, forge route, survivor route, and dungeon-clearing value when data is confirmed."
  },
  {
    label: "Best runes",
    status: "Not ranked",
    note: "A best-runes list would be misleading before weapon type, progression stage, and effect data are known."
  }
];

export const raceTierChecklist = [
  {
    label: "Race list",
    status: "Pending",
    note: "Needs a complete race list from in-game screens or a reliable community-maintained source."
  },
  {
    label: "Race effects",
    status: "Pending",
    note: "Each ranking needs the exact effect text or a tested gameplay summary."
  },
  {
    label: "Reroll source",
    status: "Pending",
    note: "Codes, reroll items, and reroll UI claims remain unlisted until verified."
  },
  {
    label: "Tier context",
    status: "Required",
    note: "Ranks must explain whether they apply to damage, survival, forge efficiency, or dungeon clearing."
  }
];

export const raceEvidenceRows = [
  {
    label: "Best race in Iron Soul Dungeon",
    status: "Demand confirmed",
    note: "Search Console shows best-race and race-tier-list queries, but ranking is paused until race names and effects are verified."
  },
  {
    label: "Race reroll method",
    status: "Needs verification",
    note: "Reroll items, code rewards, or UI claims need an in-game screenshot, test result, or traceable source before they are listed."
  },
  {
    label: "S-tier race claims",
    status: "Blocked",
    note: "A race cannot be placed in S tier until its effect, role fit, and comparison context are known."
  },
  {
    label: "First ranking format",
    status: "Ready",
    note: "The first real table should compare race, effect, best role, source, and last checked date."
  }
];

export const rareMaterialWatchlistRows = [
  {
    label: "Dragon Tear",
    status: "Search signal only",
    note: "Search Console shows player interest, but BloxDungeon has not verified the item source, drop route, or exact use yet."
  },
  {
    label: "Dragon Horn",
    status: "Search signal only",
    note: "Related dragon-material queries are being monitored. No drop table is published until the material can be tied to evidence."
  },
  {
    label: "Rare dungeon materials",
    status: "Official concept",
    note: "The official description confirms rare materials from creature defeats, but does not list exact item names or drop rates."
  },
  {
    label: "Dungeon drop table",
    status: "Held for evidence",
    note: "Future rows need the dungeon, enemy or boss, reward, source note, sample context, and last checked date."
  }
];

export const casualGames = [
  {
    name: "Adopt Me!",
    fit: "Collection, decorating, trading, and relaxed roleplay loops make it a natural break from dungeon grinding."
  },
  {
    name: "Bee Swarm Simulator",
    fit: "Still has progression, but the loop is slower and more routine than active combat farming."
  },
  {
    name: "Brookhaven RP",
    fit: "A social sandbox pick when you want to stop optimizing builds and just move around a roleplay city."
  },
  {
    name: "Dress To Impress",
    fit: "Short rounds and fashion prompts make it easier to play in small sessions between longer RPG grinds."
  },
  {
    name: "Work at a Pizza Place",
    fit: "A classic casual job-role game that works well when you want simple tasks instead of boss routes."
  }
];
