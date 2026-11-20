import { categories, totalResources } from "@/data/resources";
import "./layout.scss";

const Hero = () => (
  <section className="page hero">
    <p className="hero__eyebrow">
      Frontend bookmarks <span aria-hidden="true">·</span> {totalResources} links in{" "}
      {categories.length} categories
    </p>
    <h1 className="hero__title">
      The links I keep <span className="hero__underline">coming back to</span>.
    </h1>
    <p className="hero__lead">
      A shelf of frontend resources collected while building for the web: generators, icon
      sets, UI kits, fonts, and the channels that taught me most of it. Added to whenever
      something earns a permanent tab.
    </p>
  </section>
);

export default Hero;
