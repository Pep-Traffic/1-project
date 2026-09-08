import Link from "next/link";

export default function CtaBanner({
  title = "Ready to stop firefighting?",
  lede = "Tell us what's broken or what you're building next. We'll reply with a real plan, not a sales deck.",
  ctaLabel = "Book a call",
}) {
  return (
    <section className="cta-banner">
      <div className="wrap">
        <div className="cta-panel">
          <h2>{title}</h2>
          <p>{lede}</p>
          <Link href="/contact" className="btn btn-primary">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
