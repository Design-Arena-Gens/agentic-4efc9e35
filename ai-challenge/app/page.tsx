import Link from "next/link";

const tools = [
  {
    name: "ChatGPT",
    short: "CG",
    tagline: "Confident prompt engineering in minutes",
    description:
      "Learn a repeatable framework to turn fuzzy ideas into sharp prompts that deliver publication-ready copy and strategic plans.",
    outcomes: [
      "Create Roop Solar blog outlines, pitches, and proposals on command",
      "Build reusable prompt templates to accelerate investor updates",
      "Design a voice and tone system tailored to your audience",
    ],
    accent: "from-sky-400/50 to-sky-500/10 text-sky-200",
  },
  {
    name: "Perplexity",
    short: "PX",
    tagline: "Lightning-fast research briefings",
    description:
      "Replace hours of googling with structured market intelligence and curated citations you can trust.",
    outcomes: [
      "Generate competitive snapshots for new solar tenders in <15 minutes",
      "Surface policy changes that impact project timelines",
      "Build ready-to-share briefing docs for your sales team",
    ],
    accent: "from-indigo-400/50 to-indigo-500/10 text-indigo-200",
  },
  {
    name: "Notion AI",
    short: "NA",
    tagline: "Systems that keep habits sticky",
    description:
      "Use the Habit Tracker Hack to align daily execution with long-range business goals, without adding admin overhead.",
    outcomes: [
      "Automate weekly operating reviews and progress logs",
      "Convert AI outputs directly into your project dashboards",
      "Spot execution gaps early with auto-generated insights",
    ],
    accent: "from-emerald-400/50 to-emerald-500/10 text-emerald-200",
  },
  {
    name: "Midjourney",
    short: "MJ",
    tagline: "Marketing visuals that stand out",
    description:
      "Craft solar-ready mood boards, ad concepts, and campaign imagery that feel on-brand and ready for Canva polish.",
    outcomes: [
      "Build three branded visual directions for upcoming launches",
      "Generate storytelling assets for investor decks and events",
      "Understand lighting, prompts, and riffs that convert",
    ],
    accent: "from-rose-400/50 to-rose-500/10 text-rose-200",
  },
  {
    name: "Canva",
    short: "CV",
    tagline: "Infographics your customers remember",
    description:
      "Turn AI-generated visuals and copy into polished marketing deliverables without waiting on a design sprint.",
    outcomes: [
      "Ship a weekly LinkedIn carousel highlighting solar wins",
      "Create data-backed infographics for community workshops",
      "Build an evergreen template library for your team",
    ],
    accent: "from-amber-400/50 to-amber-500/10 text-amber-200",
  },
] as const;

const cohorts = [
  {
    title: "Week 1 · Foundations",
    focus: "Replace 15 minutes of scrolling with guided daily micro-missions.",
    highlights: [
      "ChatGPT prompt sprints that generate strategic thinking fast",
      "Perplexity research jam session tailored to the solar landscape",
    ],
  },
  {
    title: "Week 2 · Systems",
    focus:
      "Stack small wins into repeatable workflows that your future self will thank you for.",
    highlights: [
      "Notion AI Habit Tracker Hack + accountability rituals",
      "AI-powered planning templates for bids and proposals",
    ],
  },
  {
    title: "Week 3 · Storytelling",
    focus:
      "Translate technical expertise into visuals and copy your market understands instantly.",
    highlights: [
      "Midjourney brand board lab session for Roop Solar",
      "Scenario planning: launch, partnership, and community campaigns",
    ],
  },
  {
    title: "Week 4 · Launch",
    focus:
      "Ship a full stack of assets and a decision-making cadence you can maintain beyond the 28 days.",
    highlights: [
      "Canva infographics + carousel templates ready for publishing",
      "Executive AI ops checklist to keep the habit going",
    ],
  },
] as const;

const reasons = [
  {
    headline: "Microlearning that respects your calendar",
    copy: "Daily lessons fit in a coffee break: 6-minute walkthrough, 6-minute practice, 3-minute reflection. No binge-watching, no overwhelm.",
  },
  {
    headline: "Language that resonates with leaders 40+",
    copy: "We translate AI jargon into business decisions. Expect contextual examples rooted in operations, finance, and stakeholder alignment.",
  },
  {
    headline: "Roop Solar use-cases built in",
    copy: "Every challenge references real solar sales, education, and operations scenarios. You leave with assets you can deploy immediately.",
  },
];

