const stats = [
  { value: "3", label: "core platforms: GHL, WordPress, Shopify" },
  { value: "4", label: "services: web, SEO, ads, support" },
  { value: "1 day", label: "typical reply time" },
  { value: "Direct", label: "access to who builds your site" },
];

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-block" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
