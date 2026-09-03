import Link from "next/link";

export default function CaseStudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-page text-heading">
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:not-sr-only focus:rounded-md focus:bg-primary-hover focus:px-4 focus:py-3 focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2 focus:ring-offset-page"
      >
        Skip to main content
      </a>

      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="rounded-sm text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            Badou Franck
          </Link>
          <nav className="flex items-center gap-5 text-sm text-body" aria-label="Case study navigation">
            <Link
              href="/case-studies"
              className="rounded-sm border-b border-ai-border pb-1 font-medium text-primary transition hover:border-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              Case Studies
            </Link>
            <Link
              href="/#contact"
              className="hidden rounded-sm transition hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page sm:inline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-border bg-surface px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Badou Franck</p>
          <Link className="transition hover:text-heading" href="/">
            badou-apm.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
