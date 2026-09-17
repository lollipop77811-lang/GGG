import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Stethoscope,
  Plane,
  Award,
  UserCheck,
  ShieldCheck,
  Building2,
  Clock,
  MessageCircle,
  FileText,
  ShieldAlert,
} from "lucide-react";
import { contact } from "../data/siteData";

const detailedSteps = [
  {
    num: "01",
    icon: UserCheck,
    title: "Profile Review & Trade Registration",
    desc: "Submit your bio-data, experience details, and passport copy. Our team identifies which current overseas vacancy best aligns with your skill level and salary expectations.",
    image: "/about-consultancy.jpg",
    badge: "Step 01 • Bio-Data",
    tag: "Gorakhpur Office",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "Document Screening & Validation",
    desc: "Verification of your passport validity (minimum 8-12 months remaining), educational background, Aadhaar, and previous overseas work permits / Gulf stamps if applicable.",
    image: "/principles-legal.jpg",
    badge: "Step 02 • Verification",
    tag: "Legal Compliance",
  },
  {
    num: "03",
    icon: Award,
    title: "Client Interview & Practical Trade Test",
    desc: "Attend client interviews (online or in-person delegation) and practical skill trials at recognized testing workshops for trades like welding, plumbing, and electrical works.",
    image: "/about-workers.jpg",
    badge: "Step 03 • Skill Trial",
    tag: "Workshop Testing",
  },
  {
    num: "04",
    icon: Stethoscope,
    title: "GAMCA Medical Examination",
    desc: "Undergo compulsory medical diagnostics at authorized GAMCA medical centers (for GCC countries) or Embassy-specified clinics to verify physical and health fitness.",
    image: "/process-medical.jpg",
    badge: "Step 04 • Health Fitness",
    tag: "GAMCA Approved",
  },
  {
    num: "05",
    icon: FileCheck,
    title: "Visa Processing & Emigration Clearance",
    desc: "Receipt of authentic job offer letter / employment contract, followed by work visa endorsement, insurance documentation, and Emigration (Poe) clearance.",
    image: "/process-visa.jpg",
    badge: "Step 05 • Visa Stamping",
    tag: "Govt. Approved",
  },
  {
    num: "06",
    icon: Plane,
    title: "Orientation & Overseas Departure",
    desc: "Comprehensive pre-departure briefing on host country laws, workplace safety, camp regulations, followed by flight ticketing and airport reception coordination.",
    image: "/principles-departure.jpg",
    badge: "Step 06 • Flight Departure",
    tag: "Safe Deployment",
  },
];

const documents = [
  { doc: "Original Indian Passport", detail: "Minimum 8 to 12 months validity with at least 3-4 blank visa pages.", tag: "Mandatory" },
  { doc: "Passport Size Photographs", detail: "12-16 recent photos with white background (standard 35mm x 45mm visa spec).", tag: "Mandatory" },
  { doc: "Updated CV / Bio-Data", detail: "Detailing past employment history, international project work, and valid phone numbers.", tag: "Essential" },
  { doc: "Experience Certificates", detail: "Proof of previous company employment, site foreman letters, or trade apprenticeship.", tag: "Important" },
  { doc: "Gulf Visa / Exit Clearance", detail: "Previous Gulf visa copy, civil ID, or final exit proof for Gulf Return candidates.", tag: "Gulf Return" },
  { doc: "Educational / ITI Certificates", detail: "School certificate, ITI trade certificate, diploma, or technical marksheet copies.", tag: "Technical" },
];

const quickStats = [
  ["6 legal steps", "from profile to departure"],
  [`govt. reg. ${contact.registration}`, "official ministry adherence"],
  ["gamca diagnostic", "authorized medical hubs"],
  ["zero fraud", "direct transact at gorakhpur"],
];

