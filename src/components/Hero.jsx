import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, ShieldCheck, Globe2 } from "lucide-react";
import { countries, contact } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep" id="home">
      {/* background photo + wash */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/55 via-transparent to-transparent" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-36 pb-24 md:px-10 md:pb-28">
        <div className="max-w-4xl">
          {/* eyebrow */}
          <div className="mb-7 inline-flex items-center gap-3 animate-fade-up">
            <span className="h-[7px] w-[7px] rounded-full bg-citron animate-blink" />
            <span className="label-tag text-cream/70">
              overseas recruitment & manpower
            </span>
          </div>

          {/* giant lowercase editorial headline */}
          <h1 className="display-1 animate-fade-up text-cream" style={{ animationDelay: "0.1s" }}>
            skilled people.
            <br />
            <em className="font-light text-citron not-italic">global opportunities.</em>
          </h1>

          {/* sub copy */}
          <p
            className="mt-8 max-w-xl text-base leading-relaxed font-light text-cream/75 animate-fade-up md:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Guru Gorakhnath Global Manpower LLP connects candidates with
            international job opportunities across construction, MEP, oil & gas,
            catering and facility services.
          </p>

          {/* actions */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/jobs"
              className="group inline-flex items-center gap-3 rounded-full bg-citron px-7 py-4 text-sm font-semibold lowercase text-charcoal transition-all duration-300 hover:bg-cream"
            >
              explore jobs
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
            <a
              href={`tel:${contact.primary}`}
              className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold lowercase text-cream transition-all duration-300 hover:border-citron hover:text-citron"
            >
              talk to our team
            </a>
          </div>

          {/* meta strip */}
          <div
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-cream/60">
              <ShieldCheck size={15} className="text-citron" />
              company reg. no. {contact.registration}
            </span>
            <span className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-cream/60">
              <Globe2 size={15} className="text-citron" />
              overseas placements
            </span>
          </div>
        </div>

        {/* bottom bar: destinations ticker + scroll button */}
        <div className="mt-16 flex items-end justify-between gap-6 border-t border-cream/15 pt-7">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="label-tag text-cream/40">recruitment destinations</span>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {countries.slice(0, 6).map((country) => (
                <Link
                  key={country}
                  to="/countries"
                  className="text-[13px] font-light lowercase text-cream/70 transition-colors hover:text-citron"
                >
                  {country}
                </Link>
              ))}
              <Link
                to="/countries"
                className="text-[13px] font-medium lowercase text-citron underline decoration-citron/40 underline-offset-4 transition-colors hover:decoration-citron"
              >
                view all →
              </Link>
            </div>
          </div>

          {/* circular scroll indicator — lunchline signature */}
          <button
            type="button"
            aria-label="Scroll to next section"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream transition-all duration-300 hover:border-citron hover:bg-citron hover:text-charcoal md:flex animate-bob"
          >
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
