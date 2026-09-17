import React from "react";
import { PhoneCall, MessageCircle } from "lucide-react";
import { contact } from "../data/siteData";
import useHideOverHero from "../hooks/useHideOverHero";

export default function FloatingAction() {
  const hideOverHero = useHideOverHero();
  const whatsappUrl = `https://wa.me/91${contact.primary}?text=${encodeURIComponent(
    "Hello Guru Gorakhnath Global Manpower, I want to inquire about overseas jobs."
  )}`;

  return (
    <>
      {/* mobile-only call widget (left) */}
      <aside
        className={`fixed bottom-24 left-4 z-40 transition-all duration-300 md:hidden ${
          hideOverHero ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"
        }`}
        aria-label="Direct Phone Helpline"
      >
        <a
          href={`tel:${contact.primary}`}
          className="relative flex h-13 w-13 items-center justify-center rounded-full bg-charcoal p-3.5 text-cream shadow-xl transition-transform active:scale-95"
          title={`Call Helpline +91 ${contact.primary}`}
        >
          <span className="absolute inset-0 rounded-full bg-charcoal animate-pulse-ring" />
          <PhoneCall size={19} className="relative" />
        </a>
      </aside>

      {/* mobile-only whatsapp widget (right) */}
      <aside
        className={`fixed right-4 bottom-40 z-40 transition-all duration-300 md:hidden ${
          hideOverHero ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"
        }`}
        aria-label="Official WhatsApp Support"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center justify-center rounded-full bg-citron p-3.5 text-charcoal shadow-xl transition-transform active:scale-95"
          title="Chat with Recruitment Desk on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-citron animate-pulse-ring" />
          <MessageCircle size={20} className="relative" />
        </a>
      </aside>
    </>
  );
}
