import ContactForm from "@/components/ContactForm";
import RoleDisclosure from "@/components/RoleDisclosure";
import SectionNavigator from "@/components/SectionNavigator";

const businessAnalystActivities = [
  {
    title: "Requirements Elicitation & Synthesis",
    preAi:
      "Interview stakeholders across five business lines. Hand-capture notes, manually cluster themes, reconcile where executives contradict each other, draft the BRD, circulate it, absorb feedback, and manage versions. Weeks of cycle time before a single requirement is validated.",
    aiMultiplied:
      "Auto-transcribe every session. AI clusters themes across all interviews, surfaces where stakeholders want incompatible things, drafts the structured BRD into a standard template, and flags ambiguities and gaps before anything circulates. Days, not weeks; same rigor, compressed.",
  },
  {
    title: "Documentation & Traceability",
    preAi:
      "Build the requirements traceability matrix by hand. Write functional specifications, map every requirement to acceptance criteria and test cases manually, then keep it all synchronized whenever scope changes.",
    aiMultiplied:
      "Generate the traceability matrix, first-pass acceptance criteria, and test cases directly from the requirements. When a requirement changes, AI propagates the downstream impact and flags what is now out of sync, leaving no silent gaps.",
  },
  {
    title: "Process Analysis & Solution Definition",
    preAi:
      "Map the current-state process through workshops and diagrams, identify inefficiencies by inspection, hand-model the future state, and build the case for the solution.",
    aiMultiplied:
      "AI drafts current- and future-state process maps from interview transcripts and existing documentation, quantifies the improvement opportunity, and generates the options analysis for stakeholder review.",
  },
  {
    title: "User Stories & Backlog Readiness",
    preAi:
      "Decompose each approved requirement into user stories by hand, write acceptance criteria one story at a time, size them with the team, and keep the story map and the BRD in sync manually as scope moved.",
    aiMultiplied:
      "AI drafts the story set and first-pass acceptance criteria straight from the approved requirements, flags stories that are too large or untestable, and regenerates the story map when a requirement changes. I decide which stories are real and which are noise.",
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
      "AI compiles status directly from the task tracker, drafts both the executive summary and the detailed team version from one source of truth, and tunes tone per audience. The PM reviews and sends in minutes, not hours.",
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
      "Coordinate onshore and offshore testers and test leads by hand across time zones: allocate work, chase test coverage, reconcile defect reports, and hold the quality bar through a high-stakes migration by sheer vigilance.",
    aiMultiplied:
      "AI drafts test coverage from requirements, clusters and de-duplicates defect reports across distributed teams, summarizes overnight offshore progress for the morning handoff, and flags coverage gaps before a release, so the lead manages exceptions, not spreadsheets.",
  },
  {
    title: "Backlog Grooming & Sprint Planning",
    preAi:
      "Weekly grooming sessions, manual prioritization against a spreadsheet of stakeholder asks, velocity tracked by hand, sprint scope negotiated line by line.",
    aiMultiplied:
      "AI pre-ranks the backlog against stated priorities and dependencies, drafts the sprint proposal, and surfaces the conflicts before the meeting. The meeting shrinks to the decisions only.",
  },
];

