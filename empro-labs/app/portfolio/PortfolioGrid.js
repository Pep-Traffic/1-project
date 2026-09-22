"use client";

import { useState } from "react";
import { shotFor, initialsFor } from "../work-shots";
import { PROJECTS, PLATFORMS, domainOf } from "./projects";

const countFor = (platform) =>
  platform === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.platform === platform).length;

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.platform === active);

  return (
    <>
      <div className="pgrid-head">
        <div>
          <h2>Every project, by platform</h2>
          <p className="section-lede">
            All seven are live. Open any of them in a new tab and judge the work directly.
          </p>
        </div>
        <div className="pgrid-filters" role="group" aria-label="Filter projects by platform">
          {PLATFORMS.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={active === p}
              className={`filter-tab${active === p ? " active" : ""}`}
              onClick={() => setActive(p)}
            >
              {p}
              <span className="pgrid-count">{countFor(p)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="pgrid">
        {shown.map((p) => {
          const shot = shotFor(p.url);
          return (
            <article className="pcard" key={p.name}>
              <a className="pcard-frame" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} in a new tab`}>
                <span className="pcard-chrome" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                  <em>{domainOf(p.url)}</em>
                </span>
                <span className={`pcard-shot${shot ? "" : " is-fallback"}`}>
                  {shot ? (
                    <img src={shot} alt={`${p.name} homepage`} width="828" height="466" loading="lazy" />
                  ) : (
                    <b>{initialsFor(p.name)}</b>
                  )}
                </span>
              </a>

              <div className="pcard-body">
                <div className="pcard-meta">
                  <span className="pring-badge">{p.platform}</span>
                  <span className="pcard-industry">{p.industry}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <ul className="pcard-built" aria-label="What was built">
                  {p.built.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a className="pcard-link" href={p.url} target="_blank" rel="noopener noreferrer">
                  {domainOf(p.url)}
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
                    <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
