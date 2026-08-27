import { createFileRoute } from "@tanstack/react-router";
import { Hero, Marquee, Nav } from "@/components/portfolio/hero";
import {
  About,
  Awards,
  Contact,
  Experience,
  Testimonials,
  Work,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshay — Creative Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Akshay, a creative engineer building high-performance web products, design systems and motion-led interfaces.",
      },
      { property: "og:title", content: "Akshay — Creative Engineer" },
      {
        property: "og:description",
        content:
          "Selected work, experience and recognition from a full-stack engineer building fast, beautiful web products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Awards />
      <About />
      <Experience />
      <Testimonials />
      <Contact />
      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        © 2026 Akshay Kumar. All rights reserved.
      </footer>
    </main>
  );
}
