"use client";

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

const roleSections = [
  { id: "business-analyst", label: "Business Analyst", number: "01" },
  { id: "project-manager", label: "Project Manager", number: "02" },
  { id: "program-manager", label: "Program Manager", number: "03" },
  { id: "portfolio-manager", label: "Portfolio Manager", number: "04" },
] as const;

const closingSections = [
  { id: "founder", label: "Founder" },
  { id: "constant", label: "The Constant" },
  { id: "contact", label: "Contact" },
] as const;

const sections = [
  { id: "top", label: "Overview" },
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
          <select
            id="section-navigator"
            className="min-w-0 flex-1 rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-sm font-medium text-white outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-300/25"
            value={activeSection}
            onChange={handleSelectChange}
          >
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {showDesktopRail && (
        <nav
          className="fixed left-3 top-1/2 z-40 hidden w-40 -translate-y-1/2 rounded-xl border border-white/10 bg-slate-950/90 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur lg:block xl:left-5"
          aria-label="Page sections"
        >
        <a
          href="#top"
          onClick={(event) => handleLinkClick(event, "top")}
          className={`flex items-center gap-2 rounded-md px-2 py-2 text-xs transition focus:outline-none focus:ring-2 focus:ring-sky-300/50 ${
            activeSection === "top"
              ? "font-semibold text-white"
              : "text-slate-500 hover:text-slate-200"
          }`}
          aria-current={activeSection === "top" ? "location" : undefined}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              activeSection === "top" ? "bg-sky-300" : "bg-slate-700"
            }`}
            aria-hidden="true"
          />
          Overview
        </a>

        <div className="mt-1 border-t border-white/10 pt-1">
          {roleSections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(event) => handleLinkClick(event, section.id)}
                className={`flex items-start gap-2 rounded-md border-l-2 px-2 py-2 text-xs leading-4 transition focus:outline-none focus:ring-2 focus:ring-sky-300/50 ${
                  isActive
                    ? "border-sky-300 bg-sky-400/10 font-semibold text-white"
                    : "border-transparent text-slate-500 hover:bg-white/5 hover:text-slate-200"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="text-sky-300" aria-hidden="true">
                  {section.number}
                </span>
                <span>{section.label}</span>
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
                className={`flex items-center gap-2 rounded-md border-l-2 px-2 py-2 text-xs transition focus:outline-none focus:ring-2 focus:ring-sky-300/50 ${
                  isActive
                    ? "border-sky-300 bg-sky-400/10 font-semibold text-white"
                    : "border-transparent text-slate-500 hover:bg-white/5 hover:text-slate-200"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-sky-300" : "bg-slate-700"
                  }`}
                  aria-hidden="true"
                />
                {section.label}
              </a>
            );
          })}
        </div>
        </nav>
      )}
    </>
  );
}
