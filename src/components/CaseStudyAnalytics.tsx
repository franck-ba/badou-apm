"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type CaseStudyAnalyticsProps = {
  slug: string;
  visibility: "public" | "unlisted";
};

const eventParameters = ({
  slug,
  visibility,
}: CaseStudyAnalyticsProps) => ({
  case_study_slug: slug,
  case_study_visibility: visibility,
});

export function CaseStudyTracker({
  slug,
  visibility,
}: CaseStudyAnalyticsProps) {
  useEffect(() => {
    const parameters = eventParameters({ slug, visibility });

    trackEvent("case_study_view", parameters);

    const engagementTimer = window.setTimeout(() => {
      trackEvent("case_study_engaged", parameters);
    }, 30_000);

    return () => window.clearTimeout(engagementTimer);
  }, [slug, visibility]);

  return null;
}

type CaseStudyPdfLinkProps = CaseStudyAnalyticsProps & {
  href: string;
  className: string;
};

export function CaseStudyPdfLink({
  href,
  className,
  ...analyticsProps
}: CaseStudyPdfLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackEvent(
          "case_study_pdf_click",
          eventParameters(analyticsProps),
        )
      }
    >
      View PDF
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

type CaseStudyHomeLinkProps = CaseStudyAnalyticsProps & {
  className: string;
};

export function CaseStudyHomeLink({
  className,
  ...analyticsProps
}: CaseStudyHomeLinkProps) {
  return (
    <Link
      href="/"
      className={className}
      onClick={() =>
        trackEvent(
          "case_study_home_click",
          eventParameters(analyticsProps),
        )
      }
    >
      See how I&apos;ve delivered at this level before.
    </Link>
  );
}
