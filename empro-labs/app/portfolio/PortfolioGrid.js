"use client";

import { useState } from "react";

const projects = [
  { name: "Bayview Heating", categories: ["GHL"], tag: "GoHighLevel funnel", result: "3x lead response speed" },
  { name: "Rapid Comfort Co", categories: ["GHL"], tag: "GHL automation", result: "28 sec avg. first reply" },
  { name: "Northline Roofing", categories: ["WordPress"], tag: "WordPress rebuild", result: "1.8s load time" },
  { name: "Ferro Studio", categories: ["WordPress"], tag: "WooCommerce build", result: "40% more conversions" },
  { name: "PracForge", categories: ["Web Development", "WordPress"], tag: "WordPress build", result: "Live site", url: "https://pracforge.com" },
  { name: "Mangoholic", categories: ["Web Development", "WordPress"], tag: "WooCommerce build", result: "Live site", url: "https://mangoholicae.com" },
  { name: "Vantage Roofing", categories: ["SEO"], tag: "Local SEO", result: "3x organic traffic" },
  { name: "Ember & Ash", categories: ["Ads"], tag: "Paid search", result: "$99 cost per booked job" },
];

const categories = ["All", "Web Development", "GHL", "WordPress", "SEO", "Ads"];

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
          const visible = active === "All" || p.categories.includes(active);
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
