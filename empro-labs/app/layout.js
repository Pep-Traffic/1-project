import "./globals.css";

const SITE_URL = "https://www.emprolabs.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Empro Labs — Software Development Agency",
  description:
    "Empro Labs builds and maintains production software for founders who are done relying on a rotating cast of freelancers.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Empro Labs",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.png`,
    email: "hello@emprolabs.dev",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Empro Labs",
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Empro Labs",
    url: SITE_URL,
    description:
      "GoHighLevel (GHL) website design, WordPress website development, Shopify website design, SEO, and ads management for founders who need production-grade systems.",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GoHighLevel (GHL) website design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WordPress website development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify website design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ads management" } },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
