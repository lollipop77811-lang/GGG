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
    <section className="relative border-b border-line bg-paper">
      {/* drawing top rule */}
      <span className="absolute inset-x-0 top-0 h-px origin-left bg-charcoal/20 animate-draw" />

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-10 gap-y-6 px-5 py-10 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
        {items.map(([Icon, title, text], i) => (
          <div
            key={title}
            className={`flex items-start gap-4 ${
              i > 0 ? "lg:border-l lg:border-line lg:pl-10" : ""
            }`}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12 text-charcoal transition-colors duration-300 hover:bg-citron hover:border-citron">
              <Icon size={18} strokeWidth={1.7} />
            </span>
            <div className="pt-0.5">
              <strong className="block text-[14px] font-semibold lowercase tracking-tight">
                {title}
              </strong>
              <small className="mt-1 block text-[12px] leading-relaxed text-ink-soft">
                {text}
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
