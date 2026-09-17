import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  FileCheck,
  Stethoscope,
  Plane,
  Award,
  UserCheck,
  Sparkles,
  ShieldCheck,
  Building2,
  Clock,
  MessageCircle,
  FileText
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
    tag: "Gorakhpur Office"
  },
  {
    num: "02",
    icon: FileCheck,
    title: "Document Screening & Validation",
    desc: "Verification of your passport validity (minimum 8-12 months remaining), educational background, Aadhaar, and previous overseas work permits / Gulf stamps if applicable.",
    image: "/principles-legal.jpg",
    badge: "Step 02 • Verification",
    tag: "Legal Compliance"
  },
  {
    num: "03",
    icon: Award,
    title: "Client Interview & Practical Trade Test",
    desc: "Attend client interviews (online or in-person delegation) and practical skill trials at recognized testing workshops for trades like welding, plumbing, and electrical works.",
    image: "/about-workers.jpg",
    badge: "Step 03 • Skill Trial",
    tag: "Workshop Testing"
  },
  {
    num: "04",
    icon: Stethoscope,
    title: "GAMCA Medical Examination",
    desc: "Undergo compulsory medical diagnostics at authorized GAMCA medical centers (for GCC countries) or Embassy-specified clinics to verify physical and health fitness.",
    image: "/process-medical.jpg",
    badge: "Step 04 • Health Fitness",
    tag: "GAMCA Approved"
  },
  {
    num: "05",
    icon: FileCheck,
    title: "Visa Processing & Emigration Clearance",
    desc: "Receipt of authentic job offer letter / employment contract, followed by work visa endorsement, insurance documentation, and Emigration (Poe) clearance.",
    image: "/process-visa.jpg",
    badge: "Step 05 • Visa Stamping",
    tag: "Govt. Approved"
  },
  {
    num: "06",
    icon: Plane,
    title: "Orientation & Overseas Departure",
    desc: "Comprehensive pre-departure briefing on host country laws, workplace safety, camp regulations, followed by flight ticketing and airport reception coordination.",
    image: "/principles-departure.jpg",
    badge: "Step 06 • Flight Departure",
    tag: "Safe Deployment"
  }
];

const documents = [
  { doc: "Original Indian Passport", detail: "Minimum 8 to 12 months validity with at least 3-4 blank visa pages.", tag: "Mandatory" },
  { doc: "Passport Size Photographs", detail: "12-16 recent photos with white background (standard 35mm x 45mm visa spec).", tag: "Mandatory" },
  { doc: "Updated CV / Bio-Data", detail: "Detailing past employment history, international project work, and valid phone numbers.", tag: "Essential" },
  { doc: "Experience Certificates", detail: "Proof of previous company employment, site foreman letters, or trade apprenticeship.", tag: "Important" },
  { doc: "Gulf Visa / Exit Clearance", detail: "Previous Gulf visa copy, civil ID, or final exit proof for Gulf Return candidates.", tag: "Gulf Return" },
  { doc: "Educational / ITI Certificates", detail: "School certificate, ITI trade certificate, diploma, or technical marksheet copies.", tag: "Technical" }
];

