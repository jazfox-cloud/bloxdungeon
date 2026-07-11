import type { MetadataRoute } from "next";
import { routes, siteConfig } from "@/content/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-07-10");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
