import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { jobGroups } from "../data/siteData";

export default function JobCategories() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-paper py-24 md:py-32" id="jobs">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* heading */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-citron-deep" />
          <span className="label-tag text-ink-soft">find your role</span>
        </div>

        <div className="mb-16 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <h2 className="display-2 max-w-2xl">
            job categories built around{" "}
            <span className="relative inline-block">
              real skills.
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
            </span>
          </h2>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
              Explore the roles available across our 8 major trade divisions.
            </p>
            <Link
              to="/jobs"
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3.5 text-sm font-semibold lowercase text-cream transition-colors duration-300 hover:bg-blue"
            >
              explore all job details
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* editorial accordion rows */}
        <div className="border-t border-line">
          {jobGroups.map((group, index) => {
            const open = openIndex === index;
            return (
              <div key={group.title} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="group flex w-full items-center gap-5 py-6 text-left transition-colors md:gap-10 md:py-7"
                  aria-expanded={open}
                >
                  {/* citron number */}
                  <span className="w-10 shrink-0 text-[15px] font-semibold text-citron-deep md:w-14 md:text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 text-xl font-medium lowercase tracking-tight transition-colors md:text-3xl ${
                      open ? "text-charcoal" : "text-charcoal/75 group-hover:text-charcoal"
                    }`}
                  >
                    {group.title}
                    <span className="ml-3 hidden align-middle text-[12px] font-normal tracking-wide text-ink-soft sm:inline">
                      — {group.jobs.length} roles
                    </span>
                  </span>

                  {/* plus / minus toggle */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      open
                        ? "rotate-180 border-charcoal bg-charcoal text-citron"
                        : "border-line text-charcoal group-hover:border-charcoal"
                    }`}
                  >
                    {open ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {/* expanding panel */}
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-[60px] md:pl-[96px]">
                      <div className="flex flex-wrap gap-2.5">
                        {group.jobs.map((job) => (
                          <span
                            key={job}
                            className="rounded-full border border-line bg-cream px-4 py-2 text-[13px] font-medium lowercase transition-colors hover:border-citron-deep hover:bg-citron/30"
                          >
                            {job}
                          </span>
                        ))}
                      </div>
                      <Link
                        to="/jobs"
                        className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold lowercase text-blue transition-colors hover:text-charcoal"
                      >
                        view requirements
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
