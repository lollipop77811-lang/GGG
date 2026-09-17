import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Building2,
  FileText,
} from "lucide-react";
import { jobGroups, contact } from "../data/siteData";

const categoryMeta = {
  "Civil": {
    image: "/jobs/civil.jpg",
    experience: "1-4+ years relevant site experience",
    scope: "Residential, commercial complexes, and mega infrastructure projects.",
    badge: "High Demand",
    salary: "Competitive Gulf & EU Remuneration + Accommodation",
  },
  "MEP": {
    image: "/jobs/mep.jpg",
    experience: "ITI / Diploma / Gulf Return preferred with trade knowledge",
    scope: "HVAC, electrical wiring, sanitary piping, ducting & building automation.",
    badge: "Technical",
    salary: "Attractive Packages + Free Housing & Overtime",
  },
  "Mechanical (Oil/Gas)": {
    image: "/jobs/mechanical.jpg",
    experience: "Certified 3G/4G/6G Welders, Riggers & Industrial Fitters",
    scope: "Refineries, oil rigs, chemical plants, and heavy fabrication yards.",
    badge: "Top Earning",
    salary: "High-Pay Scales + Free Food, Acc. & Insurance",
  },
  "Catering": {
    image: "/jobs/catering.jpg",
    experience: "Hospitality background, restaurant, banquet, or camp kitchen",
    scope: "Hotels, corporate dining, catering companies, and industrial camps.",
    badge: "Hotels & Camps",
    salary: "Monthly Tax-Free Pay + Free Meals & Room",
  },
  "Furniture": {
    image: "/jobs/furniture.jpg",
    experience: "Woodwork, sofa fabrication, fine polishing and spray painting",
    scope: "Interior decor companies, furniture factories, and carpentry workshops.",
    badge: "Craftsmanship",
    salary: "Fixed Monthly Retainer + Performance Incentives",
  },
  "Insulation": {
    image: "/jobs/insulation.jpg",
    experience: "Thermal, acoustic, sheet metal fitting and refractory experience",
    scope: "Industrial plants, cold storages, HVAC installations, and power stations.",
    badge: "Specialized",
    salary: "Specialized Skill Pay + Overtime & Living Camp",
  },
  "Aluminium": {
    image: "/jobs/aluminium.jpg",
    experience: "Curtain walling, glass fixing, facade installation and cutting",
    scope: "Modern high-rise commercial structures and residential towers.",
    badge: "Modern Architecture",
    salary: "Gulf & European Standard Wages + Medical",
  },
  "Facility Management": {
    image: "/jobs/facility.jpg",
    experience: "Freshers & experienced candidates eligible with good health",
    scope: "Airports, shopping malls, corporate parks, and logistics warehouses.",
    badge: "Immediate Openings",
    salary: "Steady Employment + Overtime & Free Visa Care",
  },
};

