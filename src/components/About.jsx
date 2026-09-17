import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div>
          <div className="section-kicker">About the company</div>
          <h2>
            From local skills to <span>global careers.</span>
          </h2>
        </div>
        <div className="about-content">
          <p>
            Guru Gorakhnath Global Manpower LLP is an overseas manpower and
            recruitment organization based in Gorakhpur, Uttar Pradesh.
          </p>
          <p>
            The company connects skilled candidates with verified overseas
            recruitment opportunities across civil, MEP, mechanical/oil & gas,
            catering, furniture, insulation, aluminium and facility management.
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "15px",
            }}
          >
            <Link className="text-link" to="/about">
              About full profile <ArrowUpRight size={17} />
            </Link>
            <Link className="text-link" to="/jobs">
              Browse job categories <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
