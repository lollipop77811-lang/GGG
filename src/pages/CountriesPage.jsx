import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Plane,
  Building2,
  Briefcase,
  ShieldCheck,
  MessageCircle,
  MapPin,
  FileCheck,
} from "lucide-react";
import { countries, contact } from "../data/siteData";

const countryDetails = {
  "Dubai": {
    image: "/countries/dubai.jpg",
    region: "Middle East / UAE",
    roles: ["MEP Technicians", "Hospitality & Catering", "Facility Management", "Civil Trades", "Drivers"],
    contract: "2 Years (Renewable)",
    perks: "Free Accommodation, Medical Insurance & Transport provided as per UAE Labor Law",
    desc: "A premier global hub with immense demand across construction, hospitality, MEP and facility management.",
  },
  "Saudi Arabia": {
    image: "/countries/saudi-arabia.jpg",
    region: "Middle East / GCC",
    roles: ["Oil & Gas Multi-Welders", "Pipe Fitters", "Civil Construction", "Electricians", "Heavy Equipment"],
    contract: "2 Years (Renewable)",
    perks: "Food Allowance, Free Accommodation, Medical & Ample Overtime opportunities",
    desc: "Massive demand for industrial refineries, commercial infrastructure, and mega-projects under Vision 2030.",
  },
  "Qatar": {
    image: "/countries/qatar.jpg",
    region: "Middle East / GCC",
    roles: ["MEP Trades", "AC Technicians", "Facility & Hospitality", "Fabricators", "Cleaners"],
    contract: "2 Years (Renewable)",
    perks: "Full company sponsorship, accommodation, and standard GCC labor protections",
    desc: "Consistent openings in facility maintenance, commercial hospitality, and technical engineering services.",
  },
  "Bahrain": {
    image: "/countries/bahrain.jpg",
    region: "Middle East / GCC",
    roles: ["Civil Masons", "Steel Fixers", "Plumbers", "Electricians", "Catering Crew"],
    contract: "2 Years (Renewable)",
    perks: "Company accommodation, health coverage, and airfare return upon contract completion",
    desc: "A stable market with high reliability and long-term career growth for qualified Indian craftsmen.",
  },
  "Oman": {
    image: "/countries/oman.jpg",
    region: "Middle East / GCC",
    roles: ["Mechanical Trades", "Civil Workers", "Insulation & Aluminium", "Welders", "Riggers"],
    contract: "2 Years (Renewable)",
    perks: "Furnished accommodation, transportation, and standard employment visa protections",
    desc: "Established industrial complexes and ports actively recruiting experienced technical manpower.",
  },
  "Kuwait": {
    image: "/countries/kuwait.jpg",
    region: "Middle East / GCC",
    roles: ["Refinery Pipefitters", "MEP Engineers", "Catering & Cooks", "Furniture Craftsmen"],
    contract: "2 Years (Renewable)",
    perks: "Competitive Gulf remuneration, accommodation, and medical coverage",
    desc: "High-value opportunities in petrochemical refineries, commercial infrastructure, and catering.",
  },
  "Iraq": {
    image: "/countries/iraq.jpg",
    region: "Middle East",
    roles: ["Petrochemical Technicians", "Certified Welders", "Industrial Riggers", "General Labor"],
    contract: "1-2 Years",
    perks: "Attractive high allowances, secured camp accommodation, full food and insurance",
    desc: "Heavy industrial and petrochemical projects offering lucrative earnings for experienced hands.",
  },
  "Romania": {
    image: "/countries/romania.jpg",
    region: "Europe (EU)",
    roles: ["Construction Workers", "Welders & Fitters", "Carpenters", "Factory & Logistics"],
    contract: "1-2 Years (Extendable work permit)",
    perks: "European work permit, company housing, healthcare, and overtime potential",
    desc: "Rapidly expanding European Union market welcoming skilled Indian construction and factory workforce.",
  },
  "Poland": {
    image: "/countries/poland.jpg",
    region: "Europe (Schengen)",
    roles: ["MIG/MAG Welders", "Warehouse Pickers", "Metal Fabricators", "Meat/Food Processing"],
    contract: "1-3 Years National D Visa",
    perks: "Schengen work permit, European labor standards, social insurance, and bonuses",
    desc: "Thriving European manufacturing, warehousing, and engineering sector with strong legal safeguards.",
  },
  "Bulgaria": {
    image: "/countries/bulgaria.jpg",
    region: "Europe (EU)",
    roles: ["Civil Construction", "Steel Workers", "Aluminium & Glass Fitters", "General Helpers"],
    contract: "1 Year (Renewable)",
    perks: "Company accommodation, legal work authorization, health cover, and airfare",
    desc: "A reliable gateway into European civil infrastructure, prefabrication, and construction projects.",
  },
  "Israel": {
    image: "/countries/israel.jpg",
    region: "Middle East",
    roles: ["Formwork Carpenters", "Steel Fixers", "Plasterers & Tile Masons", "Civil Helpers"],
    contract: "Long term government-authorized agreements",
    perks: "Extremely competitive international wages, high earning potential, organized living camps",
    desc: "Substantial demand for specialized construction craftsmen under verified bilateral frameworks.",
  },
  "Russia": {
    image: "/countries/russia.jpg",
    region: "Eurasia",
    roles: ["Industrial Welders", "Heavy Construction", "Prefabrication Trades", "Machine Operators"],
    contract: "1-2 Years Work Visa",
    perks: "Company arranged housing, thermal winter gear provisions, and medical coverage",
    desc: "Mega-construction and energy infrastructure programs offering steady high-paying employment.",
  },
};

