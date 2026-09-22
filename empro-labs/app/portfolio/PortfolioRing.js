"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { shotFor, initialsFor } from "../work-shots";
import { PROJECTS, domainOf } from "./projects";

const COUNT = PROJECTS.length;
const STEP = 360 / COUNT;
const AUTO_SPEED = 7; // degrees per second
const EASE = 0.12;
const TAP_SLOP = 6; // px of movement before a press counts as a drag
const HOLD_MS = 6000; // pause after the user steers, before auto-rotation resumes

const wrapIndex = (i) => ((i % COUNT) + COUNT) % COUNT;
const activeFrom = (rot) => wrapIndex(Math.round(-rot / STEP));

export default function PortfolioRing() {
  const [rot, setRot] = useState(0);
  const [radius, setRadius] = useState(420);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [dragging, setDragging] = useState(false);

  // Each reason to stop auto-rotating is tracked on its own, so one source
  // (e.g. the post-interaction timer) can never clear another (e.g. hover).
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [held, setHeld] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const current = useRef(0);
  const target = useRef(0);
  const drag = useRef(null);
  const holdTimer = useRef(null);
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const loop = useRef({ raf: 0, running: false, last: 0, rendered: 0 });

  const autoOn = visible && !reduced && !hovered && !focused && !held && !userPaused && !dragging;
  const autoRef = useRef(autoOn);
  autoRef.current = autoOn;
  const reducedRef = useRef(reduced);
  reducedRef.current = reduced;

  // The frame loop runs only while something is moving, and stops once settled.
  const tick = useCallback((now) => {
    const L = loop.current;
    const dt = Math.min((now - L.last) / 1000, 0.05);
    L.last = now;
    if (autoRef.current) target.current -= AUTO_SPEED * dt;
    const diff = target.current - current.current;
    if (reducedRef.current || Math.abs(diff) < 0.01) current.current = target.current;
    else current.current += diff * EASE;
    if (Math.abs(current.current - L.rendered) > 0.001) {
      L.rendered = current.current;
      setRot(L.rendered);
    }
    const settled = Math.abs(target.current - current.current) < 0.01;
    if (settled && !autoRef.current && !drag.current) {
      L.running = false;
      return;
    }
    L.raf = requestAnimationFrame(tick);
  }, []);

  const kick = useCallback(() => {
    const L = loop.current;
    if (L.running) return;
    L.running = true;
    L.last = performance.now();
    L.raf = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    if (autoOn) kick();
  }, [autoOn, kick]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setMotion = () => setReduced(mq.matches);
    setMotion();
    mq.addEventListener("change", setMotion);

    const fit = () => {
      const w = window.innerWidth;
      setRadius(w < 640 ? 150 : w < 1024 ? 300 : 420);
    };
    fit();
    window.addEventListener("resize", fit);

    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    if (stageRef.current) io.observe(stageRef.current);

    const L = loop.current;
    return () => {
      mq.removeEventListener("change", setMotion);
      window.removeEventListener("resize", fit);
      io.disconnect();
      clearTimeout(holdTimer.current);
      cancelAnimationFrame(L.raf);
      L.running = false;
    };
  }, []);

  const holdThenResume = useCallback(() => {
    setHeld(true);
    clearTimeout(holdTimer.current);
    holdTimer.current = setTimeout(() => setHeld(false), HOLD_MS);
  }, []);

  const goTo = useCallback(
    (i) => {
      const cur = activeFrom(target.current);
      let delta = i - cur;
      if (delta > COUNT / 2) delta -= COUNT;
      if (delta < -COUNT / 2) delta += COUNT;
      target.current = Math.round(target.current / STEP) * STEP - delta * STEP;
      holdThenResume();
      kick();
    },
    [holdThenResume, kick]
  );

  const step = useCallback(
    (dir) => {
      target.current = Math.round(target.current / STEP) * STEP - dir * STEP;
      holdThenResume();
      kick();
    },
    [holdThenResume, kick]
  );

  const onPointerDown = (e) => {
    if (drag.current) return; // ignore a second finger while one is already dragging
    const card = e.target.closest("[data-index]");
    drag.current = {
      id: e.pointerId,
      x: e.clientX,
      start: target.current,
      moved: 0,
      index: card ? Number(card.dataset.index) : null,
    };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    kick();
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d || e.pointerId !== d.id) return;
    const dx = e.clientX - d.x;
    d.moved = Math.max(d.moved, Math.abs(dx));
    target.current = d.start + dx * (radius > 200 ? 0.22 : 0.45);
  };

  const endDrag = (e) => {
    const d = drag.current;
    if (!d || (e && e.pointerId !== d.id)) return;
    drag.current = null;
    setDragging(false);
    // Selection is decided here rather than in a click handler: pointer capture
    // routes the click to the stage, so a card's own onClick would never fire.
    if (d.moved <= TAP_SLOP && d.index !== null) {
      goTo(d.index);
      return;
    }
    target.current = Math.round(target.current / STEP) * STEP;
    holdThenResume();
    kick();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  const onFocus = () => setFocused(true);
  const onBlur = (e) => {
    if (!sectionRef.current || !sectionRef.current.contains(e.relatedTarget)) setFocused(false);
  };

  const active = activeFrom(rot);
  const project = PROJECTS[active];
  const liveMode = autoOn ? "off" : "polite";

  return (
    <section
      ref={sectionRef}
      className="pring"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className="wrap">
        <div className="pring-toolbar">
          <button
            type="button"
            className="pring-toggle"
            aria-pressed={userPaused}
            aria-label={userPaused ? "Start rotation" : "Pause rotation"}
            onClick={() => setUserPaused((p) => !p)}
          >
            {userPaused ? (
              <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                <path d="M4 2.5v11l9-5.5-9-5.5z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                <rect x="3.5" y="2.5" width="3" height="11" rx="1" fill="currentColor" />
                <rect x="9.5" y="2.5" width="3" height="11" rx="1" fill="currentColor" />
              </svg>
            )}
            <span>{userPaused ? "Play" : "Pause"}</span>
          </button>
        </div>

        <div
          ref={stageRef}
          className={`pring-stage${dragging ? " is-dragging" : ""}`}
          tabIndex={0}
          aria-label="Project carousel. Use the left and right arrow keys to browse."
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div className="pring-floor" aria-hidden="true"></div>
          {PROJECTS.map((p, i) => {
            const rad = ((i * STEP + rot) * Math.PI) / 180;
            const depth = Math.cos(rad);
            const t = (depth + 1) / 2;
            const x = Math.sin(rad) * radius;
            const y = depth * 22;
            const scale = 0.6 + 0.4 * t;
            const isActive = i === active;
            const shot = shotFor(p.url, 640);
            return (
              <div
                key={p.name}
                data-index={i}
                aria-hidden="true"
                className={`pring-card${isActive ? " is-active" : ""}`}
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  zIndex: Math.round(t * 100),
                  opacity: 0.28 + 0.72 * t,
                  filter: isActive ? "none" : `blur(${((1 - t) * 2.4).toFixed(2)}px)`,
                }}
              >
                <span className="pring-chrome">
                  <i></i>
                  <i></i>
                  <i></i>
                  <em>{domainOf(p.url)}</em>
                </span>
                <span className={`pring-shot${shot ? "" : " is-fallback"}`}>
                  {shot ? (
                    <img src={shot} alt="" width="640" height="360" loading="lazy" draggable={false} />
                  ) : (
                    <b>{initialsFor(p.name)}</b>
                  )}
                </span>
                <span className="pring-name">{p.name}</span>
              </div>
            );
          })}
        </div>

        <div className="pring-panel">
          <button type="button" className="pring-arrow" aria-label="Previous project" onClick={() => step(-1)}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="pring-info" aria-live={liveMode} aria-atomic="true">
            <div className="pring-meta">
              <span className="pring-badge">{project.platform}</span>
              <span className="pring-industry">{project.industry}</span>
            </div>
            <h2 className="pring-title">{project.name}</h2>
            <p className="pring-summary">{project.summary}</p>
            <a className="pring-visit" href={project.url} target="_blank" rel="noopener noreferrer">
              Visit live site
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" aria-hidden="true">
                <path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <button type="button" className="pring-arrow" aria-label="Next project" onClick={() => step(1)}>
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="pring-dots" role="group" aria-label="Choose a project">
          {PROJECTS.map((p, i) => (
            <button
              type="button"
              key={p.name}
              aria-pressed={i === active}
              aria-label={`Show ${p.name}`}
              className={`pring-dot${i === active ? " is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