export default function ProcessPage() {
  return (
    <div className="page-process">
      {/* Top Animated Executive Hero Section */}
      <section className="process-hero-top">
        <div className="process-hero-bg" aria-hidden="true">
          <div className="aurora-orb orb-gold" />
          <div className="aurora-orb orb-blue" />
          <div className="process-grid-pattern" />
          <div className="particles-canvas">
            <span className="star-particle sp-1" />
            <span className="star-particle sp-2" />
            <span className="star-particle sp-3" />
            <span className="star-particle sp-4" />
          </div>
        </div>

        <div className="container process-hero-content">
          <div className="process-hero-badge">
            <span className="live-process-badge">
              <span className="process-ping" />
              <span className="process-dot" />
            </span>
            <Sparkles size={14} className="badge-sparkle-icon" />
            <span>Govt. Reg. {contact.registration} • 100% Ethical Recruitment Roadmap</span>
          </div>

          <h1 className="process-hero-title">
            Our Recruitment & <span className="title-gradient-gold">Deployment Process</span>
          </h1>

          <p className="process-hero-desc">
            A transparent, legally verified, and step-by-step pathway for skilled Indian tradesmen aspiring to work in the GCC and Europe with authentic employer sponsorship and zero exploitation.
          </p>

          <div className="process-quick-stats">
            <div className="p-stat-box">
              <strong>6 Legal Steps</strong>
              <small>From Profile to Departure</small>
            </div>
            <div className="p-stat-box">
              <strong>Govt. Reg. {contact.registration}</strong>
              <small>Official Ministry Adherence</small>
            </div>
            <div className="p-stat-box">
              <strong>GAMCA Diagnostic</strong>
              <small>Authorized Medical Hubs</small>
            </div>
            <div className="p-stat-box">
              <strong>Zero Fraud</strong>
              <small>Direct Transact at Gorakhpur</small>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Stage Visual Journey */}
      <section className="section process-journey-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">
                <Clock size={14} />
                <span>Transparent Emigration Roadmap</span>
              </div>
              <h2>6 Steps from Registration to <span>Overseas Flight</span></h2>
            </div>
            <p className="section-note">
              Every stage in our recruitment process protects candidate rights, verifies genuine credentials, and guarantees authentic employer sponsorship.
            </p>
          </div>

          <div className="process-cards-grid">
            {detailedSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div className="process-card-rich" key={step.title}>
                  {/* Photo Header with Overlays */}
                  <div className="process-img-wrap">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="process-photo"
                      loading="lazy"
                    />
                    <div className="process-img-gradient" />
                    <span className="process-step-badge">{step.badge}</span>
                    <span className="process-tag-pill">{step.tag}</span>

                    <div className="process-num-overlay">
                      <div className="process-icon-box">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="process-card-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <div className="process-card-footer">
                      <div className="process-status-indicator">
                        <CheckCircle2 size={14} className="check-gold" />
                        <span>Verified Standard</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Candidate Documents Checklist */}
      <section className="section process-docs-section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">
                <FileCheck size={14} />
                <span>Verification Checklist</span>
              </div>
              <h2>Mandatory Documents for <span>Overseas Applicants</span></h2>
            </div>
            <p className="section-note">
              Please carry clean physical copies and scanned digital PDFs of these credentials when visiting our Gorakhpur office.
            </p>
          </div>

          <div className="docs-table-wrapper-modern">
            <table className="docs-table-modern">
              <thead>
                <tr>
                  <th>Required Document</th>
                  <th>Specifications & Instructions</th>
                  <th>Priority Status</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="doc-name-cell">
                        <FileText size={17} className="doc-icon-gold" />
                        <strong>{item.doc}</strong>
                      </div>
                    </td>
                    <td>
                      <span className="doc-spec-text">{item.detail}</span>
                    </td>
                    <td>
                      <span className={`doc-status-badge ${item.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Candidate Advisory & Anti-Fraud Section */}
      <section className="section dark-section process-advisory-section">
        <div className="container">
          <div className="advisory-card-modern">
            <div className="advisory-icon-wrap">
              <div className="advisory-icon-glow" />
              <ShieldCheck size={38} className="advisory-shield-icon" />
            </div>

            <div className="advisory-text-wrap">
              <div className="advisory-header-row">
                <span className="advisory-kicker-badge">
                  <ShieldAlert size={15} />
                  <span>Official Govt. Reg. {contact.registration} Advisory</span>
                </span>
                <span className="advisory-stamp-pill">Zero Middlemen • 100% Ethical Policy</span>
              </div>

              <h3 className="advisory-title">Zero Fraud & Ethical Recruitment Policy</h3>

              <p className="advisory-lead">
                Guru Gorakhnath Global Manpower LLP operates strictly under official Indian government overseas employment regulations. Transact and submit applications exclusively at our registered headquarters located at <strong>Sonbarsa Bazar, NH 28, Gorakhpur, UP</strong> or via our verified helpline: <strong>+91 {contact.primary}</strong>.
              </p>

              {/* Verified Headquarters & Helpline Pills */}
              <div className="advisory-verified-strip">
                <div className="verified-loc-pill">
                  <Building2 size={20} className="loc-icon-gold" />
                  <div>
                    <small>Official Registered Headquarters</small>
                    <strong>Sonbarsa Bazar, NH 28, Gorakhpur, UP</strong>
                  </div>
                </div>

                <a href={`tel:${contact.primary}`} className="verified-phone-pill">
                  <span className="phone-pulse-dot" />
                  <div>
                    <small>Verified Official Helpline (Direct)</small>
                    <strong>+91 {contact.primary}</strong>
                  </div>
                </a>
              </div>

              {/* High-Visibility Warning Callout Box */}
              <div className="advisory-warning-callout">
                <div className="warning-callout-icon">⚠️</div>
                <div className="warning-callout-text">
                  <strong>Strict Candidate Vigilance Warning:</strong>
                  <span>
                    We strictly warn candidates never to hand cash or personal documents to unauthorized sub-agents or third-party middlemen claiming to represent our recruitment firm. Transact exclusively at our registered Sonbarsa Bazar, Gorakhpur office under Govt. Reg. {contact.registration}.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="process-cta-banner">
            <div className="cta-left">
              <h3>Ready to start your international journey?</h3>
              <p>Schedule your in-person trade counseling session at our Gorakhpur office today.</p>
            </div>
            <div className="cta-right">
              <Link to="/contact" className="btn btn-primary cta-btn-lg">
                <span>Start Candidate Registration</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20know%20more%20about%20the%20recruitment%20process%20and%20register%20my%20profile.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp cta-btn-lg"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Process Help</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