const testimonials = [
  {
    quote:
      "My marketing team now starts every campaign in Midjourney + Canva. We cut concepting time in half and show up more consistently online.",
    name: "Priya Mehta",
    role: "Director, CleanTech Collective",
  },
  {
    quote:
      "Perplexity briefs have become a standing agenda item in board meetings. The insights we surface in 15 minutes used to take a whole afternoon.",
    name: "Ramesh Gupta",
    role: "Founder, GridSense Labs",
  },
];

const faqs = [
  {
    question: "What if I miss a day?",
    answer:
      "Every lesson is on-demand and takes under 15 minutes. Miss a day? Stack two micro-missions on the weekend and you are caught up.",
  },
  {
    question: "Do I need prior AI experience?",
    answer:
      "Nope. We start with plain-language breakdowns before layering in advanced workflows. If you can send an email, you can complete this challenge.",
  },
  {
    question: "Will I need paid subscriptions?",
    answer:
      "We recommend the Plus tiers for ChatGPT and Midjourney to unlock the best results, but every exercise includes a free-tier alternative.",
  },
];

const stats = [
  { label: "Minutes per day", value: "15" },
  { label: "Live build sessions", value: "4" },
  { label: "Templates & playbooks", value: "18" },
  { label: "Next cohort start", value: "11 Nov 2024" },
] as const;

const gradientBackground =
  "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.28),transparent_45%),radial-gradient(circle_at_top_left,rgba(244,114,182,0.22),transparent_40%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.18),transparent_50%)]";

