import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { contact } from "../data/siteData";

const links = [
  { label: "home", to: "/", end: true },
  { label: "about", to: "/about" },
  { label: "countries", to: "/countries" },
  { label: "jobs", to: "/jobs" },
  { label: "process", to: "/process" },
  { label: "contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
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

  const dark = !isScrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || open
          ? "bg-paper/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:h-20 md:px-10">
        {/* brand */}
        <Link
          className="group flex items-center gap-3"
          to="/"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-citron text-[13px] font-bold tracking-tight text-charcoal transition-transform duration-300 group-hover:rotate-12 sm:h-10 sm:w-10">
            GG
          </span>
          <span className="flex flex-col leading-none">
            <strong
              className={`text-[15px] font-semibold tracking-tight lowercase sm:text-base ${
                dark ? "text-cream" : "text-charcoal"
              }`}
            >
              guru gorakhnath
            </strong>
            <small
              className={`mt-1 text-[9px] font-medium tracking-[0.28em] uppercase ${
                dark ? "text-cream/60" : "text-ink-soft"
              }`}
            >
              global manpower llp
            </small>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(({ label, to, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={({ isActive }) =>
                `group relative py-2 text-[13px] font-bold tracking-wide uppercase transition-colors ${
                  dark
                    ? "text-cream/75 hover:text-cream"
                    : "text-ink-soft hover:text-charcoal"
                } ${isActive ? (dark ? "!text-cream" : "!text-charcoal") : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-citron transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/jobs"
            className="group hidden items-center gap-2 rounded-full bg-citron px-5 py-2.5 text-[13px] font-semibold lowercase text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-citron sm:inline-flex"
          >
            apply now
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* hamburger */}
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
              dark ? "border-cream/25 text-cream" : "border-line text-charcoal"
            } ${open ? "!border-line !text-charcoal" : ""}`}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 -z-10 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* mobile drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col bg-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <Link className="flex items-center gap-3" to="/" onClick={() => setOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-citron text-[13px] font-bold text-charcoal">
              GG
            </span>
            <span className="flex flex-col leading-none">
              <strong className="text-[15px] font-semibold lowercase">guru gorakhnath</strong>
              <small className="mt-1 text-[9px] font-medium tracking-[0.28em] text-ink-soft uppercase">
                global manpower
              </small>
            </span>
          </Link>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-charcoal"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-cream px-3.5 py-1.5 text-[11px] font-medium text-ink-soft">
            <ShieldCheck size={13} className="text-blue" />
            govt. reg: {contact.registration}
          </div>

          <nav className="flex flex-col">
            {links.map(({ label, to, end }, idx) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `group flex items-center justify-between border-b border-line py-4 text-2xl font-bold uppercase transition-colors ${
                    isActive ? "text-charcoal" : "text-ink-soft hover:text-charcoal"
                  }`
                }
                style={{ transitionDelay: `${idx * 20}ms` }}
                onClick={() => setOpen(false)}
              >
                {label}
                <ArrowRight
                  size={18}
                  className="text-citron-deep opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-8 pb-4">
            <a
              href={`tel:${contact.primary}`}
              className="flex items-center justify-center gap-2 rounded-full border border-charcoal/15 py-3.5 text-[13px] font-semibold lowercase text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
            >
              <PhoneCall size={14} />
              call
            </a>
            <a
              href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20apply.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-citron py-3.5 text-[13px] font-semibold lowercase text-charcoal transition-colors hover:bg-charcoal hover:text-citron"
            >
              <MessageCircle size={14} />
              whatsapp
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
