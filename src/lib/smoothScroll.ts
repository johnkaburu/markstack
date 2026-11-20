import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Inertia ("buttery") scrolling for wheel and trackpad. Touch devices keep
 * their native scrolling, and people who ask for reduced motion get none of it.
 * Lenis drives the real window scroll, so `position: sticky`, anchors and
 * IntersectionObserver keep working as usual.
 */
let lenis: Lenis | null = null;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function startSmoothScroll(): () => void {
  if (lenis || reducedMotion()) return () => {};

  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });

  let frame = 0;
  const raf = (time: number) => {
    lenis?.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(frame);
    lenis?.destroy();
    lenis = null;
  };
}

/** Smoothly scroll to an element or a pixel offset, with or without Lenis running. */
export function scrollToTarget(target: HTMLElement | number, offset = 0) {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.1 });
    return;
  }
  const top =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: reducedMotion() ? "auto" : "smooth" });
}
