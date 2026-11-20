import type { CSSProperties } from "react";

// Muted tones that sit well on the dark background. Each site always gets the
// same one, so a card doesn't change colour between visits.
const TONES = ["#c9a25b", "#8fa58a", "#c97b5a", "#7d93a8", "#a5869c", "#b39a78"];

function toneFor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return TONES[Math.abs(hash) % TONES.length];
}

interface PlaceholderProps {
  label: string;
  host: string;
}

/**
 * Shown while a screenshot loads, and kept if it fails. Replaces the old
 * BOOKMARK logo image, which was a 475px transparent PNG of the previous brand
 * name and rendered at full size inside every loading card.
 */
const Placeholder = ({ label, host }: PlaceholderProps) => {
  const initial = label.trim().charAt(0).toUpperCase() || "?";

  return (
    <div
      className="placeholder"
      style={{ "--tone": toneFor(host) } as CSSProperties}
      aria-hidden="true"
    >
      <span className="placeholder__initial">{initial}</span>
      <span className="placeholder__host">{host}</span>
    </div>
  );
};

export default Placeholder;
