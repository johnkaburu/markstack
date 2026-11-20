import { REPO_URL, SUGGEST_URL } from "@/lib/site";
import "./layout.scss";

const Footer = () => (
  <footer className="footer">
    <div className="page footer__inner">
      <p>
        Know something that belongs here?{" "}
        <a href={SUGGEST_URL} target="_blank" rel="noopener noreferrer">
          Suggest a link
        </a>
        .
      </p>
      <p className="footer__meta">
        Screenshots belong to their sites. <a href={REPO_URL} target="_blank" rel="noopener noreferrer">MarkStack on GitHub</a>
      </p>
    </div>
  </footer>
);

export default Footer;