const borderClass =
  "border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 flex-none text-emerald-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 16 16"
    >
      <path
        d="m3 8 3 3 7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-sky-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        d="M12 4.5c.563 1.688 1.812 2.937 3.5 3.5-1.688.563-2.937 1.812-3.5 3.5-.563-1.688-1.812-2.937-3.5-3.5 1.688-.563 2.937-1.812 3.5-3.5Zm7 9c.375 1.125 1.208 1.958 2.333 2.333-1.125.375-1.958 1.208-2.333 2.334-.375-1.126-1.208-1.959-2.333-2.334 1.125-.375 1.958-1.208 2.333-2.333ZM5 13c.375 1.125 1.208 1.958 2.333 2.333C6.208 15.708 5.375 16.541 5 17.666 4.625 16.541 3.792 15.708 2.667 15.333 3.792 14.958 4.625 14.125 5 13Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50">
      <div className={gradientBackground} />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <header className={`${borderClass} rounded-3xl p-10 lg:p-16`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-sky-200">
                <SparkleIcon />
                Next Cohort · 11 Nov 2024
              </span>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                28-Day AI Power-Up Challenge for Founders 40+
              </h1>
              <p className="text-lg text-slate-200 sm:text-xl">
                Swap 15 minutes of social media for guided microlearning that
                modernizes how Roop Solar researches, plans, and ships marketing
                assets. Practical. Actionable. Built for people who lead busy
                teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#join"
                  className="group inline-flex items-center justify-center rounded-full bg-sky-400 px-8 py-3 text-base font-semibold text-slate-950 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.7)] transition hover:bg-sky-300"
                >
                  Tap to Join the Challenge
                </Link>
                <Link
                  href="#curriculum"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Preview the Roadmap
                </Link>
              </div>
              <dl className="grid grid-cols-2 gap-6 pt-6 text-sm text-slate-200 sm:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/5 p-4">
                    <dt className="uppercase tracking-wide text-white/70">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-2xl font-semibold text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 text-sm text-slate-200 shadow-[0_20px_80px_-40px_rgba(2,6,23,0.9)] lg:max-w-[420px]">
              <h2 className="text-lg font-semibold text-white">
                Your Daily Microlearning Stack
              </h2>
              <p className="mt-3 text-slate-300">
                We blend async micro-missions with weekly live build labs so you
                practice on real Roop Solar scenarios while staying accountable.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Morning primer: 6-minute video walkthrough",
                  "Guided prompt, research, or design mission",
                  "Reflection scorecard to celebrate progress",
                  "Friday live lab with focused implementation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 p-3"
                  >
                    <CheckIcon />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                Bonus: Receive the Roop Solar AI Playbook, a living Notion hub
                packed with workflows, policies, and brand-safe prompt libraries.
              </p>
            </div>
          </div>
        </header>

        <section
          id="curriculum"
          className="grid gap-8 lg:grid-cols-4 lg:gap-6"
        >
          {cohorts.map((cohort) => (
            <article
              key={cohort.title}
              className={`${borderClass} rounded-3xl p-6`}
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
                {cohort.title}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {cohort.focus}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {cohort.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-[6px] block h-1.5 w-1.5 flex-none rounded-full bg-sky-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
                The Tools You Master
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Five platforms, one confident operator
              </h2>
            </div>
            <p className="max-w-2xl text-base text-slate-300">
              We curated the challenge around the exact AI platforms that unlock
              compounding leverage for solar founders. Each card highlights the
              practical wins you will deliver in less than a month.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <article
                key={tool.name}
                className={`${borderClass} relative overflow-hidden rounded-3xl p-7`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tool.accent}`}
                />
                <div className="relative z-10 flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-base font-semibold text-white">
                    {tool.short}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-200">{tool.tagline}</p>
                  </div>
                </div>
                <p className="relative z-10 mt-5 text-sm text-slate-100">
                  {tool.description}
                </p>
                <ul className="relative z-10 mt-6 space-y-2 text-sm text-slate-100">
                  {tool.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckIcon />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.headline}
              className={`${borderClass} rounded-3xl p-8`}
            >
              <h3 className="text-xl font-semibold text-white">
                {reason.headline}
              </h3>
              <p className="mt-4 text-base text-slate-200">{reason.copy}</p>
            </article>
          ))}
        </section>

        <section className={`${borderClass} rounded-3xl p-10 lg:p-14`}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
                Voices From the Last Cohort
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Built for leaders who move fast and think long-term
              </h2>
              <p className="text-base text-slate-300">
                Expect candid conversations, not hype. Each live lab is a safe
                space to troubleshoot adoption, share wins, and benchmark your AI
                journey with peers who understand the stakes.
              </p>
            </div>
            <div className="space-y-6">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-white/10 p-6 text-slate-100"
                >
                  <blockquote className="text-lg leading-relaxed">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-slate-200">
                    <span className="font-semibold text-white">
                      {item.name}
                    </span>{" "}
                    · {item.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={`${borderClass} rounded-3xl p-10`} id="join">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">
                Join the challenge
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Secure your seat in the November cohort
              </h2>
              <p className="text-base text-slate-300">
                Enrollment closes once we hit 40 founders to keep live labs
                intimate and high-impact. Save your seat and receive onboarding
                within 24 hours.
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                {[
                  "Full 28-day curriculum with daily micro-missions",
                  "Weekly live build labs with recordings",
                  "Roop Solar AI Playbook + template collection",
                  "Accountability pod for momentum and feedback",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.9)]">
              <form
                className="space-y-6"
                action="https://formsubmit.co/hello@roopsolar.com"
                method="POST"
              >
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-white"
                    htmlFor="name"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                    placeholder="Asha Rao"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-white"
                    htmlFor="email"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                    placeholder="founder@roopsolar.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-white"
                    htmlFor="goal"
                  >
                    What&apos;s your priority win?
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows={3}
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                    placeholder="Launch a weekly LinkedIn series and automate market research."
                  />
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Reserve My Seat
                </button>
                <p className="text-xs text-slate-300">
                  We respect your time and inbox. Expect one confirmation email
                  plus a kickoff reminder.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className={`${borderClass} rounded-3xl p-7`}
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm text-slate-200">{faq.answer}</p>
            </article>
          ))}
        </section>
      </main>
      <footer className="border-t border-white/10 bg-slate-900/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Roop Solar. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:hello@roopsolar.com"
              className="transition hover:text-slate-100"
            >
              hello@roopsolar.com
            </Link>
            <Link
              href="#join"
              className="transition hover:text-slate-100"
            >
              Join the Challenge
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
