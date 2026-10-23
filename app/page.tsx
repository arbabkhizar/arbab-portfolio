import Image from "next/image";
import heroPortrait from "@/public/images/arbab-hero.png";
import aboutPortrait from "@/public/images/arbab-about.png";
import SiteExplorer from "./site-explorer";
import {
  experience,
  featured,
  ongoing,
  profile,
  services,
  skillGroups,
  stats,
} from "./data";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const highlights = [
  "Custom WordPress Websites",
  "Elementor & Divi Page Builders",
  "WooCommerce Stores",
  "SEO Friendly & Fast Loading",
];

const serviceIcons = [
  // code
  <path key="i" d="m8 9-4 3 4 3m8-6 4 3-4 3m-2.5-9-3 12" />,
  // puzzle / plugin
  <path key="i" d="M9 3h6v3a2 2 0 1 0 4 0h2v6h-3a2 2 0 1 0 0 4h3v5H3V9h3a2 2 0 1 0 0-4H3V3h6Z" />,
  // layout
  <path key="i" d="M3 4h18v16H3zM3 9h18M9 9v11" />,
  // cart
  <path key="i" d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 8H6.2M9 20h.01M17 20h.01" />,
  // gauge
  <path key="i" d="M12 14l4-4M4.9 19a9 9 0 1 1 14.2 0" />,
  // database
  <path key="i" d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />,
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="inline-block -skew-x-6 bg-brand-yellow px-3 py-1 font-display text-sm font-bold uppercase tracking-wider text-ink-950">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-extrabold uppercase italic leading-none tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 leading-7 text-slate-400">{text}</p>}
    </div>
  );
}

function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6 shrink-0 text-brand-yellow"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </svg>
  );
}

function WordPressMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-8.99 10c0-1.3.28-2.54.78-3.66l4.29 11.75A8.99 8.99 0 0 1 3.01 12ZM12 20.99c-.88 0-1.73-.13-2.54-.37l2.7-7.84 2.76 7.57.06.13c-.93.33-1.93.51-2.98.51Zm1.24-13.2c.54-.03 1.03-.09 1.03-.09.48-.06.43-.77-.06-.74 0 0-1.46.11-2.4.11-.88 0-2.37-.11-2.37-.11-.49-.03-.54.71-.06.74 0 0 .46.06.95.09l1.41 3.87-1.98 5.94-3.3-9.81c.55-.03 1.04-.09 1.04-.09.48-.06.43-.77-.06-.74 0 0-1.46.11-2.4.11h-.58A8.98 8.98 0 0 1 12 3.01c2.34 0 4.47.9 6.07 2.36h-.12c-.88 0-1.5.77-1.5 1.59 0 .74.43 1.37.88 2.11.34.6.74 1.37.74 2.48 0 .77-.3 1.66-.68 2.91l-.9 3-3.25-9.67Zm3.29 12.01 2.75-7.94c.51-1.28.68-2.31.68-3.22 0-.33-.02-.64-.06-.93A8.99 8.99 0 0 1 16.53 19.8Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[min(100%-2rem,100rem)] items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-display text-2xl font-extrabold italic tracking-tight text-white">
            ARBAB<span className="text-brand-yellow">.</span>
          </a>
          <nav aria-label="Main" className="hidden gap-5 text-sm font-medium text-slate-300 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-brand-yellow">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold text-ink-950 transition hover:bg-brand-yellow-light sm:px-5"
          >
            Hire me
          </a>
          <nav aria-label="Quick links" className="flex max-w-[58vw] gap-4 overflow-x-auto text-xs font-medium text-slate-300 sm:max-w-none lg:hidden">
            {nav.filter((item) => item.href !== "#contact").map((item) => (
              <a key={item.href} href={item.href} className="shrink-0 transition hover:text-brand-yellow">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="bg-grid absolute inset-0" />
          <div
            aria-hidden="true"
            className="absolute -right-40 top-10 size-[36rem] rounded-full bg-brand-blue/25 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="absolute -left-40 bottom-0 size-[28rem] rounded-full bg-indigo-600/20 blur-[120px]"
          />

          <div className="relative mx-auto grid max-w-[min(100%-2rem,100rem)] items-center gap-10 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
            <div>
              <p className="inline-block -skew-x-6 bg-brand-yellow px-4 py-1.5 font-display text-xl font-extrabold uppercase italic text-ink-950">
                Hi, I&apos;m
              </p>
              <h1 className="mt-4 font-display font-extrabold uppercase italic leading-[0.85] tracking-tight">
                <span className="block text-7xl text-white sm:text-8xl lg:text-[7.5rem]">Arbab</span>
                <span className="block text-7xl text-brand-yellow sm:text-8xl lg:text-[7.5rem]">Khizar</span>
              </h1>
              <p className="mt-6 inline-block -skew-x-6 bg-white px-5 py-2 font-display text-2xl font-extrabold uppercase italic tracking-wide text-ink-950 sm:text-3xl">
                Sr. WordPress Developer
              </p>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                I build fast, modern and responsive{" "}
                <span className="font-semibold text-brand-blue-light">WordPress</span> websites, from
                custom themes and plugins to WooCommerce stores, that look great and drive results.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-brand-yellow px-7 py-3.5 font-bold text-ink-950 shadow-lg shadow-brand-yellow/20 transition hover:bg-brand-yellow-light"
                >
                  View my work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:border-brand-yellow hover:text-brand-yellow"
                >
                  Let&apos;s build something
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-brand-blue to-indigo-700 blur-2xl opacity-60"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800">
                <Image
                  src={heroPortrait}
                  alt="Arbab Khizar working at his desk"
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 700px, 90vw"
                  className="aspect-[6/5] w-full object-cover object-[65%_center]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/90 to-transparent" />
              </div>

              <div className="absolute -left-4 top-8 grid size-20 place-items-center rounded-full bg-white text-[#21759b] shadow-xl shadow-brand-blue/40 sm:-left-8 sm:size-24">
                <WordPressMark className="size-14 sm:size-16" />
              </div>

              <div className="absolute -right-3 bottom-24 rounded-2xl border border-white/10 bg-ink-900/90 px-5 py-3 shadow-xl backdrop-blur sm:-right-6">
                <p className="font-display text-3xl font-extrabold italic text-brand-yellow">520+</p>
                <p className="text-xs uppercase tracking-wider text-slate-400">Projects delivered</p>
              </div>

              <div className="absolute -left-3 bottom-6 rounded-2xl border border-white/10 bg-ink-900/90 px-5 py-3 shadow-xl backdrop-blur sm:-left-6">
                <p className="font-display text-3xl font-extrabold italic text-white">
                  5+ <span className="text-brand-blue-light">yrs</span>
                </p>
                <p className="text-xs uppercase tracking-wider text-slate-400">Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section aria-label="Highlights" className="border-y border-white/10 bg-ink-900">
          <dl className="mx-auto grid max-w-[min(100%-2rem,100rem)] grid-cols-2 px-4 sm:px-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse py-8 text-center ${index % 2 === 1 ? "border-l border-white/10" : ""} ${
                  index > 1 ? "border-t border-white/10 md:border-t-0" : ""
                } md:border-l md:first:border-l-0`}
              >
                <dt className="mt-1 text-sm text-slate-400">{stat.label}</dt>
                <dd className="font-display text-4xl font-extrabold italic text-brand-yellow md:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-[min(100%-2rem,100rem)] px-4 py-24 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div className="relative mx-auto w-full max-w-xl">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rotate-3 rounded-[2rem] border-2 border-brand-yellow/70"
              />
              <Image
                src={aboutPortrait}
                alt="Arbab Khizar in his workspace"
                placeholder="blur"
                sizes="(min-width: 1024px) 560px, 94vw"
                className="relative aspect-[6/5] w-full rounded-[2rem] object-cover object-top"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="About me"
                title={
                  <>
                    Turning ideas into <span className="text-brand-yellow">websites that work</span>
                  </>
                }
              />
              <p className="mt-6 leading-8 text-slate-300">{profile.summary}</p>
              <p className="mt-4 leading-8 text-slate-400">
                Since 2021 I&apos;ve worked with Lahore IT companies Epazz Inc., E1SOL and Devtics
                Technologies, as well as directly with clients in the US, UK, Australia and Europe,
                delivering 520+ projects for law firms, real estate agencies, online stores, clinics,
                agencies and local service businesses. I&apos;m meticulous, detail-oriented and
                always up to date with emerging technologies.
              </p>

              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">Based in</dt>
                  <dd className="mt-1 font-semibold text-white">{profile.location}</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">Education</dt>
                  <dd className="mt-1 font-semibold text-white">BS Physics, COMSATS</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">Languages</dt>
                  <dd className="mt-1 font-semibold text-white">English, Urdu</dd>
                </div>
              </dl>

              <p className="mt-6 text-sm text-slate-500">
                Outside of code: graphics, exploring new tech, playing guitar and driving.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-white/5 bg-ink-900/50">
          <div className="mx-auto max-w-[min(100%-2rem,100rem)] px-4 py-24 sm:px-6">
            <SectionHeading
              eyebrow="What I do"
              title={
                <>
                  Services built for <span className="text-brand-yellow">growth</span>
                </>
              }
              text="End-to-end WordPress development: from the first layout to custom functionality, store setup and performance tuning."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-ink-950/60 p-7 transition hover:-translate-y-1 hover:border-brand-yellow/50"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-brand-blue/15 text-brand-blue-light transition group-hover:bg-brand-yellow group-hover:text-ink-950">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="size-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {serviceIcons[index]}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-2 leading-7 text-slate-400">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured work */}
        <section id="work" className="mx-auto max-w-[min(100%-2rem,100rem)] px-4 py-24 sm:px-6">
          <div className="mt-12">
            <SectionHeading
            eyebrow="Featured work"
            title={
              <>
                Selected <span className="text-brand-yellow">projects</span>
              </>
            }
            text="A few highlights from client websites I've designed and developed. Every project is live; click through to see it."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <article
                key={project.name}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 transition hover:border-brand-yellow/50"
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-6 font-display text-[7rem] font-extrabold italic leading-none text-white/[0.04]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#11182b]">
                  <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#17223b] via-[#10172a] to-[#2a2340]" />
                  <img
                    src={project.previewImage ?? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=1200`}
                    alt={`First look at ${project.name} website`}
                    loading="lazy"
                    className="absolute inset-0 size-full object-contain object-top transition duration-500 group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink-950/50 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-yellow">
                  {project.niche}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-white">{project.name}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue-light"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white transition after:absolute after:inset-0 group-hover:text-brand-yellow"
                  >
                    Visit site <span aria-hidden="true">↗</span>
                  </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          </div>

          <div className="mt-20 grid items-center gap-8 rounded-3xl border border-white/10 bg-ink-900/60 p-5 sm:p-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="inline-block -skew-x-6 bg-brand-yellow px-3 py-1 font-display text-sm font-bold uppercase tracking-wider text-ink-950">
                Meet Arbab
              </p>
              <h3 className="mt-4 font-display text-4xl font-extrabold uppercase italic leading-none tracking-tight text-white md:text-5xl">
                A quick introduction
              </h3>
              <p className="mt-4 leading-7 text-slate-400">
                Watch my short video to learn more about my work and how I help businesses build better websites.
              </p>
            </div>
            <div className="flex justify-center">
              <iframe
                className="aspect-[9/16] w-full max-w-[320px] rounded-2xl border border-white/10 bg-black shadow-2xl"
                src="https://www.youtube-nocookie.com/embed/1v4-kB8T-Z0"
                title="Arbab Khizar portfolio introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-24">
            <SectionHeading
              eyebrow="Portfolio"
              title={
                <>
                  More websites I&apos;ve <span className="text-brand-yellow">built</span>
                </>
              }
              text="Browse a wider selection of live client sites by industry, or search for a specific niche."
            />
            <div className="mt-10">
              <SiteExplorer />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-white/5 bg-ink-900/50">
          <div className="mx-auto max-w-[min(100%-2rem,100rem)] px-4 py-24 sm:px-6">
            <SectionHeading
              eyebrow="Experience"
              title={
                <>
                  5+ years of <span className="text-brand-yellow">WordPress</span>
                </>
              }
            />

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <ol className="relative space-y-10 border-l border-white/10 pl-8">
                {experience.map((job, index) => (
                  <li key={job.company} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[2.45rem] top-1.5 size-4 rounded-full border-4 border-ink-900 ${
                        index === 0 ? "bg-brand-yellow" : "bg-brand-blue"
                      }`}
                    />
                    <p className="text-sm font-medium text-brand-blue-light">{job.period}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-slate-400">{job.company} · Lahore, Pakistan</p>
                    <ul className="mt-3 space-y-1.5">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2 text-slate-300">
                          <span aria-hidden="true" className="text-brand-yellow">
                            ▸
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>

              <div className="space-y-6">
                <div className="rounded-3xl border border-brand-yellow/30 bg-brand-yellow/[0.04] p-7">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-yellow">
                    <span className="relative flex size-2.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-yellow opacity-75" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-brand-yellow" />
                    </span>
                    Ongoing project
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-white">{ongoing.name}</h3>
                  <p className="text-slate-400">{ongoing.niche}</p>
                  <p className="mt-3 font-medium text-slate-200">{ongoing.role}</p>
                  <ul className="mt-3 space-y-1.5">
                    {ongoing.points.map((point) => (
                      <li key={point} className="flex gap-2 text-slate-300">
                        <span aria-hidden="true" className="text-brand-yellow">
                          ▸
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={ongoing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block font-semibold text-brand-yellow hover:text-brand-yellow-light"
                  >
                    othership.com <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="rounded-3xl border border-white/10 bg-ink-950/60 p-7">
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue-light">
                    Education
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">BS Physics</h3>
                  <p className="text-slate-400">COMSATS University Islamabad, Lahore Campus</p>
                  <p className="mt-1 text-sm text-slate-500">Jan 2018 – Jan 2022</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-[min(100%-2rem,100rem)] px-4 py-24 sm:px-6">
          <SectionHeading
            eyebrow="Skills"
            title={
              <>
                Tools of the <span className="text-brand-yellow">trade</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-ink-900/60 p-7">
                <h3 className="font-display text-xl font-bold uppercase italic tracking-wide text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 pb-24 sm:px-6">
          <div className="relative mx-auto max-w-[min(100%-2rem,100rem)] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-blue via-indigo-700 to-ink-800 px-6 py-16 sm:px-12 md:py-20">
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="inline-block -skew-x-6 bg-brand-yellow px-3 py-1 font-display text-sm font-bold uppercase tracking-wider text-ink-950">
                  Get in touch
                </p>
                <h2 className="mt-4 font-display text-5xl font-extrabold uppercase italic leading-[0.9] tracking-tight text-white md:text-6xl">
                  Let&apos;s build something <span className="text-brand-yellow">amazing!</span>
                </h2>
                <p className="mt-5 max-w-lg leading-7 text-blue-100/90">
                  Need a new website, a WooCommerce store, a custom plugin or a faster, better-ranking
                  site? Tell me about your project and I&apos;ll get back to you quickly.
                </p>
                <a
                  href={`mailto:${profile.email}?subject=Website%20project%20inquiry`}
                  className="mt-8 inline-block rounded-full bg-brand-yellow px-8 py-4 font-bold text-ink-950 shadow-lg shadow-ink-950/30 transition hover:bg-brand-yellow-light"
                >
                  Start a project
                </a>
              </div>

              <ul className="space-y-3">
                {[
                  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                  { label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
                  { label: "LinkedIn", value: "arbab-khizar", href: profile.linkedin },
                  { label: "Location", value: profile.location },
                ].map((item) => {
                  const body = (
                    <>
                      <span className="text-xs uppercase tracking-wider text-blue-200/70">
                        {item.label}
                      </span>
                      <span className="block break-all font-semibold text-white">{item.value}</span>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="block rounded-2xl border border-white/15 bg-ink-950/30 px-5 py-4 backdrop-blur transition hover:border-brand-yellow hover:bg-ink-950/50"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="rounded-2xl border border-white/15 bg-ink-950/30 px-5 py-4 backdrop-blur">
                          {body}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[min(100%-2rem,100rem)] flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6">
          <p>© 2026 Arbab Khizar. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <WordPressMark className="size-4 text-slate-400" />
            WordPress Expert · Lahore, Pakistan
          </p>
        </div>
      </footer>
    </>
  );
}




