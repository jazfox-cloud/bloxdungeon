import assert from "node:assert/strict";
import test from "node:test";
import { getEventLifecycle, getNextLifecycleBoundary } from "../lib/event-lifecycle.ts";

const window = {
  startUtc: "2026-09-03T03:00:16.475Z",
  endUtc: "2026-09-04T03:00:16.475Z"
};

test("event lifecycle follows the official UTC window boundaries", () => {
  assert.equal(getEventLifecycle(window, "2026-09-03T03:00:16.474Z"), "ANNOUNCED");
  assert.equal(getEventLifecycle(window, "2026-09-03T03:00:16.475Z"), "LIVE");
  assert.equal(getEventLifecycle(window, "2026-09-04T03:00:16.474Z"), "LIVE");
  assert.equal(getEventLifecycle(window, "2026-09-04T03:00:16.475Z"), "ENDED");
});

test("event lifecycle is UNKNOWN when a timestamp or window is invalid", () => {
  assert.equal(getEventLifecycle(window, "not-a-date"), "UNKNOWN");
  assert.equal(
    getEventLifecycle({ startUtc: window.endUtc, endUtc: window.startUtc }, "2026-09-03T12:00:00Z"),
    "UNKNOWN"
  );
});

test("next lifecycle boundary returns the earliest future start or end", () => {
  const events = [
    window,
    {
      startUtc: "2026-09-04T13:00:20.230Z",
      endUtc: "2026-09-11T11:00:20.230Z"
    }
  ];

  assert.equal(
    getNextLifecycleBoundary(events, "2026-09-02T05:42:34Z"),
    "2026-09-03T03:00:16.475Z"
  );
  assert.equal(getNextLifecycleBoundary(events, "2026-09-12T00:00:00Z"), null);
});
