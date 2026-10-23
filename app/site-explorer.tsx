"use client";

import { useMemo, useState } from "react";
import { categories, sites, type Category } from "./data";

const PAGE_SIZE = 12;

function domainOf(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function SiteExplorer() {
  const [active, setActive] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...sites].reverse().filter(
      (site) =>
        (active === "All" || site.category === active) &&
        (!q ||
          site.name.toLowerCase().includes(q) ||
          site.niche?.toLowerCase().includes(q) ||
          site.url.toLowerCase().includes(q)),
    );
  }, [active, query]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const site of sites) map.set(site.category, (map.get(site.category) ?? 0) + 1);
    return map;
  }, []);

  const shown = filtered.slice(0, visible);

  function choose(category: Category | "All") {
    setActive(category);
    setVisible(PAGE_SIZE);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
          {(["All", ...categories] as const).map((category) => {
            const isActive = active === category;
            const count = category === "All" ? sites.length : (counts.get(category) ?? 0);
            return (
              <button
                key={category}
                type="button"
                onClick={() => choose(category)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-brand-yellow bg-brand-yellow text-ink-950"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-brand-yellow/60 hover:text-white"
                }`}
              >
                {category}
                <span className={`ml-2 text-xs ${isActive ? "text-ink-950/70" : "text-slate-500"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Search websites</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search by name or niche…"
            className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-brand-yellow focus:outline-none"
          />
        </label>
      </div>

      {shown.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-white/10 p-10 text-center text-slate-400">
          No websites match “{query}”.
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((site) => (
            <li key={site.url}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${site.name} website`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 transition duration-300 hover:-translate-y-1 hover:border-brand-yellow/50 hover:shadow-2xl hover:shadow-brand-yellow/5"
              >
                <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-[#11182b]">
                  {site.previewImage ? (
                    <img
                      src={site.previewImage}
                      alt={`First look at ${site.name} website`}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
                    />
                  ) : site.previewBlocked ? (
                    <div className="relative z-10 flex size-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#243b73_0%,_#11182b_50%,_#080d1c_100%)] p-6 text-center">
                      <div aria-hidden="true" className="absolute -right-10 -top-14 size-48 rounded-full border border-white/10" />
                      <div aria-hidden="true" className="absolute -right-4 -top-8 size-36 rounded-full border border-white/10" />
                      <span className="font-display text-5xl font-extrabold italic text-white">{site.name}</span>
                      <span className="mt-3 text-sm text-slate-300">{site.niche ?? site.category}</span>
                      <span className="mt-6 rounded-full border border-white/15 bg-ink-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                        Live preview unavailable
                      </span>
                    </div>
                  ) : (
                    <>
                      <div aria-hidden="true" className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#17223b] via-[#10172a] to-[#2a2340]" />
                      <img
                        src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(site.url)}?w=960`}
                        alt={`First look at ${site.name} website`}
                        loading="lazy"
                        className="absolute inset-0 size-full object-contain object-top transition duration-500 group-hover:scale-[1.015]"
                        onError={(event) => event.currentTarget.remove()}
                      />
                    </>
                  )}
                  <span className="absolute left-3 top-3 z-20 rounded-full border border-white/15 bg-ink-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
                    {site.category}
                  </span>
                </div>
                <span className="flex flex-1 items-center gap-4 p-5">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display text-xl font-bold text-white transition group-hover:text-brand-yellow">{site.name}</span>
                    <span className="mt-1 block truncate text-sm text-slate-400">
                      {site.niche ?? site.category}
                    </span>
                    <span className="mt-2 block truncate text-xs text-brand-blue-light">
                      {domainOf(site.url)}
                    </span>
                  </span>
                  <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 text-lg text-slate-300 transition group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-ink-950">
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {filtered.length > visible && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisible((value) => value + PAGE_SIZE)}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-yellow hover:text-brand-yellow"
          >
            Show more ({filtered.length - visible} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
