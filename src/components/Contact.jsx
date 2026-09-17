import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  User,
  PhoneCall,
  Briefcase,
  FileText,
} from "lucide-react";
import { contact } from "../data/siteData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  function handleReset() {
    setSent(false);
    setFormData({ name: "", phone: "", category: "", message: "" });
  }

  const inputCls =
    "w-full border-0 border-b border-charcoal/20 bg-transparent py-3 text-[15px] text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-blue transition-colors rounded-none";

  const labelCls =
    "mb-1 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase";

  return (
    <section className="bg-paper py-24 md:py-32" id="contact">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* left: direct details */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-citron-deep" />
            <span className="label-tag text-ink-soft">get in touch</span>
          </div>

          <h2 className="display-2">
            ready for your next{" "}
            <span className="relative inline-block">
              opportunity?
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
            </span>
          </h2>

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Contact the office for current vacancies, eligibility, documents,
            job details and recruitment process.
          </p>

          <div className="mt-12 space-y-0 border-t border-line">
            {/* primary phone */}
            <a
              href={`tel:${contact.primary}`}
              className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:bg-cream/60"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12 transition-colors group-hover:border-blue group-hover:bg-blue group-hover:text-cream">
                <Phone size={17} strokeWidth={1.8} />
              </span>
              <div>
                <small className="block text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                  primary mobile hotline
                </small>
                <strong className="text-[15px] font-semibold lowercase">
                  +91 {contact.primary}
                </strong>
              </div>
            </a>

            {/* whatsapp */}
            <a
              href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20apply%20for%20overseas%20jobs.`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:bg-cream/60"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12 transition-colors group-hover:border-citron-deep group-hover:bg-citron">
                <MessageCircle size={17} strokeWidth={1.8} />
              </span>
              <div>
                <small className="block text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                  official whatsapp
                </small>
                <strong className="text-[15px] font-semibold lowercase">
                  chat with recruitment desk
                </strong>
              </div>
            </a>

            {/* address */}
            <div className="flex items-center gap-5 border-b border-line py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12">
                <MapPin size={17} strokeWidth={1.8} />
              </span>
              <div>
                <small className="block text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                  head office address
                </small>
                <strong className="text-[14px] font-medium">{contact.address}</strong>
              </div>
            </div>

            {/* meta pills */}
            <div className="flex flex-wrap gap-3 pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-[12px] font-medium text-ink-soft">
                <Clock size={13} className="text-blue" />
                mon – sat: 9:30 am – 6:30 pm
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-[12px] font-medium text-ink-soft">
                <ShieldCheck size={13} className="text-blue" />
                reg. no: {contact.registration}
              </span>
            </div>
          </div>
        </div>

        {/* right: form card (navy) */}
        <div className="rounded-lg bg-navy p-8 text-cream shadow-[0_32px_80px_-32px_rgba(9,30,51,0.7)] md:p-12">
          <div className="mb-2 flex items-center justify-between gap-4">
            <span className="label-tag text-citron">candidate enquiry</span>
            <span className="rounded-full border border-citron/40 px-3.5 py-1 text-[11px] font-semibold lowercase text-citron">
              free guidance
            </span>
          </div>
          <h3 className="display-3 mb-8">
            tell us your trade — we&apos;ll do the rest.
          </h3>

          {sent ? (
            <div className="py-10 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-citron text-charcoal">
                <CheckCircle2 size={30} />
              </span>
              <h3 className="mt-6 text-xl font-medium lowercase">enquiry received!</h3>
              <p className="mx-auto mt-3 max-w-sm text-[14px] leading-relaxed text-cream/65">
                Thank you, <strong className="text-citron">{formData.name || "candidate"}</strong>.
                Our recruitment counselors from the Gorakhpur office will contact you on{" "}
                <strong className="text-citron">{formData.phone || "your phone number"}</strong>{" "}
                regarding current vacancies.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-citron px-6 py-3.5 text-sm font-semibold lowercase text-charcoal transition-colors hover:bg-cream"
              >
                submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="applicant-name" className="!text-cream/50 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase">
                  <User size={13} className="text-citron" />
                  full name *
                </label>
                <input
                  id="applicant-name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-0 border-b border-cream/20 bg-transparent py-3 text-[15px] text-cream placeholder:text-cream/30 focus:border-citron focus:outline-none rounded-none"
                />
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="applicant-phone" className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
                    <PhoneCall size={13} className="text-citron" />
                    phone number *
                  </label>
                  <input
                    id="applicant-phone"
                    required
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-0 border-b border-cream/20 bg-transparent py-3 text-[15px] text-cream placeholder:text-cream/30 focus:border-citron focus:outline-none rounded-none"
                  />
                </div>

                <div>
                  <label htmlFor="applicant-category" className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
                    <Briefcase size={13} className="text-citron" />
                    trade category *
                  </label>
                  <select
                    id="applicant-category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border-0 border-b border-cream/20 bg-transparent py-3 text-[15px] text-cream focus:border-citron focus:outline-none rounded-none [&>option]:text-charcoal"
                  >
                    <option value="" disabled>
                      select category
                    </option>
                    <option value="Civil">civil construction</option>
                    <option value="MEP">mep (electrical, plumbing, hvac)</option>
                    <option value="Mechanical">mechanical (oil & gas / welding)</option>
                    <option value="Catering">catering & hospitality</option>
                    <option value="Furniture">furniture & woodworking</option>
                    <option value="Insulation">industrial insulation</option>
                    <option value="Aluminium">aluminium & glass glazing</option>
                    <option value="Facility">facility management</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="applicant-message" className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase">
                  <FileText size={13} className="text-citron" />
                  work experience & skills
                </label>
                <textarea
                  id="applicant-message"
                  rows="4"
                  placeholder="mention your trade experience, gulf return status (if any), and preferred country..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none border-0 border-b border-cream/20 bg-transparent py-3 text-[15px] text-cream placeholder:text-cream/30 focus:border-citron focus:outline-none rounded-none"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-citron py-4 text-sm font-semibold lowercase text-charcoal transition-colors duration-300 hover:bg-cream sm:w-auto sm:px-10"
              >
                send enquiry
                <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

              <p className="flex items-center gap-2 text-[12px] text-cream/45">
                <ShieldCheck size={14} className="text-citron" />
                100% confidential. no registration charges for basic enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
