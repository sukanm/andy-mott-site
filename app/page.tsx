import { DigitalTwinChat } from "@/components/DigitalTwinChat";

export default function Home() {
  const journey = [
    {
      company: "Next Pathway",
      role: "EMEA VP of Sales Engineering",
      period: "Dec 2024 - Present",
      impact:
        "Leading EMEA growth for cloud migration automation and helping enterprises modernize analytics and AI ecosystems faster.",
    },
    {
      company: "Keboola",
      role: "EMEA Field CTO",
      period: "Apr 2024 - Dec 2024",
      impact:
        "Drove self-service data management positioning, partner enablement, and technical GTM messaging across EMEA.",
    },
    {
      company: "Starburst",
      role: "Head of Partner Solutions Architecture, Data Mesh Practice Lead",
      period: "Aug 2021 - Apr 2024",
      impact:
        "Built EMEA/APAC partner architecture function from the ground up and supported partner-led growth above industry averages.",
    },
    {
      company: "AtScale",
      role: "Senior Sales Engineer",
      period: "May 2019 - Mar 2021",
      impact:
        "Scaled EMEA presales and post-sales motions, supporting significant pipeline expansion and year-over-year revenue growth.",
    },
    {
      company: "Arcadia Data + HPE + SAS",
      role: "Field CTO, Principal, and Enterprise Architecture Leadership Roles",
      period: "2000 - 2019",
      impact:
        "Spent nearly two decades shaping enterprise analytics architecture, leading strategic programs, and delivering high-impact outcomes.",
    },
  ];

  const focusAreas = [
    "Go-to-market leadership for data and AI platforms",
    "Enterprise architecture and composable data strategy",
    "Sales engineering, technical partnerships, and field enablement",
    "Technical storytelling that translates complexity into business value",
  ];

  const portfolioSignals = [
    "Keynotes and conference sessions",
    "Books, courses, and editorial content",
    "Strategic advisory and mentoring engagements",
    "Enterprise transformation case studies",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827_0%,_#020617_35%,_#000000_100%)] text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10">
        <header className="mb-16 flex items-center justify-between">
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Andy Mott
          </div>
          <a
            href="https://www.linkedin.com/in/andyjmott"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-300/50 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/10"
          >
            LinkedIn
          </a>
        </header>

        <main className="space-y-20">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="relative">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-200/80">
                Data Contrarian | Presales Leader | Author | Speaker
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Enterprise rigor.
                <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {" "}
                  Challenger mindset.
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">
                With 20+ years across data, analytics, and enterprise
                architecture, I build high-impact go-to-market functions that
                turn technical depth into commercial momentum for modern AI and
                data platforms.
              </p>
            </div>
          </section>

          <section id="about" className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-white">About Me</h2>
              <p className="mt-4 text-zinc-300">
                I specialize in connecting product, partnerships, and field
                teams so they move in lockstep around customer outcomes.
                Whether advising enterprise buyers or enabling global partner
                ecosystems, my focus is practical strategy with measurable
                impact.
              </p>
            </div>
            <div className="space-y-4 md:col-span-3">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="digital-twin">
            <DigitalTwinChat />
          </section>

          <section id="journey">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Career Journey
            </h2>
            <div className="space-y-4">
              {journey.map((role) => (
                <article
                  key={`${role.company}-${role.period}`}
                  className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {role.role}
                    </h3>
                    <span className="text-sm text-cyan-200">{role.period}</span>
                  </div>
                  <p className="mt-1 text-sm uppercase tracking-wider text-zinc-400">
                    {role.company}
                  </p>
                  <p className="mt-3 text-zinc-300">{role.impact}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
              <h2 className="text-2xl font-semibold text-white">
                Thought Leadership
              </h2>
              <p className="mt-3 text-zinc-300">
                Published author and regular speaker on data mesh, composable
                architectures, and AI/ML enablement.
              </p>
              <ul className="mt-4 space-y-2 text-zinc-200">
                <li>Data Mesh for Dummies</li>
                <li>Data Products for Dummies</li>
                <li>Data Virtualization in the Cloud Era</li>
              </ul>
            </article>

            <article
              id="portfolio"
              className="rounded-2xl border border-cyan-300/30 bg-cyan-950/20 p-6"
            >
              <h2 className="text-2xl font-semibold text-white">
                Portfolio (In Progress)
              </h2>
              <p className="mt-3 text-zinc-300">
                This section is designed to grow into a full portfolio of work,
                with deep dives into strategy, GTM execution, and transformation
                outcomes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {portfolioSignals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full border border-cyan-200/40 px-3 py-1 text-sm text-cyan-100"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </article>
          </section>
        </main>

        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-zinc-400">
          <p>
            Crowthorne, United Kingdom ·{" "}
            <a
              className="text-cyan-200 hover:text-cyan-100"
              href="mailto:andrewmott@me.com"
            >
              andrewmott@me.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
