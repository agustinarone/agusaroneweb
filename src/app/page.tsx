import { FixedNavbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowIHelp } from "@/components/HowIHelp";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FixedNavbar />
      <Hero />
      <HowIHelp />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
