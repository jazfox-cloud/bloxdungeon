import type { MetadataRoute } from "next";
import { routes, siteConfig } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route.path}`,
    lastModified: new Date("2026-06-19"),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
