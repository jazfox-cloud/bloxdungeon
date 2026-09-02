export type EventLifecycle = "ANNOUNCED" | "LIVE" | "ENDED" | "UNKNOWN";

type EventWindow = {
  startUtc: string;
  endUtc: string;
};

function timestamp(value: string) {
  return Date.parse(value);
}

export function getEventLifecycle(event: EventWindow, asOfUtc: string): EventLifecycle {
  const start = timestamp(event.startUtc);
  const end = timestamp(event.endUtc);
  const asOf = timestamp(asOfUtc);

  if (![start, end, asOf].every(Number.isFinite) || start >= end) return "UNKNOWN";
  if (asOf < start) return "ANNOUNCED";
  if (asOf >= end) return "ENDED";
  return "LIVE";
}

export function getNextLifecycleBoundary(events: readonly EventWindow[], asOfUtc: string) {
  const asOf = timestamp(asOfUtc);
  if (!Number.isFinite(asOf)) return null;

  const next = events
    .flatMap((event) => [timestamp(event.startUtc), timestamp(event.endUtc)])
    .filter((boundary) => Number.isFinite(boundary) && boundary > asOf)
    .sort((a, b) => a - b)[0];

  return next === undefined ? null : new Date(next).toISOString();
}
