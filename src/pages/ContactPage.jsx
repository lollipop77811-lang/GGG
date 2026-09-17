import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  PhoneCall,
  User,
  Briefcase,
  Globe,
  Award,
  FileText,
  Building2,
  Navigation,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import PageBanner from "../components/PageBanner";
import { contact } from "../data/siteData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    destination: "",
    experience: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  const statsBar = [
    [ShieldCheck, `govt. reg. ${contact.registration}`, "100% legal recruitment"],
    [MessageCircle, "quick whatsapp desk", "average response < 15 mins"],
    [Building2, "walk-in trade center", "sonbarsa bazar, nh 28, up"],
    [Award, "zero counseling fee", "free profile assessment"],
  ];

  const inputCls =
    "w-full rounded-none border-0 border-b border-cream/20 bg-transparent py-3 text-[15px] text-cream placeholder:text-cream/30 focus:border-citron focus:outline-none";
  const labelCls =
    "flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-cream/50 uppercase";

  return (
    <div>
      <PageBanner
        kicker="official inquiries & support"
        title="contact our gorakhpur center"
        description="Connect directly with registered overseas recruitment specialists for interview schedules, vacancy registration, and document assessment."
        breadcrumb="contact"
        hideBreadcrumb={true}
      />

      {/* stats strip */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-10 gap-y-5 px-5 py-8 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
          {statsBar.map(([Icon, strong, small], i) => (
            <div
              key={strong}
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

      {/* main: details + form */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-citron-deep" />
              <span className="label-tag text-ink-soft">direct connect & consultation</span>
            </div>

            <h2 className="display-2 max-w-lg">
              we are here to{" "}
              <span className="relative inline-block">
                guide your international career.
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-citron/60 md:h-4" />
              </span>
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Call our dedicated recruitment desk, connect via WhatsApp for
              quick vacancy inquiries, or visit our Gorakhpur headquarters for
              in-person trade testing and document checks.
            </p>

            {/* contact cards */}
            <div className="mt-10 border-t border-line">
              {/* hotline */}
              <a
                href={`tel:${contact.primary}`}
                className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:bg-cream/60"
              >
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12 transition-colors group-hover:border-blue group-hover:bg-blue group-hover:text-cream">
                  <PhoneCall size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <small className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                    primary mobile / hotline
                    <span className="rounded-full bg-citron px-2 py-0.5 text-[9px] font-bold tracking-normal text-charcoal normal-case">
                      direct line
                    </span>
                  </small>
                  <strong className="text-[15px] font-semibold lowercase">+91 {contact.primary}</strong>
                  <span className="block text-[12px] text-ink-soft">click to call counselor directly</span>
                </div>
              </a>

              {/* whatsapp */}
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20am%20interested%20in%20current%20overseas%20vacancies%20and%20want%20to%20register%20my%20profile.`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:bg-cream/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12 transition-colors group-hover:border-citron-deep group-hover:bg-citron">
                  <MessageCircle size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <small className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                    official whatsapp desk
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold tracking-normal text-emerald-800 normal-case">
                      <span className="h-1 w-1 rounded-full bg-emerald-500 animate-blink" /> online now
                    </span>
                  </small>
                  <strong className="text-[15px] font-semibold lowercase">chat with recruitment desk</strong>
                  <span className="block text-[12px] text-ink-soft">instant vacancy updates & cv sharing</span>
                </div>
              </a>

              {/* office */}
              <div className="flex items-center gap-5 border-b border-line py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12">
                  <MapPin size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <small className="block text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                    registered head office
                  </small>
                  <strong className="text-[14px] font-medium">{contact.address}</strong>
                  <span className="block text-[12px] text-ink-soft">landmark: beside police chowki on nh 28</span>
                </div>
              </div>

              {/* hours */}
              <div className="flex items-center gap-5 border-b border-line py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12">
                  <Clock size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <small className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                    counseling & office hours
                    <span className="rounded-full border border-line px-2 py-0.5 text-[9px] font-bold tracking-normal text-charcoal normal-case">
                      mon – sat
                    </span>
                  </small>
                  <strong className="text-[14px] font-medium lowercase">9:30 am to 6:30 pm (sunday closed)</strong>
                  <span className="block text-[12px] text-ink-soft">walk-in candidate registration open daily</span>
                </div>
              </div>

              {/* legal */}
              <div className="flex items-center gap-5 border-b border-line py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/12">
                  <ShieldCheck size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <small className="block text-[11px] font-semibold tracking-[0.14em] text-ink-soft uppercase">
                    legal recruitment licensure
                  </small>
                  <strong className="text-[14px] font-medium lowercase">
                    govt. registration no. {contact.registration}
                  </strong>
                  <span className="block text-[12px] text-ink-soft">recognized under indian overseas employment act</span>
                </div>
              </div>
            </div>

            {/* helplines */}
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-[15px] font-semibold lowercase">additional direct office helplines</h4>
                <span className="rounded-full border border-line bg-cream px-3 py-1 text-[10.5px] font-bold tracking-[0.1em] text-ink-soft uppercase">
                  direct lines
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {contact.phones.map((phoneNum) => (
                  <a
                    key={phoneNum}
                    href={`tel:${phoneNum}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-[12.5px] font-medium transition-colors hover:border-blue hover:bg-blue hover:text-cream"
                  >
                    <Phone size={11} />
                    {phoneNum}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* right: navy form */}
          <div className="rounded-lg bg-navy p-8 text-cream shadow-[0_32px_80px_-32px_rgba(9,30,51,0.7)] md:p-11">
            <span className="inline-flex items-center gap-2 rounded-full border border-citron/40 px-3.5 py-1.5 text-[11px] font-semibold text-citron lowercase">
              <ShieldCheck size={12} />
              govt. reg. {contact.registration}
            </span>
            <h3 className="display-3 mt-5 mb-2">candidate application & registration</h3>
            <p className="mb-9 text-[13.5px] leading-relaxed text-cream/55">
              Submit your profile for instant trade assessment and upcoming
              international interview calls.
            </p>

            {submitted ? (
              <div className="py-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-citron text-charcoal">
                  <CheckCircle2 size={30} />
                </span>
                <h3 className="mt-6 text-xl font-medium lowercase">registration successful!</h3>
                <p className="mt-2 text-[15px] text-citron lowercase">
                  thank you, {formData.name || "candidate"}!
                </p>
                <p className="mx-auto mt-3 max-w-sm text-[13.5px] leading-relaxed text-cream/60">
                  Your candidate inquiry has been logged in our recruitment
                  portal. A senior recruiter from our Gorakhpur center will
                  contact you on{" "}
                  <strong className="text-citron">{formData.phone || "your number"}</strong>{" "}
                  with active overseas interview openings.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", category: "", destination: "", experience: "", message: "" });
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-citron px-6 py-3.5 text-sm font-semibold lowercase text-charcoal transition-colors hover:bg-cream"
                >
                  submit another application
                  <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label htmlFor="contactpage-name" className={labelCls}>
                    <User size={13} className="text-citron" />
                    full name as in passport *
                  </label>
                  <input
                    id="contactpage-name"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputCls}
                  />
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contactpage-phone" className={labelCls}>
                      <PhoneCall size={13} className="text-citron" />
                      phone / whatsapp *
                    </label>
                    <input
                      id="contactpage-phone"
                      required
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactpage-category" className={labelCls}>
                      <Briefcase size={13} className="text-citron" />
                      preferred trade category *
                    </label>
                    <select
                      id="contactpage-category"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className={`${inputCls} [&>option]:text-charcoal`}
                    >
                      <option value="" disabled>
                        select your trade
                      </option>
                      <option>civil (mason, shuttering carpenter, steel fixer, helper)</option>
                      <option>mep (electrician, plumber, hvac tech, pipe fitter)</option>
                      <option>mechanical (6g welders, riggers, fabricators)</option>
                      <option>catering & hospitality (cook, chef, waiter, f&b)</option>
                      <option>furniture & woodworking (carpenters, polishers)</option>
                      <option>insulation (sheet metal, thermal & acoustic)</option>
                      <option>aluminium & glass facade fitters</option>
                      <option>facility management (cleaners, packing, warehouse)</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contactpage-dest" className={labelCls}>
                      <Globe size={13} className="text-citron" />
                      target overseas destination
                    </label>
                    <select
                      id="contactpage-dest"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className={`${inputCls} [&>option]:text-charcoal`}
                    >
                      <option value="">any available high-paying country</option>
                      <option>dubai & uae 🇦🇪</option>
                      <option>saudi arabia (ksa) 🇸🇦</option>
                      <option>qatar 🇶🇦</option>
                      <option>kuwait 🇰🇼 / oman 🇴🇲 / bahrain 🇧🇭</option>
                      <option>europe (romania 🇷🇴, poland 🇵🇱, bulgaria 🇧🇬)</option>
                      <option>israel 🇮🇱 / russia 🇷🇺</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactpage-exp" className={labelCls}>
                      <Award size={13} className="text-citron" />
                      work experience level
                    </label>
                    <select
                      id="contactpage-exp"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className={`${inputCls} [&>option]:text-charcoal`}
                    >
                      <option value="">select experience level</option>
                      <option>fresher (0 - 1 year / iti certified)</option>
                      <option>1 - 3 years (india domestic work)</option>
                      <option>4 - 7 years (senior tradesman / foreman)</option>
                      <option>gulf return (previous overseas deployment)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactpage-msg" className={labelCls}>
                    <FileText size={13} className="text-citron" />
                    additional trade skills / passport details
                  </label>
                  <textarea
                    id="contactpage-msg"
                    rows="3"
                    placeholder="mention your trade specialization, current city, and whether passport is ecr or ecnr..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-citron py-4 text-sm font-semibold lowercase text-charcoal transition-colors duration-300 hover:bg-cream disabled:opacity-60 sm:w-auto sm:px-10"
                >
                  {isSubmitting ? "processing inquiry..." : "submit candidate application"}
                  <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>

                <p className="flex items-center gap-2 text-[12px] text-cream/45">
                  <ShieldCheck size={14} className="text-citron" />
                  100% protected data • zero third-party sharing • govt. emigration standards compliant
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* office directions */}
      <section className="border-t border-line bg-paper-deep py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid items-center gap-10 rounded-lg border border-line bg-cream p-9 md:p-14 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Navigation size={14} className="text-citron-deep" />
                <span className="label-tag text-ink-soft">visit in person for trade testing</span>
              </div>
              <h3 className="display-3">gorakhpur walk-in recruitment headquarters</h3>
              <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
                Candidates are welcome to visit our official facility for direct
                CV submission, live trade assessment, and upcoming client
                interview briefing. Located prominently along{" "}
                <strong className="text-charcoal">National Highway 28 at Sonbarsa Bazar</strong>,
                right beside the local <strong className="text-charcoal">Police Chowki</strong>.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {[
                  "📍 sonbarsa bazar, nh 28, gorakhpur",
                  "🏛️ landmark: directly beside police chowki",
                  "🚆 18 km from gorakhpur junction railway station",
                  "🚌 regular bus connectivity on gorakhpur-kushinagar highway",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-[12px] font-medium text-ink-soft"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent("Sonbarsa Bazar, NH 28, Gorakhpur, Uttar Pradesh 273002")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-charcoal px-7 py-4 text-sm font-semibold lowercase text-cream transition-colors hover:bg-blue"
              >
                <MapPin size={16} />
                open in google maps
              </a>
              <span className="text-[12px] font-medium tracking-wide text-ink-soft lowercase">
                nh 28 gorakhpur • 273002 up
              </span>
            </div>
          </div>

          {/* trust cards */}
          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {[
              [ShieldCheck, "direct legal emigration", "Transact exclusively at our registered Sonbarsa Bazar office. We have zero tolerance for middlemen or unverified sub-agents."],
              [FileText, "required documents for visit", "Carry original passport, recent photographs (white background), trade certificate/ITI diploma, and past experience proofs."],
              [CheckCircle, "transparent visa issuance", "Direct company employment contracts with medical insurance, accommodation, and guaranteed minimum legal wage structure."],
            ].map(([Icon, title, text], i) => (
              <div key={title} className="group bg-cream p-8 transition-colors hover:bg-paper">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                    i === 1
                      ? "border-blue/30 text-blue group-hover:bg-blue group-hover:text-cream group-hover:border-blue"
                      : "border-charcoal/12 group-hover:border-citron group-hover:bg-citron"
                  }`}
                >
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <h4 className="mt-6 text-[16px] font-medium lowercase tracking-tight">{title}</h4>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
