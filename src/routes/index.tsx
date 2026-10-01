import { createFileRoute } from "@tanstack/react-router";
import { Hero, Marquee, Nav } from "@/components/portfolio/hero";
import {
  About,
  Awards,
  Contact,
  Experience,
  Work,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bavesh — CEO & Managing Director" },
      {
        name: "description",
        content:
          "Portfolio of Bavesh, a strategic entrepreneur building businesses in skill development, technology, education and media across India and the UAE.",
      },
      { property: "og:title", content: "Bavesh — CEO & Managing Director" },
      {
        property: "og:description",
        content:
          "Strategic works, ventures and experience of an entrepreneur focused on skills, innovation and youth empowerment.",
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
      <Contact />
      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted-foreground">
        © 2026 Akshay Kumar. All rights reserved.
      </footer>
    </main>
  );
}
