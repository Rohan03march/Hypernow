import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import Strengths from "@/components/Strengths";
import UpcomingProjects from "@/components/UpcomingProjects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-between w-full">
        <Hero />
        <div className="relative w-full">
          <About />
          <MissionVision />
          <Services />
          <Strengths />
          <UpcomingProjects />
          <Leadership />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
