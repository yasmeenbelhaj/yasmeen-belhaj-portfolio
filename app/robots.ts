import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/business-card",
    },
    sitemap: "https://yasmeenbelhaj.com/sitemap.xml",
  };
}
