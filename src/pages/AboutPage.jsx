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
  Sparkles,
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

  return (
    <div className="page-about">
      {/* Top Banner - hideBreadcrumb=true removes the top Home breadcrumb line per user request */}
      <PageBanner
        kicker="Official Overseas Recruitment Center • Gorakhpur"
        title="About Guru Gorakhnath Global Manpower"
        description="A government-recognized overseas manpower consultancy bridging India's skilled tradesmen and technical workforce with prestigious career opportunities across the Gulf and Europe."
        hideBreadcrumb={true}
      />

      {/* Trust & Stats Metric Bar */}
      <section className="about-stats-bar">
        <div className="container about-stats-container">
          <div className="about-stat-item">
            <div className="stat-icon-wrap gold">
              <Globe size={22} />
            </div>
            <div>
              <strong className="stat-number">12+</strong>
              <span className="stat-label">Global Nations</span>
            </div>
          </div>

          <div className="about-stat-item">
            <div className="stat-icon-wrap blue">
              <Briefcase size={22} />
            </div>
            <div>
              <strong className="stat-number">45+</strong>
              <span className="stat-label">Trade Categories</span>
            </div>
          </div>

          <div className="about-stat-item">
            <div className="stat-icon-wrap green">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong className="stat-number">Reg. {contact.registration}</strong>
              <span className="stat-label">Government Approved</span>
            </div>
          </div>

          <div className="about-stat-item">
            <div className="stat-icon-wrap amber">
              <MapPin size={22} />
            </div>
            <div>
              <strong className="stat-number">Gorakhpur, UP</strong>
              <span className="stat-label">Headquarters & Desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage, Mission & Photo Collage Section */}
      <section className="section about-heritage-section">
        <div className="container">
          <div className="about-heritage-grid">
            {/* Left Narrative Column */}
            <div className="about-heritage-content">
              <div className="section-kicker">
                <Sparkles size={14} />
                <span>Our Heritage & Mission</span>
              </div>
              <h2 className="about-section-heading">
                From local craftsmanship to <span>flourishing global careers.</span>
              </h2>

              <p className="about-lead-para">
                <strong>Guru Gorakhnath Global Manpower LLP</strong> was established with a singular, unwavering vision: to provide honest, legally safeguarded, and transparent overseas employment opportunities for skilled and hardworking professionals from Uttar Pradesh and across India.
              </p>

              <p className="about-body-para">
                Headquartered at Sonbarsa Bazar, NH 28, Gorakhpur, we serve as an accredited gateway connecting talented masons, electricians, pipe fitters, fabricators, welders, chefs, and facility staff with premier employers in the Gulf (Dubai, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain) and Europe (Romania, Poland, Bulgaria).
              </p>

              {/* Verification Checklist */}
              <div className="about-checklist">
                {verificationPoints.map((pt, idx) => (
                  <div className="checklist-card" key={idx}>
                    <div className="checklist-icon">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <strong>{pt.title}</strong>
                      <span>{pt.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Executive Quote Callout */}
              <div className="about-quote-card">
                <div className="quote-accent-bar" />
                <p>
                  "We hold ourselves to the highest standards of integrity. Every job opening we share is verified, every visa processed is legal, and every candidate is guided like family."
                </p>
                <div className="quote-author">
                  <strong>Leadership Team</strong>
                  <small>Guru Gorakhnath Global Manpower LLP • Gorakhpur</small>
                </div>
              </div>
            </div>

            {/* Right Media Photo Collage Column */}
            <div className="about-media-column">
              <div className="photo-collage-wrapper">
                {/* Main Corporate Office Photo */}
                <div className="photo-card main-photo">
                  <img
                    src="/about-consultancy.jpg"
                    alt="Guru Gorakhnath Global Manpower Executive Consultation"
                    className="collage-image"
                    loading="lazy"
                  />
                  <div className="photo-overlay-caption">
                    <Building2 size={15} />
                    <span>Executive Overseas Consultation & Document Verification</span>
                  </div>
                </div>

                {/* Overlapping Trade Testing Photo */}
                <div className="photo-card sub-photo">
                  <img
                    src="/about-workers.jpg"
                    alt="Candidate Skill Testing and Technical Training"
                    className="collage-image"
                    loading="lazy"
                  />
                  <div className="photo-overlay-caption">
                    <Award size={15} />
                    <span>Trade Testing & Certified Skill Assessment</span>
                  </div>
                </div>

                {/* Floating Animated Badge 1 */}
                <div className="floating-badge badge-gov">
                  <div className="badge-icon-glow">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <strong>Govt. Reg. {contact.registration}</strong>
                    <small>100% Genuine Recruitment</small>
                  </div>
                </div>

                {/* Floating Animated Badge 2 */}
                <div className="floating-badge badge-world">
                  <div className="badge-icon-glow">
                    <Globe size={18} />
                  </div>
                  <div>
                    <strong>12+ Overseas Markets</strong>
                    <small>GCC & European Deployment</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Deployment Network Section */}
      <section className="section about-countries-section">
        <div className="container">
          <div className="section-heading centered">
            <div className="section-kicker">
              <Globe size={14} />
              <span>International Deployment</span>
            </div>
            <h2>Countries We Recruit & Deploy For</h2>
            <p className="section-subtitle">
              We maintain direct connections with trusted overseas companies offering authentic employment visas, company accommodation, and competitive earnings.
            </p>
          </div>

          <div className="about-countries-grid">
            {featuredCountries.map((c) => (
              <div className="about-country-card" key={c.name}>
                <div className="country-img-wrap">
                  <img
                    src={`/countries/${c.code}.jpg`}
                    alt={c.name}
                    className="country-thumb"
                    loading="lazy"
                  />
                  <span className="country-region-tag">{c.region}</span>
                </div>
                <div className="country-info">
                  <h4>{c.name}</h4>
                  <p>{c.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="countries-cta-row">
            <Link to="/countries" className="btn btn-outline-gold">
              <span>View All 12 Country Guidelines</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Highlights Section */}
      <section className="section dark-section about-highlights-section">
        <div className="container">
          <div className="section-heading centered">
            <div className="section-kicker light">
              <FileCheck2 size={14} />
              <span>Our Core Principles</span>
            </div>
            <h2>Why Candidates & Employers Trust Us</h2>
            <p style={{ color: "#cbd5e1", maxWidth: "680px", margin: "0 auto" }}>
              Our transparent approach eliminates middlemen, protects workers' rights, and provides international employers with pre-vetted, qualified candidates.
            </p>
          </div>

          <div className="highlights-grid-modern">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="highlight-card-modern" key={idx}>
                  <div className="highlight-card-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="highlight-card-img"
                      loading="lazy"
                    />
                    <span className="highlight-card-badge">{item.badge}</span>
                    <div className="highlight-icon-glow">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="highlight-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us component */}
      <WhyChooseUs />

      {/* Gorakhpur Office & Direct Action Section */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="cta-content">
              <div className="section-kicker">
                <MapPin size={14} />
                <span>Visit Our Gorakhpur Office</span>
              </div>
              <h2>Ready to take your trade overseas?</h2>
              <p>
                Visit our office at <strong>Sonbarsa Bazar (Police Chowki ke bagal mein), NH 28, Gorakhpur, UP</strong> for direct consultation, document assessment, and current vacancy registration.
              </p>

              <div className="cta-meta-badges">
                <span className="meta-pill">
                  <ShieldCheck size={14} /> Govt. Reg: {contact.registration}
                </span>
                <span className="meta-pill">
                  <MapPin size={14} /> NH 28, Gorakhpur
                </span>
                <span className="meta-pill">
                  <Briefcase size={14} /> Direct Employer Interviews
                </span>
              </div>

              <div className="cta-btn-group">
                <Link to="/jobs" className="btn btn-primary cta-main-btn">
                  <span>Browse Open Vacancies</span>
                  <ArrowRight size={17} />
                </Link>

                <a
                  href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20know%20more%20about%20your%20services.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={17} />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link to="/contact" className="btn btn-secondary">
                  <span>Contact Information</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
