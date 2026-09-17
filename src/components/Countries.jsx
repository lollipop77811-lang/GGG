import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { countries } from "../data/siteData";

const countryData = [
  { name: "Dubai", image: "/countries/dubai.jpg", region: "UAE / Middle East", tilt: "md:-rotate-2" },
  { name: "Saudi Arabia", image: "/countries/saudi-arabia.jpg", region: "GCC / Middle East", tilt: "md:rotate-1" },
  { name: "Bahrain", image: "/countries/bahrain.jpg", region: "GCC / Middle East", tilt: "md:-rotate-1" },
  { name: "Qatar", image: "/countries/qatar.jpg", region: "GCC / Middle East", tilt: "md:rotate-2" },
  { name: "Oman", image: "/countries/oman.jpg", region: "GCC / Middle East", tilt: "md:-rotate-2" },
  { name: "Iraq", image: "/countries/iraq.jpg", region: "Middle East", tilt: "md:rotate-1" },
  { name: "Kuwait", image: "/countries/kuwait.jpg", region: "GCC / Middle East", tilt: "md:rotate-2" },
  { name: "Romania", image: "/countries/romania.jpg", region: "Europe (EU)", tilt: "md:-rotate-1" },
  { name: "Poland", image: "/countries/poland.jpg", region: "Europe (Schengen)", tilt: "md:rotate-1" },
  { name: "Bulgaria", image: "/countries/bulgaria.jpg", region: "Europe (EU)", tilt: "md:-rotate-2" },
  { name: "Israel", image: "/countries/israel.jpg", region: "Middle East", tilt: "md:rotate-2" },
  { name: "Russia", image: "/countries/russia.jpg", region: "Eurasia", tilt: "md:-rotate-1" },
];

export default function Countries() {
  return (
    <section className="border-y border-line bg-paper-deep py-24 md:py-32" id="countries">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* heading row */}
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-citron-deep" />
              <span className="label-tag text-ink-soft">recruitment destinations</span>
            </div>
            <h2 className="display-2">
              opportunities across{" "}
              <span className="relative inline-block">
                multiple markets.
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
              </span>
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Destinations listed in the company portfolio.
            </p>
            <Link
              to="/countries"
              className="group mt-4 inline-flex items-center gap-2 border-b-2 border-charcoal pb-1.5 text-sm font-semibold lowercase transition-colors hover:border-citron-deep hover:text-citron-deep"
            >
              explore country requirements
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* polaroid grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4 xl:grid-cols-6">
          {countryData.map((c) => (
            <Link
              to="/countries"
              key={c.name}
              className={`group ${c.tilt} rounded-sm bg-cream p-2.5 pb-3 shadow-[0_10px_30px_-12px_rgba(32,32,30,0.28)] transition-all duration-400 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_24px_44px_-16px_rgba(32,32,30,0.4)]`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.name} recruitment destination`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 rounded-full bg-charcoal/85 px-2.5 py-1 text-[9px] font-semibold tracking-[0.14em] text-cream uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {c.region}
                </span>
              </div>
              <div className="flex items-center justify-between px-1 pt-2.5">
                <span className="text-[13px] font-semibold lowercase tracking-tight">
                  {c.name}
                </span>
                <ArrowUpRight
                  size={13}
                  className="text-citron-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
