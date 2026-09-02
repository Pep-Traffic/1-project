"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const RING_PROJECTS = [
  { name: "CorePower Peptide", tag: "Custom build", url: "https://corepowerpeptide.com" },
  { name: "AIMTN", tag: "Custom build", url: "https://aimtn.org" },
  { name: "What Are Peptides", tag: "Custom build", url: "https://whatarepeptides.us" },
  { name: "PracForge", tag: "WordPress build", url: "https://pracforge.com" },
  { name: "Mangoholic", tag: "WooCommerce build", url: "https://mangoholicae.com" },
  { name: "Northwind", tag: "Custom build" },
  { name: "Halcyon", tag: "Platform migration" },
  { name: "Cascade Ops", tag: "Internal tools" },
  { name: "Bayview Heating", tag: "GoHighLevel funnel" },
  { name: "Rapid Comfort Co", tag: "GHL automation" },
  { name: "Northline Roofing", tag: "WordPress rebuild" },
  { name: "Ferro Studio", tag: "WooCommerce build" },
  { name: "Marlow & Co", tag: "Shopify storefront" },
  { name: "Driftwood Goods", tag: "Shopify migration" },
  { name: "Vantage Roofing", tag: "Local SEO" },
  { name: "Ember & Ash", tag: "Paid search" },
];

const ANGLE_STEP = 360 / RING_PROJECTS.length;
const RADIUS = 420;

export default function PortfolioRing() {
  const [rotation, setRotation] = useState(0);
  const dragState = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      setRotation((r) => r + e.deltaY * 0.15);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const handlePointerDown = useCallback((e) => {
    dragState.current = { startX: e.clientX, startY: e.clientY, startRotation: rotation };
    e.currentTarget.setPointerCapture(e.pointerId);
  }, [rotation]);

  const handlePointerMove = useCallback((e) => {
    if (!dragState.current) return;
    const deltaY = e.clientY - dragState.current.startY;
    const deltaX = e.clientX - dragState.current.startX;
    const delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : -deltaX;
    setRotation(dragState.current.startRotation + delta * 0.4);
  }, []);

  const handlePointerUp = useCallback(() => {
    dragState.current = null;
  }, []);

  return (
    <section
      className="portfolio-ring-section"
      ref={sectionRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="ring-viewport">
        <div
          className="ring"
          style={{ transform: `translateZ(-${RADIUS}px) rotateY(${-rotation}deg)` }}
        >
          {RING_PROJECTS.map((p, i) => (
            <div
              className="ring-card"
              key={p.name}
              style={{ transform: `rotateY(${i * ANGLE_STEP}deg) translateZ(${RADIUS}px)` }}
            >
              {p.url ? (
                <a
                  className="ring-card-thumb"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(p.url)}?w=500`}
                    alt={`${p.name} live screenshot`}
                    loading="lazy"
                    draggable={false}
                  />
                </a>
              ) : (
                <div className="ring-card-thumb ring-card-thumb-fallback">
                  {p.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className="ring-card-body">
                <span className="portfolio-tag">{p.tag}</span>
                <h3>{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="ring-hint">Scroll or drag to rotate</p>
    </section>
  );
}
