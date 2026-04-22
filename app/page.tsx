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

  const articles = [
    { title: "Data-driven innovation: If you want to innovate with data, this is what you should do!", source: "Starburst", date: "Nov 2023", url: "https://www.starburst.io/blog/data-driven-innovation/" },
    { title: "Artificial intelligence life cycle", source: "Starburst", date: "Nov 2023", url: "https://www.starburst.io/blog/ai-life-cycle/" },
    { title: "Why data products are critical to ESG", source: "Starburst", date: "Aug 2023", url: "https://www.starburst.io/blog/data-products-esg-environmental-governance/" },
    { title: "Build great data products and reduce cognitive load", source: "Starburst", date: "2023", url: "https://www.starburst.io/blog/build-great-data-products-and-reduce-cognitive-load/" },
    { title: "Meeting the Demands of Today's Data-Rich Retail Environment with Data Mesh", source: "Retail Touch Points", date: "May 2022", url: "https://www.retailtouchpoints.com/topics/customer-engagement/meeting-the-demands-of-todays-data-rich-retail-environment-with-data-mesh" },
    { title: "Driving Faster Insights with a Data Mesh", source: "RTInsights", date: "Jan 2022", url: "https://www.rtinsights.com/driving-faster-insights-with-a-data-mesh/" },
    { title: "Data Mesh and Starburst: Federated Computational Governance", source: "Starburst", date: "Jan 2022", url: "https://www.starburst.io/blog/data-mesh-and-starburst-federated-computational-governance/" },
    { title: "Data Mesh and Starburst: Self-Service Data Infrastructure", source: "Starburst", date: "Dec 2021", url: "https://www.starburst.io/blog/data-mesh-starburst-self-service-data-infrastructure/" },
    { title: "Data Mesh and Starburst: Data as a Product", source: "Starburst", date: "Oct 2021", url: "https://www.starburst.io/blog/data-mesh-and-starburst-data-as-a-product/" },
    { title: "Data Mesh and Starburst: Domain-oriented Ownership & Architecture", source: "Starburst", date: "Oct 2021", url: "https://www.starburst.io/blog/data-mesh-architecture/" },
  ];

  const mediumPosts = [
    { title: "A Collection of Videos", date: "Mar 2026", url: "https://medium.com/@andy-mott/a-collection-of-videos-d197ac2655dc", description: "Talks given over the years collected in one place" },
    { title: "I Love It When a Plan Comes Together", date: "Jan 2026", url: "https://medium.com/@andy-mott/i-love-it-when-a-plan-comes-together-6cb2f8463498", description: "On networking and unsolicited LinkedIn messages" },
    { title: "Cycling for Cancer Research", date: "Sep 2025", url: "https://medium.com/@andy-mott/cycling-for-cancer-research-c9c9099c9c7d", description: "Fundraising and charity event reflections" },
    { title: "AI & Children", date: "Jun 2025", url: "https://medium.com/@andy-mott/ai-children-5801d14d0820", description: "Speaking to a class of 11-year-olds about AI" },
    { title: "Code Translation", date: "Jun 2025", url: "https://medium.com/@andy-mott/code-translation-3aca8c05411e", description: "Can LLMs really handle code migration? A critical view" },
    { title: "The Death of the Modern Data Stack?", date: "May 2025", url: "https://medium.com/@andy-mott/the-death-of-the-mds-3938f3d0bf60", description: "The cyclical nature of data infrastructure and what comes next" },
    { title: "Moving to the Cloud: Why Migrate?", date: "Jan 2025", url: "https://medium.com/@andy-mott/moving-to-the-cloud-15ab05036728", description: "Part 1 of a series on cloud migration benefits" },
  ];

  const talks = [
    { title: "The Realities Of Data Mesh – How To Drive Value And Engagement From Your Data Products", event: "Big Data LDN", date: "Sep 2022", url: "https://www.youtube.com/watch?v=bVz9sCc5h9g" },
    { title: "Is Data Mesh the End of Data Engineering?", event: "Datanova 2023", date: "2023", url: "https://www.starburst.io/resources/is-data-mesh-the-end-of-data-engineering-datanova-2023/" },
    { title: "Data Products – What Does It Mean for Your Business?", event: "Data Mesh Book Club S2E5", date: "2022", url: "https://www.starburst.io/resources/season-2-episode-5-data-products-what-does-it-mean-for-your-business/" },
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
              <h2 className="text-2xl font-semibold text-white">Books</h2>
              <p className="mt-3 text-zinc-300">
                Published author on data mesh, composable architectures, and AI/ML enablement.
              </p>
              <ul className="mt-4 space-y-2 text-zinc-200">
                <li>AI Data Management for Dummies <span className="text-zinc-500 text-xs">Keboola Special Edition, 2024</span></li>
                <li>Data Products for Dummies <span className="text-zinc-500 text-xs">2023</span></li>
                <li>Data Mesh for Dummies <span className="text-zinc-500 text-xs">2022</span></li>
                <li>Data Virtualization in the Cloud Era <span className="text-zinc-500 text-xs">O'Reilly</span></li>
              </ul>
            </article>

            <article id="portfolio" className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
              <h2 className="text-2xl font-semibold text-white">Talks &amp; Conference Sessions</h2>
              <div className="mt-4 space-y-4">
                {talks.map((talk) => (
                  <a
                    key={talk.url}
                    href={talk.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-zinc-800/50 p-4 transition hover:border-cyan-300/30 hover:bg-cyan-950/20"
                  >
                    <span className="text-sm font-medium text-zinc-100 group-hover:text-cyan-200 transition">{talk.title}</span>
                    <span className="text-xs text-zinc-500">{talk.event} · {talk.date}</span>
                  </a>
                ))}
              </div>
            </article>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
              <h2 className="text-2xl font-semibold text-white">Articles</h2>
              <p className="mt-1 text-sm text-zinc-400">Published across Starburst, RTInsights, and trade press</p>
              <div className="mt-4 space-y-2">
                {articles.map((a) => (
                  <a
                    key={a.url}
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-950/20"
                  >
                    <span className="text-sm text-zinc-200 group-hover:text-cyan-200 transition leading-snug">{a.title}</span>
                    <span className="shrink-0 text-xs text-zinc-500 pt-0.5">{a.date}</span>
                  </a>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
              <h2 className="text-2xl font-semibold text-white">Blog</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Personal writing on{" "}
                <a href="https://medium.com/@andy-mott" target="_blank" rel="noreferrer" className="text-cyan-300/80 hover:text-cyan-200">Medium</a>
              </p>
              <div className="mt-4 space-y-2">
                {mediumPosts.map((post) => (
                  <a
                    key={post.url}
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-0.5 rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3 transition hover:border-cyan-300/30 hover:bg-cyan-950/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-medium text-zinc-200 group-hover:text-cyan-200 transition leading-snug">{post.title}</span>
                      <span className="shrink-0 text-xs text-zinc-500 pt-0.5">{post.date}</span>
                    </div>
                    <span className="text-xs text-zinc-500">{post.description}</span>
                  </a>
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