const metrics = [
  [Briefcase, "text-blue"],
  [Award, "text-citron-deep"],
  [TrendingUp, "text-blue"],
  [Users, "text-citron-deep"],
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGroups = jobGroups
    .map((group) => {
      if (selectedCategory !== "all" && group.title !== selectedCategory) {
        return null;
      }
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const titleMatch = group.title.toLowerCase().includes(term);
        const matchedJobs = group.jobs.filter((j) => j.toLowerCase().includes(term));
        if (!titleMatch && matchedJobs.length === 0) {
          return null;
        }
        return {
          ...group,
          jobs: titleMatch ? group.jobs : matchedJobs,
        };
      }
      return group;
    })
    .filter(Boolean);

  const totalRoles = jobGroups.reduce((acc, curr) => acc + curr.jobs.length, 0);

  const metricTexts = [
    [`${totalRoles}+ Specializations`, "8 Core Industry Divisions"],
    ["Direct Visa Sponsorship", "Zero Middlemen Policy"],
    ["Skill-Based Salary", "Gulf & European Standards"],
    ["Gorakhpur Trade Hub", "Practical Assessment & Pre-Selection"],
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
              govt. reg. {contact.registration} • verified employer vacancies
            </span>
          </div>

          <h1 className="display-1 max-w-4xl text-cream">
            international job{" "}
            <em className="font-light text-citron not-italic">opportunities</em>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed font-light text-cream/65 md:text-[17px]">
            Explore {totalRoles}+ high-demand trade specializations across 8
            international sectors. Direct employer sponsorship, transparent
            employment contracts, and Gorakhpur skill assessment.
          </p>

          {/* search */}
          <div className="mt-10 max-w-2xl">
            <div className="flex items-center gap-3 rounded-full border border-cream/20 bg-cream/[0.06] px-5 py-3.5 backdrop-blur transition-colors focus-within:border-citron/60">
              <Search size={18} className="shrink-0 text-citron" />
              <input
                type="text"
                placeholder="search by trade (e.g. 6G welder, electrician, cook, mason, pipe fitter, driver)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                id="jobs-search-input"
                className="w-full bg-transparent text-[14px] text-cream placeholder:text-cream/35 focus:outline-none"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-citron hover:text-charcoal"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* metrics strip */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-10 gap-y-5 px-5 py-8 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
          {metricTexts.map(([strong, small], i) => {
            const [Icon, color] = metrics[i];
            return (
              <div
                key={strong}
                className={`flex items-center gap-4 ${i > 0 ? "lg:border-l lg:border-line lg:pl-10" : ""}`}
              >
                <Icon size={20} strokeWidth={1.6} className={`${color} shrink-0`} />
                <div className="leading-tight">
                  <strong className="block text-[14px] font-semibold lowercase">
                    {strong}
                  </strong>
                  <span className="mt-0.5 block text-[12px] text-ink-soft">{small}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* directory */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          {/* filter pills */}
          <div className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="label-tag text-ink-soft">select trade category:</span>
            <div className="flex flex-wrap gap-2">
              <button
                className={`rounded-full px-4.5 py-2 text-[12.5px] font-semibold lowercase transition-all ${
                  selectedCategory === "all"
                    ? "bg-charcoal text-citron"
                    : "border border-line bg-cream text-ink-soft hover:border-charcoal hover:text-charcoal"
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                all divisions ({jobGroups.length})
              </button>
              {jobGroups.map((g) => (
                <button
                  key={g.title}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[12.5px] font-semibold lowercase transition-all ${
                    selectedCategory === g.title
                      ? "bg-charcoal text-citron"
                      : "border border-line bg-cream text-ink-soft hover:border-charcoal hover:text-charcoal"
                  }`}
                  onClick={() => setSelectedCategory(g.title)}
                >
                  <span>{g.icon}</span>
                  {g.title}
                </button>
              ))}
            </div>
          </div>

          {filteredGroups.length === 0 ? (
            <div className="rounded-lg border border-dashed border-line bg-cream py-20 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-paper-deep text-citron-deep">
                <Search size={24} />
              </span>
              <h3 className="mt-5 text-xl font-medium lowercase">no matching job roles found</h3>
              <p className="mx-auto mt-2 max-w-md text-[14px] text-ink-soft">
                We couldn&apos;t find any trades matching &quot;{searchTerm}&quot;. Try
                searching for another skill or reset filters.
              </p>
              <button
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-semibold lowercase text-cream transition-colors hover:bg-blue"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                reset all filters
                <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredGroups.map((group) => {
                const meta = categoryMeta[group.title] || {
                  image: "/jobs/civil.jpg",
                  experience: "Experience in trade preferred",
                  scope: "Overseas commercial & industrial projects",
                  badge: "Active",
                  salary: "Industry Competitive Salary",
                };

                const whatsappUrl = `https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20am%20interested%20in%20applying%20for%20jobs%20in%20the%20${encodeURIComponent(group.title)}%20Division.`;

                return (
                  <article
                    key={group.title}
                    className="group flex flex-col overflow-hidden rounded-lg border border-line bg-cream transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(32,32,30,0.35)]"
                  >
                    {/* image header */}
                    <div className="relative">
                      <img
                        src={meta.image}
                        alt={`${group.title} trade recruitment`}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent" />
                      <span className="absolute top-3.5 left-3.5 rounded-full bg-citron px-3 py-1 text-[10.5px] font-bold tracking-[0.08em] text-charcoal lowercase">
                        {meta.badge}
                      </span>
                      <span className="absolute top-3.5 right-3.5 rounded-full bg-cream/90 px-3 py-1 text-[10.5px] font-bold tracking-[0.08em] text-charcoal lowercase">
                        {group.jobs.length} positions
                      </span>
                      <div className="absolute bottom-3.5 left-4 flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/95 text-sm">
                          {group.icon}
                        </span>
                        <h3 className="text-lg font-semibold lowercase text-cream">
                          {group.title} division
                        </h3>
                      </div>
                    </div>

                    {/* body */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="space-y-2.5 border-b border-line pb-5 text-[13px] leading-relaxed text-ink-soft">
                        <p className="flex gap-2">
                          <Building2 size={14} className="mt-0.5 shrink-0 text-citron-deep" />
                          <span>
                            <strong className="text-charcoal">scope:</strong> {meta.scope}
                          </span>
                        </p>
                        <p className="flex gap-2">
                          <ShieldCheck size={14} className="mt-0.5 shrink-0 text-citron-deep" />
                          <span>
                            <strong className="text-charcoal">eligibility:</strong>{" "}
                            {meta.experience}
                          </span>
                        </p>
                      </div>

                      <div className="mt-5 flex-1">
                        <span className="label-tag !text-[0.62rem] text-ink-soft">
                          available trade specializations
                        </span>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {group.jobs.map((job) => (
                            <span
                              key={job}
                              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-[11.5px] font-medium lowercase transition-colors hover:border-citron-deep hover:bg-citron/25"
                            >
                              <CheckCircle2 size={11} className="text-citron-deep" />
                              {job}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* actions */}
                      <div className="mt-6 grid grid-cols-[1fr_auto] gap-2.5">
                        <Link
                          to={`/contact?category=${encodeURIComponent(group.title)}`}
                          className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-[13px] font-semibold lowercase text-cream transition-colors hover:bg-blue"
                        >
                          apply for {group.title}
                          <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          title={`Inquire about ${group.title} jobs on WhatsApp`}
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
          )}
        </div>
      </section>

      {/* eligibility */}
      <section className="border-y border-line bg-paper-deep py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <ShieldCheck size={15} className="text-citron-deep" />
                <span className="label-tag text-ink-soft">documentation & assessment</span>
              </div>
              <h2 className="display-2 max-w-xl">
                standard eligibility for{" "}
                <span className="relative inline-block">
                  overseas employment
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
                </span>
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed text-ink-soft lg:justify-self-end lg:max-w-sm">
              Ensure you have the following credentials ready before attending
              practical trade interviews at our Gorakhpur office.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {[
              [
                FileText,
                "passport & identity",
                "Original Indian passport with at least 8 to 12 months validity, clear copies of Aadhaar Card, PAN Card, and recent white-background photographs.",
              ],
              [
                Briefcase,
                "trade work experience",
                "Work certificates, previous company service letters, or overseas visa stamps (for Gulf return candidates) validating hands-on trade skills.",
              ],
              [
                Award,
                "practical trade testing",
                "Candidates applying for skilled trade categories (welding, electrical, plumbing, masonry) undergo a hands-on trade trial at our certified workshop.",
              ],
            ].map(([Icon, title, text]) => (
              <div key={title} className="group bg-cream p-8 transition-colors hover:bg-paper">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/12 transition-colors group-hover:border-citron group-hover:bg-citron">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h4 className="mt-6 text-lg font-medium lowercase tracking-tight">{title}</h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-board py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="relative overflow-hidden rounded-lg border border-dashed border-chalk/25 p-10 text-center md:p-16">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-chalk/20 px-4 py-2 text-[12px] font-medium text-chalk/70">
              <Briefcase size={13} className="text-citron" />
              direct recruitment desk • gorakhpur, up
            </div>
            <h2 className="display-2 mx-auto max-w-2xl text-chalk">
              can&apos;t find your exact trade specialization?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-chalk/60">
              We frequently handle custom overseas recruitment drives for
              specialized trades and technical operators. Visit our Sonbarsa
              Bazar, NH 28, Gorakhpur office or submit your CV directly.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-citron px-7 py-4 text-sm font-semibold lowercase text-charcoal transition-colors hover:bg-cream"
              >
                submit cv for assessment
                <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20inquire%20about%20job%20vacancies%20matching%20my%20trade.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-chalk/30 px-7 py-4 text-sm font-semibold lowercase text-chalk transition-colors hover:border-citron hover:text-citron"
              >
                <MessageCircle size={15} />
                whatsapp recruitment desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
