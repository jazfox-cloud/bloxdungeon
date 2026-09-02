import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const routeFile = (pathname) => pathname === "/" ? "out/index.html" : `out${pathname}index.html`;

const sitemap = read("out/sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/bloxdungeon\.com[^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedSitemapUrls = [
  "https://bloxdungeon.com/",
  "https://bloxdungeon.com/codes/",
  "https://bloxdungeon.com/guide/",
  "https://bloxdungeon.com/tools/progression-planner/",
  "https://bloxdungeon.com/forge/",
  "https://bloxdungeon.com/dungeons/",
  "https://bloxdungeon.com/skill-tree/",
  "https://bloxdungeon.com/materials/",
  "https://bloxdungeon.com/level-up-fast/",
  "https://bloxdungeon.com/sources/",
  "https://bloxdungeon.com/about/",
  "https://bloxdungeon.com/contact/",
  "https://bloxdungeon.com/privacy-policy/",
  "https://bloxdungeon.com/terms/",
  "https://bloxdungeon.com/disclaimer/"
];
const defaultOgImageUrl = "https://bloxdungeon.com/og/bloxdungeon-og.png";

function pngSize(path) {
  const png = readFileSync(new URL(path, root));
  assert.equal(png.toString("ascii", 1, 4), "PNG");
  return {
    width: png.readUInt32BE(16),
    height: png.readUInt32BE(20)
  };
}

test("sitemap contains only canonical, indexable pages", () => {
  assert.deepEqual(sitemapUrls, expectedSitemapUrls);
  assert.ok(!sitemapUrls.includes("https://bloxdungeon.com/weapons/"));
  assert.ok(!sitemapUrls.includes("https://bloxdungeon.com/relics/"));

  for (const url of sitemapUrls) {
    const pathname = new URL(url).pathname;
    const file = routeFile(pathname);
    assert.ok(existsSync(new URL(file, root)), `missing export for ${pathname}`);
    const html = read(file);
    assert.match(html, new RegExp(`<link rel="canonical" href="${url.replaceAll("/", "\\/")}"`));
    assert.doesNotMatch(html, /<meta name="robots" content="noindex/i);
  }
});

test("default Open Graph image is exported at the approved size", () => {
  assert.ok(existsSync(new URL("out/og/bloxdungeon-og.png", root)));
  assert.deepEqual(pngSize("out/og/bloxdungeon-og.png"), { width: 1200, height: 630 });
});

test("every sitemap page has one complete default Open Graph and Twitter image set", () => {
  for (const url of sitemapUrls) {
    const html = read(routeFile(new URL(url).pathname));
    assert.deepEqual([...html.matchAll(/<meta property="og:image" content="([^"]+)"/g)].map((match) => match[1]), [defaultOgImageUrl], `og:image mismatch on ${url}`);
    assert.match(html, /<meta property="og:image:width" content="1200"/);
    assert.match(html, /<meta property="og:image:height" content="630"/);
    assert.match(html, /<meta property="og:image:alt" content="BloxDungeon brand sharing image for codes, guides, and progression tools"/);
    assert.deepEqual([...html.matchAll(/<meta name="twitter:image" content="([^"]+)"/g)].map((match) => match[1]), [defaultOgImageUrl], `twitter:image mismatch on ${url}`);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
    assert.doesNotMatch(html, /<meta (?:property|name)="(?:og:image|twitter:image)" content="http:\/\//);
  }
});

test("candidate and error pages remain accessible but noindex", () => {
  for (const pathname of ["/weapons/", "/relics/"]) {
    const html = read(routeFile(pathname));
    assert.match(html, /<meta name="robots" content="noindex, follow"/i);
    assert.match(html, new RegExp(`<link rel="canonical" href="https:\\/\\/bloxdungeon\\.com${pathname.replaceAll("/", "\\/")}"`));
  }

  const notFound = read("out/404.html");
  assert.match(notFound, /<meta name="robots" content="noindex, follow"/i);
  assert.match(notFound, /That dungeon path does not exist/);
  assert.match(notFound, /No advertising should be displayed on this error page/);
});

test("JSON-LD blocks parse on every sitemap page", () => {
  for (const url of sitemapUrls) {
    const html = read(routeFile(new URL(url).pathname));
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => JSON.parse(match[1]), `invalid JSON-LD on ${url}`);
    }
  }
});

test("internal links from sitemap pages resolve to an export or a known noindex page", () => {
  const allowedNoindex = new Set(["/weapons/", "/relics/"]);
  for (const url of sitemapUrls) {
    const html = read(routeFile(new URL(url).pathname));
    const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((match) => match[1].split("#")[0]);
    for (const href of hrefs) {
      if (!href || href.startsWith("/_next/")) continue;
      if (allowedNoindex.has(href)) continue;
      const exportPath = /\.[a-z0-9]+$/i.test(href) ? `out${href}` : routeFile(href);
      assert.ok(existsSync(new URL(exportPath, root)), `${url} links to missing ${href}`);
    }
  }
});

test("export contains the approved AdSense verification and no hidden ad slot", () => {
  const html = sitemapUrls.map((url) => read(routeFile(new URL(url).pathname))).join("\n");
  assert.match(html, /<meta name="google-adsense-account" content="ca-pub-2134598094429002"/i);
  assert.match(html, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=ca-pub-2134598094429002/i);
  assert.doesNotMatch(html, /ca-pub-(?!2134598094429002)\d+/i);
  assert.doesNotMatch(html, /data-ad-slot=/i);
  assert.equal(read("out/ads.txt").trim(), "google.com, pub-2134598094429002, DIRECT, f08c47fec0942fa0");
});
