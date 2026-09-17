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
  Sparkles,
  Building2,
  Navigation,
  ArrowRight,
  CheckCircle
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
    message: ""
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

  return (
    <div className="page-contact">
      {/* Top Banner with Clean Look (No raw breadcrumb) */}
      <PageBanner
        kicker="Official Inquiries & Support"
        title="Contact Our Gorakhpur Center"
        description="Connect directly with registered overseas recruitment specialists for interview schedules, vacancy registration, and document assessment."
        breadcrumb="Contact"
        hideBreadcrumb={true}
      />

      {/* Interactive Quick-Connect Metric Bar */}
      <div className="contact-stats-bar">
        <div className="container contact-stats-container">
          <div className="contact-stat-item">
            <div className="contact-stat-icon gold">
              <ShieldCheck size={20} />
            </div>
            <div className="contact-stat-info">
              <strong>Govt. Reg. {contact.registration}</strong>
              <small>100% Legal Recruitment</small>
            </div>
          </div>

          <div className="contact-stat-item">
            <div className="contact-stat-icon green">
              <MessageCircle size={20} />
            </div>
            <div className="contact-stat-info">
              <strong>Quick WhatsApp Desk</strong>
              <small>Average Response &lt; 15 Mins</small>
            </div>
          </div>

          <div className="contact-stat-item">
            <div className="contact-stat-icon blue">
              <Building2 size={20} />
            </div>
            <div className="contact-stat-info">
              <strong>Walk-in Trade Center</strong>
              <small>Sonbarsa Bazar, NH 28, UP</small>
            </div>
          </div>

          <div className="contact-stat-item">
            <div className="contact-stat-icon amber">
              <Award size={20} />
            </div>
            <div className="contact-stat-info">
              <strong>Zero Counseling Fee</strong>
              <small>Free Profile Assessment</small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section: Contact Info & Luxury Application Form */}
      <section className="section contact-main-section">
        <div className="container contact-grid">
          {/* Left Column: Interactive Contact Details & Hotlines */}
          <div className="contact-info">
            <div className="section-kicker">
              <Sparkles size={13} className="sparkle-spin" />
              <span>Direct Connect & Consultation</span>
            </div>

            <h2 className="contact-heading">
              We are here to <span>guide your international career.</span>
            </h2>

            <p className="contact-lead-desc">
              Call our dedicated recruitment desk, connect via WhatsApp for quick vacancy inquiries, or visit our Gorakhpur headquarters for in-person trade testing and document checks.
            </p>

            {/* Modern Interactive Contact Cards */}
            <div className="contact-cards-modern">
              {/* Primary Mobile / Hotline Card */}
              <a href={`tel:${contact.primary}`} className="contact-card-modern card-hotline">
                <div className="card-icon-wrap gold-glow">
                  <PhoneCall size={22} className="card-icon" />
                  <span className="live-ping-dot" />
                </div>
                <div className="card-body">
                  <div className="card-header-label">
                    <small>Primary Mobile / Hotline</small>
                    <span className="live-active-tag">Direct Line</span>
                  </div>
                  <strong>+91 {contact.primary}</strong>
                  <span className="card-sub-hint">Click to call counselor directly</span>
                </div>
              </a>

              {/* Instant WhatsApp Card */}
              <a
                href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20am%20interested%20in%20current%20overseas%20vacancies%20and%20want%20to%20register%20my%20profile.`}
                target="_blank"
                rel="noreferrer"
                className="contact-card-modern card-whatsapp"
              >
                <div className="card-icon-wrap green-glow">
                  <MessageCircle size={22} className="card-icon" />
                </div>
                <div className="card-body">
                  <div className="card-header-label">
                    <small>Official WhatsApp Desk</small>
                    <span className="live-online-tag">Online Now</span>
                  </div>
                  <strong>Chat with Recruitment Desk</strong>
                  <span className="card-sub-hint">Instant vacancy updates & CV sharing</span>
                </div>
              </a>

              {/* Registered Headquarters Card */}
              <div className="contact-card-modern card-office">
                <div className="card-icon-wrap blue-glow">
                  <MapPin size={22} className="card-icon" />
                </div>
                <div className="card-body">
                  <small>Registered Head Office</small>
                  <strong>{contact.address}</strong>
                  <span className="card-sub-hint">Landmark: Beside Police Chowki on NH 28</span>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="contact-card-modern card-hours">
                <div className="card-icon-wrap purple-glow">
                  <Clock size={22} className="card-icon" />
                </div>
                <div className="card-body">
                  <div className="card-header-label">
                    <small>Counseling & Office Hours</small>
                    <span className="hours-badge">Mon - Sat</span>
                  </div>
                  <strong>9:30 AM to 6:30 PM (Sunday Closed)</strong>
                  <span className="card-sub-hint">Walk-in candidate registration open daily</span>
                </div>
              </div>

              {/* Legal Credential Card */}
              <div className="contact-card-modern card-legal">
                <div className="card-icon-wrap amber-glow">
                  <ShieldCheck size={22} className="card-icon" />
                </div>
                <div className="card-body">
                  <small>Legal Recruitment Licensure</small>
                  <strong>Govt. Registration No. {contact.registration}</strong>
                  <span className="card-sub-hint">Recognized under Indian overseas employment act</span>
                </div>
              </div>
            </div>

            {/* Helpline Numbers Directory */}
            <div className="helpline-directory-modern">
              <div className="helpline-dir-header">
                <h4>Additional Direct Office Helplines</h4>
                <span className="dir-tag">Direct Lines</span>
              </div>
              <div className="helpline-grid-modern">
                {contact.phones.map((phoneNum) => (
                  <a key={phoneNum} href={`tel:${phoneNum}`} className="helpline-badge-modern">
                    <Phone size={12} className="badge-icon" />
                    <span>{phoneNum}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Candidate Enquiry Form */}
          <div className="contact-form-container">
            <form className="enquiry-form-modern" onSubmit={handleSubmit}>
              <div className="form-top-glow-bar" />
              
              <div className="form-header-modern">
                <div>
                  <span className="form-kicker-badge">
                    <ShieldCheck size={13} />
                    <span>Govt. Reg. {contact.registration}</span>
                  </span>
                  <h3>Candidate Application & Registration</h3>
                  <p>Submit your profile for instant trade assessment and upcoming international interview calls.</p>
                </div>
              </div>

              {submitted ? (
                <div className="form-success-box-modern">
                  <div className="success-icon-wrap-modern">
                    <CheckCircle2 size={46} />
                  </div>
                  <h3>Registration Successful!</h3>
                  <p className="success-name">Thank you, <strong>{formData.name || "Candidate"}</strong>!</p>
                  <p className="success-details">
                    Your candidate inquiry has been logged in our recruitment portal. A senior recruiter from our Gorakhpur center will contact you on <strong>{formData.phone || "your number"}</strong> with active overseas interview openings.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary form-restart-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", category: "", destination: "", experience: "", message: "" });
                    }}
                  >
                    <span>Submit Another Application</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              ) : (
                <div className="form-fields-modern">
                  <div className="form-group-modern">
                    <label htmlFor="contactpage-name">
                      <User size={15} className="field-icon" />
                      <span>Full Name as in Passport *</span>
                    </label>
                    <input
                      id="contactpage-name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row-modern">
                    <div className="form-group-modern">
                      <label htmlFor="contactpage-phone">
                        <PhoneCall size={15} className="field-icon" />
                        <span>Phone / WhatsApp Number *</span>
                      </label>
                      <input
                        id="contactpage-phone"
                        required
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group-modern">
                      <label htmlFor="contactpage-category">
                        <Briefcase size={15} className="field-icon" />
                        <span>Preferred Trade Category *</span>
                      </label>
                      <select
                        id="contactpage-category"
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="" disabled>Select your trade</option>
                        <option>Civil (Mason, Shuttering Carpenter, Steel Fixer, Helper)</option>
                        <option>MEP (Electrician, Plumber, HVAC Tech, Pipe Fitter)</option>
                        <option>Mechanical (6G Welders, Riggers, Fabricators)</option>
                        <option>Catering & Hospitality (Cook, Chef, Waiter, F&B)</option>
                        <option>Furniture & Woodworking (Carpenters, Polishers)</option>
                        <option>Insulation (Sheet Metal, Thermal & Acoustic)</option>
                        <option>Aluminium & Glass Facade Fitters</option>
                        <option>Facility Management (Cleaners, Packing, Warehouse)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-modern">
                    <div className="form-group-modern">
                      <label htmlFor="contactpage-dest">
                        <Globe size={15} className="field-icon" />
                        <span>Target Overseas Destination</span>
                      </label>
                      <select
                        id="contactpage-dest"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      >
                        <option value="">Any Available High-Paying Country</option>
                        <option>Dubai & UAE 🇦🇪</option>
                        <option>Saudi Arabia (KSA) 🇸🇦</option>
                        <option>Qatar 🇶🇦</option>
                        <option>Kuwait 🇰🇼 / Oman 🇴🇲 / Bahrain 🇧🇭</option>
                        <option>Europe (Romania 🇷🇴, Poland 🇵🇱, Bulgaria 🇧🇬)</option>
                        <option>Israel 🇮🇱 / Russia 🇷🇺</option>
                      </select>
                    </div>

                    <div className="form-group-modern">
                      <label htmlFor="contactpage-exp">
                        <Award size={15} className="field-icon" />
                        <span>Work Experience Level</span>
                      </label>
                      <select
                        id="contactpage-exp"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      >
                        <option value="">Select experience level</option>
                        <option>Fresher (0 - 1 Year / ITI Certified)</option>
                        <option>1 - 3 Years (India Domestic Work)</option>
                        <option>4 - 7 Years (Senior Tradesman / Foreman)</option>
                        <option>Gulf Return (Previous Overseas Deployment)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-modern">
                    <label htmlFor="contactpage-msg">
                      <FileText size={15} className="field-icon" />
                      <span>Additional Trade Skills / Passport Details</span>
                    </label>
                    <textarea
                      id="contactpage-msg"
                      rows="3"
                      placeholder="Mention your trade specialization, current city, and whether passport is ECR or ECNR..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    className="btn btn-primary form-submit-btn-modern"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Processing Inquiry..." : "Submit Candidate Application"}</span>
                    <Send size={16} />
                  </button>

                  <div className="form-legal-badge">
                    <ShieldCheck size={14} className="legal-shield-icon" />
                    <span>
                      100% Protected Data • Zero Third-Party Sharing • Govt. Emigration Standards Compliant
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Interactive Walk-in Office Center & Directions Section */}
      <section className="section office-directions-section">
        <div className="container">
          <div className="office-card-interactive">
            <div className="office-card-content">
              <div className="section-kicker">
                <Navigation size={13} />
                <span>Visit In Person For Trade Testing</span>
              </div>
              <h3 className="office-card-title">Gorakhpur Walk-in Recruitment Headquarters</h3>
              <p className="office-card-desc">
                Candidates are welcome to visit our official facility for direct CV submission, live trade assessment, and upcoming client interview briefing. Located prominently along <strong>National Highway 28 at Sonbarsa Bazar</strong>, right beside the local <strong>Police Chowki</strong>.
              </p>

              {/* Highway & Connectivity Highlights */}
              <div className="office-travel-tags">
                <span className="travel-pill">📍 Sonbarsa Bazar, NH 28, Gorakhpur</span>
                <span className="travel-pill">🏛️ Landmark: Directly Beside Police Chowki</span>
                <span className="travel-pill">🚆 18 KM from Gorakhpur Junction Railway Station</span>
                <span className="travel-pill">🚌 Regular Bus Connectivity on Gorakhpur-Kushinagar Highway</span>
              </div>
            </div>

            <div className="office-card-cta">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent("Sonbarsa Bazar, NH 28, Gorakhpur, Uttar Pradesh 273002")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary office-maps-btn"
              >
                <MapPin size={17} />
                <span>Open in Google Maps</span>
              </a>
              <span className="maps-coord-note">NH 28 Gorakhpur • 273002 UP</span>
            </div>
          </div>

          {/* Quick Candidate Reassurance Accordion / Trust Cards */}
          <div className="contact-trust-row">
            <div className="contact-trust-card">
              <div className="trust-card-icon gold">
                <ShieldCheck size={22} />
              </div>
              <h4>Direct Legal Emigration</h4>
              <p>Transact exclusively at our registered Sonbarsa Bazar office. We have zero tolerance for middlemen or unverified sub-agents.</p>
            </div>

            <div className="contact-trust-card">
              <div className="trust-card-icon blue">
                <FileText size={22} />
              </div>
              <h4>Required Documents for Visit</h4>
              <p>Carry original passport, recent photographs (white background), trade certificate/ITI diploma, and past experience proofs.</p>
            </div>

            <div className="contact-trust-card">
              <div className="trust-card-icon green">
                <CheckCircle size={22} />
              </div>
              <h4>Transparent Visa Issuance</h4>
              <p>Direct company employment contracts with medical insurance, accommodation, and guaranteed minimum legal wage structure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
