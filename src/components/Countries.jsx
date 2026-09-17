import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPinned } from "lucide-react";
import { countries } from "../data/siteData";

const countryData = [
  { name: "Dubai", image: "/countries/dubai.jpg", flag: "🇦🇪", region: "UAE / Middle East" },
  { name: "Saudi Arabia", image: "/countries/saudi-arabia.jpg", flag: "🇸🇦", region: "GCC / Middle East" },
  { name: "Bahrain", image: "/countries/bahrain.jpg", flag: "🇧🇭", region: "GCC / Middle East" },
  { name: "Qatar", image: "/countries/qatar.jpg", flag: "🇶🇦", region: "GCC / Middle East" },
  { name: "Oman", image: "/countries/oman.jpg", flag: "🇴🇲", region: "GCC / Middle East" },
  { name: "Iraq", image: "/countries/iraq.jpg", flag: "🇮🇶", region: "Middle East" },
  { name: "Kuwait", image: "/countries/kuwait.jpg", flag: "🇰🇼", region: "GCC / Middle East" },
  { name: "Romania", image: "/countries/romania.jpg", flag: "🇷🇴", region: "Europe (EU)" },
  { name: "Poland", image: "/countries/poland.jpg", flag: "🇵🇱", region: "Europe (Schengen)" },
  { name: "Bulgaria", image: "/countries/bulgaria.jpg", flag: "🇧🇬", region: "Europe (EU)" },
  { name: "Israel", image: "/countries/israel.jpg", flag: "🇮🇱", region: "Middle East" },
  { name: "Russia", image: "/countries/russia.jpg", flag: "🇷🇺", region: "Eurasia" },
];

export default function Countries() {
  return (
    <section className="section dark-section" id="countries">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker light">Recruitment destinations</div>
            <h2>
              Opportunities across <span>multiple markets.</span>
            </h2>
          </div>
          <div>
            <p className="section-note">
              Destinations listed in the company portfolio.
            </p>
            <Link
              to="/countries"
              className="text-link"
              style={{ marginTop: "10px" }}
            >
              Explore country requirements →
            </Link>
          </div>
        </div>
        <div className="country-grid">
          {countryData.map((c, i) => (
            <Link to="/countries" className="country-card" key={c.name}>
              <img
                src={c.image}
                alt={`${c.name} recruitment destination`}
                className="country-card-img"
                loading="lazy"
              />
              <div className="country-card-overlay" />
              <div className="country-card-bottom">
                <div className="country-card-info">
                  <span className="country-region">{c.region}</span>
                  <div className="country-name-row">
                    <MapPinned size={16} className="country-pin-icon" />
                    <strong>{c.name}</strong>
                  </div>
                </div>
                <div className="country-arrow-wrap">
                  <ArrowUpRight size={17} className="country-arrow" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
