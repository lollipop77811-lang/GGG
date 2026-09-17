import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { processSteps } from "../data/siteData";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-board py-24 md:py-32" id="process">
      {/* chalkboard frame + texture */}
      <div className="pointer-events-none absolute inset-3 rounded-lg border border-chalk/15 md:inset-5" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        {/* heading */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-citron" />
          <span className="label-tag text-chalk/60">how it works</span>
        </div>

        <div className="mb-16 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <h2 className="display-2 max-w-2xl text-chalk">
            a simple path from{" "}
            <span className="scribble text-citron" style={{ fontSize: "1.15em" }}>
              enquiry to opportunity.
            </span>
          </h2>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-[15px] leading-relaxed text-chalk/65">
              A transparent and guided journey for international job placement.
            </p>
            <Link
              to="/process"
              className="group mt-4 inline-flex items-center gap-2 border-b-2 border-citron pb-1.5 text-sm font-semibold lowercase text-citron transition-colors hover:text-chalk hover:border-chalk"
            >
              view full document & process guide
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* chalk step cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map(([num, title, text], i) => (
            <div
              key={title}
              className="group relative rounded-md border border-dashed border-chalk/25 bg-white/[0.03] p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-citron/60 hover:bg-white/[0.06]"
            >
              {/* chalk number */}
              <span className="scribble text-4xl text-citron/90 md:text-5xl">
                {num}
              </span>
              <h3 className="mt-5 text-lg font-medium lowercase tracking-tight text-chalk">
                {title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-chalk/60">
                {text}
              </p>

              {/* connector chalk arrow */}
              {i < processSteps.length - 1 && (
                <span className="absolute top-1/2 -right-4 hidden -translate-y-1/2 text-xl text-citron/50 xl:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* chalk scribble footnote */}
        <p className="scribble mt-14 text-center text-2xl text-chalk/50 md:text-3xl">
          no hidden steps. no middlemen. just honest guidance.
        </p>
      </div>
    </section>
  );
}
