import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUp,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { contact } from "../data/siteData";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer-compact">
      {/* Ambient Top Glowing Accent Line */}
      <div className="footer-glow-line" />

      <div className="container footer-compact-container">
        {/* Col 1: Brand & Govt Credentials */}
        <div className="footer-compact-col brand-col">
          <Link to="/" className="footer-compact-brand" onClick={scrollToTop}>
            <div className="compact-brand-mark">GG</div>
            <div className="compact-brand-text">
              <strong>Guru Gorakhnath</strong>
              <small>GLOBAL MANPOWER LLP</small>
            </div>
          </Link>
          <p className="footer-compact-bio">
            Government-registered overseas recruitment agency headquartered in Gorakhpur. Connecting skilled Indian tradesmen with verified employers across Gulf and European nations.
          </p>
          <div className="footer-compact-badges">
            <span className="compact-badge">
              <ShieldCheck size={12} /> Govt. Reg: {contact.registration}
            </span>
            <span className="compact-badge green">
              <CheckCircle2 size={12} /> MEA Compliant
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links (Clean 2-Column Grid) */}
        <div className="footer-compact-col links-col">
          <h4 className="footer-compact-heading">Quick Links</h4>
          <ul className="footer-compact-links">
            <li>
              <Link to="/" onClick={scrollToTop}>
                <ChevronRight size={12} /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>
                <ChevronRight size={12} /> About Agency
              </Link>
            </li>
            <li>
              <Link to="/countries" onClick={scrollToTop}>
                <ChevronRight size={12} /> 12+ Countries
              </Link>
            </li>
            <li>
              <Link to="/jobs" onClick={scrollToTop}>
                <ChevronRight size={12} /> Trade Vacancies
              </Link>
            </li>
            <li>
              <Link to="/process" onClick={scrollToTop}>
                <ChevronRight size={12} /> 6-Step Process
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop}>
                <ChevronRight size={12} /> Contact Desk
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Head Office & Direct Helplines */}
        <div className="footer-compact-col contact-col">
          <h4 className="footer-compact-heading">Gorakhpur HQ & Hotlines</h4>
          <div className="footer-compact-contacts">
            <div className="compact-contact-item">
              <span className="compact-icon-box">
                <MapPin size={13} />
              </span>
              <span>Sonbarsa Bazar (Beside Police Chowki), NH 28, Gorakhpur, UP</span>
            </div>

            <a href={`tel:${contact.primary}`} className="compact-contact-item link">
              <span className="compact-icon-box gold">
                <PhoneCall size={13} />
              </span>
              <strong>+91 {contact.primary}</strong>
            </a>

            <a href={`mailto:${contact.email}`} className="compact-contact-item link">
              <span className="compact-icon-box blue">
                <Mail size={13} />
              </span>
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sleek Compact Bottom Legal & Copyright Bar */}
      <div className="footer-compact-bottom">
        <div className="container bottom-bar-wrap">
          <p className="bottom-copy">
            © {new Date().getFullYear()} <strong>Guru Gorakhnath Global Manpower LLP</strong> • Govt. Reg. <strong>{contact.registration}</strong> • Zero Fraud Policy
          </p>
          <button onClick={scrollToTop} className="compact-top-btn" aria-label="Back to top">
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
