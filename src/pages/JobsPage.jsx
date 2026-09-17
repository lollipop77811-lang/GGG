import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FileText,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Building2
} from "lucide-react";
import { jobGroups, contact } from "../data/siteData";

const categoryMeta = {
  "Civil": {
    image: "/jobs/civil.jpg",
    experience: "1-4+ years relevant site experience",
    scope: "Residential, commercial complexes, and mega infrastructure projects.",
    badge: "High Demand",
    salary: "Competitive Gulf & EU Remuneration + Accommodation"
  },
  "MEP": {
    image: "/jobs/mep.jpg",
    experience: "ITI / Diploma / Gulf Return preferred with trade knowledge",
    scope: "HVAC, electrical wiring, sanitary piping, ducting & building automation.",
    badge: "Technical",
    salary: "Attractive Packages + Free Housing & Overtime"
  },
  "Mechanical (Oil/Gas)": {
    image: "/jobs/mechanical.jpg",
    experience: "Certified 3G/4G/6G Welders, Riggers & Industrial Fitters",
    scope: "Refineries, oil rigs, chemical plants, and heavy fabrication yards.",
    badge: "Top Earning",
    salary: "High-Pay Scales + Free Food, Acc. & Insurance"
  },
  "Catering": {
    image: "/jobs/catering.jpg",
    experience: "Hospitality background, restaurant, banquet, or camp kitchen",
    scope: "Hotels, corporate dining, catering companies, and industrial camps.",
    badge: "Hotels & Camps",
    salary: "Monthly Tax-Free Pay + Free Meals & Room"
  },
  "Furniture": {
    image: "/jobs/furniture.jpg",
    experience: "Woodwork, sofa fabrication, fine polishing and spray painting",
    scope: "Interior decor companies, furniture factories, and carpentry workshops.",
    badge: "Craftsmanship",
    salary: "Fixed Monthly Retainer + Performance Incentives"
  },
  "Insulation": {
    image: "/jobs/insulation.jpg",
    experience: "Thermal, acoustic, sheet metal fitting and refractory experience",
    scope: "Industrial plants, cold storages, HVAC installations, and power stations.",
    badge: "Specialized",
    salary: "Specialized Skill Pay + Overtime & Living Camp"
  },
  "Aluminium": {
    image: "/jobs/aluminium.jpg",
    experience: "Curtain walling, glass fixing, facade installation and cutting",
    scope: "Modern high-rise commercial structures and residential towers.",
    badge: "Modern Architecture",
    salary: "Gulf & European Standard Wages + Medical"
  },
  "Facility Management": {
    image: "/jobs/facility.jpg",
    experience: "Freshers & experienced candidates eligible with good health",
    scope: "Airports, shopping malls, corporate parks, and logistics warehouses.",
    badge: "Immediate Openings",
    salary: "Steady Employment + Overtime & Free Visa Care"
  }
};

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGroups = jobGroups
    .map(group => {
      if (selectedCategory !== "all" && group.title !== selectedCategory) {
        return null;
      }
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const titleMatch = group.title.toLowerCase().includes(term);
        const matchedJobs = group.jobs.filter(j => j.toLowerCase().includes(term));
        if (!titleMatch && matchedJobs.length === 0) {
          return null;
        }
        return {
          ...group,
          jobs: titleMatch ? group.jobs : matchedJobs
        };
      }
      return group;
    })
    .filter(Boolean);

  const totalRoles = jobGroups.reduce((acc, curr) => acc + curr.jobs.length, 0);

  return (
    <div className="page-jobs">
      {/* Top Animated Executive Hero Section */}
      <section className="jobs-hero-top">
        <div className="jobs-hero-bg" aria-hidden="true">
          <div className="aurora-orb orb-gold" />
          <div className="aurora-orb orb-blue" />
          <div className="jobs-grid-pattern" />
          <div className="particles-canvas">
            <span className="star-particle sp-1" />
            <span className="star-particle sp-2" />
            <span className="star-particle sp-3" />
            <span className="star-particle sp-4" />
          </div>
        </div>

        <div className="container jobs-hero-content">
          <div className="jobs-hero-badge">
            <span className="live-hiring-badge">
              <span className="hiring-ping" />
              <span className="hiring-dot" />
            </span>
            <Sparkles size={14} className="badge-sparkle-icon" />
            <span>Govt. Reg. {contact.registration} • Verified Employer Vacancies</span>
          </div>

          <h1 className="jobs-hero-title">
            International Job <span className="title-gradient-gold">Opportunities</span>
          </h1>

          <p className="jobs-hero-desc">
            Explore {totalRoles}+ high-demand trade specializations across 8 international sectors. Direct employer sponsorship, transparent employment contracts, and Gorakhpur skill assessment.
          </p>

          {/* Quick Search Input In Hero */}
          <div className="jobs-hero-search-wrap">
            <div className="jobs-search-box">
              <Search size={19} className="search-icon-accent" />
              <input
                type="text"
                placeholder="Search by trade (e.g. 6G Welder, Electrician, Cook, Mason, Pipe Fitter, Driver)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                id="jobs-search-input"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchTerm("")}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="jobs-metrics-bar">
        <div className="container jobs-metrics-grid">
          <div className="job-metric-pill">
            <Briefcase size={20} className="pill-icon gold" />
            <div>
              <strong>{totalRoles}+ Specializations</strong>
              <span>8 Core Industry Divisions</span>
            </div>
          </div>
          <div className="job-metric-pill">
            <Award size={20} className="pill-icon green" />
            <div>
              <strong>Direct Visa Sponsorship</strong>
              <span>Zero Middlemen Policy</span>
            </div>
          </div>
          <div className="job-metric-pill">
            <TrendingUp size={20} className="pill-icon blue" />
            <div>
              <strong>Skill-Based Salary</strong>
              <span>Gulf & European Standards</span>
            </div>
          </div>
          <div className="job-metric-pill">
            <Users size={20} className="pill-icon amber" />
            <div>
              <strong>Gorakhpur Trade Hub</strong>
              <span>Practical Assessment & Pre-Selection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Divisions Directory */}
      <section className="section jobs-directory-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="jobs-filter-bar">
            <div className="filter-label">
              <Sparkles size={14} />
              <span>Select Trade Category:</span>
            </div>
            <div className="category-pills">
              <button
                className={`category-pill ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                All Divisions ({jobGroups.length})
              </button>
              {jobGroups.map((g) => (
                <button
                  key={g.title}
                  className={`category-pill ${selectedCategory === g.title ? "active" : ""}`}
                  onClick={() => setSelectedCategory(g.title)}
                >
                  <span className="cat-icon">{g.icon}</span>
                  <span>{g.title}</span>
                </button>
              ))}
            </div>
          </div>

          {filteredGroups.length === 0 ? (
            <div className="no-results-rich">
              <div className="no-results-icon">
                <Search size={32} color="#f59e0b" />
              </div>
              <h3>No matching job roles found</h3>
              <p>We couldn't find any trades matching "{searchTerm}". Try searching for another skill or reset filters.</p>
              <button
                className="btn btn-primary"
                onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
              >
                <span>Reset All Filters</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            <div className="jobs-grid-rich">
              {filteredGroups.map((group) => {
                const meta = categoryMeta[group.title] || {
                  image: "/jobs/civil.jpg",
                  experience: "Experience in trade preferred",
                  scope: "Overseas commercial & industrial projects",
                  badge: "Active",
                  salary: "Industry Competitive Salary"
                };

                const whatsappUrl = `https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20am%20interested%20in%20applying%20for%20jobs%20in%20the%20${encodeURIComponent(group.title)}%20Division.`;

                return (
                  <div className="job-card-rich" key={group.title}>
                    {/* Real Image Header */}
                    <div className="job-img-wrap">
                      <img
                        src={meta.image}
                        alt={`${group.title} trade recruitment`}
                        className="job-photo"
                        loading="lazy"
                      />
                      <div className="job-img-gradient" />
                      <span className="job-badge-tag">{meta.badge}</span>
                      <span className="job-pos-count">{group.jobs.length} Positions</span>

                      <div className="job-title-over">
                        <div className="job-icon-chip">{group.icon}</div>
                        <h3>{group.title} Division</h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="job-card-body">
                      <div className="job-scope-box">
                        <div className="scope-row">
                          <Building2 size={14} className="scope-icon" />
                          <span><strong>Scope:</strong> {meta.scope}</span>
                        </div>
                        <div className="scope-row">
                          <ShieldCheck size={14} className="scope-icon" />
                          <span><strong>Eligibility:</strong> {meta.experience}</span>
                        </div>
                      </div>

                      <div className="job-roles-wrap">
                        <span className="roles-title-label">Available Trade Specializations:</span>
                        <div className="job-tags-cloud">
                          {group.jobs.map((job) => (
                            <span key={job} className="job-trade-pill">
                              <CheckCircle2 size={12} className="check-gold" />
                              <span>{job}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Dual Action Buttons */}
                      <div className="job-actions-dual">
                        <Link
                          to={`/contact?category=${encodeURIComponent(group.title)}`}
                          className="btn btn-primary job-apply-btn"
                        >
                          <span>Apply for {group.title}</span>
                          <ArrowRight size={14} />
                        </Link>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn job-whatsapp-btn"
                          title={`Inquire about ${group.title} jobs on WhatsApp`}
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
          )}
        </div>
      </section>

      {/* Candidate Eligibility Requirements */}
      <section className="section dark-section jobs-requirements-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker light">
                <ShieldCheck size={14} />
                <span>Documentation & Assessment</span>
              </div>
              <h2>Standard Eligibility for <span>Overseas Employment</span></h2>
            </div>
            <p className="section-note">
              Ensure you have the following credentials ready before attending practical trade interviews at our Gorakhpur office.
            </p>
          </div>

          <div className="eligibility-grid-modern">
            <div className="eligibility-card-modern">
              <div className="el-card-top">
                <FileText size={22} className="el-icon-accent" />
              </div>
              <h4>Passport & Identity</h4>
              <p>Original Indian passport with at least 8 to 12 months validity, clear copies of Aadhaar Card, PAN Card, and recent white-background photographs.</p>
            </div>

            <div className="eligibility-card-modern">
              <div className="el-card-top">
                <Briefcase size={22} className="el-icon-accent" />
              </div>
              <h4>Trade Work Experience</h4>
              <p>Work certificates, previous company service letters, or overseas visa stamps (for Gulf return candidates) validating hands-on trade skills.</p>
            </div>

            <div className="eligibility-card-modern">
              <div className="el-card-top">
                <Award size={22} className="el-icon-accent" />
              </div>
              <h4>Practical Trade Testing</h4>
              <p>Candidates applying for skilled trade categories (welding, electrical, plumbing, masonry) undergo a hands-on trade trial at our certified workshop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Job Application CTA */}
      <section className="section jobs-cta-section">
        <div className="container">
          <div className="jobs-cta-box">
            <div className="cta-kicker">
              <Briefcase size={14} />
              <span>Direct Recruitment Desk • Gorakhpur, UP</span>
            </div>
            <h2>Can't find your exact trade specialization?</h2>
            <p>
              We frequently handle custom overseas recruitment drives for specialized trades and technical operators. Visit our Sonbarsa Bazar, NH 28, Gorakhpur office or submit your CV directly.
            </p>
            <div className="cta-actions-wrap">
              <Link to="/contact" className="btn btn-primary cta-btn-lg">
                <span>Submit CV for Assessment</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20inquire%20about%20job%20vacancies%20matching%20my%20trade.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp cta-btn-lg"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Recruitment Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