export default function ProcessPage() {
  return (
    <div>
      {/* editorial hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        {/* background photo + wash */}
        <div className="absolute inset-0">
          <img
            src="/banner-process.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/55 to-navy-deep/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-navy-deep/25 to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,230,79,0.10),transparent_50%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 pt-36 pb-16 md:px-10 md:pt-44 md:pb-20">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cream/15 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-citron animate-blink" />
            <span className="text-[12px] font-medium tracking-wide text-cream/65">
              govt. reg. {contact.registration} • 100% ethical recruitment roadmap
            </span>
          </div>

          <h1 className="display-1 max-w-4xl text-cream">
            our recruitment &{" "}
            <em className="font-light text-citron not-italic">deployment process</em>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed font-light text-cream/65 md:text-[17px]">
            A transparent, legally verified, and step-by-step pathway for skilled
            Indian tradesmen aspiring to work in the GCC and Europe with
            authentic employer sponsorship and zero exploitation.
          </p>

          {/* chalk-flavored quick stats */}
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-cream/15 bg-cream/15 lg:grid-cols-4">
            {quickStats.map(([strong, small]) => (
              <div key={strong} className="bg-navy-deep/60 px-5 py-5 backdrop-blur">
                <strong className="block text-[13.5px] font-semibold lowercase text-citron">
                  {strong}
                </strong>
                <small className="mt-1 block text-[11.5px] text-cream/50 lowercase">
                  {small}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-stage journey */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Clock size={15} className="text-citron-deep" />
                <span className="label-tag text-ink-soft">transparent emigration roadmap</span>
              </div>
              <h2 className="display-2 max-w-xl">
                6 steps from registration to{" "}
                <span className="relative inline-block">
                  overseas flight
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
                </span>
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed text-ink-soft lg:justify-self-end lg:max-w-sm">
              Every stage in our recruitment process protects candidate rights,
              verifies genuine credentials, and guarantees authentic employer
              sponsorship.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {detailedSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="group flex flex-col overflow-hidden rounded-lg border border-line bg-cream transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(32,32,30,0.35)]"
                >
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-cream/92 px-3 py-1 text-[10.5px] font-bold tracking-[0.06em] text-charcoal lowercase">
                      {step.badge}
                    </span>
                    <span className="absolute top-3.5 right-3.5 rounded-full bg-citron px-3 py-1 text-[10.5px] font-bold text-charcoal lowercase">
                      {step.tag}
                    </span>
                    <span className="absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-citron text-charcoal">
                      <Icon size={16} />
                    </span>
                    <span className="scribble absolute right-5 bottom-1 text-4xl text-cream/80">
                      {step.num}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[17px] leading-snug font-semibold lowercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                      {step.desc}
                    </p>
                    <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-[12px] font-medium text-citron-deep">
                      <CheckCircle2 size={14} />
                      verified standard
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* documents checklist — editorial table */}
      <section className="border-y border-line bg-paper-deep py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <FileCheck size={15} className="text-citron-deep" />
                <span className="label-tag text-ink-soft">verification checklist</span>
              </div>
              <h2 className="display-2 max-w-xl">
                mandatory documents for{" "}
                <span className="relative inline-block">
                  overseas applicants
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
                </span>
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed text-ink-soft lg:justify-self-end lg:max-w-sm">
              Please carry clean physical copies and scanned digital PDFs of
              these credentials when visiting our Gorakhpur office.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-cream">
            <div className="overflow-x-auto thin-scroll">
              <table className="w-full min-w-[640px] text-left text-[13.5px]">
                <thead>
                  <tr className="border-b border-line bg-paper">
                    <th className="label-tag !text-[0.62rem] px-6 py-4 text-ink-soft">required document</th>
                    <th className="label-tag !text-[0.62rem] px-6 py-4 text-ink-soft">specifications & instructions</th>
                    <th className="label-tag !text-[0.62rem] px-6 py-4 text-ink-soft">priority status</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-line/70 transition-colors last:border-0 hover:bg-paper/60"
                    >
                      <td className="px-6 py-4.5">
                        <span className="flex items-center gap-3">
                          <FileText size={16} className="shrink-0 text-citron-deep" />
                          <strong className="text-[13.5px] font-semibold lowercase">{item.doc}</strong>
                        </span>
                      </td>
                      <td className="px-6 py-4.5 text-ink-soft">{item.detail}</td>
                      <td className="px-6 py-4.5">
                        <span className="inline-flex rounded-full border border-citron-deep/40 bg-citron/25 px-3 py-1 text-[11px] font-bold text-charcoal lowercase">
                          {item.tag}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* advisory — charcoal board */}
      <section className="bg-charcoal py-20 text-cream md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid items-start gap-10 rounded-lg border border-cream/12 p-8 md:p-14 lg:grid-cols-[auto_1fr] lg:gap-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-citron/40 text-citron">
              <ShieldCheck size={36} strokeWidth={1.4} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-citron/40 px-3.5 py-1.5 text-[11px] font-semibold text-citron lowercase">
                  <ShieldAlert size={13} />
                  official govt. reg. {contact.registration} advisory
                </span>
                <span className="rounded-full bg-cream/10 px-3.5 py-1.5 text-[11px] font-medium text-cream/70 lowercase">
                  zero middlemen • 100% ethical policy
                </span>
              </div>

              <h3 className="display-3 mt-6 text-cream">
                zero fraud & ethical recruitment policy
              </h3>

              <p className="mt-5 max-w-3xl text-[14.5px] leading-relaxed text-cream/60">
                Guru Gorakhnath Global Manpower LLP operates strictly under
                official Indian government overseas employment regulations.
                Transact and submit applications exclusively at our registered
                headquarters located at{" "}
                <strong className="text-cream">Sonbarsa Bazar, NH 28, Gorakhpur, UP</strong>{" "}
                or via our verified helpline:{" "}
                <strong className="text-citron">+91 {contact.primary}</strong>.
              </p>

              {/* verified pills */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-lg border border-cream/12 bg-cream/[0.04] px-5 py-4">
                  <Building2 size={20} className="shrink-0 text-citron" />
                  <div className="leading-tight">
                    <small className="block text-[11px] text-cream/45 lowercase">
                      official registered headquarters
                    </small>
                    <strong className="mt-1 block text-[13px] font-semibold lowercase">
                      sonbarsa bazar, nh 28, gorakhpur, up
                    </strong>
                  </div>
                </div>
                <a
                  href={`tel:${contact.primary}`}
                  className="flex items-center gap-4 rounded-lg border border-citron/30 bg-citron/[0.06] px-5 py-4 transition-colors hover:bg-citron hover:text-charcoal"
                >
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute h-full w-full rounded-full bg-citron animate-pulse-ring" />
                    <span className="h-2.5 w-2.5 rounded-full bg-citron" />
                  </span>
                  <div className="leading-tight">
                    <small className="block text-[11px] opacity-60 lowercase">
                      verified official helpline (direct)
                    </small>
                    <strong className="mt-1 block text-[13px] font-semibold lowercase">
                      +91 {contact.primary}
                    </strong>
                  </div>
                </a>
              </div>

              {/* warning callout */}
              <div className="mt-8 flex gap-4 rounded-lg border-l-4 border-citron bg-citron/[0.07] p-5">
                <span className="text-xl">⚠️</span>
                <div>
                  <strong className="text-[13.5px] font-semibold text-citron lowercase">
                    strict candidate vigilance warning:
                  </strong>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-cream/60">
                    We strictly warn candidates never to hand cash or personal
                    documents to unauthorized sub-agents or third-party
                    middlemen claiming to represent our recruitment firm.
                    Transact exclusively at our registered Sonbarsa Bazar,
                    Gorakhpur office under Govt. Reg. {contact.registration}.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA banner */}
          <div className="mt-8 flex flex-col items-start justify-between gap-7 rounded-lg bg-navy-deep p-8 md:p-12 lg:flex-row lg:items-center">
            <div>
              <h3 className="display-3 text-cream">
                ready to start your international journey?
              </h3>
              <p className="mt-3 text-[14px] text-cream/60 lowercase">
                schedule your in-person trade counseling session at our gorakhpur office today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-citron px-7 py-4 text-sm font-semibold lowercase text-charcoal transition-colors hover:bg-cream"
              >
                start candidate registration
                <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20know%20more%20about%20the%20recruitment%20process%20and%20register%20my%20profile.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-7 py-4 text-sm font-semibold lowercase text-cream transition-colors hover:border-citron hover:text-citron"
              >
                <MessageCircle size={15} />
                whatsapp process help
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
