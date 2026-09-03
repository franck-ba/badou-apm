import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  caseStudies,
  getCaseStudy,
  getCaseStudyPath,
} from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const url = getCaseStudyPath(caseStudy);

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.summary,
      url,
      type: "article",
      images: [
        {
          url: caseStudy.ogImage,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [caseStudy.ogImage],
    },
    ...(caseStudy.unlisted
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main id="main-content" className="flex-1 px-6 py-16 lg:px-8 lg:py-20">
      <article className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Case Study
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          {caseStudy.title}
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-body">
          {caseStudy.summary}
        </p>

        <a
          href={caseStudy.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
        >
          View PDF
          <span className="sr-only"> (opens in a new tab)</span>
        </a>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ai-border bg-surface shadow-sm shadow-heading/5">
          <div className="border-b border-border bg-ai-surface px-5 py-4 text-sm font-medium text-heading sm:px-6">
            {caseStudy.title}
          </div>
          <iframe
            className="hidden h-[78vh] min-h-[680px] w-full sm:block"
            src={caseStudy.pdf}
            title={`${caseStudy.title} PDF`}
          />
          <div className="p-6 sm:hidden">
            <p className="text-sm leading-6 text-muted">
              PDF previews can be limited on mobile devices. Use the View PDF
              button above to open the complete document.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block rounded-sm font-medium text-primary underline decoration-ai-border underline-offset-4 transition hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
        >
          See how I&apos;ve delivered at this level before.
        </Link>
      </article>
    </main>
  );
}
