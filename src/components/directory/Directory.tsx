import { useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { categories, type Category, type CategoryId, type Resource } from "@/data/resources";
import { hostname } from "@/lib/url";
import { SUGGEST_URL } from "@/lib/site";
import { scrollToTarget } from "@/lib/smoothScroll";
import Section from "./Section";
import "./directory.scss";

type Filter = "all" | CategoryId;

const validIds = new Set<string>(categories.map((c) => c.id));

// The active category is mirrored in the URL hash (#fonts, #youtube...) so a
// filtered view can be linked to and survives a refresh.
function filterFromHash(): Filter {
  const id = window.location.hash.slice(1);
  return validIds.has(id) ? (id as CategoryId) : "all";
}

function matches(resource: Resource, query: string): boolean {
  if (!query) return true;
  const haystack = `${resource.label} ${resource.description ?? ""} ${hostname(resource.link)}`;
  return haystack.toLowerCase().includes(query);
}

const Directory = () => {
  const [filter, setFilter] = useState<Filter>(filterFromHash);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const searchRef = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const shelvesRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  // Back/forward buttons and hand-edited hashes.
  useEffect(() => {
    const onHashChange = () => setFilter(filterFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filtered: Category[] = useMemo(
    () =>
      categories.map((c) => ({
        ...c,
        items: c.items.filter((r) => matches(r, deferredQuery)),
      })),
    [deferredQuery]
  );
  const counts = filtered.map((c) => c.items.length).join(",");

  // The highlighted pill slides between category buttons instead of jumping.
  // Re-measured when counts change (button widths change with them) and on resize.
  useLayoutEffect(() => {
    const nav = shelvesRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;

    const place = () => {
      const active = nav.querySelector<HTMLElement>('[aria-pressed="true"]');
      if (!active) return;
      pill.style.width = `${active.offsetWidth}px`;
      pill.style.height = `${active.offsetHeight}px`;
      pill.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
    };
    place();
    // Only animate after the first placement, so it doesn't slide in from 0 on load.
    const raf = requestAnimationFrame(() => pill.classList.add("is-ready"));

    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", place);
    };
  }, [filter, counts]);

  // On narrow screens the category row scrolls; keep the active one visible.
  useEffect(() => {
    shelvesRef.current
      ?.querySelector('[aria-pressed="true"]')
      ?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [filter]);

  // "/" jumps to search, Escape clears it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.closest("input, textarea, [contenteditable]");
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visible = filtered.filter(
    (c) => (filter === "all" || c.id === filter) && c.items.length > 0
  );
  const totalMatches = filtered.reduce((n, c) => n + c.items.length, 0);

  const choose = (next: Filter) => {
    setFilter(next);
    const url = next === "all" ? window.location.pathname + window.location.search : `#${next}`;
    history.replaceState(null, "", url);
    // If the bar is stuck to the top, bring the start of the list back into view.
    const top = topRef.current;
    if (top && top.getBoundingClientRect().top < 0) {
      scrollToTarget(top);
    }
  };

  return (
    <div className="directory" ref={topRef}>
      <div className="filter-bar">
        <div className="page filter-bar__inner">
          <nav className="shelves" aria-label="Categories" ref={shelvesRef}>
            <span className="shelves__pill" ref={pillRef} aria-hidden="true" />
            <button
              type="button"
              className="shelf"
              aria-pressed={filter === "all"}
              onClick={() => choose("all")}
            >
              All <span className="shelf__count">{totalMatches}</span>
            </button>
            {filtered.map((c) => (
              <button
                key={c.id}
                type="button"
                className="shelf"
                aria-pressed={filter === c.id}
                disabled={c.items.length === 0}
                onClick={() => choose(c.id)}
              >
                {c.title} <span className="shelf__count">{c.items.length}</span>
              </button>
            ))}
          </nav>

          <label className="search">
            <span className="visually-hidden">Search bookmarks</span>
            <Search className="search__icon" aria-hidden="true" size={16} strokeWidth={1.75} />
            <input
              ref={searchRef}
              type="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setQuery("");
                  e.currentTarget.blur();
                }
              }}
              autoComplete="off"
              spellCheck={false}
            />
            {query ? (
              <button
                type="button"
                className="search__clear"
                aria-label="Clear search"
                onClick={() => {
                  setQuery("");
                  searchRef.current?.focus();
                }}
              >
                <X size={14} strokeWidth={2} aria-hidden="true" />
              </button>
            ) : (
              <kbd className="search__hint" aria-hidden="true">/</kbd>
            )}
          </label>
        </div>
      </div>

      {/* Keyed by filter: switching categories remounts the list and replays the entrance. */}
      <div className="page directory__sections" key={filter}>
        {visible.length > 0 ? (
          visible.map((c) => (
            <Section
              key={c.id}
              category={c}
              index={categories.findIndex((x) => x.id === c.id) + 1}
            />
          ))
        ) : (
          <div className="empty">
            <p className="empty__title">Nothing here for “{query.trim()}”.</p>
            <p className="empty__body">
              Try a shorter word
              {filter !== "all" && (
                <>
                  ,{" "}
                  <button type="button" onClick={() => choose("all")}>
                    look in every category
                  </button>
                </>
              )}
              , or{" "}
              <a href={SUGGEST_URL} target="_blank" rel="noopener noreferrer">
                suggest it on GitHub
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
