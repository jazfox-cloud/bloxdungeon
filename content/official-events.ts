export const officialEventSnapshot = {
  datasetVersion: "2026-09-03.1",
  verifiedAtUtc: "2026-09-03T03:01:42Z",
  officialGameUpdatedAtUtc: "2026-09-01T12:57:48.784Z",
  sourceUrl:
    "https://apis.roblox.com/virtual-events/v1/universes/9910245722/virtual-events?fromUtc=1970-01-01T00%3A00%3A00.000Z",
  sourceType: "Roblox official public virtual-events API; verified Iron Soul group host",
  historicalCoverage: {
    status: "HISTORICAL_COMPLETENESS_UNKNOWN",
    queriedFromUtc: "1970-01-01T00:00:00.000Z",
    resultCount: 4,
    nextPageCursor: "",
    previousPageCursor: "",
    note:
      "The public endpoint returned four records and no pagination cursors even from the Unix epoch. This proves the accessible set, not that Roblox exposes a complete archive."
  },
  events: [
    {
      id: "5878802766926840463",
      name: "New Weapon: Dual Pistols",
      announcedAtUtc: "2026-08-19T06:29:32.963Z",
      sourceUpdatedAtUtc: "2026-08-21T12:39:07.189Z",
      startUtc: "2026-08-21T14:00:10.383Z",
      endUtc: "2026-09-04T12:00:10.383Z",
      affectedSystems: "New weapon type and new boss",
      affectedPages: ["/weapons/", "/dungeons/", "/updates/"],
      uncertainty:
        "The event does not publish Dual Pistols stats or recipes, the boss identity, or a balance changelog."
    },
    {
      id: "4187104964516119310",
      name: "Black Thursday",
      announcedAtUtc: "2026-09-01T03:16:59.559Z",
      sourceUpdatedAtUtc: "2026-09-01T03:16:59.660Z",
      startUtc: "2026-09-03T03:00:16.475Z",
      endUtc: "2026-09-04T03:00:16.475Z",
      affectedSystems: "Deal event",
      affectedPages: ["/updates/"],
      uncertainty: "The event does not publish the exact discount, eligible items, or purchase conditions."
    },
    {
      id: "2516485587935036060",
      name: "New Map: Sakura Village",
      announcedAtUtc: "2026-08-31T09:43:47.251Z",
      sourceUpdatedAtUtc: "2026-08-31T10:07:14.072Z",
      startUtc: "2026-09-04T13:00:20.230Z",
      endUtc: "2026-09-11T11:00:20.230Z",
      affectedSystems: "Map 5 dungeon, boss, enemies, and forgeable weapons",
      affectedPages: ["/dungeons/", "/forge/", "/weapons/", "/updates/"],
      uncertainty: "The event does not publish boss or enemy names, recipes, stats, or drop rates."
    },
    {
      id: "6955332714245522093",
      name: "Map 5: Hell Mode",
      announcedAtUtc: "2026-08-31T10:06:17.341Z",
      sourceUpdatedAtUtc: "2026-08-31T10:07:35.828Z",
      startUtc: "2026-09-18T13:00:23.208Z",
      endUtc: "2026-09-25T11:00:23.208Z",
      affectedSystems: "Sakura Village Hell Mode, new Hell boss, drops, and weapons",
      affectedPages: ["/dungeons/", "/materials/", "/weapons/", "/updates/"],
      uncertainty: "The event does not publish the boss identity, drop table, weapon list, or stats."
    }
  ]
} as const;
