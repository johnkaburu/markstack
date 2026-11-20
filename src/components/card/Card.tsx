import { useState } from "react";
import type { Resource } from "@/data/resources";
import { hostname } from "@/lib/url";
import Arrow from "./Arrow";
import Placeholder from "./Placeholder";
import "./card.scss";

type ImageState = "loading" | "loaded" | "failed";

const Card = ({ resource }: { resource: Resource }) => {
  const { label, link, image, description } = resource;
  const host = hostname(link);
  const [state, setState] = useState<ImageState>("loading");

  return (
    <a className="card" href={link} target="_blank" rel="noopener noreferrer">
      <div className="card__media">
        {state !== "loaded" && <Placeholder label={label} host={host} />}
        {state !== "failed" && (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className={state === "loaded" ? "is-loaded" : undefined}
            onLoad={() => setState("loaded")}
            onError={() => setState("failed")}
          />
        )}
        {/* Fills left to right while hovering, in step with the screenshot pan. */}
        <span className="card__progress" aria-hidden="true" />
      </div>

      <div className="card__body">
        <h3 className="card__title">
          <span>{label}</span>
        </h3>
        {description?.trim() && <p className="card__desc">{description.trim()}</p>}
        <span className="card__host">
          {host}
          <Arrow />
        </span>
      </div>
    </a>
  );
};

export default Card;
