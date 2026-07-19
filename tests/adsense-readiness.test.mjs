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
  assert.match(privacy, /does not currently display advertising or load Google AdSense code/);
  assert.match(privacy, /does not currently load Google Analytics/);
  assert.match(privacy, /Google-certified CMP/);
  assert.match(privacy, /consent, do not\s+consent, and manage-options choices/);
  assert.match(read("components/PrivacyChoicesLink.tsx"), /showRevocationMessage/);
});

test("no publisher ID or advertising script was introduced", () => {
  const files = ["app/", "components/", "content/", "lib/", "public/"]
    .flatMap(walk)
    .filter((file) => /\.(?:tsx?|mjs|css|html|svg|txt)$/.test(file));
  const source = files.map((file) => read(file)).join("\n");
  assert.doesNotMatch(source, /ca-pub-\d+/i);
  assert.doesNotMatch(source, /pagead2\.googlesyndication\.com/i);
  assert.doesNotMatch(source, /adsbygoogle/i);
});

test("interactive and recovery controls are marked as ad-exclusion zones", () => {
  for (const file of ["app/layout.tsx", "components/PageShell.tsx", "components/ProgressionPlanner.tsx", "app/not-found.tsx"]) {
    assert.match(read(file), /data-ad-exclusion-zone=/, `${file} lacks an exclusion marker`);
  }
});

test("media inventory contains only the local favicon", () => {
  const media = walk("public/").filter((file) => /\.(?:png|jpe?g|webp|gif|svg|mp3|wav|mp4|webm)$/i.test(file));
  assert.deepEqual(media, ["public/favicon.svg"]);
});
