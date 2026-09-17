import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="overflow-hidden bg-paper py-24 md:py-32" id="about">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* text column */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-citron-deep" />
            <span className="label-tag text-ink-soft">about the company</span>
          </div>

          <h2 className="display-2 max-w-2xl">
            from local skills to{" "}
            <span className="relative inline-block">
              global careers.
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
            </span>
          </h2>

          <div className="mt-9 max-w-xl space-y-6">
            <p className="text-base leading-relaxed text-ink-soft md:text-[17px]">
              Guru Gorakhnath Global Manpower LLP is an overseas manpower and
              recruitment organization based in Gorakhpur, Uttar Pradesh.
            </p>
            <p className="text-base leading-relaxed text-ink-soft md:text-[17px]">
              The company connects skilled candidates with verified overseas
              recruitment opportunities across civil, MEP, mechanical/oil & gas,
              catering, furniture, insulation, aluminium and facility management.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <Link
              className="group inline-flex items-center gap-2 border-b-2 border-charcoal pb-1.5 text-sm font-semibold lowercase transition-colors hover:border-citron-deep hover:text-citron-deep"
              to="/about"
            >
              about full profile
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              className="group inline-flex items-center gap-2 border-b-2 border-charcoal pb-1.5 text-sm font-semibold lowercase transition-colors hover:border-citron-deep hover:text-citron-deep"
              to="/jobs"
            >
              browse job categories
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* polaroid photo column — lunchline signature */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rotate-[2.5deg] rounded-sm bg-cream p-4 pb-16 shadow-[0_24px_60px_-20px_rgba(32,32,30,0.35)] transition-transform duration-500 hover:rotate-0">
            {/* tape strip */}
            <span className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-[-4deg] bg-citron/70 shadow-sm" />
            <img
              src="/about-consultancy.jpg"
              alt="Guru Gorakhnath Global Manpower consultancy desk"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <p className="scribble absolute right-6 bottom-3 text-2xl text-charcoal/70">
              gorakhpur → the world ✈
            </p>
          </div>

          {/* reg. badge chip */}
          <div className="absolute -bottom-6 -left-4 flex -rotate-3 items-center gap-2.5 rounded-full bg-charcoal px-5 py-3 text-cream shadow-xl sm:-left-8">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-citron text-[11px] font-bold text-charcoal">
              ✓
            </span>
            <span className="text-[12px] font-medium lowercase">
              govt. recognized recruitment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
