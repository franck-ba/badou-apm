import ContactForm from "@/components/ContactForm";
import SectionNavigator from "@/components/SectionNavigator";

const businessAnalystActivities = [
  {
    title: "Requirements Elicitation & Synthesis",
    preAi:
      "Interview stakeholders across five business lines. Hand-capture notes, manually cluster themes, reconcile where executives contradict each other, draft the BRD, circulate it, absorb feedback, and manage versions. Weeks of cycle time before a single requirement is validated.",
    aiMultiplied:
      "Auto-transcribe every session. AI clusters themes across all interviews, surfaces where stakeholders want incompatible things, drafts the structured BRD into a standard template, and flags ambiguities and gaps before anything circulates. Days, not weeks—same rigor, compressed.",
  },
  {
    title: "Documentation & Traceability",
    preAi:
      "Build the requirements traceability matrix by hand. Write functional specifications, map every requirement to acceptance criteria and test cases manually, then keep it all synchronized whenever scope changes.",
    aiMultiplied:
      "Generate the traceability matrix, first-pass acceptance criteria, and test cases directly from the requirements. When a requirement changes, AI propagates the downstream impact and flags what is now out of sync—no silent gaps.",
  },
  {
    title: "Process Analysis & Solution Definition",
    preAi:
      "Map the current-state process through workshops and diagrams, identify inefficiencies by inspection, hand-model the future state, and build the case for the solution.",
    aiMultiplied:
      "AI drafts current- and future-state process maps from interview transcripts and existing documentation, quantifies the improvement opportunity, and generates the options analysis for stakeholder review.",
  },
];

const projectManagerActivities = [
  {
    title: "Planning & Scheduling",
    preAi:
      "Build the WBS, sequence tasks, estimate durations, construct and level the schedule by hand. Re-baseline manually every time reality moves.",
    aiMultiplied:
      "AI drafts the WBS and first-pass schedule from the scope, proposes dependencies and estimates from comparable past projects, and re-forecasts the timeline automatically the moment a task slips.",
  },
  {
    title: "Status Reporting & Stakeholder Communication",
    preAi:
      "Chase the team for updates. Hand-assemble the weekly status deck. Re-translate the same update into different formats for executives versus the working team.",
    aiMultiplied:
      "AI compiles status directly from the task tracker, drafts both the executive summary and the detailed team version from one source of truth, and tunes tone per audience. The PM reviews and sends — minutes, not hours.",
  },
  {
    title: "Risk & Issue Management",
    preAi:
      "Maintain the RAID log by hand. Rely on experience to sense emerging risk. Escalate reactively, usually after it has already surfaced in a meeting.",
    aiMultiplied:
      "AI scans status trends, velocity, and open-issue patterns to flag risks before they escalate, drafts mitigation options, and keeps the RAID log current directly from project activity.",
  },
  {
    title: "Distributed Team & Quality Leadership",
    preAi:
      "Coordinate onshore and offshore testers and test leads by hand across time zones — allocate work, chase test coverage, reconcile defect reports, and hold the quality bar through a high-stakes migration by sheer vigilance.",
    aiMultiplied:
      "AI drafts test coverage from requirements, clusters and de-duplicates defect reports across distributed teams, summarizes overnight offshore progress for the morning handoff, and flags coverage gaps before a release — so the lead manages exceptions, not spreadsheets.",
  },
];

