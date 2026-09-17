import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function PageBanner({ title, kicker, description, breadcrumb, hideBreadcrumb = false }) {
  return (
    <div className="page-banner">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container page-banner-content">
        {!hideBreadcrumb && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">{breadcrumb || title}</span>
          </nav>
        )}
        {kicker && (
          <div className="eyebrow">
            <span></span> {kicker}
          </div>
        )}
        <h1>{title}</h1>
        {description && <p className="page-banner-desc">{description}</p>}
      </div>
    </div>
  );
}
