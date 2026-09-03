"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  googleAnalyticsId,
  trackPageView,
} from "@/lib/analytics";

const campaignParameterNames = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPagePath = useRef<string | null>(null);

  useEffect(() => {
    const campaignParameters = new URLSearchParams();

    campaignParameterNames.forEach((name) => {
      const value = searchParams.get(name);

      if (value) {
        campaignParameters.set(name, value);
      }
    });

    const query = campaignParameters.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    if (lastPagePath.current === pagePath) {
      return;
    }

    lastPagePath.current = pagePath;
    trackPageView(pagePath);
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  if (!googleAnalyticsId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <PageViewTracker />
    </>
  );
}
