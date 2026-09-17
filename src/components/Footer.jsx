import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";
import { contact } from "../data/siteData";

const quickLinks = [
  ["Home", "/"],
  ["About Agency", "/about"],
  ["12+ Countries", "/countries"],
  ["Trade Vacancies", "/jobs"],
  ["6-Step Process", "/process"],
  ["Contact Desk", "/contact"],
];

export default function Footer() {
  const { pathname } = useLocation();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-charcoal text-cream">
      {/* giant editorial sign-off — hidden on the countries page per request */}
      {pathname !== "/countries" && (
        <div className="border-b border-cream/10">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20">
            <p className="label-tag text-cream/40">guru gorakhnath global manpower llp</p>
            <h2 className="display-2 mt-4 max-w-4xl text-cream">
              honest recruitment,
              <br />
              <span className="text-citron">lasting careers.</span>
            </h2>
          </div>
        </div>
      )}

      {/* link columns */}
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 md:px-10 lg:grid-cols-[1.2fr_0.9fr_1.1fr]">
        {/* brand col */}
        <div>
          <Link to="/" className="flex items-center gap-3" onClick={scrollToTop}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-citron text-sm font-bold text-charcoal">
              GG
            </span>
            <span className="flex flex-col leading-none">
              <strong className="text-base font-semibold lowercase">guru gorakhnath</strong>
              <small className="mt-1 text-[9px] font-medium tracking-[0.28em] text-cream/50 uppercase">
                global manpower llp
              </small>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-[13.5px] leading-relaxed text-cream/55">
            Government-registered overseas recruitment agency headquartered in
            Gorakhpur. Connecting skilled Indian tradesmen with verified
            employers across Gulf and European nations.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3.5 py-1.5 text-[11px] font-medium text-cream/70">
              <ShieldCheck size={12} className="text-citron" />
              govt. reg: {contact.registration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-citron/40 px-3.5 py-1.5 text-[11px] font-medium text-citron">
              ✓ mea compliant
            </span>
          </div>
        </div>

        {/* quick links */}
        <div>
          <h4 className="label-tag mb-6 text-cream/40">quick links</h4>
          <ul className="space-y-0.5">
            {quickLinks.map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  onClick={scrollToTop}
                  className="group inline-flex items-center gap-2 py-1.5 text-[14px] font-light lowercase text-cream/70 transition-colors hover:text-citron"
                >
                  <ArrowUpRight
                    size={13}
                    className="text-citron opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact col */}
        <div>
          <h4 className="label-tag mb-6 text-cream/40">gorakhpur hq & hotlines</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cream/15">
                <MapPin size={13} />
              </span>
              <span className="text-[13.5px] leading-relaxed text-cream/65">
                Sonbarsa Bazar (Beside Police Chowki), NH 28, Gorakhpur, UP
              </span>
            </div>
            <a
              href={`tel:${contact.primary}`}
              className="flex items-center gap-3.5 transition-colors hover:text-citron"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-citron text-charcoal">
                <PhoneCall size={13} />
              </span>
              <strong className="text-[14px] font-semibold lowercase">
                +91 {contact.primary}
              </strong>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3.5 transition-colors hover:text-citron"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cream/15">
                <Mail size={13} />
              </span>
              <span className="text-[13.5px] break-all text-cream/65">
                {contact.email}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-6 md:px-10">
          <p className="text-[12px] text-cream/45">
            © {new Date().getFullYear()}{" "}
            <strong className="font-medium text-cream/75">
              guru gorakhnath global manpower llp
            </strong>{" "}
            • govt. reg. <strong className="font-medium text-cream/75">{contact.registration}</strong>{" "}
            • zero fraud policy
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-[12px] font-semibold lowercase transition-colors hover:border-citron hover:bg-citron hover:text-charcoal"
            aria-label="Back to top"
          >
            back to top
            <ArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
