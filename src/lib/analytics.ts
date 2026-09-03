export type AnalyticsEventName =
  | "case_study_view"
  | "case_study_pdf_click"
  | "case_study_home_click"
  | "case_study_engaged"
  | "contact_form_start"
  | "contact_form_submit";

export type AnalyticsEventParameters = Record<
  string,
  string | number | boolean
>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    googleAnalyticsInitialized?: boolean;
  }
}

export const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function initializeGoogleAnalytics() {
  if (!googleAnalyticsId || typeof window === "undefined") {
    return;
  }

  window.dataLayer ??= [];
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  if (window.googleAnalyticsInitialized) {
    return;
  }

  window.googleAnalyticsInitialized = true;
  window.gtag("js", new Date());
  window.gtag("config", googleAnalyticsId, { send_page_view: false });
}

export function trackEvent(
  eventName: AnalyticsEventName,
  parameters?: AnalyticsEventParameters,
) {
  initializeGoogleAnalytics();

  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, parameters);
}

export function trackPageView(pagePath: string) {
  initializeGoogleAnalytics();

  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: `${window.location.origin}${pagePath}`,
    page_title: document.title,
  });
}
