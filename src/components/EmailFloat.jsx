import React from "react";
import { Mail } from "lucide-react";
import { contact } from "../data/siteData";
import useHideOverHero from "../hooks/useHideOverHero";

export default function EmailFloat() {
  const hideOverHero = useHideOverHero();
  const mailAddress = contact.email || "gurugorakhnathglobalmanpower@gmail.com";
  const mailSubject = encodeURIComponent(
    "Enquiry Regarding Overseas Jobs - Guru Gorakhnath Global Manpower",
  );
  const mailBody = encodeURIComponent(
    "Hello Guru Gorakhnath Global Manpower,\n\nI am interested in overseas recruitment opportunities. Below are my details:\n\nName:\nPhone:\nTrade/Skill:\nPreferred Destination:\nExperience:\n\nThank you.",
  );

  return (
    <aside
      className={`group fixed bottom-24 left-4 z-40 hidden transition-all duration-300 md:block ${
        hideOverHero ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"
      }`}
      aria-label="Quick Email Enquiry"
    >
      <a
        href={`mailto:${mailAddress}?subject=${mailSubject}&body=${mailBody}`}
        className="relative flex items-center justify-center rounded-full bg-charcoal p-4 text-cream shadow-xl transition-all duration-300 hover:bg-citron hover:text-charcoal"
        title={`Send Email to ${mailAddress}`}
      >
        <span className="absolute inset-0 rounded-full bg-charcoal animate-pulse-ring" />
        <Mail size={20} className="relative" />
      </a>

      {/* hover tooltip */}
      <span className="pointer-events-none absolute top-1/2 left-[calc(100%+14px)] -translate-y-1/2 scale-95 rounded-md bg-charcoal px-4 py-2.5 opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <strong className="block text-[12px] font-semibold text-cream lowercase">
          email us
        </strong>
        <small className="block max-w-52 truncate text-[11px] text-cream/60">
          {mailAddress}
        </small>
      </span>
    </aside>
  );
}
