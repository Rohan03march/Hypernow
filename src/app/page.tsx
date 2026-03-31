import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import Strengths from "@/components/Strengths";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <Hero />
        <div className="w-full">
          <About />
          <MissionVision />
          <Services />
          <Strengths />
          <Leadership />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
