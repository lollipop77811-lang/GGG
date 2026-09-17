import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { processSteps } from "../data/siteData";

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="process-heading">
          <div>
            <div className="section-kicker light">How it works</div>
            <h2>
              A simple path from <span>enquiry to opportunity.</span>
            </h2>
          </div>
          <div>
            <p>
              A transparent and guided journey for international job placement.
            </p>
            <Link
              to="/process"
              className="text-link"
              style={{ marginTop: "8px" }}
            >
              View full document & process guide →
            </Link>
          </div>
        </div>
        <div className="process-grid">
          {processSteps.map(([num, title, text], i) => (
            <div className="process-step" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              {i < processSteps.length - 1 && (
                <ArrowRight className="step-arrow" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
