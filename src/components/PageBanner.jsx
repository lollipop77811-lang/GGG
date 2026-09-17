import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function PageBanner({
  title,
  kicker,
  description,
  breadcrumb,
  hideBreadcrumb = false,
}) {
  return (
    <div className="relative overflow-hidden bg-navy-deep">
      {/* texture + glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,230,79,0.10),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,86,167,0.25),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-36 pb-16 md:px-10 md:pt-44 md:pb-20">
        {!hideBreadcrumb && (
          <nav
            className="mb-7 flex items-center gap-2 text-[12px] font-medium text-cream/50"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-citron">
              <Home size={13} /> home
            </Link>
            <ChevronRight size={13} />
            <span className="text-citron lowercase">{breadcrumb || title}</span>
          </nav>
        )}

        {kicker && (
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[7px] w-[7px] rounded-full bg-citron animate-blink" />
            <span className="label-tag text-cream/60">{kicker}</span>
          </div>
        )}

        <h1 className="display-1 max-w-4xl text-cream">{title}</h1>

        {description && (
          <p className="mt-7 max-w-xl text-base leading-relaxed font-light text-cream/65 md:text-[17px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
