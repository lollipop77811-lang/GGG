import React from "react";
import { Mail } from "lucide-react";
import { contact } from "../data/siteData";

export default function EmailFloat() {
  const mailAddress = contact.email || "gurugorakhnathglobalmanpower@gmail.com";
  const mailSubject = encodeURIComponent(
    "Enquiry Regarding Overseas Jobs - Guru Gorakhnath Global Manpower",
  );
  const mailBody = encodeURIComponent(
    "Hello Guru Gorakhnath Global Manpower,\n\nI am interested in overseas recruitment opportunities. Below are my details:\n\nName:\nPhone:\nTrade/Skill:\nPreferred Destination:\nExperience:\n\nThank you.",
  );

  return (
    <aside className="email-float-widget" aria-label="Quick Email Enquiry">
      <a
        href={`mailto:${mailAddress}?subject=${mailSubject}&body=${mailBody}`}
        className="email-float-btn"
        title={`Send Email to ${mailAddress}`}
      >
        <span className="email-pulse-ring" />
        <span className="email-icon-box">
          <Mail size={22} />
        </span>
        <span className="float-micro-badge mail-badge">Email</span>
        <span className="email-float-tooltip">
          <strong>Email Us</strong>
          <small>{mailAddress}</small>
        </span>
      </a>
    </aside>
  );
}
