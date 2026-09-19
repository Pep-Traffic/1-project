import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services/web-development", label: "Web development" },
      { href: "/services/gohighlevel", label: "GoHighLevel" },
      { href: "/services/wordpress", label: "WordPress" },
      { href: "/services/shopify", label: "Shopify" },
      { href: "/services/seo", label: "SEO" },
      { href: "/services/ads-management", label: "Ads management" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries/roofing", label: "Roofing" },
      { href: "/industries/hvac-heating", label: "HVAC & Heating" },
      { href: "/industries/plumbing", label: "Plumbing" },
      { href: "/industries", label: "All industries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-card">
          <div className="footer-main">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <Image src="/brand/icon.png" alt="" className="logo-mark" width={32} height={32} />
                <span>Empro Labs</span>
              </Link>
              <h2 className="footer-headline">Find out what your website is costing you.</h2>
              <Link href="/contact" className="btn btn-primary footer-cta">
                Get a free audit
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                  <path d="M3 8h9M8.5 4L12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <nav className="footer-cols" aria-label="Footer">
              {columns.map((col) => (
                <div key={col.title}>
                  <h5>{col.title}</h5>
                  <ul>
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Empro Labs. All rights reserved.</span>
            <a href="mailto:hello@emprolabs.dev">hello@emprolabs.dev</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
