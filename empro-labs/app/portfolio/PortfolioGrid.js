"use client";

import { useState } from "react";

const projects = [
  { name: "Northwind", category: "Web Development", tag: "Custom build", result: "62% faster checkout" },
  { name: "Halcyon", category: "Web Development", tag: "Platform migration", result: "0 min downtime" },
  { name: "Cascade Ops", category: "Web Development", tag: "Internal tools", result: "20 hrs saved / week" },
  { name: "Bayview Heating", category: "GHL", tag: "GoHighLevel funnel", result: "3x lead response speed" },
  { name: "Rapid Comfort Co", category: "GHL", tag: "GHL automation", result: "28 sec avg. first reply" },
  { name: "Northline Roofing", category: "WordPress", tag: "WordPress rebuild", result: "1.8s load time" },
  { name: "Ferro Studio", category: "WordPress", tag: "WooCommerce build", result: "40% more conversions" },
  { name: "PracForge", category: "WordPress", tag: "WordPress build", result: "Live site", url: "https://pracforge.com" },
  { name: "Mangoholic", category: "WordPress", tag: "WooCommerce build", result: "Live site", url: "https://mangoholicae.com" },
  { name: "Marlow & Co", category: "Shopify", tag: "Shopify storefront", result: "2.1x AOV increase" },
  { name: "Driftwood Goods", category: "Shopify", tag: "Shopify migration", result: "99.9% uptime" },
  { name: "Vantage Roofing", category: "SEO", tag: "Local SEO", result: "3x organic traffic" },
  { name: "Ember & Ash", category: "Ads", tag: "Paid search", result: "$99 cost per booked job" },
];

const categories = ["All", "Web Development", "GHL", "WordPress", "Shopify", "SEO", "Ads"];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  return (
    <>
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {projects.map((p) => {
          const visible = active === "All" || p.category === active;
          return (
            <div className={`portfolio-card${visible ? " show" : " hide"}`} key={p.name}>
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
                <span className="portfolio-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.result}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
