"use client";

import { useState } from "react";

const platforms = {
  GHL: {
    label: "GHL",
    blurb: "GoHighLevel website design, funnels, and automations — including Lead Connector CRM setup — built to answer every lead in under 30 seconds.",
    projects: [
      { name: "Bayview Heating", detail: "Multi-step funnel + missed-call text-back automation." },
      { name: "Rapid Comfort Co", detail: "Pipeline automation that routes leads by service type." },
    ],
  },
  WordPress: {
    label: "WordPress",
    blurb: "WordPress website development focused on load time, SEO structure, and a CMS your team can actually use.",
    projects: [
      { name: "Northline Roofing", detail: "Full rebuild from a legacy theme — 1.8s load time." },
      { name: "Ferro Studio", detail: "WooCommerce storefront with custom product filtering." },
      { name: "PracForge", detail: "WordPress build for a dental & medical practice partner.", url: "https://pracforge.com" },
      { name: "Mangoholic", detail: "WooCommerce storefront for a fresh fruit delivery brand.", url: "https://mangoholicae.com" },
    ],
  },
};

export default function PlatformShowcase() {
  const [active, setActive] = useState("GHL");
  const current = platforms[active];

  return (
    <div>
      <div className="platform-tabs" role="tablist">
        {Object.keys(platforms).map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            className={`platform-tab${active === key ? " active" : ""}`}
            onClick={() => setActive(key)}
            type="button"
          >
            {platforms[key].label}
          </button>
        ))}
      </div>

      <p className="section-lede" style={{ marginBottom: "28px" }}>
        {current.blurb}
      </p>

      <div className="platform-projects">
        {current.projects.map((p) => (
          <div className="portfolio-card show" key={p.name}>
            {p.url ? (
              <a
                className="portfolio-thumb portfolio-thumb-shot"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(p.url)}?w=800`}
                  alt={`${p.name} live screenshot`}
                  loading="lazy"
                />
              </a>
            ) : (
              <div className="portfolio-thumb">{p.name.slice(0, 2).toUpperCase()}</div>
            )}
            <div className="portfolio-body">
              <span className="portfolio-tag">{current.label}</span>
              <h3>{p.name}</h3>
              <p>{p.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
