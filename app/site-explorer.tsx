"use client";

import { useMemo, useState } from "react";
import { categories, sites, type Category } from "./data";

const PAGE_SIZE = 12;

function domainOf(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function initialsOf(name: string) {
  const letters = name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z0-9]/.test(word))
    .map((word) => word[0]);
  return letters.slice(0, 2).join("").toUpperCase();
}

export default function SiteExplorer() {
  const [active, setActive] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sites.filter(
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
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((site) => (
            <li key={site.url}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-4 transition hover:-translate-y-0.5 hover:border-brand-blue/60 hover:bg-ink-900"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-indigo-600 font-display text-lg font-bold text-white">
                  {initialsOf(site.name)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-semibold text-white">{site.name}</span>
                  <span className="block truncate text-sm text-slate-400">
                    {site.niche ?? site.category}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-brand-blue-light">
                    {domainOf(site.url)}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-yellow"
                >
                  ↗
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
