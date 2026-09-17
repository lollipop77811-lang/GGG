import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Flame,
  Home,
  Info,
  Globe,
  Briefcase,
  GitBranch,
  Mail,
  MapPin,
} from "lucide-react";
import { contact } from "../data/siteData";

const links = [
  { label: "Home", to: "/", end: true, icon: Home },
  { label: "About", to: "/about", icon: Info },
  { label: "Countries", to: "/countries", icon: Globe },
  { label: "Jobs", to: "/jobs", icon: Briefcase, badge: "Hiring" },
  { label: "Process", to: "/process", icon: GitBranch },
  { label: "Contact", to: "/contact", icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll and handle ESC key when mobile drawer is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>

      {/* Main Navigation Bar */}
      <div className="header-main">
        <div className="container nav-wrap">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <div className="brand-mark">
              <span>GG</span>
              <div className="brand-mark-glow" />
            </div>
            <div className="brand-text">
              <strong>Guru Gorakhnath</strong>
              <small>GLOBAL MANPOWER LLP</small>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav desktop-nav">
            {links.map(({ label, to, end, badge }) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <span>{label}</span>
                {badge && (
                  <span className="nav-badge-hiring">
                    <Flame size={10} className="flame-icon" />
                    {badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <Link to="/jobs" className="header-cta-btn">
              <span>Apply Now</span>
              <ArrowRight size={14} className="cta-arrow" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`menu-btn ${open ? "menu-open" : ""}`}
              aria-label="Toggle navigation menu"
              onClick={() => setOpen(!open)}
            >
              <span className="menu-btn-box">
                {open ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`mobile-overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Slide Drawer */}
      <aside
        className={`mobile-drawer ${open ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="drawer-header">
          <Link
            className="brand drawer-brand"
            to="/"
            onClick={() => setOpen(false)}
          >
            <div className="brand-mark">
              <span>GG</span>
            </div>
            <div className="brand-text">
              <strong>Guru Gorakhnath</strong>
              <small>GLOBAL MANPOWER</small>
            </div>
          </Link>
          <button
            className="drawer-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          <div className="drawer-reg-badge">
            <ShieldCheck size={14} />
            <span>Govt. Reg: {contact.registration} | Overseas Recruitment</span>
          </div>

          <nav className="drawer-nav">
            {links.map(({ label, to, end, badge, icon: Icon }, idx) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                style={{ "--item-index": idx }}
                className={({ isActive }) =>
                  `drawer-link ${isActive ? "active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                <div className="drawer-link-left">
                  <span className="drawer-icon-wrap">
                    <Icon size={16} />
                  </span>
                  <span className="drawer-link-label">{label}</span>
                </div>
                {badge && (
                  <span className="nav-badge-hiring">
                    <Flame size={10} className="flame-icon" />
                    {badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="drawer-cta-wrap">
            <Link
              to="/jobs"
              className="drawer-cta-primary"
              onClick={() => setOpen(false)}
            >
              <span>Explore Vacancies & Apply</span>
              <ArrowRight size={15} />
            </Link>

            <div className="drawer-contact-grid">
              <a href={`tel:${contact.primary}`} className="drawer-contact-btn call">
                <PhoneCall size={14} />
                <span>Call Helpline</span>
              </a>
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20apply.`}
                target="_blank"
                rel="noreferrer"
                className="drawer-contact-btn whatsapp"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}


