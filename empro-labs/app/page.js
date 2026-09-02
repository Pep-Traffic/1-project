import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import HomeInteractions from "./components/HomeInteractions";

export const metadata = {
  title: "Empro Labs — Software Development Agency",
  description:
    "Empro Labs builds and maintains production software for founders who are done relying on a rotating cast of freelancers. Senior engineers, one team, every release.",
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
