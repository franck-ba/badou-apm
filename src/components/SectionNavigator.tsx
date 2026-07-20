"use client";

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

const roleSections = [
  { id: "business-analyst", label: "Business Analyst", shortLabel: "BA" },
  { id: "project-manager", label: "Project Manager", shortLabel: "PM" },
  { id: "program-manager", label: "Program Manager", shortLabel: "PgM" },
  { id: "portfolio-manager", label: "Portfolio Manager", shortLabel: "PfM" },
] as const;

const closingSections = [
  { id: "founder", label: "Founder", shortLabel: "Founder" },
  { id: "constant", label: "What Stays Human", shortLabel: "Constant" },
  { id: "contact", label: "Contact", shortLabel: "Contact" },
] as const;

const overviewSection = {
  id: "top",
  label: "Overview",
  shortLabel: "Overview",
} as const;

const sections = [
  overviewSection,
  ...roleSections,
  ...closingSections,
] as const;

type SectionId = (typeof sections)[number]["id"];

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState<SectionId>("top");
  const [showDesktopRail, setShowDesktopRail] = useState(false);

  useEffect(() => {
    const observedSections = sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const overview = document.getElementById("top");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id as SectionId);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    const overviewObserver = new IntersectionObserver(
      ([entry]) => {
        setShowDesktopRail(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observedSections.forEach((section) => sectionObserver.observe(section));

    if (overview) {
      overviewObserver.observe(overview);
    }

    return () => {
      sectionObserver.disconnect();
      overviewObserver.disconnect();
    };
  }, []);

  function scrollToSection(id: SectionId) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
  }

  function handleLinkClick(
    event: MouseEvent<HTMLAnchorElement>,
    id: SectionId,
  ) {
    event.preventDefault();
    scrollToSection(id);
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    scrollToSection(event.target.value as SectionId);
  }

  return (
    <>
      <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 px-4 py-3 backdrop-blur lg:hidden">
        <label
          className="mx-auto flex max-w-7xl items-center gap-3 text-sm text-slate-300"
          htmlFor="section-navigator"
        >
          <span className="shrink-0 font-medium text-slate-400">Viewing:</span>
          <span className="relative min-w-0 flex-1">
            <select
              id="section-navigator"
              className="min-h-11 w-full appearance-none rounded-lg border border-white/15 bg-slate-900 py-2 pl-3 pr-10 text-sm font-medium text-white outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-300/25"
              value={activeSection}
              onChange={handleSelectChange}
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m4 6 4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </label>
      </div>

      {showDesktopRail && (
        <nav
          className="group fixed left-0 top-1/2 z-40 hidden w-60 -translate-x-40 -translate-y-1/2 rounded-r-xl border border-l-0 border-white/10 bg-slate-950/90 p-2 shadow-2xl shadow-slate-950/40 backdrop-blur transition-transform duration-200 hover:translate-x-0 focus-within:translate-x-0 motion-reduce:transition-none lg:block"
          aria-label="Page sections"
        >
          <a
            href="#top"
            onClick={(event) => handleLinkClick(event, "top")}
            className={`grid grid-cols-[1fr_5rem] items-center rounded-md text-xs transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-300/50 ${
              activeSection === "top"
                ? "bg-sky-400/10 font-semibold text-white"
                : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
            }`}
            aria-current={activeSection === "top" ? "location" : undefined}
          >
            <span className="px-2 py-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
              {overviewSection.label}
            </span>
            <span
              className={`flex h-8 items-center justify-center border-l-2 px-2 text-center transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none ${
                activeSection === "top"
                  ? "border-sky-300 text-sky-300"
                  : "border-transparent text-slate-400"
              }`}
              aria-hidden="true"
            >
              {overviewSection.shortLabel}
            </span>
          </a>

          <div className="mt-1 border-t border-white/10 pt-1">
            {roleSections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(event) => handleLinkClick(event, section.id)}
                  className={`grid grid-cols-[1fr_5rem] items-center rounded-md text-xs leading-4 transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-300/50 ${
                    isActive
                      ? "bg-sky-400/10 font-semibold text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="px-2 py-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
                    {section.label}
                  </span>
                  <span
                    className={`flex h-8 items-center justify-center border-l-2 px-2 text-center transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none ${
                      isActive
                        ? "border-sky-300 text-sky-300"
                        : "border-transparent text-slate-400"
                    }`}
                    aria-hidden="true"
                  >
                    {section.shortLabel}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-1 border-t border-sky-300/20 pt-1">
            {closingSections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(event) => handleLinkClick(event, section.id)}
                  className={`grid grid-cols-[1fr_5rem] items-center rounded-md text-xs transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-300/50 ${
                    isActive
                      ? "bg-sky-400/10 font-semibold text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="px-2 py-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
                    {section.label}
                  </span>
                  <span
                    className={`flex h-8 items-center justify-center border-l-2 px-2 text-center transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none ${
                      isActive
                        ? "border-sky-300 text-sky-300"
                        : "border-transparent text-slate-400"
                    }`}
                    aria-hidden="true"
                  >
                    {section.shortLabel}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}
