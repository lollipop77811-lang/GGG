import React from "react";
import { Building2, Globe, BriefcaseBusiness, Headphones } from "lucide-react";

const items = [
  [Building2, "Government Recognized", "As stated on supplied company poster"],
  [Globe, "Overseas Recruitment", "International job opportunities"],
  [BriefcaseBusiness, "8 Job Divisions", "Multiple skill categories"],
  [Headphones, "Direct Enquiry", "Phone & WhatsApp support"],
];

export default function TrustBar() {
  return (
    <section className="trustbar">
      <div className="container trust-grid">
        {items.map(([Icon, title, text]) => (
          <div className="trust-item" key={title}>
            <span className="trust-icon">
              <Icon size={20} />
            </span>
            <div>
              <strong>{title}</strong>
              <small>{text}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
