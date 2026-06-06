import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pantheon from "@/components/Pantheon";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Vision from "@/components/Vision";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <Hero />
      <About />
      <Pantheon />
      <Projects />
      <Skills />
      <Vision />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
