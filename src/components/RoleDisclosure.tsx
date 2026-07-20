"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type RoleDisclosureProps = {
  children: ReactNode;
  detailId: string;
  roleName: string;
};

export default function RoleDisclosure({
  children,
  detailId,
  roleName,
}: RoleDisclosureProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonId = `${detailId}-toggle`;
  const action = isExpanded ? "Hide" : "View";

  return (
    <div className="mt-8">
      <button
        id={buttonId}
        type="button"
        className="inline-flex min-h-11 w-full items-center justify-between gap-4 rounded-xl border border-sky-300/25 bg-sky-400/[0.06] px-5 py-3 text-left font-medium text-white transition hover:border-sky-300/40 hover:bg-sky-400/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto sm:min-w-72"
        aria-expanded={isExpanded}
        aria-controls={detailId}
        aria-label={`${action} detailed comparison for ${roleName}`}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        <span>
          {isExpanded
            ? "Hide detailed comparison"
            : "View detailed comparison"}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 transition-transform motion-reduce:transition-none ${
            isExpanded ? "rotate-180" : ""
          }`}
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
      </button>

      <div
        id={detailId}
        className="mt-10"
        role="region"
        aria-labelledby={buttonId}
        hidden={!isExpanded}
      >
        {children}
      </div>
    </div>
  );
}
