import type { Metadata } from "next";
import Link from "next/link";
import {
  getCaseStudyPath,
  getPublicCaseStudies,
} from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Badou Franck",
  description:
    "Detailed examples of enterprise technology delivery across business analysis, project, program, and portfolio leadership.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Badou Franck",
    description:
      "Detailed examples of enterprise technology delivery across business analysis, project, program, and portfolio leadership.",
    url: "/case-studies",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Badou Franck",
    description:
      "Detailed examples of enterprise technology delivery across business analysis, project, program, and portfolio leadership.",
    images: ["/opengraph-image"],
  },
};

export default function CaseStudiesPage() {
  const publicCaseStudies = getPublicCaseStudies();

  return (
    <main id="main-content" className="flex-1 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Detailed delivery examples
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          Case Studies
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          Real delivery work, examined at the level of decisions, artifacts,
          execution, and accountability.
        </p>

        {publicCaseStudies.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {publicCaseStudies.map((caseStudy) => (
              <article
                key={caseStudy.slug}
                className="flex flex-col rounded-2xl border border-ai-border bg-surface p-7 shadow-sm shadow-heading/5 sm:p-9"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-heading">
                  {caseStudy.title}
                </h2>
                <p className="mt-5 flex-1 text-base leading-7 text-body">
                  {caseStudy.summary}
                </p>
                <Link
                  href={getCaseStudyPath(caseStudy)}
                  className="mt-8 inline-flex min-h-11 self-start items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
                >
                  Read Case Study
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-12 rounded-2xl border border-border bg-surface p-7 text-lg leading-8 text-body sm:p-9">
            Case studies are being added. Reach out if you&apos;d like to see
            specific examples.
          </p>
        )}
      </div>
    </main>
  );
}
