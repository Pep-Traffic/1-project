import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import HomeInteractions from "./components/HomeInteractions";

export const metadata = {
  title: "GHL, WordPress & Shopify Web Design, SEO & Ads Agency — Empro Labs",
  description:
    "Empro Labs builds GoHighLevel funnels, WordPress and Shopify sites, plus the SEO and ads that bring in customers — for small businesses done relying on a rotating cast of freelancers.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeContent />
      <Footer />
      <HomeInteractions />
    </>
  );
}
