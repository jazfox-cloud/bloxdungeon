export const verificationDate = "2026-06-19";

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

export const codeCheckLog = [
  {
    date: verificationDate,
    source: "Roblox official game page",
    result: "No public code list or active code was visible in the official game description."
  },
  {
    date: verificationDate,
    source: "Roblox public game API",
    result: "Game identity, creator, update time, visits, favorites, and current players were verified."
  },
  {
    date: verificationDate,
    source: "Public search demand",
    result: "Codes and reroll queries exist, but no unverified code claim was promoted to active status."
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
