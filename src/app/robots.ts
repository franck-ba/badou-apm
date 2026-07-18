import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://badou-apm.com/sitemap.xml",
    host: "https://badou-apm.com",
  };
}
