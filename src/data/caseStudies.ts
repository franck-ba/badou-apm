export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  pdf: string;
  ogImage: string;
  unlisted: boolean;
  order: number;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "how-i-deliver",
    title: "How I Deliver: Pre-AI and AI-Multiplied",
    summary:
      "Four representative programs across two decades of enterprise delivery, shown as they were executed before AI and as I would execute them today with it. The work is real; the comparison is the point.",
    pdf: "/case-studies/public/how-i-deliver.pdf",
    ogImage: "/opengraph-image",
    unlisted: false,
    order: 1,
  },
  {
    slug: "credit-acceptance-caps-dealer-yield-program",
    title:
      "CAPS Dealer Yield Program — A hypothetical initiative for Credit Acceptance",
    summary:
      "Rather than submit a résumé alone, this package shows how I would operate as a Senior Product Manager at Credit Acceptance. It is built entirely from public information and frames one realistic product initiative end to end: strategy, stakeholder and dealer engagement plans, a Jira/GitHub delivery model, cross-department interdependency maps, and a 30-day onboarding plan.",
    pdf: "/case-studies/unlisted/credit-acceptance-caps-dealer-yield-program.pdf",
    ogImage:
      "/case-studies/credit-acceptance-caps-dealer-yield-program-og.png",
    unlisted: true,
    order: 100,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getPublicCaseStudies() {
  return caseStudies
    .filter((caseStudy) => !caseStudy.unlisted)
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudyPath(caseStudy: CaseStudy) {
  return `/case-studies/${caseStudy.slug}`;
}