export default function CountriesPage() {
  const [filter, setFilter] = useState("all");

  const gccList = ["Dubai", "Saudi Arabia", "Bahrain", "Qatar", "Oman", "Kuwait", "Iraq"];
  const europeList = ["Romania", "Poland", "Bulgaria", "Israel", "Russia"];

  const filteredCountries = countries.filter((c) => {
    if (filter === "gcc") return gccList.includes(c);
    if (filter === "europe") return europeList.includes(c);
    return true;
  });

  const statsBar = [
    [Globe, "text-blue", "12 Global Nations", "GCC, Middle East & Europe"],
    [ShieldCheck, "text-citron-deep", "100% Genuine Visas", `Govt. Reg. ${contact.registration}`],
    [Plane, "text-blue", "Full Emigration Care", "GAMCA, Stamping & Tickets"],
    [Building2, "text-citron-deep", "Direct Employers", "Zero Middlemen Policy"],
  ];

  const corridorPills = [
    ["gcc", "gulf & gcc hubs", gccList, "dubai, saudi, qatar, kuwait, oman, bahrain, iraq"],
    ["europe", "european corridors", europeList, "romania, poland, bulgaria, israel, russia"],
    ["all", "all 12 destinations", countries, "explore complete international deployment directory"],
  ];

  return (
    <div>
      {/* editorial hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,230,79,0.10),transparent_50%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 pt-36 pb-16 md:px-10 md:pt-44 md:pb-20">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cream/15 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-citron animate-blink" />
            <span className="text-[12px] font-medium tracking-wide text-cream/65">
              govt. reg. {contact.registration} • 12 active international corridors
            </span>
          </div>

          <h1 className="display-1 max-w-4xl text-cream">
            global placement{" "}
            <em className="font-light text-citron not-italic">destinations</em>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed font-light text-cream/65 md:text-[17px]">
            Direct overseas recruitment with certified employer contracts,
            transparent documentation, zero middlemen, and complete emigration
            clearance from our Gorakhpur headquarters to 12 premier global
            markets.
          </p>

          {/* corridor quick filters */}
          <div className="mt-11 grid max-w-4xl gap-3 sm:grid-cols-3">
            {corridorPills.map(([key, label, list, small]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`rounded-lg border p-4.5 text-left transition-all duration-300 ${
                  filter === key
                    ? "border-citron bg-citron/10"
                    : "border-cream/15 bg-cream/[0.04] hover:border-cream/35"
                }`}
              >
                <strong
                  className={`block text-[13.5px] font-semibold lowercase ${
                    filter === key ? "text-citron" : "text-cream/85"
                  }`}
                >
                  {label} ({list.length})
                </strong>
                <small className="mt-1 block text-[11px] leading-relaxed text-cream/45">
                  {small}
                </small>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* stats strip */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-10 gap-y-5 px-5 py-8 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
          {statsBar.map(([Icon, color, strong, small], i) => (
            <div
              key={strong}
              className={`flex items-center gap-4 ${i > 0 ? "lg:border-l lg:border-line lg:pl-10" : ""}`}
            >
              <Icon size={20} strokeWidth={1.6} className={`${color} shrink-0`} />
              <div className="leading-tight">
                <strong className="block text-[14px] font-semibold lowercase">{strong}</strong>
                <span className="mt-0.5 block text-[12px] text-ink-soft lowercase">{small}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* destinations grid */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="label-tag text-ink-soft">select destination region:</span>
            <div className="flex flex-wrap gap-2">
              {[
                ["all", `all destinations (${countries.length})`],
                ["gcc", `gulf & gcc markets (${gccList.length})`],
                ["europe", `europe & other (${europeList.length})`],
              ].map(([key, label]) => (
                <button
                  key={key}
                  className={`rounded-full px-4.5 py-2 text-[12.5px] font-semibold lowercase transition-all ${
                    filter === key
                      ? "bg-charcoal text-citron"
                      : "border border-line bg-cream text-ink-soft hover:border-charcoal hover:text-charcoal"
                  }`}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCountries.map((country) => {
              const info = countryDetails[country] || {
                image: "/countries/dubai.jpg",
                region: "International",
                roles: ["Skilled & Technical roles"],
                contract: "Standard 2-Year Contract",
                perks: "Accommodation & Medical provided",
                desc: "Verified overseas placement opportunities.",
              };

              const whatsappUrl = `https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20am%20interested%20in%20jobs%20in%20${encodeURIComponent(country)}.`;

              return (
                <article
                  key={country}
                  className="group flex flex-col overflow-hidden rounded-lg border border-line bg-cream transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(32,32,30,0.35)]"
                >
                  {/* image header */}
                  <div className="relative">
                    <img
                      src={info.image}
                      alt={`${country} overseas recruitment`}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/12 to-transparent" />
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-cream/92 px-3 py-1 text-[10.5px] font-bold tracking-[0.06em] text-charcoal lowercase">
                      {info.region}
                    </span>
                    <div className="absolute right-4 bottom-3 left-4 flex items-end justify-between gap-3">
                      <h3 className="text-xl font-semibold lowercase text-cream">{country}</h3>
                      <span className="rounded-full bg-citron px-3 py-1 text-[10.5px] font-bold text-charcoal lowercase">
                        {info.contract}
                      </span>
                    </div>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[13.5px] leading-relaxed text-ink-soft">{info.desc}</p>

                    <div className="mt-5 flex-1">
                      <span className="label-tag !text-[0.62rem] text-ink-soft">
                        in-demand skill trades
                      </span>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {info.roles.map((role) => (
                          <span
                            key={role}
                            className="rounded-full border border-line bg-paper px-3 py-1.5 text-[11.5px] font-medium lowercase transition-colors hover:border-citron-deep hover:bg-citron/25"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 space-y-2 border-t border-line pt-4 text-[12.5px] leading-relaxed text-ink-soft">
                      <p className="flex gap-2">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-citron-deep" />
                        <span>
                          <strong className="text-charcoal">contract:</strong> {info.contract}
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-citron-deep" />
                        <span>
                          <strong className="text-charcoal">benefits:</strong> {info.perks}
                        </span>
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-[1fr_auto] gap-2.5">
                      <Link
                        to={`/contact?country=${encodeURIComponent(country)}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-[13px] font-semibold lowercase text-cream transition-colors hover:bg-blue"
                      >
                        apply for {country}
                        <ArrowRight size={13} />
                      </Link>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={`Enquire about ${country} on WhatsApp`}
                        className="flex items-center justify-center gap-2 rounded-full border border-charcoal/15 px-4 py-3 text-[13px] font-semibold lowercase text-charcoal transition-colors hover:bg-citron hover:border-citron"
                      >
                        <MessageCircle size={14} />
                        <span className="sm:hidden">whatsapp</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* checklist */}
      <section className="border-y border-line bg-paper-deep py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <FileCheck size={15} className="text-citron-deep" />
                <span className="label-tag text-ink-soft">travel requirements</span>
              </div>
              <h2 className="display-2 max-w-xl">
                essential checklist for{" "}
                <span className="relative inline-block">
                  overseas deployment
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
                </span>
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed text-ink-soft lg:justify-self-end lg:max-w-sm">
              Every candidate deployed by Guru Gorakhnath Global Manpower is
              guided step-by-step through legal emigration clearance.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
            {[
              [ShieldCheck, "passport validity", "Your Indian passport must be valid for at least 8 to 12 months with at least 3 blank pages for visa endorsement."],
              [Building2, "gamca medical fitness", "For GCC destinations, medical testing is conducted exclusively at GAMCA-authorized diagnostic centers in compliance with Gulf health regulations."],
              [Briefcase, "trade test certification", "Technical profiles (welders, electricians, pipe fitters, masons) undergo practical trade testing at certified technical workshops."],
              [CheckCircle2, "zero fraud policy", `Transact only at our registered Sonbarsa Bazar, Gorakhpur office. We never request unauthorized fees and adhere strictly to Govt. Reg. ${contact.registration}.`],
            ].map(([Icon, title, text]) => (
              <div key={title} className="group bg-cream p-7 transition-colors hover:bg-paper">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/12 transition-colors group-hover:border-citron group-hover:bg-citron">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <h4 className="mt-5 text-[16px] font-medium lowercase tracking-tight">{title}</h4>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-board py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="relative rounded-lg border border-dashed border-chalk/25 p-10 text-center md:p-16">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-chalk/20 px-4 py-2 text-[12px] font-medium text-chalk/70">
              <MapPin size={13} className="text-citron" />
              direct consultation at gorakhpur office
            </div>
            <h2 className="display-2 mx-auto max-w-2xl text-chalk">
              unsure which country matches your trade?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-chalk/60">
              Speak directly with our overseas recruitment specialists at
              Sonbarsa Bazar, NH 28, Gorakhpur or send your CV for evaluation.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-citron px-7 py-4 text-sm font-semibold lowercase text-charcoal transition-colors hover:bg-cream"
              >
                contact recruitment desk
                <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20counseling%20regarding%20which%20country%20is%20best%20for%20my%20skills.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-chalk/30 px-7 py-4 text-sm font-semibold lowercase text-chalk transition-colors hover:border-citron hover:text-citron"
              >
                <MessageCircle size={15} />
                whatsapp career consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
