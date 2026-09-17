import React from "react";
import { benefits } from "../data/siteData";

export default function WhyChooseUs() {
  return (
    <section className="section benefits">
      <div className="container">
        <div className="section-heading compact">
          <div className="section-kicker">Why this website works</div>
          <h2>
            A clear first step for <span>job seekers.</span>
          </h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((item) => (
            <div className="benefit" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
