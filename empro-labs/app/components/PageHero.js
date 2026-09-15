export default function PageHero({ title, lede }) {
  return (
    <section className="page-hero">
      <div className="beam"></div>
      <div className="beam-2"></div>
      <div className="grain"></div>
      <div className="wrap">
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}