const programManagerActivities = [
  {
    title: "Cross-Project Dependency Management",
    preAi:
      "Manually map dependencies across dozens of projects, chase project managers for status, reconcile conflicting timelines, and hold the collision map in your head or in a sprawling spreadsheet.",
    aiMultiplied:
      "AI ingests every project plan, maps the full dependency network, and flags where a slip in one project cascades into three others — surfacing the collision weeks before it lands.",
  },
  {
    title: "Executive Dashboards & Program Health",
    preAi:
      "Pull data from every project, build the Power BI or Smartsheet dashboard by hand, refresh it each cycle, and write the narrative interpretation for SVP leadership.",
    aiMultiplied:
      "AI aggregates program data continuously, drafts the health narrative — what is green, what is red, and why — and generates the executive read-out on demand, not once per reporting cycle.",
  },
  {
    title: "Governance & Prioritization Facilitation",
    preAi:
      "Prepare governance materials, frame trade-offs for SVP-level sessions, capture decisions live, then manually cascade them back into every affected project.",
    aiMultiplied:
      "AI prepares the trade-off analysis and scenario comparisons before the session, captures decisions in real time, and drafts the cascade of updates to each impacted project.",
  },
];

const portfolioManagerActivities = [
  {
    title: "Investment Prioritization & Portfolio Selection",
    preAi:
      "Gather business cases, score initiatives against criteria by hand, build the prioritization model, and construct the C-suite recommendation over weeks.",
    aiMultiplied:
      "AI structures every business case into a consistent scoring model, runs scenario comparisons such as funding one initiative versus another under specific constraints, and drafts the ranked recommendation with the reasoning exposed so it can be challenged, not simply accepted.",
  },
  {
    title: "Capacity Planning & Resource Allocation",
    preAi:
      "Manually reconcile demand against capacity across 20–30 initiatives, model what fits, find the bottleneck, and rebuild the whole picture whenever priorities shift.",
    aiMultiplied:
      "AI models demand versus capacity continuously, simulates the impact of adding or cutting an initiative, and flags the constraint before it becomes a delay.",
  },
  {
    title: "Executive Reporting & Portfolio Governance",
    preAi:
      "Consolidate portfolio performance, build the C-suite deck, translate delivery data into investment language, and prepare for the hard questions by hand.",
    aiMultiplied:
      "AI consolidates performance into the investment narrative, anticipates the C-suite’s likely questions and drafts the answers, and keeps the governance view current between meetings, not only for them.",
  },
];

