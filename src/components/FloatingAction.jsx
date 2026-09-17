import React from "react";
import { PhoneCall, MessageCircle } from "lucide-react";
import { contact } from "../data/siteData";

export default function FloatingAction() {
  const whatsappUrl = `https://wa.me/91${contact.primary}?text=${encodeURIComponent(
    "Hello Guru Gorakhnath Global Manpower, I want to inquire about overseas jobs."
  )}`;

  return (
    <>
      {/* Mobile-Only Call Floating Widget (Positioned on Left side directly above Email) */}
      <aside
        className="mobile-floating-widget call-floating-widget"
        aria-label="Direct Phone Helpline"
      >
        <a
          href={`tel:${contact.primary}`}
          className="mobile-floating-btn call-floating-btn"
          title={`Call Helpline +91 ${contact.primary}`}
        >
          <span className="call-pulse-ring" />
          <span className="mobile-float-icon">
            <PhoneCall size={20} />
          </span>
          <span className="float-micro-badge call-badge">Call</span>
        </a>
      </aside>

      {/* Mobile-Only WhatsApp Floating Widget (Positioned on Right side directly above Chatbot) */}
      <aside
        className="mobile-floating-widget whatsapp-floating-widget"
        aria-label="Official WhatsApp Support"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mobile-floating-btn whatsapp-floating-btn"
          title="Chat with Recruitment Desk on WhatsApp"
        >
          <span className="whatsapp-pulse-ring" />
          <span className="mobile-float-icon">
            <MessageCircle size={21} />
          </span>
          <span className="float-micro-badge whatsapp-badge">Chat</span>
        </a>
      </aside>
    </>
  );
}
