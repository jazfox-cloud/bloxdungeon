import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

function walk(path) {
  const absolute = new URL(path, root);
  return readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = join(absolute.pathname, entry.name);
    if (entry.isDirectory()) return walk(`${path}${entry.name}/`);
    return statSync(child).isFile() ? [relative(root.pathname, child)] : [];
  });
}

test("high-traffic URLs remain indexable routes", () => {
  const routes = read("content/site.ts");
  for (const route of ["/", "/forge/", "/race-tier-list/", "/attributes/", "/dungeons/", "/updates/", "/grinding/"]) {
    assert.match(routes, new RegExp(`path: [\"']${route.replaceAll("/", "\\/")}[\"']`));
  }
});

test("unfinished weapon and relic pages are noindex and absent from sitemap routes", () => {
  const routesBlock = read("content/site.ts").split("export const pageCards")[0];
  assert.doesNotMatch(routesBlock, /path: ["']\/(weapons|relics)\//);
  for (const page of ["app/weapons/page.tsx", "app/relics/page.tsx"]) {
    const source = read(page);
    assert.match(source, /robots: \{ index: false, follow: true \}/);
    assert.match(source, /excluded from search indexing and the sitemap/);
  }
});

test("legal and privacy surfaces are linked and accurately staged", () => {
  const layout = read("app/layout.tsx");
  for (const href of ["/about/", "/sources/", "/privacy-policy/", "/privacy-policy/#privacy-choices", "/terms/", "/disclaimer/", "/contact/"]) {
    assert.ok(layout.includes(`href=\"${href}\"`), `missing footer link ${href}`);
  }

  const privacy = read("app/privacy-policy/page.tsx");
  assert.match(privacy, /loads Google AdSense code and may display advertising/);
  assert.match(privacy, /uses Google Analytics 4/);
  assert.match(privacy, /only after a visitor accepts analytics cookies/);
  assert.match(privacy, /Google-certified CMP/);
  assert.match(privacy, /AdSense certified CMP still needs to be configured/);
  assert.match(privacy, /consent, do not\s+consent, and manage-options choices/);
  assert.match(read("components/PrivacyChoicesLink.tsx"), /showRevocationMessage/);
});

test("GA4 uses the approved measurement ID behind consent and production guards", () => {
  const analytics = read("components/AnalyticsConsent.tsx");
  const allSource = ["app/", "components/", "content/", "lib/", "public/"]
    .flatMap(walk)
    .filter((file) => /\.(?:tsx?|mjs|css|html|svg|txt)$/.test(file))
    .map((file) => read(file))
    .join("\n");

  assert.match(analytics, /const measurementId = "G-VXZ1G44LSD"/);
  assert.match(analytics, /productionHosts = new Set\(\["bloxdungeon\.com"\]\)/);
  assert.match(analytics, /googletagmanager\.com\/gtag\/js\?id=/);
  assert.match(analytics, /analytics_storage:\s*storedChoice === 'analytics_granted' \? 'granted' : 'denied'/);
  assert.match(analytics, /ad_storage:\s*'denied'|ad_storage:\s*"denied"/);
  assert.match(analytics, /ad_user_data:\s*'denied'|ad_user_data:\s*"denied"/);
  assert.match(analytics, /ad_personalization:\s*'denied'|ad_personalization:\s*"denied"/);
  assert.match(analytics, /allow_google_signals:\s*false/);
  assert.match(analytics, /allow_ad_personalization_signals:\s*false/);
  assert.match(analytics, /select_content/);
  assert.deepEqual([...allSource.matchAll(/G-[A-Z0-9]+/g)].map((match) => match[0]), ["G-VXZ1G44LSD"]);
});

test("planner result clicks use the shared consent-gated GA4 path with low-cardinality parameters", () => {
  const analytics = read("components/AnalyticsConsent.tsx");
  const planner = read("components/ProgressionPlanner.tsx");

  assert.match(analytics, /planner_result_click/);
  assert.match(analytics, /const bottleneck = target\.dataset\.analyticsBottleneck/);
  assert.match(analytics, /const style = target\.dataset\.analyticsStyle/);
  assert.match(analytics, /const resultTarget = target\.dataset\.analyticsTarget/);
  assert.match(analytics, /gtag\("event", "planner_result_click", \{\s*bottleneck,\s*style,\s*target: resultTarget,/);
  assert.match(analytics, /transport_type:\s*"beacon"/);

  assert.match(planner, /data-analytics-planner-result/);
  assert.match(planner, /data-analytics-bottleneck=\{bottleneck\}/);
  assert.match(planner, /data-analytics-style=\{style\}/);
  assert.match(planner, /data-analytics-target=/);
  assert.doesNotMatch(planner, /G-[A-Z0-9]+|googletagmanager|gtag\(/);
});

test("AdSense verification, loader, and ads.txt use the approved publisher ID", () => {
  const files = ["app/", "components/", "content/", "lib/", "public/"]
    .flatMap(walk)
    .filter((file) => /\.(?:tsx?|mjs|css|html|svg|txt)$/.test(file));
  const source = files.map((file) => read(file)).join("\n");
  const layout = read("app/layout.tsx");
  assert.match(layout, /google-adsense-account["']:\s*["']ca-pub-2134598094429002/);
  assert.match(layout, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-2134598094429002/);
  assert.match(layout, /crossOrigin="anonymous"/);
  assert.equal(read("public/ads.txt").trim(), "google.com, pub-2134598094429002, DIRECT, f08c47fec0942fa0");
  assert.doesNotMatch(source, /ca-pub-(?!2134598094429002)\d+/i);
});

test("interactive and recovery controls are marked as ad-exclusion zones", () => {
  for (const file of ["app/layout.tsx", "components/PageShell.tsx", "components/ProgressionPlanner.tsx", "app/not-found.tsx"]) {
    assert.match(read(file), /data-ad-exclusion-zone=/, `${file} lacks an exclusion marker`);
  }
});

test("media inventory contains only the local favicon", () => {
  const media = walk("public/").filter((file) => /\.(?:png|jpe?g|webp|gif|svg|mp3|wav|mp4|webm)$/i.test(file));
  assert.deepEqual(media, ["public/favicon.svg", "public/og/bloxdungeon-og.png"]);
});
