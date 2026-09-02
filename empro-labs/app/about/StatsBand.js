"use client";

import { useEffect, useRef } from "react";

const stats = [
  { target: 120, suffix: "+", label: "products shipped" },
  { target: 8, suffix: " yrs", label: "building software" },
  { target: 99.98, suffix: "%", label: "average uptime", decimals: 2 },
  { target: 96, suffix: "%", label: "on-time delivery" },
];

export default function StatsBand() {
  const containerRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const s = stats[i];
        el.textContent = (s.decimals ? s.target.toFixed(s.decimals) : s.target) + s.suffix;
      });
      return;
    }

    function animate(el, stat) {
      const duration = 1400;
      const start = performance.now();
      function frame(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = stat.target * eased;
        el.textContent = (stat.decimals ? val.toFixed(stat.decimals) : Math.round(val)) + stat.suffix;
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            numberRefs.current.forEach((el, i) => {
              if (el) animate(el, stats[i]);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(container);

    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-band" ref={containerRef}>
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-block" key={s.label}>
              <b ref={(el) => (numberRefs.current[i] = el)}>0{s.suffix}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
