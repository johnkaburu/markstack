import { Github } from "lucide-react";
import { REPO_URL } from "@/lib/site";
import "./layout.scss";

const Header = () => (
  <header className="page header">
    <a className="wordmark" href="/" aria-label="MarkStack home">
      {/* A bookmark ribbon. Drawn inline so it picks up the accent colour. */}
      <svg className="wordmark__mark" viewBox="0 0 16 22" aria-hidden="true">
        <path d="M1 1h14v20l-7-5.5L1 21z" />
      </svg>
      MarkStack
    </a>

    <a className="header__link" href={REPO_URL} target="_blank" rel="noopener noreferrer">
      <Github size={16} strokeWidth={1.75} aria-hidden="true" />
      <span>Source</span>
    </a>
  </header>
);

export default Header;
