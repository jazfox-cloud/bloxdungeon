import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const routeFile = (pathname) => pathname === "/" ? "out/index.html" : `out${pathname}index.html`;

const sitemap = read("out/sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/bloxdungeon\.com[^<]+)<\/loc>/g)].map((match) => match[1]);

test("sitemap contains only canonical, indexable pages", () => {
  assert.ok(sitemapUrls.length >= 20);
  assert.ok(sitemapUrls.includes("https://bloxdungeon.com/disclaimer/"));
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

test("export contains no AdSense code, publisher ID, or hidden ad slot", () => {
  const html = sitemapUrls.map((url) => read(routeFile(new URL(url).pathname))).join("\n");
  assert.doesNotMatch(html, /ca-pub-\d+/i);
  assert.doesNotMatch(html, /pagead2\.googlesyndication\.com/i);
  assert.doesNotMatch(html, /adsbygoogle/i);
  assert.doesNotMatch(html, /data-ad-slot=/i);
});
