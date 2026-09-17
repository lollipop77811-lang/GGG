import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, ShieldCheck } from "lucide-react";
import { countries, contact } from "../data/siteData";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> Overseas Recruitment & Manpower
          </div>
          <h1>
            Skilled people.
            <br />
            <em>Global opportunities.</em>
          </h1>
          <p className="hero-text">
            Guru Gorakhnath Global Manpower LLP connects candidates with
            international job opportunities across construction, MEP, oil & gas,
            catering and facility services.
          </p>
          <div className="hero-actions">
            <Link to="/jobs" className="btn btn-primary">
              Explore Jobs <ArrowRight size={17} />
            </Link>
            <a href={`tel:${contact.primary}`} className="btn btn-ghost">
              Talk to our team
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <ShieldCheck size={16} /> Company Reg. No. {contact.registration}
            </span>
            <span>
              <Globe2 size={16} /> Overseas placements
            </span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span>OPPORTUNITIES</span>
            <span className="live-dot">●</span>
          </div>
          <div className="plane-art">✈</div>
          <p>Recruitment destinations</p>
          <div className="mini-countries">
            {countries.slice(0, 6).map((country) => (
              <span key={country}>{country}</span>
            ))}
          </div>
          <Link to="/countries" className="text-link">
            View all destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}
