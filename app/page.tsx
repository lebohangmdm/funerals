import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import TopUpSection from "./components/TopUpSection";
import Faq from "./components/Faq";
import Branch from "./components/Branch";
import Contact from "./components/Contact";
import FuneralCovers from "./components/FuneralCovers";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FuneralCovers />
      <TopUpSection />
      <Faq />
      <Branch />
      <Contact />
    </main>
  );
}
