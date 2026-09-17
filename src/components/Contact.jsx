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
  FileText
} from "lucide-react";
import { contact } from "../data/siteData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    message: ""
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

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        {/* Left Column: Direct Contact Details & Trust Badges */}
        <div className="contact-info">
          <div className="section-kicker">Get in touch</div>
          <h2>
            Ready for your next <span>opportunity?</span>
          </h2>
          <p className="contact-desc">
            Contact the office for current vacancies, eligibility, documents,
            job details and recruitment process.
          </p>

          <div className="contact-cards">
            <a href={`tel:${contact.primary}`} className="contact-card contact-card-primary">
              <span className="contact-card-icon">
                <Phone size={20} />
              </span>
              <div className="contact-card-content">
                <small>Primary Mobile Hotline</small>
                <strong>+91 {contact.primary}</strong>
              </div>
            </a>

            <a
              href={`https://wa.me/91${contact.primary}?text=Hello%20Guru%20Gorakhnath%20Global%20Manpower,%20I%20want%20to%20apply%20for%20overseas%20jobs.`}
              target="_blank"
              rel="noreferrer"
              className="contact-card contact-card-whatsapp"
            >
              <span className="contact-card-icon whatsapp-icon">
                <MessageCircle size={20} />
              </span>
              <div className="contact-card-content">
                <small>Official WhatsApp</small>
                <strong>Chat with Recruitment Desk</strong>
              </div>
            </a>

            <div className="contact-card">
              <span className="contact-card-icon">
                <MapPin size={20} />
              </span>
              <div className="contact-card-content">
                <small>Head Office Address</small>
                <strong>{contact.address}</strong>
              </div>
            </div>

            <div className="contact-card-meta">
              <div className="meta-pill">
                <Clock size={15} />
                <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
              </div>
              <div className="meta-pill">
                <ShieldCheck size={15} />
                <span>Reg. No: {contact.registration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Modern Executive Application Form */}
        <div className="contact-form-container">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-top-accent" />
            <div className="form-head">
              <div>
                <h3>Candidate Enquiry Form</h3>
                <p>Submit your trade profile for ongoing overseas interviews</p>
              </div>
              <span className="form-head-badge">Free Guidance</span>
            </div>

            {sent ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={42} />
                </div>
                <h3>Enquiry Received Successfully!</h3>
                <p>
                  Thank you, <strong>{formData.name || "Candidate"}</strong>. Our recruitment counselors from the Gorakhpur office will contact you on <strong>{formData.phone || "your phone number"}</strong> regarding current vacancies.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleReset}
                  style={{ marginTop: "18px" }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="applicant-name">
                    <User size={15} />
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="applicant-name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="applicant-phone">
                      <PhoneCall size={15} />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      id="applicant-phone"
                      required
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="applicant-category">
                      <Briefcase size={15} />
                      <span>Trade Category *</span>
                    </label>
                    <select
                      id="applicant-category"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="" disabled>Select category</option>
                      <option value="Civil">Civil Construction</option>
                      <option value="MEP">MEP (Electrical, Plumbing, HVAC)</option>
                      <option value="Mechanical">Mechanical (Oil & Gas / Welding)</option>
                      <option value="Catering">Catering & Hospitality</option>
                      <option value="Furniture">Furniture & Woodworking</option>
                      <option value="Insulation">Industrial Insulation</option>
                      <option value="Aluminium">Aluminium & Glass Glazing</option>
                      <option value="Facility">Facility Management</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="applicant-message">
                    <FileText size={15} />
                    <span>Work Experience & Skills</span>
                  </label>
                  <textarea
                    id="applicant-message"
                    rows="4"
                    placeholder="Mention your trade experience, gulf return status (if any), and preferred country..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button className="btn btn-primary form-btn" type="submit">
                  <span>Send Enquiry</span>
                  <Send size={16} />
                </button>

                <div className="form-security-note">
                  <ShieldCheck size={14} />
                  <span>100% confidential. No registration charges for basic enquiry.</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
