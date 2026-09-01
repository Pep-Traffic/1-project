import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="glyph"></span>Empro Labs
            </Link>
            <p>A software development agency for founders who need production-grade systems, not a demo.</p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><Link href="/services/web-development">Web development</Link></li>
              <li><Link href="/services/seo">SEO</Link></li>
              <li><Link href="/services/ads-management">Ads management</Link></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">X / Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Empro Labs. All rights reserved.</span>
          <span>Built with care, shipped on time.</span>
        </div>
      </div>
    </footer>
  );
}
