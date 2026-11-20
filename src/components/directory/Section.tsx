import type { CSSProperties } from "react";
import type { Category } from "@/data/resources";
import { useInView } from "@/lib/useInView";
import Card from "../card/Card";
import ChannelCard from "../card/ChannelCard";

interface SectionProps {
  category: Category;
  /** Position in the full list, so numbering stays stable while filtering. */
  index: number;
}

// Cards fade up one after another. Past this many the stagger stops growing,
// so a long section doesn't keep you waiting for its last row.
const MAX_STAGGER = 10;

const Section = ({ category, index }: SectionProps) => {
  const { id, title, blurb, layout, items } = category;
  const headingId = `section-${id}`;
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={inView ? "section is-in" : "section"}
      aria-labelledby={headingId}
    >
      <header className="section__head">
        <span className="section__index">{String(index).padStart(2, "0")}</span>
        <h2 id={headingId} className="section__title">
          {title}
        </h2>
        <p className="section__blurb">{blurb}</p>
      </header>

      <div className={layout === "channel" ? "grid grid--channels" : "grid grid--cards"}>
        {items.map((r, i) => (
          <div
            key={r.link}
            className="grid__item"
            style={{ "--i": Math.min(i, MAX_STAGGER) } as CSSProperties}
          >
            {layout === "channel" ? <ChannelCard resource={r} /> : <Card resource={r} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
