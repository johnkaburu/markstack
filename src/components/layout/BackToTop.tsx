import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToTarget } from "@/lib/smoothScroll";
import "./layout.scss";

/** Appears once you're well into the list; glides back to the top. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={visible ? "to-top is-visible" : "to-top"}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => scrollToTarget(0)}
    >
      <ArrowUp size={18} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
