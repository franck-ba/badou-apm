import type { MetadataRoute } from "next";
import {
  getCaseStudyPath,
  getPublicCaseStudies,
} from "@/data/caseStudies";

const siteUrl = "https://badou-apm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getPublicCaseStudies().map((caseStudy) => ({
      url: `${siteUrl}${getCaseStudyPath(caseStudy)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
