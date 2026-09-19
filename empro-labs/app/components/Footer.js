import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image src="/brand/icon.png" alt="" className="logo-mark" width={32} height={32} />
              <span>Empro Labs</span>
            </Link>
            <p>Websites, funnels, and online stores built to help small businesses get more customers.</p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
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
            <h5>Industries</h5>
            <ul>
              <li><Link href="/industries/roofing">Roofing</Link></li>
              <li><Link href="/industries/hvac-heating">HVAC &amp; Heating</Link></li>
              <li><Link href="/industries/plumbing">Plumbing</Link></li>
              <li><Link href="/industries">All industries</Link></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a></li>
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
