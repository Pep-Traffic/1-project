"use client";

import { useState } from "react";

const platforms = {
  GHL: {
    label: "GHL",
    blurb: "GoHighLevel funnels and automations built to answer every lead in under 30 seconds.",
    projects: [
      { name: "Bayview Heating", detail: "Multi-step funnel + missed-call text-back automation." },
      { name: "Rapid Comfort Co", detail: "Pipeline automation that routes leads by service type." },
      { name: "Northline HVAC", detail: "Review-request and rebooking workflows on autopilot." },
    ],
  },
  WordPress: {
    label: "WordPress",
    blurb: "WordPress rebuilds focused on load time, SEO structure, and a CMS your team can actually use.",
    projects: [
      { name: "Northline Roofing", detail: "Full rebuild from a legacy theme — 1.8s load time." },
      { name: "Ferro Studio", detail: "WooCommerce storefront with custom product filtering." },
      { name: "Marlow & Co", detail: "Editorial site with a custom block-based page builder." },
      { name: "PracForge", detail: "WordPress build for a dental & medical practice partner.", url: "https://pracforge.com" },
      { name: "Mangoholic", detail: "WooCommerce storefront for a fresh fruit delivery brand.", url: "https://mangoholicae.com" },
    ],
  },
  Shopify: {
    label: "Shopify",
    blurb: "Shopify builds and migrations that keep checkout fast and conversion rates climbing.",
    projects: [
      { name: "Driftwood Goods", detail: "Migration from a custom cart to Shopify with zero downtime." },
      { name: "Marlow & Co", detail: "Custom theme build with a 2.1x increase in average order value." },
      { name: "Ember & Ash", detail: "Subscription and bundling logic built on Shopify Functions." },
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
