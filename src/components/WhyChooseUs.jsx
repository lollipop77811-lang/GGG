import React from "react";
import { benefits } from "../data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="border-y border-line bg-paper-deep py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-citron-deep" />
            <span className="label-tag text-ink-soft">why this website works</span>
          </div>
          <h2 className="display-2">
            a clear first step for{" "}
            <span className="relative inline-block">
              job seekers.
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
            </span>
          </h2>
        </div>

        {/* numbered benefit rows */}
        <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group border-t border-charcoal/15 py-8 transition-colors duration-300 hover:border-charcoal md:py-9"
            >
              <div className="flex items-start gap-6">
                <span className="text-[15px] font-semibold text-citron-deep">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-medium lowercase tracking-tight md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-[14px] leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
