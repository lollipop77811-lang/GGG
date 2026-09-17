import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Globe,
  CheckCircle2,
  ArrowRight,
  Plane,
  Building2,
  Briefcase,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  FileCheck,
} from "lucide-react";
import { countries, contact } from "../data/siteData";

const countryDetails = {
  "Dubai": {
    image: "/countries/dubai.jpg",
    region: "Middle East / UAE",
    flag: "🇦🇪",
    roles: ["MEP Technicians", "Hospitality & Catering", "Facility Management", "Civil Trades", "Drivers"],
    contract: "2 Years (Renewable)",
    perks: "Free Accommodation, Medical Insurance & Transport provided as per UAE Labor Law",
    desc: "A premier global hub with immense demand across construction, hospitality, MEP and facility management."
  },
  "Saudi Arabia": {
    image: "/countries/saudi-arabia.jpg",
    region: "Middle East / GCC",
    flag: "🇸🇦",
    roles: ["Oil & Gas Multi-Welders", "Pipe Fitters", "Civil Construction", "Electricians", "Heavy Equipment"],
    contract: "2 Years (Renewable)",
    perks: "Food Allowance, Free Accommodation, Medical & Ample Overtime opportunities",
    desc: "Massive demand for industrial refineries, commercial infrastructure, and mega-projects under Vision 2030."
  },
  "Qatar": {
    image: "/countries/qatar.jpg",
    region: "Middle East / GCC",
    flag: "🇶🇦",
    roles: ["MEP Trades", "AC Technicians", "Facility & Hospitality", "Fabricators", "Cleaners"],
    contract: "2 Years (Renewable)",
    perks: "Full company sponsorship, accommodation, and standard GCC labor protections",
    desc: "Consistent openings in facility maintenance, commercial hospitality, and technical engineering services."
  },
  "Bahrain": {
    image: "/countries/bahrain.jpg",
    region: "Middle East / GCC",
    flag: "🇧🇭",
    roles: ["Civil Masons", "Steel Fixers", "Plumbers", "Electricians", "Catering Crew"],
    contract: "2 Years (Renewable)",
    perks: "Company accommodation, health coverage, and airfare return upon contract completion",
    desc: "A stable market with high reliability and long-term career growth for qualified Indian craftsmen."
  },
  "Oman": {
    image: "/countries/oman.jpg",
    region: "Middle East / GCC",
    flag: "🇴🇲",
    roles: ["Mechanical Trades", "Civil Workers", "Insulation & Aluminium", "Welders", "Riggers"],
    contract: "2 Years (Renewable)",
    perks: "Furnished accommodation, transportation, and standard employment visa protections",
    desc: "Established industrial complexes and ports actively recruiting experienced technical manpower."
  },
  "Kuwait": {
    image: "/countries/kuwait.jpg",
    region: "Middle East / GCC",
    flag: "🇰🇼",
    roles: ["Refinery Pipefitters", "MEP Engineers", "Catering & Cooks", "Furniture Craftsmen"],
    contract: "2 Years (Renewable)",
    perks: "Competitive Gulf remuneration, accommodation, and medical coverage",
    desc: "High-value opportunities in petrochemical refineries, commercial infrastructure, and catering."
  },
  "Iraq": {
    image: "/countries/iraq.jpg",
    region: "Middle East",
    flag: "🇮🇶",
    roles: ["Petrochemical Technicians", "Certified Welders", "Industrial Riggers", "General Labor"],
    contract: "1-2 Years",
    perks: "Attractive high allowances, secured camp accommodation, full food and insurance",
    desc: "Heavy industrial and petrochemical projects offering lucrative earnings for experienced hands."
  },
  "Romania": {
    image: "/countries/romania.jpg",
    region: "Europe (EU)",
    flag: "🇷🇴",
    roles: ["Construction Workers", "Welders & Fitters", "Carpenters", "Factory & Logistics"],
    contract: "1-2 Years (Extendable work permit)",
    perks: "European work permit, company housing, healthcare, and overtime potential",
    desc: "Rapidly expanding European Union market welcoming skilled Indian construction and factory workforce."
  },
  "Poland": {
    image: "/countries/poland.jpg",
    region: "Europe (Schengen)",
    flag: "🇵🇱",
    roles: ["MIG/MAG Welders", "Warehouse Pickers", "Metal Fabricators", "Meat/Food Processing"],
    contract: "1-3 Years National D Visa",
    perks: "Schengen work permit, European labor standards, social insurance, and bonuses",
    desc: "Thriving European manufacturing, warehousing, and engineering sector with strong legal safeguards."
  },
  "Bulgaria": {
    image: "/countries/bulgaria.jpg",
    region: "Europe (EU)",
    flag: "🇧🇬",
    roles: ["Civil Construction", "Steel Workers", "Aluminium & Glass Fitters", "General Helpers"],
    contract: "1 Year (Renewable)",
    perks: "Company accommodation, legal work authorization, health cover, and airfare",
    desc: "A reliable gateway into European civil infrastructure, prefabrication, and construction projects."
  },
  "Israel": {
    image: "/countries/israel.jpg",
    region: "Middle East",
    flag: "🇮🇱",
    roles: ["Formwork Carpenters", "Steel Fixers", "Plasterers & Tile Masons", "Civil Helpers"],
    contract: "Long term government-authorized agreements",
    perks: "Extremely competitive international wages, high earning potential, organized living camps",
    desc: "Substantial demand for specialized construction craftsmen under verified bilateral frameworks."
  },
  "Russia": {
    image: "/countries/russia.jpg",
    region: "Eurasia",
    flag: "🇷🇺",
    roles: ["Industrial Welders", "Heavy Construction", "Prefabrication Trades", "Machine Operators"],
    contract: "1-2 Years Work Visa",
    perks: "Company arranged housing, thermal winter gear provisions, and medical coverage",
    desc: "Mega-construction and energy infrastructure programs offering steady high-paying employment."
  }
};

