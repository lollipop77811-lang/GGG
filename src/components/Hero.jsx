import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, ShieldCheck, Globe2 } from "lucide-react";
import { contact } from "../data/siteData";

/* hero slide story — in the order provided (1 → 5) */
const slides = [
  {
    src: "/hero-slide-1.jpg",
    caption: "a dream takes shape — a candidate discovers his opportunity",
  },
  {
    src: "/hero-slide-2.jpg",
    caption: "honest guidance — genuine work visas, documented end-to-end",
  },
  {
    src: "/hero-slide-3.jpg",
    caption: "skilled hands — mep technicians & welders ready for site",
  },
  {
    src: "/hero-slide-4.jpg",
    caption: "departure day — flying out to dubai, kuwait & beyond",
  },
  {
    src: "/hero-slide-5.jpg",
    caption: "placed & proud — our people building the dubai skyline",
  },
];

const SLIDE_INTERVAL = 6000; /* ms — keep in sync with --animate-slide-progress */

export default function Hero() {
  const [index, setIndex] = useState(0);
  const touch = useRef({ x: 0, y: 0 });

  /* auto slide — restarts whenever the index changes (incl. manual clicks/swipes) */
  useEffect(() => {
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_INTERVAL
    );
    return () => clearTimeout(t);
  }, [index]);

  /* swipe support — horizontal drag changes slide (mobile) */
  const onTouchStart = (e) => {
    touch.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    /* horizontal intent only — never hijack vertical page scrolling */
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) setIndex((i) => (i + 1) % slides.length);
      else setIndex((i) => (i - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep"
      id="home"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* auto-sliding background carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              i === index ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt=""
              className={`h-full w-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
        {/* localized readability gradients — photo stays the main visual */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-navy-deep/90 via-navy-deep/55 to-navy-deep/20 md:from-navy-deep/85 md:via-navy-deep/35 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-[2] h-2/5 bg-gradient-to-t from-navy-deep/90 via-navy-deep/35 to-transparent" />
        <div className="absolute inset-x-0 top-0 z-[2] h-28 bg-gradient-to-b from-navy-deep/60 to-transparent" />
      </div>

      {/* content */}
      <div
        className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28 [text-shadow:0_2px_22px_rgba(9,30,51,0.55)]"
      >
        <div className="max-w-4xl">
          {/* eyebrow */}
          <div className="mb-4 inline-flex items-center gap-3 animate-fade-up">
            <span className="h-[7px] w-[7px] rounded-full bg-citron animate-blink" />
            <span className="label-tag text-cream/70">
              overseas recruitment & manpower
            </span>
          </div>

          {/* giant lowercase editorial headline */}
          <h1 className="display-hero animate-fade-up text-cream" style={{ animationDelay: "0.1s" }}>
            skilled people.
            <br />
            <em className="font-light text-citron not-italic">global opportunities.</em>
          </h1>

          {/* sub copy */}
          <p
            className="mt-5 max-w-xl text-[15px] leading-relaxed font-light text-cream/75 animate-fade-up md:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Guru Gorakhnath Global Manpower LLP connects candidates with
            international job opportunities across construction, MEP, oil & gas,
            catering and facility services.
          </p>

          {/* actions */}
          <div
            className="mt-6 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/jobs"
              className="group inline-flex items-center gap-3 rounded-full bg-citron px-7 py-3.5 text-sm font-semibold lowercase text-charcoal transition-all duration-300 hover:bg-cream md:py-4"
            >
              explore jobs
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
            <a
              href={`tel:${contact.primary}`}
              className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold lowercase text-cream transition-all duration-300 hover:border-citron hover:text-citron md:py-4"
            >
              talk to our team
            </a>
          </div>

          {/* meta strip */}
          <div
            className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-up"
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

        {/* bottom bar: circular scroll indicator */}
        <div className="mt-6 flex items-end justify-end border-t border-cream/15 pt-4 md:mt-10 md:pt-5">
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

      {/* slide caption — bottom right corner (right offset clears the floating chat bubble) */}
      <div className="absolute right-5 bottom-5 z-20 flex flex-col items-end gap-3 md:right-28 md:bottom-8">
        {/* progress bars (clickable) */}
        <div className="flex items-center gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-[3px] w-7 overflow-hidden rounded-full bg-cream/25 transition-colors duration-500 hover:bg-cream/50"
            >
              {i === index && (
                <span
                  key={index}
                  className="block h-full w-full origin-left bg-citron animate-slide-progress"
                />
              )}
            </button>
          ))}
        </div>

        {/* small caption related to the visible image */}
        <p
          key={index}
          className="max-w-[300px] text-right text-[12px] leading-relaxed font-light text-cream/80 animate-fade-up"
        >
          <span className="font-semibold text-citron">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-cream/40"> / {String(slides.length).padStart(2, "0")}</span>
          <span className="mx-2 text-cream/30">—</span>
          {slides[index].caption}
        </p>
      </div>
    </section>
  );
}