const programManagerActivities = [
  {
    title: "Cross-Project Dependency Management",
    preAi:
      "Manually map dependencies across dozens of projects, chase project managers for status, reconcile conflicting timelines, and hold the collision map in your head or in a sprawling spreadsheet.",
    aiMultiplied:
      "AI ingests every project plan, maps the full dependency network, and flags where a slip in one project cascades into three others, surfacing the collision weeks before it lands.",
  },
  {
    title: "Executive Dashboards & Program Health",
    preAi:
      "Pull data from every project, build the Power BI or Smartsheet dashboard by hand, refresh it each cycle, and write the narrative interpretation for SVP leadership.",
    aiMultiplied:
      "AI aggregates program data continuously, drafts the health narrative (what is green, what is red, and why), and generates the executive read-out on demand, not once per reporting cycle.",
  },
  {
    title: "Governance & Prioritization Facilitation",
    preAi:
      "Prepare governance materials, frame trade-offs for SVP-level sessions, capture decisions live, then manually cascade them back into every affected project.",
    aiMultiplied:
      "AI prepares the trade-off analysis and scenario comparisons before the session, captures decisions in real time, and drafts the cascade of updates to each impacted project.",
  },
  {
    title: "Cross-Team Backlog Sequencing",
    preAi:
      "Reconcile 30–40 project backlogs into a single program sequence by hand, chase dependency owners, rebuild the plan every time one team slipped.",
    aiMultiplied:
      "AI holds the dependency graph, re-sequences when a slip is logged, and drafts the impact note to affected leads. I own the trade-off call when two teams can’t both be first.",
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
  {
    title: "Portfolio Roadmap Prioritization",
    preAi:
      "Build the investment scoring model in Excel, score every initiative, argue the ranking in steering committee, re-score after every budget change.",
    aiMultiplied:
      "AI scores initiatives against the framework, models the capacity and budget scenarios, and drafts the recommendation memo. The C-suite gets options with consequences; the recommendation is still mine.",
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
    <div className="min-w-0 w-full overflow-hidden rounded-2xl border border-ai-border bg-surface">
      <div className="grid min-w-0 gap-3 p-4 sm:p-5 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="min-w-0 rounded-xl border border-border bg-section p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-body">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-primary xl:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-ai-border sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-border sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-body">
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
    <div className="min-w-0 w-full overflow-hidden rounded-2xl border border-ai-border bg-section">
      <div className="grid min-w-0 gap-3 p-4 sm:p-5 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="min-w-0 rounded-xl border border-ai-border bg-surface p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-body">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-primary xl:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-ai-border sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-border sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-body">
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
    <div className="min-w-0 w-full overflow-hidden rounded-2xl border border-ai-border bg-surface">
      <div className="grid min-w-0 gap-3 p-4 sm:p-5 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="min-w-0 rounded-xl border border-border bg-section p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-body">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-primary xl:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-ai-border sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-border sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-body">
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
    <div className="min-w-0 w-full overflow-hidden rounded-2xl border border-ai-border bg-section">
      <div className="grid min-w-0 gap-3 p-4 sm:p-5 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-stretch">
        {stages.map((stage, index) => (
          <div key={stage.label} className="contents">
            <div className="min-w-0 rounded-xl border border-ai-border bg-surface p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                {stage.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-5 text-body">
                {stage.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary" aria-hidden="true">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < stages.length - 1 && (
              <div
                className="hidden items-center justify-center px-1 text-primary xl:flex"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid border-t border-ai-border sm:grid-cols-3">
        {comparison.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 sm:p-5 ${
              index > 0
                ? "border-t border-border sm:border-l sm:border-t-0"
                : ""
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-5 text-body">
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
    <main className="min-h-screen bg-page text-heading">
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:not-sr-only focus:rounded-md focus:bg-primary-hover focus:px-4 focus:py-3 focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2 focus:ring-offset-page"
      >
        Skip to main content
      </a>

      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#top"
            className="rounded-sm text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            aria-label="Badou Franck home"
          >
            Badou Franck
          </a>

          <nav
            className="hidden items-center gap-5 text-sm text-body md:flex lg:gap-8"
            aria-label="Primary navigation"
          >
            <a
              className="rounded-sm transition hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
              href="#work"
            >
              How I Deliver
            </a>
            <a
              className="rounded-sm border-b border-ai-border pb-1 font-medium text-primary transition hover:border-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
              href="/execution-examples.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Execution Examples <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="rounded-sm transition hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
              href="#founder"
            >
              Proving Ground
            </a>
            <a
              className="rounded-sm transition hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            Start a Conversation
          </a>
        </div>
      </header>

      <SectionNavigator />

      <div id="main-content">
      <section
        id="top"
        className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl scroll-mt-20 flex-col justify-center px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <p className="max-w-4xl text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Business Analyst · Project Manager · Program Manager · Portfolio
          Manager
        </p>

        <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          20 years mastering how the work gets done. Now rebuilding it with AI.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-body sm:text-2xl">
          AI multiplies the work; the judgment stays mine.
        </p>

        <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">
          I have operated across every altitude of technology delivery, from
          understanding the problem to allocating enterprise investment, and I
          stay current by applying that full range in real product builds.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            See How I Deliver
          </a>

          <a
            href="#founder"
            className="inline-flex items-center justify-center rounded-full border border-control-border bg-surface px-6 py-3 font-medium text-primary transition hover:border-primary hover:bg-section focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            See the Proving Ground
          </a>
        </div>

        <div className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-4">
          {["Understand", "Deliver", "Coordinate", "Allocate"].map(
            (step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ai-border text-xs text-primary">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-body">
                  {step}
                </span>
              </div>
            ),
          )}
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-20 border-y border-border bg-section px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            The accountability climb
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The same rigor, applied at increasing levels of consequence.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-body">
            The artifact changed shape at every altitude — BRD, user story,
            backlog, roadmap, portfolio — but the job never did: deciding what
            gets built, for whom, and in what order.
          </p>
        </div>
      </section>

      <section
        id="business-analyst"
        className="scroll-mt-20 border-b border-border px-6 py-24 lg:scroll-mt-8 lg:pl-24 lg:pr-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary">01</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Business Analyst
            </h2>

            <p className="mt-4 text-xl text-body">
              Understanding the problem
            </p>

            <p className="mt-6 text-base leading-7 text-muted">
              Closest to the work. Translating organizational ambiguity into
              precise specification. If the analyst gets this wrong, everything
              built downstream is wrong.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                AI-leverage signature
              </p>
              <p className="mt-2 text-lg font-medium text-heading">Synthesis</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Turning scattered, contradictory human input into a coherent,
                structured picture.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Credibility anchors
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-body">
                <li>Requirements across five business lines</li>
                <li>75% reduction in documentation cycle time</li>
                <li>15% improvement in claims processing efficiency</li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-ai-border bg-ai-surface p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                IN PRODUCT TERMS
              </p>
              <p className="mt-4 text-sm leading-6 text-body">
                <span className="font-semibold text-heading">
                  Product equivalent:
                </span>{" "}
                Discovery and requirements ownership — the “what and why”
                before anything is built.
              </p>
              <p className="mt-3 text-sm leading-6 text-body">
                <span className="font-semibold text-heading">
                  Artifacts owned:
                </span>{" "}
                BRDs and functional specs; user stories with acceptance criteria
                as programs moved to Agile; requirements traceability; the BA
                standards that cut documentation cycle time 75%.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-ai-border bg-ai-surface p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-heading sm:text-2xl">
              Deciding which requirements actually matter to the business, and
              reading the room when two executives want incompatible things. AI
              organizes the inputs. The analyst owns the judgment call about
              what&apos;s real.
            </p>
          </div>

          <RoleDisclosure
            detailId="business-analyst-details"
            roleName="Business Analyst"
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              The Approach
            </p>
            <div className="grid min-w-0 gap-10">
              <BusinessAnalystVisual />

              <div className="min-w-0 space-y-6">
                {businessAnalystActivities.map((activity, index) => (
                  <article
                    key={activity.title}
                    className="min-w-0 overflow-hidden rounded-2xl border border-border bg-section"
                  >
                    <div className="border-b border-border px-6 py-5">
                      <p className="text-xs text-primary">
                        Activity {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {activity.title}
                      </h3>
                    </div>

                    <div className="grid min-w-0 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                      <div className="min-w-0 border-b border-border p-6 xl:border-b-0 xl:border-r">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                          Pre-AI
                        </p>
                        <p className="mt-4 text-sm leading-7 text-body">
                          {activity.preAi}
                        </p>
                      </div>

                      <div className="min-w-0 bg-ai-surface p-6">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                          AI-multiplied
                        </p>
                        <p className="mt-4 text-sm leading-7 text-body">
                          {activity.aiMultiplied}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </RoleDisclosure>
        </div>
      </section>

      <section
        id="project-manager"
        className="scroll-mt-20 border-b border-border bg-section px-6 py-24 lg:scroll-mt-8 lg:pl-24 lg:pr-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary">02</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Project Manager
            </h2>

            <p className="mt-4 text-xl text-body">Delivering the work</p>

            <p className="mt-6 text-base leading-7 text-muted">
              Owns a single delivery end to end: scope, schedule, risk, and
              commitment.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                AI-leverage signature
              </p>
              <p className="mt-2 text-lg font-medium text-heading">Foresight</p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Credibility anchors
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-body">
                <li>Cross-functional teams of 8+</li>
                <li>
                  Delivery inside complex, multi-project program environments
                </li>
                <li>Agile and hybrid sprint execution</li>
                <li>
                  Led onshore and offshore test teams and leads through a major
                  platform migration
                </li>
                <li>99.5% accuracy</li>
                <li>40% testing-efficiency gains</li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-ai-border bg-ai-surface p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                IN PRODUCT TERMS
              </p>
              <p className="mt-4 text-sm leading-6 text-body">
                <span className="font-semibold text-heading">
                  Product equivalent:
                </span>{" "}
                Sprint and release ownership for a single product line.
              </p>
              <p className="mt-3 text-sm leading-6 text-body">
                <span className="font-semibold text-heading">
                  Artifacts owned:
                </span>{" "}
                prioritized project backlog in Jira; user stories groomed with
                the BA and dev lead; sprint plans; release notes; RAID log.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-ai-border bg-surface p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-heading sm:text-2xl">
              Owning the commitment. When to escalate, when to absorb, when to
              hold the line on scope, and when to have the hard conversation.
              That accountability does not delegate to a model.
            </p>
          </div>

          <RoleDisclosure
            detailId="project-manager-details"
            roleName="Project Manager"
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              The Approach
            </p>
            <div className="grid min-w-0 gap-10">
              <ProjectManagerVisual />

              <div className="min-w-0 space-y-6">
                {projectManagerActivities.map((activity, index) => (
                  <article
                    key={activity.title}
                    className="min-w-0 overflow-hidden rounded-2xl border border-ai-border bg-surface"
                  >
                    <div className="border-b border-border px-6 py-5">
                      <p className="text-xs text-primary">
                        Activity {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {activity.title}
                      </h3>
                    </div>

                    <div className="grid min-w-0 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                      <div className="min-w-0 border-b border-border p-6 xl:border-b-0 xl:border-r">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                          Pre-AI
                        </p>
                        <p className="mt-4 text-sm leading-7 text-body">
                          {activity.preAi}
                        </p>
                      </div>

                      <div className="min-w-0 bg-ai-surface p-6">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                          AI-multiplied
                        </p>
                        <p className="mt-4 text-sm leading-7 text-body">
                          {activity.aiMultiplied}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </RoleDisclosure>
        </div>
      </section>

      <section
        id="program-manager"
        className="scroll-mt-20 border-b border-border bg-surface px-6 py-24 lg:scroll-mt-8 lg:pl-24 lg:pr-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary">03</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Program Manager
            </h2>

            <p className="mt-4 text-xl text-body">
              Coordinating at scale
            </p>

            <p className="mt-6 text-base leading-7 text-muted">
              Orchestrates many interdependent projects toward a single
              enterprise outcome. Success is measured across the whole, not any
              one part.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                AI-leverage signature
              </p>
              <p className="mt-2 text-lg font-medium text-heading">
                Coordination
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Credibility anchors
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-body">
                <li>30–40 interrelated projects</li>
                <li>SVP-level governance and prioritization</li>
                <li>Executive dashboards in Power BI and Smartsheet</li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-ai-border bg-ai-surface p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                IN PRODUCT TERMS
              </p>
              <p className="mt-4 text-sm leading-6 text-body">
                <span className="font-semibold text-heading">
                  Product equivalent:
                </span>{" "}
                Backlog ownership across a program — sequencing 30–40
                interdependent workstreams like a multi-team product roadmap.
              </p>
              <p className="mt-3 text-sm leading-6 text-body">
                <span className="font-semibold text-heading">
                  Artifacts owned:
                </span>{" "}
                program-level backlog and dependency map; release train plan;
                Power BI and Smartsheet dashboards reporting what shipped and
                why to SVPs.
              </p>
            </div>

            <p className="mt-8 border-l-2 border-ai-border pl-5 text-sm leading-6 text-body">
              I lead people as people to develop, not resources to consume.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-ai-border bg-ai-surface p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-heading sm:text-2xl">
              Holding the line between competing project owners and executives.
              The negotiation, coalition-building, and judgment about which
              outcome the program actually exists to serve. AI coordinates the
              information. The program manager coordinates the people.
            </p>
          </div>

          <RoleDisclosure
            detailId="program-manager-details"
            roleName="Program Manager"
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              The Approach
            </p>
            <div className="grid min-w-0 gap-10">
              <ProgramManagerVisual />

              <div className="min-w-0 space-y-6">
                {programManagerActivities.map((activity, index) => (
                  <article
                    key={activity.title}
                    className="min-w-0 overflow-hidden rounded-2xl border border-border bg-section"
                  >
                    <div className="border-b border-border px-6 py-5">
                      <p className="text-xs text-primary">
                        Activity {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {activity.title}
                      </h3>
                    </div>

                    <div className="grid min-w-0 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                      <div className="min-w-0 border-b border-border p-6 xl:border-b-0 xl:border-r">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                          Pre-AI
                        </p>
                        <p className="mt-4 text-sm leading-7 text-body">
                          {activity.preAi}
                        </p>
                      </div>

                      <div className="min-w-0 bg-ai-surface p-6">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                          AI-multiplied
                        </p>
                        <p className="mt-4 text-sm leading-7 text-body">
                          {activity.aiMultiplied}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </RoleDisclosure>
        </div>
      </section>

      <section
        id="portfolio-manager"
        className="scroll-mt-20 border-b border-border bg-section px-6 py-24 lg:scroll-mt-8 lg:pl-24 lg:pr-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary">04</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Portfolio Manager
            </h2>

            <p className="mt-4 text-xl text-body">
              Allocating the investment
            </p>

            <p className="mt-6 text-base leading-7 text-muted">
              Decides where finite capital and capacity go across the
              enterprise. The call carries real money and real consequence.
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                AI-leverage signature
              </p>
              <p className="mt-2 text-lg font-medium text-heading">
                Decision support
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Credibility anchors
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-body">
                <li>$2M+ portfolio</li>
                <li>20–30 concurrent initiatives</li>
                <li>Governance enhancements that cut project delays by 25%</li>
                <li>Influenced multi-million-dollar C-suite decisions</li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-ai-border bg-ai-surface p-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                IN PRODUCT TERMS
              </p>
              <p className="mt-4 text-sm leading-6 text-body">
                <span className="font-semibold text-heading">
                  Product equivalent:
                </span>{" "}
                Product-portfolio strategy — deciding what gets funded,
                sequenced, paused, and killed across a $2M+ portfolio.
              </p>
              <p className="mt-3 text-sm leading-6 text-body">
                <span className="font-semibold text-heading">
                  Artifacts owned:
                </span>{" "}
                investment cases; prioritization framework; capacity plan;
                C-suite recommendations; from 2023, the enterprise AI delivery
                backlog (email summarization, contract and legal document search,
                bi-weekly AI enablement training).
              </p>
            </div>

            <p className="mt-8 border-l-2 border-ai-border pl-5 text-sm leading-6 text-body">
              I govern capital as something entrusted, not owned.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-ai-border bg-surface p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              What stays human
            </p>

            <p className="mt-4 max-w-5xl text-xl leading-8 text-heading sm:text-2xl">
              The allocation call itself. Which bets the enterprise makes with
              finite capital, when to kill a sunk-cost initiative, and standing
              behind a multi-million-dollar recommendation in front of the
              C-suite. AI sharpens the decision. The portfolio leader owns it.
            </p>
          </div>

          <RoleDisclosure
            detailId="portfolio-manager-details"
            roleName="Portfolio Manager"
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">
              The Approach
            </p>
            <div className="grid min-w-0 gap-10">
              <PortfolioManagerVisual />

              <div className="min-w-0 space-y-6">
                {portfolioManagerActivities.map((activity, index) => (
                  <article
                    key={activity.title}
                    className="min-w-0 overflow-hidden rounded-2xl border border-ai-border bg-surface"
                  >
                    <div className="border-b border-border px-6 py-5">
                      <p className="text-xs text-primary">
                        Activity {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {activity.title}
                      </h3>
                    </div>

                    <div className="grid min-w-0 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                      <div className="min-w-0 border-b border-border p-6 xl:border-b-0 xl:border-r">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                          Pre-AI
                        </p>
                        <p className="mt-4 text-sm leading-7 text-body">
                          {activity.preAi}
                        </p>
                      </div>

                      <div className="min-w-0 bg-ai-surface p-6">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                          AI-multiplied
                        </p>
                        <p className="mt-4 text-sm leading-7 text-body">
                          {activity.aiMultiplied}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </RoleDisclosure>
        </div>
      </section>

      <div className="border-b border-border bg-surface px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-ai-border bg-ai-surface p-7 sm:p-9">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Detailed execution examples
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            Go deeper into the work.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-body sm:text-lg">
            Review four representative enterprise programs, showing how they
            were executed before AI and how I would deliver them today with it.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="/execution-examples.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              View Detailed Execution Examples
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className="text-sm font-medium text-muted">
              PDF · 6 pages
            </span>
          </div>
        </div>
      </div>

      <section
        id="founder"
        className="scroll-mt-20 border-b border-border bg-ai-surface px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-l-2 border-ai-border pl-5 sm:pl-7">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              The Proving Ground
            </p>

            <p className="mt-4 max-w-3xl text-xl italic leading-8 text-heading sm:text-2xl">
              Where I learn the technology I lead — by shipping it.
            </p>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-body">
              For twenty years I&apos;ve led delivery from the analyst&apos;s seat up
              to the portfolio. But leading technology and understanding it
              from the inside are different things, and I&apos;ve never been willing
              to let the gap grow. So I build real products, for real users,
              alongside my career. They&apos;re not side hobbies and they&apos;re not an
              exit plan. They&apos;re how I stay current — and both of them started
              at my own kitchen table.
            </p>
          </div>

          <div className="mt-8 max-w-4xl rounded-xl border border-primary bg-surface p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              IN PRODUCT TERMS
            </p>
            <p className="mt-4 text-sm leading-6 text-body sm:text-base">
              <span className="font-semibold text-heading">
                Product equivalent:
              </span>{" "}
              All of it, held by one person. I write the user stories and
              acceptance criteria, own the GitHub backlog directly, and
              prioritize it against revenue and funding.
            </p>
            <p className="mt-3 text-sm leading-6 text-body sm:text-base">
              <span className="font-semibold text-heading">
                Artifacts owned:
              </span>{" "}
              jobs-to-be-done → validated workflows → GitHub issues, with AI
              drafting the first pass and me making the call.
            </p>
          </div>

          <details className="group mt-12 overflow-hidden rounded-2xl border border-control-border bg-surface">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-7 text-xl font-semibold text-heading marker:hidden sm:p-9 sm:text-2xl">
              Origin Story
              <span
                className="text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
                aria-hidden="true"
              >
                ↓
              </span>
            </summary>

            <div className="space-y-6 border-t border-border px-7 pb-7 pt-6 text-base leading-7 text-body sm:px-9 sm:pb-9">
              <h3 className="text-lg font-semibold leading-7 text-heading">
                It started with one recruiter running an agency on Gmail,
                Google Sheets, and a cell phone.
              </h3>
              <p>
                My wife owns a solo recruiting agency. For years it ran the way
                most solo agencies do: candidates in a spreadsheet, follow-ups
                in an inbox, and everything else in her head. I did what a
                business analyst does — sat with the workflow, mapped where time
                was leaking, and researched what a one-person shop could actually
                sustain. Then I built it: a CRM on GoHighLevel, a website, social
                presence, and analytics so she could see what was working.
              </p>
              <p>
                That became TalentRApp — done-for-you CRM, automation, and
                technology infrastructure for recruiting agencies who don&apos;t
                have a technology department because they are the department.
              </p>
              <h3 className="pt-2 text-lg font-semibold leading-7 text-heading">
                Then she changed roles, and I got a second problem to solve.
              </h3>
              <p>
                She started working as a closer — selling for early-stage
                startups on commission. Watching her research the role, I saw a
                community with real demand and no home: closers looking for
                reputable companies, companies looking for proven closers, and
                no marketplace connecting them with any rigor.
              </p>
              <p>
                That became TopCloserR — an AI-multiplied, multi-sided sales
                marketplace. It&apos;s also where I do my most hands-on technical
                work: directing a Next.js and Supabase build through Claude Code,
                running n8n automations, and designing, testing, and managing the
                AI agents that make a solo-operated platform behave like a
                staffed one.
              </p>
            </div>
          </details>

          <details className="group mt-6 overflow-hidden rounded-2xl border border-primary bg-ai-surface">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-7 text-xl font-semibold text-heading marker:hidden sm:p-9 sm:text-2xl">
              Pre-AI vs. AI-Multiplied Comparison
              <span
                className="text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
                aria-hidden="true"
              >
                ↓
              </span>
            </summary>

            <div className="border-t border-ai-border px-4 pb-7 pt-6 sm:px-7 sm:pb-9 lg:px-9">
              <div className="space-y-4 sm:hidden">
                {[
                  [
                    "The build",
                    "Hired developers and marketers; I wrote the specs and managed the sprints",
                    "Direct development through Claude Code; I set direction, review every change, and never hand-write the code",
                  ],
                  [
                    "The team",
                    "Multi-disciplinary human team",
                    "One founder, an offshore content team, and a roster of AI agents I design and supervise",
                  ],
                  [
                    "Requirements",
                    "Business requirements documents and functional specs, written by hand",
                    "Jobs-to-be-done translated into acceptance criteria and GitHub issues with AI drafting the first pass",
                  ],
                  [
                    "Speed to change",
                    "Weeks per iteration",
                    "Hours per iteration",
                  ],
                  [
                    "What I learned",
                    "How to ship a marketplace from concept to market",
                    "How to run a company where the operating layer is AI and the judgment layer is me",
                  ],
                ].map(([dimension, careVizor, topCloserR]) => (
                  <article
                    key={dimension}
                    className="overflow-hidden rounded-xl border border-border bg-surface"
                  >
                    <h3 className="border-b border-border px-5 py-4 font-semibold text-heading">
                      {dimension}
                    </h3>
                    <div className="space-y-2 px-5 py-4">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                        CareVizor (2014–2016)
                      </p>
                      <p className="text-sm leading-6 text-body">
                        {careVizor}
                      </p>
                    </div>
                    <div className="space-y-2 border-t border-ai-border bg-ai-surface px-5 py-4">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                        TopCloserR (2025–present)
                      </p>
                      <p className="text-sm leading-6 text-body">
                        {topCloserR}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="hidden overflow-hidden rounded-xl border border-border sm:block">
                <table className="w-full table-fixed border-collapse text-left">
                  <thead className="bg-surface">
                    <tr>
                      <th className="w-1/5 px-4 py-4 text-sm font-semibold text-heading lg:px-5">
                        Dimension
                      </th>
                      <th className="w-2/5 border-l border-border px-4 py-4 text-sm font-semibold text-heading lg:px-5">
                        CareVizor (2014–2016)
                      </th>
                      <th className="w-2/5 border-l border-ai-border bg-ai-surface px-4 py-4 text-sm font-semibold text-primary lg:px-5">
                        TopCloserR (2025–present)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      [
                        "The build",
                        "Hired developers and marketers; I wrote the specs and managed the sprints",
                        "Direct development through Claude Code; I set direction, review every change, and never hand-write the code",
                      ],
                      [
                        "The team",
                        "Multi-disciplinary human team",
                        "One founder, an offshore content team, and a roster of AI agents I design and supervise",
                      ],
                      [
                        "Requirements",
                        "Business requirements documents and functional specs, written by hand",
                        "Jobs-to-be-done translated into acceptance criteria and GitHub issues with AI drafting the first pass",
                      ],
                      [
                        "Speed to change",
                        "Weeks per iteration",
                        "Hours per iteration",
                      ],
                      [
                        "What I learned",
                        "How to ship a marketplace from concept to market",
                        "How to run a company where the operating layer is AI and the judgment layer is me",
                      ],
                    ].map(([dimension, careVizor, topCloserR]) => (
                      <tr key={dimension} className="align-top">
                        <th className="bg-surface px-4 py-4 text-sm font-semibold text-heading lg:px-5">
                          {dimension}
                        </th>
                        <td className="border-l border-border bg-surface px-4 py-4 text-sm leading-6 text-body lg:px-5">
                          {careVizor}
                        </td>
                        <td className="border-l border-ai-border bg-ai-surface px-4 py-4 text-sm leading-6 text-body lg:px-5">
                          {topCloserR}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 rounded-xl border border-ai-border bg-surface p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  What stays human
                </p>
                <p className="mt-4 text-base leading-7 text-heading sm:text-lg">
                  deciding what the product should be, who it serves, what a fair
                  rule looks like for everyone on the platform, and when the AI
                  is confidently wrong. Those calls don&apos;t get delegated.
                </p>
              </div>
            </div>
          </details>

          <p className="mt-10 border-l-2 border-ai-border pl-6 text-xl font-medium leading-8 text-heading sm:text-2xl sm:leading-9">
            I keep building because the fastest way to understand a technology
            is to be accountable for it in production. Everything above this
            section is what I&apos;ve delivered for employers. This section is what
            I&apos;ve delivered for myself — and it&apos;s why I can walk into an AI
            transformation conversation knowing exactly what the hard parts feel
            like.
          </p>
        </div>
      </section>

      <section
        id="constant"
        className="scroll-mt-20 border-b border-border bg-surface px-6 py-24 lg:scroll-mt-8 lg:pl-24 lg:pr-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            The constant
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The work changes. The accountability does not.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Across every altitude, AI increases speed, scale, and reach. The
            human responsibility rises with the stakes.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-end">
            <article className="border-t border-border bg-surface p-5 md:min-h-44">
              <p className="text-xs text-primary">01</p>
              <h3 className="mt-4 text-lg font-semibold text-heading">
                Define what is real
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Decide which requirements actually matter.
              </p>
            </article>

            <article className="border-t border-ai-border bg-section p-5 md:min-h-48">
              <p className="text-xs text-primary">02</p>
              <h3 className="mt-4 text-lg font-semibold text-heading">
                Own the commitment
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Escalate, absorb, and hold the line on scope.
              </p>
            </article>

            <article className="border-t-2 border-primary/60 bg-ai-surface p-5 md:min-h-52">
              <p className="text-xs text-primary">03</p>
              <h3 className="mt-4 text-lg font-semibold text-heading">
                Coordinate the people
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Align competing owners around the outcome.
              </p>
            </article>

            <article className="border-t-2 border-primary bg-primary/10 p-5 md:min-h-56">
              <p className="text-xs text-primary">04</p>
              <h3 className="mt-4 text-lg font-semibold text-heading">
                Stand behind the investment call
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Choose where finite capital and capacity go.
              </p>
            </article>
          </div>

          <div className="mt-8 border-t border-dashed border-ai-border pt-8">
            <article className="grid gap-5 rounded-2xl border border-ai-border bg-ai-surface p-7 sm:p-9 md:grid-cols-[auto_1fr] md:items-center md:gap-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-ai-border text-sm font-medium text-primary">
                All 4
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  Founder application
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-heading">
                  Own the whole venture
                </h3>
                <p className="mt-3 text-sm leading-6 text-body">
                  Decide what should be built and why.
                </p>
              </div>
            </article>
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-8 text-body">
            Integrity shows up in the costly call: the honest recommendation,
            the hard escalation, and standing behind a decision when it is
            under fire.
          </p>

          <p className="mt-8 border-l-2 border-ai-border pl-6 text-2xl font-medium leading-9 text-heading sm:text-3xl sm:leading-10">
            AI multiplies the work. It does not inherit the judgment or the
            accountability.
          </p>
        </div>
      </section>

      <div className="border-b border-border bg-surface px-6 py-12 lg:pl-24 lg:pr-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-ai-border bg-ai-surface p-7 sm:p-9">
          <p className="max-w-4xl text-base leading-8 text-body sm:text-lg">
            The judgment you&apos;ve seen throughout this site doesn&apos;t come
            from a management framework; it comes from convictions. My faith
            is the root they grow from. It&apos;s why I see resources as
            entrusted rather than owned, why I believe every person carries
            dignity, and why I hold the line on the costly call. It shows up
            less in what I say and most in how I decide when a decision is hard.
            I&apos;m also a husband and father, and the people I&apos;m accountable
            to at home keep me honest about the ones I&apos;m accountable to at
            work.
          </p>
        </div>
      </div>

      <section
        id="contact"
        className="scroll-mt-20 border-t border-border bg-section px-6 py-24 lg:scroll-mt-8 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Contact
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Start a conversation.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Whether the need is understanding the problem, delivering the
              work, coordinating at scale, allocating investment, or building
              something new, start with the challenge in front of you.
            </p>

            <p className="mt-8 max-w-xl border-l-2 border-ai-border pl-5 text-sm leading-6 text-body">
              Submissions will notify me by email so I can respond promptly.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
      </div>

      <footer className="border-t border-border px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Badou Franck</p>
          <p>Technology delivery leadership, multiplied by AI.</p>
        </div>
      </footer>
    </main>
  );
}