export default function CountriesPage() {
  const [filter, setFilter] = useState("all");

  const gccList = ["Dubai", "Saudi Arabia", "Bahrain", "Qatar", "Oman", "Kuwait", "Iraq"];
  const europeList = ["Romania", "Poland", "Bulgaria", "Israel", "Russia"];

  const filteredCountries = countries.filter(c => {
    if (filter === "gcc") return gccList.includes(c);
    if (filter === "europe") return europeList.includes(c);
    return true;
  });

  return (
    <div className="page-countries">
      {/* Top Animated Global Hero Section with Background Flight Paths & Aurora Effects */}
      <section className="countries-hero-top">
        {/* Background Visual Effects */}
        <div className="countries-hero-bg" aria-hidden="true">
          {/* Ambient Aurora Glow Orbs */}
          <div className="aurora-orb orb-gold" />
          <div className="aurora-orb orb-blue" />
          <div className="aurora-orb orb-amber" />
          
          {/* Geodesic Mesh / Grid Pattern */}
          <div className="geodesic-grid-pattern" />

          {/* Animated Global Flight Routes SVG */}
          <svg className="flight-routes-svg" viewBox="0 0 1200 480" preserveAspectRatio="none">
            <defs>
              <linearGradient id="routeGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Glowing Flight Arcs from Gorakhpur/India hub to international destinations */}
            {/* Dubai / UAE */}
            <path d="M 780,310 Q 580,190 410,230" className="flight-path path-dubai" />
            {/* Saudi Arabia / Riyadh */}
            <path d="M 780,310 Q 520,240 320,280" className="flight-path path-saudi" />
            {/* Qatar / Doha */}
            <path d="M 780,310 Q 600,240 390,260" className="flight-path path-qatar" />
            {/* Europe / Poland & Romania */}
            <path d="M 780,310 Q 480,90 220,130" className="flight-path path-europe" />
            {/* Israel / Mediterranean */}
            <path d="M 780,310 Q 510,180 310,180" className="flight-path path-israel" />
            {/* Russia / Eurasia */}
            <path d="M 780,310 Q 640,70 480,70" className="flight-path path-russia" />

            {/* Gorakhpur Origin Hub - Concentric Radar Waves */}
            <circle cx="780" cy="310" r="6" className="hub-center-dot" />
            <circle cx="780" cy="310" r="18" className="hub-radar-wave wave-1" />
            <circle cx="780" cy="310" r="34" className="hub-radar-wave wave-2" />
            <circle cx="780" cy="310" r="50" className="hub-radar-wave wave-3" />

            {/* Destination Radar Nodes */}
            <circle cx="410" cy="230" r="5" className="dest-node-dot" />
            <circle cx="320" cy="280" r="5" className="dest-node-dot" />
            <circle cx="390" cy="260" r="5" className="dest-node-dot" />
            <circle cx="220" cy="130" r="5" className="dest-node-dot" />
            <circle cx="310" cy="180" r="5" className="dest-node-dot" />
            <circle cx="480" cy="70" r="5" className="dest-node-dot" />
          </svg>

          {/* Floating Starlight Particles */}
          <div className="particles-canvas">
            <span className="star-particle sp-1" />
            <span className="star-particle sp-2" />
            <span className="star-particle sp-3" />
            <span className="star-particle sp-4" />
            <span className="star-particle sp-5" />
            <span className="star-particle sp-6" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="container countries-hero-content">
          <div className="countries-hero-badge">
            <span className="live-radar-ping">
              <span className="ping-wave" />
              <span className="ping-dot" />
            </span>
            <Globe size={14} className="badge-globe-icon" />
            <span>Govt. Reg. {contact.registration} • 12 Active International Corridors</span>
          </div>

          <h1 className="countries-hero-title">
            Global Placement <span className="title-gradient-gold">Destinations</span>
          </h1>

          <p className="countries-hero-desc">
            Direct overseas recruitment with certified employer contracts, transparent documentation, zero middlemen, and complete emigration clearance from our Gorakhpur headquarters to 12 premier global markets.
          </p>

          {/* Interactive Corridor Quick Jump Cards */}
          <div className="corridor-pills-wrap">
            <button
              type="button"
              className={`corridor-pill ${filter === "gcc" ? "active" : ""}`}
              onClick={() => setFilter("gcc")}
            >
              <span className="corridor-dot gold" />
              <div className="corridor-text">
                <strong>Gulf & GCC Hubs ({gccList.length})</strong>
                <small>Dubai, Saudi, Qatar, Kuwait, Oman, Bahrain, Iraq</small>
              </div>
            </button>

            <button
              type="button"
              className={`corridor-pill ${filter === "europe" ? "active" : ""}`}
              onClick={() => setFilter("europe")}
            >
              <span className="corridor-dot blue" />
              <div className="corridor-text">
                <strong>European Corridors ({europeList.length})</strong>
                <small>Romania, Poland, Bulgaria, Israel, Russia</small>
              </div>
            </button>

            <button
              type="button"
              className={`corridor-pill ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              <span className="corridor-dot amber" />
              <div className="corridor-text">
                <strong>All 12 Destinations</strong>
                <small>Explore complete international deployment directory</small>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Metric Highlights Strip */}
      <section className="countries-stats-bar">
        <div className="container countries-stats-grid">
          <div className="country-stat-pill">
            <Globe size={20} className="pill-icon gold" />
            <div>
              <strong>12 Global Nations</strong>
              <span>GCC, Middle East & Europe</span>
            </div>
          </div>
          <div className="country-stat-pill">
            <ShieldCheck size={20} className="pill-icon green" />
            <div>
              <strong>100% Genuine Visas</strong>
              <span>Govt. Reg. {contact.registration}</span>
            </div>
          </div>
          <div className="country-stat-pill">
            <Plane size={20} className="pill-icon blue" />
            <div>
              <strong>Full Emigration Care</strong>
              <span>GAMCA, Stamping & Tickets</span>
            </div>
          </div>
          <div className="country-stat-pill">
            <Building2 size={20} className="pill-icon amber" />
            <div>
              <strong>Direct Employers</strong>
              <span>Zero Middlemen Policy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Countries Directory */}
      <section className="section countries-directory-section">
        <div className="container">
          {/* Region Filter Bar */}
          <div className="filter-bar">
            <div className="filter-label">
              <Sparkles size={14} />
              <span>Select Destination Region:</span>
            </div>
            <div className="filter-tabs">
              <button
                className={`filter-tab ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All Destinations ({countries.length})
              </button>
              <button
                className={`filter-tab ${filter === "gcc" ? "active" : ""}`}
                onClick={() => setFilter("gcc")}
              >
                Gulf & GCC Markets ({gccList.length})
              </button>
              <button
                className={`filter-tab ${filter === "europe" ? "active" : ""}`}
                onClick={() => setFilter("europe")}
              >
                Europe & Other ({europeList.length})
              </button>
            </div>
          </div>

          {/* 12 Destination Cards Grid */}
          <div className="destinations-grid-rich">
            {filteredCountries.map((country) => {
              const info = countryDetails[country] || {
                image: "/countries/dubai.jpg",
                region: "International",
                flag: "🌐",
                roles: ["Skilled & Technical roles"],
                contract: "Standard 2-Year Contract",
                perks: "Accommodation & Medical provided",
                desc: "Verified overseas placement opportunities."
              };

              const whatsappUrl = `https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20am%20interested%20in%20jobs%20in%20${encodeURIComponent(country)}.`;

              return (
                <div className="destination-card-rich" key={country}>
                  {/* Photo Header with Overlays */}
                  <div className="dest-img-wrap">
                    <img
                      src={info.image}
                      alt={`${country} overseas recruitment`}
                      className="dest-photo"
                      loading="lazy"
                    />
                    <div className="dest-img-gradient" />
                    
                    <span className="dest-badge-region">{info.region}</span>

                    <div className="dest-title-over">
                      <h3>{country}</h3>
                      <span className="dest-contract-tag">{info.contract}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="dest-body">
                    <p className="dest-desc-text">{info.desc}</p>

                    <div className="dest-roles-box">
                      <div className="roles-header">
                        <Briefcase size={14} color="#d97706" />
                        <strong>In-Demand Skill Trades:</strong>
                      </div>
                      <div className="roles-tags-list">
                        {info.roles.map((role) => (
                          <span key={role} className="role-tag-pill">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="dest-benefits-box">
                      <div className="benefit-row">
                        <CheckCircle2 size={14} className="check-icon" />
                        <span><strong>Contract:</strong> {info.contract}</span>
                      </div>
                      <div className="benefit-row">
                        <CheckCircle2 size={14} className="check-icon" />
                        <span><strong>Benefits:</strong> {info.perks}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="dest-actions-dual">
                      <Link
                        to={`/contact?country=${encodeURIComponent(country)}`}
                        className="btn btn-primary dest-apply-btn"
                      >
                        <span>Apply for {country}</span>
                        <ArrowRight size={14} />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn dest-whatsapp-btn"
                        title={`Enquire about ${country} on WhatsApp`}
                      >
                        <MessageCircle size={15} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Candidate Guidance & Pre-Departure Checklist */}
      <section className="section dark-section travel-guidelines-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker light">
                <FileCheck size={14} />
                <span>Travel Requirements</span>
              </div>
              <h2>Essential Checklist for <span>Overseas Deployment</span></h2>
            </div>
            <p className="section-note">
              Every candidate deployed by Guru Gorakhnath Global Manpower is guided step-by-step through legal emigration clearance.
            </p>
          </div>

          <div className="guidelines-grid-modern">
            <div className="guideline-card-modern">
              <div className="guide-card-top">
                <ShieldCheck size={20} className="guide-icon-accent" />
              </div>
              <h4>Passport Validity</h4>
              <p>Your Indian passport must be valid for at least 8 to 12 months with at least 3 blank pages for visa endorsement.</p>
            </div>

            <div className="guideline-card-modern">
              <div className="guide-card-top">
                <Building2 size={20} className="guide-icon-accent" />
              </div>
              <h4>GAMCA Medical Fitness</h4>
              <p>For GCC destinations, medical testing is conducted exclusively at GAMCA-authorized diagnostic centers in compliance with Gulf health regulations.</p>
            </div>

            <div className="guideline-card-modern">
              <div className="guide-card-top">
                <Briefcase size={20} className="guide-icon-accent" />
              </div>
              <h4>Trade Test Certification</h4>
              <p>Technical profiles (welders, electricians, pipe fitters, masons) undergo practical trade testing at certified technical workshops.</p>
            </div>

            <div className="guideline-card-modern">
              <div className="guide-card-top">
                <CheckCircle2 size={20} className="guide-icon-accent" />
              </div>
              <h4>Zero Fraud Policy</h4>
              <p>Transact only at our registered Sonbarsa Bazar, Gorakhpur office. We never request unauthorized fees and adhere strictly to Govt. Reg. {contact.registration}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Application CTA Banner */}
      <section className="section countries-cta-section">
        <div className="container">
          <div className="countries-cta-box">
            <div className="cta-kicker">
              <MapPin size={14} />
              <span>Direct Consultation at Gorakhpur Office</span>
            </div>
            <h2>Unsure which country matches your trade?</h2>
            <p>
              Speak directly with our overseas recruitment specialists at Sonbarsa Bazar, NH 28, Gorakhpur or send your CV for evaluation.
            </p>
            <div className="cta-actions-wrap">
              <Link to="/contact" className="btn btn-primary cta-btn-lg">
                <span>Contact Recruitment Desk</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20counseling%20regarding%20which%20country%20is%20best%20for%20my%20skills.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp cta-btn-lg"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Career Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