function BusinessAnalystVisual() {
  const stages = [
    {
      label: "Human inputs",
      items: [
        "Stakeholder interviews",
        "Existing documentation",
        "Conflicting priorities",
      ],
    },
    {
      label: "AI-assisted synthesis",
      items: ["Cluster", "Compare", "Clarify"],
    },
    {
      label: "Structured outputs",
      items: [
        "Structured requirements",
        "Traceability matrix",
        "Process and options analysis",
      ],
    },
  ];

  const comparison = [
    {
      label: "Before",
      detail: "Weeks of manual reconciliation",
    },
    {
      label: "Multiplied",
      detail: "Days with structured AI support",
    },
    {
      label: "Still human",
      detail: "The call about what actually matters",
    },
  ];

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-sky-300/20 bg-slate-950/80">
      <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-300">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sky-300" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-sky-300 lg:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-sky-300/20 sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-white/10 sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-slate-200">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectManagerVisual() {
  const stages = [
    {
      label: "Signals",
      items: ["Task slippage", "Velocity decline", "Open issue patterns"],
    },
    {
      label: "AI-supported foresight",
      items: ["Detect", "Forecast", "Recommend"],
    },
    {
      label: "PM decisions",
      items: ["Re-sequence work", "Escalate risk", "Protect scope"],
    },
  ];

  const comparison = [
    {
      label: "Reactive",
      detail: "Risk discovered in status meetings",
    },
    {
      label: "Multiplied",
      detail: "Risk surfaced before impact",
    },
    {
      label: "Still human",
      detail: "The commitment and escalation call",
    },
  ];

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-sky-300/30 bg-slate-900/90">
      <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="rounded-xl border border-sky-300/15 bg-slate-950/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-300">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sky-300" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-sky-300 lg:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-sky-300/25 sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-white/10 sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-slate-200">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgramManagerVisual() {
  const stages = [
    {
      label: "Project network signals",
      items: [
        "Schedule changes",
        "Cross-project dependencies",
        "Competing resource demands",
      ],
    },
    {
      label: "AI-supported coordination",
      items: ["Map", "Detect collisions", "Cascade impact"],
    },
    {
      label: "Program decisions",
      items: [
        "Reconcile timelines",
        "Sequence dependencies",
        "Align owners",
      ],
    },
  ];

  const comparison = [
    {
      label: "Fragmented",
      detail: "Status held across separate project plans",
    },
    {
      label: "Multiplied",
      detail: "Dependency collisions surfaced early",
    },
    {
      label: "Still human",
      detail: "The negotiation and coalition-building",
    },
  ];

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-sky-300/20 bg-slate-950/80">
      <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-300">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sky-300" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-sky-300 lg:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-sky-300/20 sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-white/10 sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-slate-200">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioManagerVisual() {
  const stages = [
    {
      label: "Portfolio inputs",
      items: [
        "Business cases",
        "Capacity constraints",
        "Strategic priorities",
      ],
    },
    {
      label: "AI-supported decision analysis",
      items: ["Normalize", "Compare scenarios", "Expose trade-offs"],
    },
    {
      label: "Portfolio decisions",
      items: ["Fund", "Defer", "Stop"],
    },
  ];

  const comparison = [
    {
      label: "Manual",
      detail: "Weeks to rebuild the prioritization view",
    },
    {
      label: "Multiplied",
      detail: "Scenario impact surfaced on demand",
    },
    {
      label: "Still human",
      detail: "The capital allocation call",
    },
  ];

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-sky-300/30 bg-slate-900/90">
      <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="rounded-xl border border-sky-300/15 bg-slate-950/80 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-300">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sky-300" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-sky-300 lg:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-sky-300/25 sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-white/10 sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-slate-200">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FounderVisual() {
  const stages = [
    {
      label: "CareVizor",
      items: [
        "Product strategy",
        "Requirements",
        "Vendor coordination",
        "Roadmap",
        "Budget",
        "Launch",
      ],
    },
    {
      label: "AI multiplier",
      items: ["Synthesis", "Drafting", "Coordination", "Analysis"],
    },
    {
      label: "TopCloserR",
      items: [
        "Multi-sided marketplace",
        "Broader operating scope",
        "AI-directed build process",
        "Ongoing product evolution",
      ],
    },
  ];

  const comparison = [
    {
      label: "Then",
      detail: "One founder directing a small team",
    },
    {
      label: "Now",
      detail: "One founder directing AI across the operation",
    },
    {
      label: "Constant",
      detail: "Vision, judgment, and accountability",
    },
  ];

  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-sky-300/30 bg-slate-950/80">
      <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="rounded-xl border border-sky-300/15 bg-slate-900/70 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-300">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sky-300" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-sky-300 lg:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-sky-300/25 sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-white/10 sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-slate-200">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#top"
            className="text-lg font-semibold tracking-tight"
            aria-label="Badou Franck home"
          >
            Badou Franck
          </a>

          <nav
            className="hidden items-center gap-8 text-sm text-slate-300 md:flex"
            aria-label="Primary navigation"
          >
            <a className="transition hover:text-white" href="#work">
              How I Deliver
            </a>
            <a className="transition hover:text-white" href="#founder">
              Founder
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
          >
            Start a Conversation
          </a>
        </div>
      </header>

      <SectionNavigator />

      <section
        id="top"
        className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl scroll-mt-20 flex-col justify-center px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <p className="max-w-4xl text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
          Business Analyst · Project Manager · Program Manager · Portfolio
          Manager
        </p>

        <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          18 years mastering how the work gets done. Now rebuilding it with AI.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300 sm:text-2xl">
          AI multiplies the work; the judgment stays mine.
        </p>

        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
          I have operated across every altitude of technology delivery—from
          understanding the problem to allocating enterprise investment—and now
          apply that full range as a founder.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-sky-300"
          >
            See How I Deliver
          </a>

          <a
            href="#founder"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            See What I&apos;m Building
          </a>
        </div>

        <div className="mt-16 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
          {["Understand", "Deliver", "Coordinate", "Allocate"].map(
            (step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-300/40 text-xs text-sky-300">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {step}
                </span>
              </div>
            ),
          )}
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-20 border-y border-white/10 bg-slate-900/60 px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
            The accountability climb
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The same rigor, applied at increasing levels of consequence.
          </h2>
        </div>
      </section>

      <section
        id="business-analyst"
        className="scroll-mt-20 border-b border-white/10 px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium text-sky-300">01</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Business Analyst
              </h2>

              <p className="mt-4 text-xl text-slate-300">
                Understanding the problem
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                Closest to the work. Translating organizational ambiguity into
                precise specification. If the analyst gets this wrong,
                everything built downstream is wrong.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  AI-leverage signature
                </p>
                <p className="mt-2 text-lg font-medium text-white">Synthesis</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Turning scattered, contradictory human input into a coherent,
                  structured picture.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Credibility anchors
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>Requirements across five business lines</li>
                  <li>75% reduction in documentation cycle time</li>
                  <li>15% improvement in claims processing efficiency</li>
                </ul>
              </div>

              <BusinessAnalystVisual />
            </div>

            <div className="space-y-6">
              {businessAnalystActivities.map((activity, index) => (
                <article
                  key={activity.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50"
                >
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-xs text-sky-300">Activity {index + 1}</p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {activity.title}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        Pre-AI
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {activity.preAi}
                      </p>
                    </div>

                    <div className="bg-sky-400/[0.04] p-6">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                        AI-multiplied
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-200">
                        {activity.aiMultiplied}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-sky-300/20 bg-sky-400/[0.06] p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-white sm:text-2xl">
              Deciding which requirements actually matter to the business—and
              reading the room when two executives want incompatible things. AI
              organizes the inputs. The analyst owns the judgment call about
              what&apos;s real.
            </p>
          </div>
        </div>
      </section>

      <section
        id="project-manager"
        className="scroll-mt-20 border-b border-white/10 bg-slate-900/60 px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium text-sky-300">02</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Project Manager
              </h2>

              <p className="mt-4 text-xl text-slate-300">
                Delivering the work
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                Owns a single delivery end to end — scope, schedule, risk,
                commitment.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  AI-leverage signature
                </p>
                <p className="mt-2 text-lg font-medium text-white">Foresight</p>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Credibility anchors
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>Cross-functional teams of 8+</li>
                  <li>
                    Delivery inside complex, multi-project program environments
                  </li>
                  <li>Agile and hybrid sprint execution</li>
                  <li>
                    Led onshore and offshore test teams and leads through a
                    major platform migration
                  </li>
                  <li>99.5% accuracy</li>
                  <li>40% testing-efficiency gains</li>
                </ul>
              </div>

              <ProjectManagerVisual />
            </div>

            <div className="space-y-6">
              {projectManagerActivities.map((activity, index) => (
                <article
                  key={activity.title}
                  className="overflow-hidden rounded-2xl border border-sky-300/15 bg-slate-950/70"
                >
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-xs text-sky-300">Activity {index + 1}</p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {activity.title}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        Pre-AI
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {activity.preAi}
                      </p>
                    </div>

                    <div className="bg-sky-400/[0.06] p-6">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                        AI-multiplied
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-200">
                        {activity.aiMultiplied}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-sky-300/25 bg-slate-950/70 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-white sm:text-2xl">
              Owning the commitment. When to escalate, when to absorb, when to
              hold the line on scope, and when to have the hard conversation.
              That accountability does not delegate to a model.
            </p>
          </div>
        </div>
      </section>

      <section
        id="program-manager"
        className="scroll-mt-20 border-b border-white/10 bg-slate-950 px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium text-sky-300">03</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Program Manager
              </h2>

              <p className="mt-4 text-xl text-slate-300">
                Coordinating at scale
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                Orchestrates many interdependent projects toward a single
                enterprise outcome. Success is measured across the whole, not
                any one part.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  AI-leverage signature
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Coordination
                </p>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Credibility anchors
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>30–40 interrelated projects</li>
                  <li>SVP-level governance and prioritization</li>
                  <li>Executive dashboards in Power BI and Smartsheet</li>
                </ul>
              </div>

              <ProgramManagerVisual />
            </div>

            <div className="space-y-6">
              {programManagerActivities.map((activity, index) => (
                <article
                  key={activity.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50"
                >
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-xs text-sky-300">Activity {index + 1}</p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {activity.title}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        Pre-AI
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {activity.preAi}
                      </p>
                    </div>

                    <div className="bg-sky-400/[0.04] p-6">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                        AI-multiplied
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-200">
                        {activity.aiMultiplied}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-sky-300/20 bg-sky-400/[0.06] p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-white sm:text-2xl">
              Holding the line between competing project owners and executives
              — the negotiation, coalition-building, and judgment about which
              outcome the program actually exists to serve. AI coordinates the
              information. The program manager coordinates the people.
            </p>
          </div>
        </div>
      </section>

      <section
        id="portfolio-manager"
        className="scroll-mt-20 border-b border-white/10 bg-slate-900/60 px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium text-sky-300">04</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Portfolio Manager
              </h2>

              <p className="mt-4 text-xl text-slate-300">
                Allocating the investment
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                Decides where finite capital and capacity go across the
                enterprise. The call carries real money and real consequence.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  AI-leverage signature
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  Decision support
                </p>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Credibility anchors
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>$2M+ portfolio</li>
                  <li>20–30 concurrent initiatives</li>
                  <li>
                    Governance enhancements that cut project delays by 25%
                  </li>
                  <li>Influenced multi-million-dollar C-suite decisions</li>
                </ul>
              </div>

              <PortfolioManagerVisual />
            </div>

            <div className="space-y-6">
              {portfolioManagerActivities.map((activity, index) => (
                <article
                  key={activity.title}
                  className="overflow-hidden rounded-2xl border border-sky-300/15 bg-slate-950/70"
                >
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-xs text-sky-300">Activity {index + 1}</p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {activity.title}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2">
                    <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                        Pre-AI
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {activity.preAi}
                      </p>
                    </div>

                    <div className="bg-sky-400/[0.06] p-6">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                        AI-multiplied
                      </p>
                      <p className="mt-4 text-sm leading-7 text-slate-200">
                        {activity.aiMultiplied}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-sky-300/25 bg-slate-950/70 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-white sm:text-2xl">
              The allocation call itself. Which bets the enterprise makes with
              finite capital, when to kill a sunk-cost initiative, and standing
              behind a multi-million-dollar recommendation in front of the
              C-suite. AI sharpens the decision. The portfolio leader owns it.
            </p>
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="scroll-mt-20 border-b border-white/10 bg-sky-400/[0.03] px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-l-2 border-sky-300/50 pl-5 sm:pl-7">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
              Founder capstone
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Building the whole thing.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
              The four roles show how I operate across increasing levels of
              accountability. The founder story shows what happens when I apply
              that full range to something I am building myself.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
              A separate movement after the climb — not a fifth rung, but all
              four altitudes operating at once.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-slate-950/70 p-7 sm:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Pre-AI build
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-white">
                CareVizor
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-300">
                A digital childcare marketplace founded and taken from concept
                to market. Badou owned the whole arc alone at the helm: product
                strategy, requirements and specifications, vendor and developer
                coordination, roadmap, budget, and launch.
              </p>

              <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-7 text-slate-400">
                Every function that AI now accelerates — synthesis, drafting,
                coordination, and analysis — was done by hand, by one founder
                directing a small team.
              </p>
            </article>

            <article className="rounded-2xl border border-sky-300/25 bg-sky-400/[0.06] p-7 sm:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                AI-multiplied build
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-white">
                TopCloserR
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-200">
                A live multi-sided marketplace, materially more ambitious in
                scope and architecture than what one founder could reasonably
                have shipped solo a decade earlier.
              </p>

              <p className="mt-6 border-t border-sky-300/15 pt-6 text-sm leading-7 text-slate-300">
                The same founder instinct, now multiplied: AI compresses the
                synthesis, drafting, and coordination that once capped a solo
                builder&apos;s reach, allowing one operator to direct work at a
                scale that previously required a larger team.
              </p>
            </article>
          </div>

          <p className="mt-8 text-center text-xl font-medium text-white sm:text-2xl">
            Same founder instinct. Different era. Dramatically different
            leverage.
          </p>

          <FounderVisual />

          <div className="mt-12 rounded-2xl border border-sky-300/25 bg-slate-950/80 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-white sm:text-2xl">
              The vision, the judgment about what to build and why, and the
              accountability for the whole. AI multiplies a founder&apos;s
              reach; it does not decide what the company should be. That call —
              then and now — is Badou&apos;s.
            </p>
          </div>
        </div>
      </section>

      <section
        id="constant"
        className="scroll-mt-20 border-b border-white/10 bg-slate-950 px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
            The constant
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The work changes. The accountability does not.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Across every altitude, AI increases speed, scale, and reach. The
            human responsibility rises with the stakes.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-4 md:items-end">
            <article className="border-t border-sky-300/25 bg-slate-900/50 p-5 md:min-h-44">
              <p className="text-xs text-sky-300">01</p>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Define what is real
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Decide which requirements actually matter.
              </p>
            </article>

            <article className="border-t border-sky-300/35 bg-slate-900/60 p-5 md:min-h-48">
              <p className="text-xs text-sky-300">02</p>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Own the commitment
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Escalate, absorb, and hold the line on scope.
              </p>
            </article>

            <article className="border-t border-sky-300/45 bg-slate-900/70 p-5 md:min-h-52">
              <p className="text-xs text-sky-300">03</p>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Coordinate the people
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Align competing owners around the outcome.
              </p>
            </article>

            <article className="border-t border-sky-300/60 bg-slate-900/80 p-5 md:min-h-56">
              <p className="text-xs text-sky-300">04</p>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Stand behind the investment call
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Choose where finite capital and capacity go.
              </p>
            </article>
          </div>

          <div className="mt-8 border-t border-dashed border-sky-300/30 pt-8">
            <article className="grid gap-5 rounded-2xl border border-sky-300/25 bg-sky-400/[0.06] p-7 sm:p-9 md:grid-cols-[auto_1fr] md:items-center md:gap-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sky-300/40 text-sm font-medium text-sky-300">
                All 4
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-300">
                  Founder application
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Own the whole venture
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Decide what should be built and why.
                </p>
              </div>
            </article>
          </div>

          <p className="mt-12 border-l-2 border-sky-300/60 pl-6 text-2xl font-medium leading-9 text-white sm:text-3xl sm:leading-10">
            AI multiplies the work. It does not inherit the judgment or the
            accountability.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-white/10 bg-slate-900/60 px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
              Contact
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Start a conversation.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Whether the need is understanding the problem, delivering the
              work, coordinating at scale, allocating investment, or building
              something new, start with the challenge in front of you.
            </p>

            <p className="mt-8 max-w-xl border-l-2 border-sky-300/50 pl-5 text-sm leading-6 text-slate-300">
              Submissions will notify me by email and text so I can respond
              promptly.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Badou Franck</p>
          <p>Technology delivery leadership, multiplied by AI.</p>
        </div>
      </footer>
    </main>
  );
}
