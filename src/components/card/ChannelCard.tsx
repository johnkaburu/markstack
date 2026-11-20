import { useState } from "react";
import type { Resource } from "@/data/resources";
import { youtubeHandle } from "@/lib/url";
import Arrow from "./Arrow";
import "./card.scss";

/** Compact row for square images (YouTube channel avatars). */
const ChannelCard = ({ resource }: { resource: Resource }) => {
  const { label, link, image } = resource;
  const [failed, setFailed] = useState(false);

  return (
    <a className="channel" href={link} target="_blank" rel="noopener noreferrer">
      {failed ? (
        <span className="channel__avatar channel__avatar--fallback" aria-hidden="true">
          {label.charAt(0).toUpperCase()}
        </span>
      ) : (
        <img
          className="channel__avatar"
          src={image}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <span className="channel__text">
        <span className="channel__name">{label}</span>
        <span className="channel__handle">{youtubeHandle(link)}</span>
      </span>
      <span className="channel__arrow">
        <Arrow size={16} />
      </span>
    </a>
  );
};

export default ChannelCard;
