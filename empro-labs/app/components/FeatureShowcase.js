import Link from "next/link";

const check = (
  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
    <path d="M3.5 8.5L6.5 11.5L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function FeatureShowcase({ num = "01", label, title, lede, points, cta, id }) {
  return (
    <section className="fs" id={id}>
      <div className="wrap">
        <div className="fs-grid">
          <div className="fs-text">
            <div className="fs-label">
              <span className="fs-num">{num}</span>
              <span className="fs-line"></span>
              <span>{label}</span>
            </div>
            <h2>{title}</h2>
            <p className="fs-lede">{lede}</p>
            <ul className="fs-points">
              {points.map((p) => (
                <li key={p}>
                  <span className="fs-tick">{check}</span>
                  {p}
                </li>
              ))}
            </ul>
            {cta ? (
              <Link href={cta.href} className="btn btn-primary fs-btn">
                {cta.label}
              </Link>
            ) : null}
          </div>

          <div className="fs-visual" aria-hidden="true">
            <div className="fs-glow"></div>
            <div className="fs-browser">
              <div className="fs-bar">
                <i></i><i></i><i></i>
                <span className="fs-url">yourcompany.com</span>
              </div>
              <div className="fs-site">
                <div className="fs-nav">
                  <b>Your Company</b>
                  <span>Home</span>
                  <span>Services</span>
                  <span>Reviews</span>
                  <span>Contact</span>
                  <em>Request a quote</em>
                </div>
                <div className="fs-hero">
                  <div className="fs-photo">
                    <svg viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <linearGradient id="fsSky" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#3A2A5C" />
                          <stop offset="0.55" stopColor="#D9662B" />
                          <stop offset="1" stopColor="#F0A059" />
                        </linearGradient>
                      </defs>
                      <rect width="200" height="140" fill="url(#fsSky)" />
                      <circle cx="150" cy="86" r="20" fill="#FFD9A8" opacity="0.55" />
                      <path d="M0 100 L60 60 L120 92 L200 52 L200 140 L0 140Z" fill="#1B1410" />
                      <path d="M30 140 V100 L78 72 L126 100 V140Z" fill="#2A1F18" />
                      <path d="M22 102 L78 66 L134 102" stroke="#F0A059" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="62" y="108" width="16" height="32" fill="#F0A059" opacity="0.7" />
                      <rect x="92" y="110" width="14" height="14" fill="#FFD9A8" opacity="0.8" />
                    </svg>
                  </div>
                  <div className="fs-copy">
                    <h4>Local service you can count on.</h4>
                    <p>Book in minutes. Get a quote within a day.</p>
                    <div className="fs-ctawrap">
                      <span className="fs-cta">
                        <span className="fs-cta-a">Request a quote</span>
                        <span className="fs-cta-b">
                          <svg viewBox="0 0 16 16" width="12" height="12" fill="none"><path d="M3.5 8.5L6.5 11.5L12.5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          Request sent
                        </span>
                      </span>
                      <span className="fs-ripple"></span>
                      <svg className="fs-cursor" viewBox="0 0 24 24" width="22" height="22" fill="none">
                        <path d="M5 3L5 19L9.5 15L12.5 21L15 19.5L12 13.5L18 13L5 3Z" fill="#FFFFFF" stroke="#0B0906" strokeWidth="1.2" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="fs-badges">
                      <span><i></i>Licensed &amp; insured</span>
                      <span>5-star rated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fs-toast">
              <span className="fs-toast-ico">{check}</span>
              <div>
                <b>Quote request received</b>
                <span>Sent straight to your CRM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
