import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Users,
  Globe,
  CheckCircle2,
  ArrowRight,
  MapPin,
  MessageCircle,
  Briefcase,
  Building2,
  FileCheck2,
} from "lucide-react";
import PageBanner from "../components/PageBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import { contact } from "../data/siteData";

export default function AboutPage() {
  const highlights = [
    {
      icon: ShieldCheck,
      image: "/principles-legal.jpg",
      badge: "Legal Compliance",
      title: "Government Recognized",
      desc: `Operating in full legal compliance under Company Reg. No. ${contact.registration}, safeguarding candidates against unauthorized exploitation and ensuring safe overseas employment.`,
    },
    {
      icon: Globe,
      image: "/countries/dubai.jpg",
      badge: "12+ Countries",
      title: "Global Employer Tie-ups",
      desc: "Direct partnerships with verified construction, engineering, oil & gas, hospitality, and facility management conglomerates across 12 countries in GCC & Europe.",
    },
    {
      icon: Users,
      image: "/about-workers.jpg",
      badge: "Certified Assessment",
      title: "Skill-First Candidate Testing",
      desc: "Rigorous trade skill assessment in Civil, MEP, Industrial Welding, Catering, and Technical Trades to guarantee top selection rates for international employers.",
    },
    {
      icon: Award,
      image: "/principles-departure.jpg",
      badge: "Visa & Deployment",
      title: "Complete End-to-End Care",
      desc: "Comprehensive candidate support spanning GAMCA medical examination, visa stamping, emigration clearance, ticketing, and pre-departure cultural orientation.",
    },
  ];

  const verificationPoints = [
    {
      title: "Official Government Registration",
      subtitle: `Reg. No: ${contact.registration} (Govt. of India Approved)`,
    },
    {
      title: "Verified Overseas Contracts",
      subtitle: "Zero hidden charges with authentic offer letters directly from overseas sponsors",
    },
    {
      title: "Certified Trade Testing Support",
      subtitle: "Hands-on assessment ensuring candidates meet overseas technical standards",
    },
    {
      title: "Pre-Departure & Emigration Assistance",
      subtitle: "Guidance through medicals, visa stamping, and secure travel arrangements",
    },
  ];

  const featuredCountries = [
    { name: "Dubai", code: "dubai", region: "GCC", tag: "Civil & MEP" },
    { name: "Saudi Arabia", code: "saudi-arabia", region: "GCC", tag: "Oil & Gas / Infra" },
    { name: "Qatar", code: "qatar", region: "GCC", tag: "Facility & Technical" },
    { name: "Kuwait", code: "kuwait", region: "GCC", tag: "Industrial Trades" },
    { name: "Poland", code: "poland", region: "Europe", tag: "Logistics & Factory" },
    { name: "Romania", code: "romania", region: "Europe", tag: "Construction & MEP" },
  ];

  const stats = [
    [Globe, "12+", "global nations"],
    [Briefcase, "45+", "trade categories"],
    [ShieldCheck, `reg. ${contact.registration}`, "government approved"],
    [MapPin, "gorakhpur, up", "headquarters & desk"],
  ];

  return (
    <div>
      <PageBanner
        kicker="official overseas recruitment center • gorakhpur"
        title="about guru gorakhnath global manpower"
        description="A government-recognized overseas manpower consultancy bridging India's skilled tradesmen and technical workforce with prestigious career opportunities across the Gulf and Europe."
        image="/banner-about.jpg"
        hideBreadcrumb={true}
      />

      {/* stats strip */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-10 gap-y-5 px-5 py-8 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
          {stats.map(([Icon, strong, small], i) => (
            <div
              key={small}
              className={`flex items-center gap-4 ${i > 0 ? "lg:border-l lg:border-line lg:pl-10" : ""}`}
            >
              <Icon size={20} strokeWidth={1.6} className="shrink-0 text-citron-deep" />
              <div className="leading-tight">
                <strong className="block text-[14px] font-semibold lowercase">{strong}</strong>
                <span className="mt-0.5 block text-[12px] text-ink-soft">{small}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* heritage + polaroid collage */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-citron-deep" />
              <span className="label-tag text-ink-soft">our heritage & mission</span>
            </div>
            <h2 className="display-2 max-w-xl">
              from local craftsmanship to{" "}
              <span className="relative inline-block">
                flourishing global careers.
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
              </span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                <strong className="text-charcoal">Guru Gorakhnath Global Manpower LLP</strong>{" "}
                was established with a singular, unwavering vision: to provide
                honest, legally safeguarded, and transparent overseas employment
                opportunities for skilled and hardworking professionals from
                Uttar Pradesh and across India.
              </p>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Headquartered at Sonbarsa Bazar, NH 28, Gorakhpur, we serve as
                an accredited gateway connecting talented masons, electricians,
                pipe fitters, fabricators, welders, chefs, and facility staff
                with premier employers in the Gulf (Dubai, Saudi Arabia, Qatar,
                Kuwait, Oman, Bahrain) and Europe (Romania, Poland, Bulgaria).
              </p>
            </div>

            {/* verification checklist */}
            <div className="mt-10 grid gap-2.5 sm:grid-cols-2">
              {verificationPoints.map((pt) => (
                <div
                  key={pt.title}
                  className="flex items-start gap-3 rounded-lg border border-line bg-cream p-4 transition-colors hover:border-citron-deep/50"
                >
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-citron-deep" />
                  <div className="leading-snug">
                    <strong className="block text-[12.5px] font-semibold lowercase">{pt.title}</strong>
                    <span className="mt-1 block text-[11.5px] text-ink-soft">{pt.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* quote */}
            <blockquote className="mt-10 border-l-4 border-citron bg-cream p-6 md:p-7">
              <p className="text-[15px] leading-relaxed text-charcoal/85 italic">
                &ldquo;We hold ourselves to the highest standards of integrity.
                Every job opening we share is verified, every visa processed is
                legal, and every candidate is guided like family.&rdquo;
              </p>
              <footer className="mt-4">
                <strong className="text-[13px] font-semibold lowercase">leadership team</strong>
                <small className="mt-0.5 block text-[11.5px] text-ink-soft">
                  guru gorakhnath global manpower llp • gorakhpur
                </small>
              </footer>
            </blockquote>
          </div>

          {/* polaroid collage */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rotate-[2deg] rounded-sm bg-cream p-4 pb-14 shadow-[0_24px_60px_-20px_rgba(32,32,30,0.35)] transition-transform duration-500 hover:rotate-0">
              <span className="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 rotate-[-4deg] bg-citron/70 shadow-sm" />
              <img
                src="/about-consultancy.jpg"
                alt="Guru Gorakhnath Global Manpower Executive Consultation"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <p className="scribble absolute bottom-14 left-6 z-20 flex items-center gap-2 text-xl text-charcoal/70">
                <Building2 size={15} /> document verification desk
              </p>
            </div>

            <div className="relative z-10 mx-auto -mt-10 w-[82%] rotate-[-3deg] rounded-sm bg-cream p-3.5 pb-11 shadow-[0_20px_50px_-18px_rgba(32,32,30,0.4)] transition-transform duration-500 hover:rotate-0">
              <img
                src="/about-workers.jpg"
                alt="Candidate Skill Testing and Technical Training"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <p className="scribble absolute right-5 bottom-2 flex items-center gap-2 text-xl text-charcoal/70">
                <Award size={14} /> trade testing day
              </p>
            </div>

            {/* floating chips */}
            <div className="absolute -bottom-5 left-0 z-20 flex rotate-2 items-center gap-2.5 rounded-full bg-charcoal px-5 py-3 text-cream shadow-xl">
              <ShieldCheck size={15} className="text-citron" />
              <span className="text-[12px] font-medium lowercase">
                govt. reg. {contact.registration}
              </span>
            </div>
            <div className="absolute -top-4 right-0 z-20 flex rotate-[-2deg] items-center gap-2.5 rounded-full bg-citron px-5 py-3 text-charcoal shadow-xl">
              <Globe size={15} />
              <span className="text-[12px] font-medium lowercase">12+ overseas markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* featured countries */}
      <section className="border-y border-line bg-paper-deep py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-citron-deep" />
              <span className="label-tag text-ink-soft">international deployment</span>
            </div>
            <h2 className="display-2">countries we recruit & deploy for</h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-ink-soft">
              We maintain direct connections with trusted overseas companies
              offering authentic employment visas, company accommodation, and
              competitive earnings.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {featuredCountries.map((c) => (
              <div
                key={c.name}
                className="group overflow-hidden rounded-lg border border-line bg-cream transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_-18px_rgba(32,32,30,0.35)]"
              >
                <div className="relative">
                  <img
                    src={`/countries/${c.code}.jpg`}
                    alt={c.name}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 rounded-full bg-charcoal/85 px-2.5 py-1 text-[9px] font-bold tracking-[0.14em] text-cream uppercase">
                    {c.region}
                  </span>
                </div>
                <div className="p-3.5">
                  <h4 className="text-[14px] font-semibold lowercase">{c.name}</h4>
                  <p className="mt-0.5 text-[11.5px] text-ink-soft lowercase">{c.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/countries"
              className="group inline-flex items-center gap-2.5 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold lowercase text-cream transition-colors hover:bg-blue"
            >
              view all 12 country guidelines
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* highlights */}
      <section className="bg-navy py-20 text-cream md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-14 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <FileCheck2 size={15} className="text-citron" />
              <span className="label-tag text-cream/50">our core principles</span>
            </div>
            <h2 className="display-2 text-cream">why candidates & employers trust us</h2>
            <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-cream/55">
              Our transparent approach eliminates middlemen, protects workers'
              rights, and provides international employers with pre-vetted,
              qualified candidates.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article
                  key={idx}
                  className="group overflow-hidden rounded-lg border border-cream/12 bg-cream/[0.04] transition-all duration-400 hover:-translate-y-1.5 hover:border-citron/40"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/10] w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-citron px-3 py-1 text-[10.5px] font-bold text-charcoal lowercase">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-citron/40 text-citron">
                      <Icon size={16} />
                    </span>
                    <h3 className="mt-4 text-[16px] font-semibold lowercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-cream/55">{item.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* CTA */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid items-center gap-10 rounded-lg border border-line bg-cream p-9 md:p-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <MapPin size={15} className="text-citron-deep" />
                <span className="label-tag text-ink-soft">visit our gorakhpur office</span>
              </div>
              <h2 className="display-2">
                ready to take your trade{" "}
                <span className="relative inline-block">
                  overseas?
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-ink-soft">
                Visit our office at{" "}
                <strong className="text-charcoal">
                  Sonbarsa Bazar (Police Chowki ke bagal mein), NH 28, Gorakhpur, UP
                </strong>{" "}
                for direct consultation, document assessment, and current
                vacancy registration.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {[
                  [ShieldCheck, `govt. reg: ${contact.registration}`],
                  [MapPin, "nh 28, gorakhpur"],
                  [Briefcase, "direct employer interviews"],
                ].map(([Icon, label]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-[12px] font-medium text-ink-soft"
                  >
                    <Icon size={13} className="text-blue" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:justify-self-end lg:px-6">
              <Link
                to="/jobs"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold lowercase text-cream transition-colors hover:bg-blue"
              >
                browse open vacancies
                <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20know%20more%20about%20your%20services.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-citron px-7 py-4 text-sm font-semibold lowercase text-charcoal transition-colors hover:bg-cream"
              >
                <MessageCircle size={15} />
                chat on whatsapp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-charcoal/15 px-7 py-4 text-sm font-semibold lowercase text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
              >
                contact information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
