"use client";

import { useEffect, useRef } from "react";

const months = [
  { label: "Mo 1", value: 12 },
  { label: "Mo 2", value: 18 },
  { label: "Mo 3", value: 22 },
  { label: "Mo 4", value: 31 },
  { label: "Mo 5", value: 40 },
  { label: "Mo 6", value: 58 },
];

export default function TrafficChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in-view");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const max = Math.max(...months.map((m) => m.value));

  return (
    <div className="dash-panel">
      <div className="dash-head">
        <b>Organic sessions per month</b>
        <span className="badge-pill">+383% in 6 months</span>
      </div>
      <div className="dash-chart" ref={chartRef}>
        {months.map((m, i) => (
          <i
            key={m.label}
            className={i === months.length - 1 ? "hl" : ""}
            style={{ height: `${(m.value / max) * 100}%` }}
            title={`${m.label}: ${m.value}00 sessions`}
          ></i>
        ))}
      </div>
      <div className="cal-days">
        {months.map((m) => (
          <span key={m.label}>{m.label}</span>
        ))}
      </div>
    </div>
  );
}
