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

const COUNT = RING_PROJECTS.length;
const ANGLE_STEP = 360 / COUNT;
const RADIUS_X = 560;
const RADIUS_Z = 220;
const SPREAD_SCALE = 1.14;

export default function PortfolioRing() {
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [viewportScale, setViewportScale] = useState(0.5);
  const dragState = useRef(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setViewportScale(w < 640 ? 0.45 : w < 1024 ? 0.7 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handlePointerDown = useCallback((e) => {
    dragState.current = { startX: e.clientX, startRotation: rotation };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }, [rotation]);

  const handlePointerMove = useCallback((e) => {
    if (!dragState.current) return;
    const deltaX = e.clientX - dragState.current.startX;
    setRotation(dragState.current.startRotation + deltaX * 0.35);
  }, []);

  const endDrag = useCallback(() => {
    dragState.current = null;
    setDragging(false);
  }, []);

  const scale = dragging ? SPREAD_SCALE : 1;

  return (
    <section className={`portfolio-ring-section${dragging ? " dragging" : ""}`}>
      <div
        className="ring-viewport"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div className="ring">
          {RING_PROJECTS.map((p, i) => {
            const angleDeg = i * ANGLE_STEP + rotation;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = Math.sin(angleRad) * RADIUS_X * scale * viewportScale;
            const z = Math.cos(angleRad) * RADIUS_Z * scale * viewportScale;
            const faceAngle = angleDeg;
            return (
              <div
                className="ring-card"
                key={p.name}
                style={{
                  transform: `translate3d(${x}px, 0, ${z}px) rotateY(${faceAngle}deg)`,
                }}
              >
                {p.url ? (
                  <a
                    className="ring-card-thumb"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onPointerDown={(e) => e.stopPropagation()}
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
            );
          })}
        </div>
      </div>
      <p className="ring-hint">Click and drag to rotate</p>
    </section>
  );
}
