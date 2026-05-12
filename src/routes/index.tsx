import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Walkthrough } from "@/components/site/Walkthrough";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DP Associates — Architectural Designers & Engineers" },
      {
        name: "description",
        content:
          "DP Associates is a luxury architecture and engineering studio designing modern villas, interiors and commercial spaces with precision and craft.",
      },
      { property: "og:title", content: "DP Associates — Architectural Designers & Engineers" },
      {
        property: "og:description",
        content:
          "Modern architectural, structural, and interior solutions blending innovation, aesthetics and engineering excellence.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Process />
      <Testimonials />
      <Walkthrough />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
