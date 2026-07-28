import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const defaultOgImage = {
  url: `${siteConfig.domain}/og/bloxdungeon-og.png`,
  width: 1200,
  height: 630,
  alt: "BloxDungeon brand sharing image for codes, guides, and progression tools",
  type: "image/png"
} as const;

export function pageMetadata({ title, description, path, keywords }: PageMeta): Metadata {
  const canonical = `${siteConfig.domain}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "article",
      images: [defaultOgImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url]
    }
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.path}`
    }))
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
