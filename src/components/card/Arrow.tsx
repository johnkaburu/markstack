import { ArrowUpRight } from "lucide-react";

/** Two stacked arrows: on hover the first flies out top-right, the second slides in. */
const Arrow = ({ size = 14 }: { size?: number }) => (
  <span className="arrow" aria-hidden="true" style={{ width: size, height: size }}>
    <ArrowUpRight size={size} strokeWidth={1.75} />
    <ArrowUpRight size={size} strokeWidth={1.75} />
  </span>
);

export default Arrow;
