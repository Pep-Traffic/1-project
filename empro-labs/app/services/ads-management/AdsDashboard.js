"use client";

import { useEffect, useRef, useState } from "react";

const baseSpend = [18, 24, 30, 22, 35, 42, 50];

export default function AdsDashboard() {
  const chartRef = useRef(null);
  const [costPerLead, setCostPerLead] = useState(42);
  const [conversions, setConversions] = useState(126);
  const [bars, setBars] = useState(baseSpend);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in-view");
      return;
    }

    let interval;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            interval = setInterval(() => {
              setCostPerLead((c) => Math.max(28, Math.round(c + (Math.random() * 6 - 4))));
              setConversions((c) => c + (Math.random() > 0.5 ? 1 : 0));
              setBars((b) => b.map((v) => Math.max(10, Math.min(55, v + (Math.random() * 8 - 4)))));
            }, 2200);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  const max = 55;

  return (
    <div className="dash-panel">
      <div className="dash-head">
        <b>Active campaign — Search &amp; Retargeting</b>
        <span className="live-tag"><i></i>Live</span>
      </div>

      <div className="metric-grid" style={{ marginBottom: "20px" }}>
        <div className="metric">
          <span>Cost per lead</span>
          <b>
            ${costPerLead}
          </b>
        </div>
        <div className="metric">
          <span>Conversions (30d)</span>
          <b>{conversions}</b>
        </div>
        <div className="metric">
          <span>Cost per booked job</span>
          <b>
            $99<em> and falling</em>
          </b>
        </div>
      </div>

      <div className="dash-chart" ref={chartRef}>
        {bars.map((v, i) => (
          <i
            key={i}
            className={i === bars.length - 1 ? "hl" : ""}
            style={{ height: `${(v / max) * 100}%`, transition: "height 0.4s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          ></i>
        ))}
      </div>
    </div>
  );
}
