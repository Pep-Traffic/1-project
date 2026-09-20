import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import HomeInteractions from "./components/HomeInteractions";

export const metadata = {
  title: "Home Service Website Design, SEO & Ads — Empro Labs",
  description:
    "Websites, SEO and Google Ads for roofing, HVAC, plumbing, electrical and remodeling companies. Built to turn visitors into booked jobs. Get a free audit.",
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
