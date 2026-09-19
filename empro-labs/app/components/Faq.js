import Link from "next/link";

export default function Faq({ title, lede, items }) {
  return (
    <section className="faq">
      <div className="wrap">
        <div className="faq-layout">
          <div className="faq-intro">
            <h2>{title}</h2>
            {lede ? <p className="section-lede">{lede}</p> : null}
            <div className="faq-ask">
              <b>Still have a question?</b>
              <span>Tell us what you're trying to solve and we'll answer within one business day.</span>
              <Link href="/contact" className="faq-ask-link">
                Ask us directly
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                  <path d="M3 8h9M8.5 4L12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="faq-list">
            {items.map((f) => (
              <details className="faq-item" name="faq" key={f.q}>
                <summary>
                  <span className="faq-q">{f.q}</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </summary>
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
