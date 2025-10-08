import { FixedNavbar } from "@/components/FixedNavbar";
import { Hero } from "@/components/Hero";
import { HowIHelp } from "@/components/HowIHelp";
import { Projects } from "@/components/Projects";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FixedNavbar />
      <Hero />
      <HowIHelp />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}
