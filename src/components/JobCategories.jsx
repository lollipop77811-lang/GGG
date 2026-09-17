import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { jobGroups } from "../data/siteData";

const jobImages = {
  "Civil": "/jobs/civil.jpg",
  "MEP": "/jobs/mep.jpg",
  "Mechanical (Oil/Gas)": "/jobs/mechanical.jpg",
  "Catering": "/jobs/catering.jpg",
  "Furniture": "/jobs/furniture.jpg",
  "Insulation": "/jobs/insulation.jpg",
  "Aluminium": "/jobs/aluminium.jpg",
  "Facility Management": "/jobs/facility.jpg"
};

export default function JobCategories() {
  return (
    <section className="section jobs" id="jobs">
      <div className="container">
        <div className="section-heading-row" style={{ marginBottom: "35px" }}>
          <div>
            <div className="section-kicker">Find your role</div>
            <h2>
              Job categories built around <span>real skills.</span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginTop: "10px",
                maxWidth: "600px",
              }}
            >
              Explore the roles available across our 8 major trade divisions.
            </p>
          </div>
          <Link
            to="/jobs"
            className="btn btn-primary"
            style={{ alignSelf: "flex-end" }}
          >
            Explore All Job Details <ArrowRight size={16} />
          </Link>
        </div>

        <div className="jobs-grid">
          {jobGroups.map((group, index) => {
            const image = jobImages[group.title] || "/jobs/civil.jpg";
            const visibleJobs = group.jobs.slice(0, 6);
            const extraCount = group.jobs.length - visibleJobs.length;

            return (
              <article className="job-card" key={group.title}>
                {/* 100% Natural Background Image without any dark color wash */}
                <img
                  src={image}
                  alt={`${group.title} trade category`}
                  className="job-card-bg"
                  loading="lazy"
                />

                {/* Card Top Header - floating over the clear photo */}
                <div className="job-card-header-wrap">
                  <div className="job-icon-wrap">
                    <span className="job-emoji">{group.icon}</span>
                  </div>
                  <div className="job-badge-wrap">
                    <span className="job-count">
                      {String(group.jobs.length).padStart(2, "0")} roles
                    </span>
                  </div>
                </div>

                {/* Glassmorphic Content Panel at bottom */}
                <div className="job-card-panel">
                  <h3 className="job-title">{group.title}</h3>
                  <ul className="job-roles-list">
                    {visibleJobs.map((job) => (
                      <li key={job} className="job-role-item">
                        <span className="job-bullet" />
                        <span className="job-role-name">{job}</span>
                      </li>
                    ))}
                    {extraCount > 0 && (
                      <li className="job-role-more">
                        <span className="job-more-badge">+{extraCount} more roles</span>
                      </li>
                    )}
                  </ul>

                  <div className="job-card-footer">
                    <Link to="/jobs" className="job-link-btn">
                      <span>View Requirements</span>
                      <ArrowRight size={16} className="job-arrow-icon" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
