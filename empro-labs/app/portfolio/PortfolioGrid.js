"use client";

import { useState } from "react";
import { shotFor, initialsFor } from "../work-shots";

const projects = [
  { name: "CorePower Peptide", categories: ["Web Development"], tag: "Custom build", result: "Live site", url: "https://corepowerpeptide.com" },
  { name: "AIMTN", categories: ["Web Development"], tag: "Custom build", result: "Live site", url: "https://aimtn.org" },
  { name: "What Are Peptides", categories: ["Web Development"], tag: "Custom build", result: "Live site", url: "https://whatarepeptides.us" },
  { name: "Motscbuy", categories: ["Web Development"], tag: "Custom build", result: "Live site", url: "https://motscbuy.com" },
  { name: "Jeff Flowers Insurance", categories: ["Web Development", "GHL"], tag: "GoHighLevel website", result: "Live site", url: "https://jflowersinsurance.com" },
  { name: "PracForge", categories: ["Web Development", "WordPress"], tag: "WordPress build", result: "Live site", url: "https://pracforge.com" },
  { name: "Mangoholic", categories: ["Web Development", "WordPress"], tag: "WooCommerce build", result: "Live site", url: "https://mangoholicae.com" },
];

const categories = ["All", "Web Development", "GHL", "WordPress"];

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
                    src={shotFor(p.url)}
                    alt={`${p.name} live screenshot`}
                    width="828"
                    height="466"
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
