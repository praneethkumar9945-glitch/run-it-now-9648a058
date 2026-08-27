import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Download, Quote } from "lucide-react";

export function SectionTitle({
  light,
  bold,
  eyebrow,
}: {
  light: string;
  bold: string;
  eyebrow?: string;
}) {
  return (
    <div className="mb-14">
      <h2 className="text-display text-5xl md:text-7xl">
        <span className="text-muted-foreground/50">{light} </span>
        <span className="text-foreground">{bold}</span>
      </h2>
      {eyebrow ? (
        <p className="mt-4 text-xs tracking-[0.35em] uppercase text-muted-foreground">{eyebrow}</p>
      ) : null}
    </div>
  );
}

const projects = [
  {
    name: "STRATEGIC OPERATIONS",
    tag: "",
    line: "Your memories, beautifully preserved.",
    year: "2025",
  },
  {
    name: "BUSINESS EXPANSION",
    tag: "",
    line: "",
    year: "2025",
  },
  {
    name: "BRANDING & MARKETING",
    tag: "",
    line: "",
    year: "2024",
  },
  {
    name: "CORPORATE TRAINING",
    tag: "",
    line: "",
    year: "2024",
  },
];

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle light="STRATEGIC " bold="WORKS" eyebrow="Things I shipped" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/50"
          >
            <div
              className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: "var(--gradient-cool)" }}
            />
            <div className="relative flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {p.tag}
                </p>
                <h3 className="text-display mt-4 text-3xl md:text-4xl">{p.name}</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">{p.line}</p>
              </div>
              <ArrowUpRight className="size-6 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </div>
            <div className="relative mt-10 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
              <span>{p.year}</span>
              <span className="tracking-[0.2em] uppercase">View case</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import serviceFlash from "@/assets/service-flash.jpg";
import serviceCommunity from "@/assets/service-community.jpg";
import serviceSankaracharya from "@/assets/service-sankaracharya.jpg";
import serviceManager from "@/assets/service-manager.jpg";
import serviceBdirection from "@/assets/service-bdirection.jpg";
import serviceWorkspace from "@/assets/service-workspace.jpg";

const awards = [
  {
    image: serviceFlash,
    title: "The Flash.in",
    desc: "A fast, modern digital platform delivering lightning-quick news, updates and content experiences.",
    tags: "Web • Content • Speed",
  },
  {
    image: serviceCommunity,
    title: "Sports & Cultural Community",
    desc: "A vibrant community platform bringing people together through sports events and cultural celebrations.",
    tags: "Community • Events • Culture",
  },
  {
    image: serviceSankaracharya,
    title: "Sree Sankaracharya",
    desc: "Digital presence and solutions for the educational institution — campus, courses and community.",
    tags: "Education • Institution • Web",
  },
  {
    image: serviceManager,
    title: "The Manager",
    desc: "A smart management dashboard for analytics, team coordination and data-driven decisions.",
    tags: "Dashboard • Analytics • SaaS",
  },
  {
    image: serviceBdirection,
    title: "B-Direction",
    desc: "Creative direction and production branding — cinematic storytelling for films and media.",
    tags: "Creative • Film • Branding",
  },
  {
    image: serviceWorkspace,
    title: "Workspace",
    desc: "A modern coworking space solution — booking, community and productivity under one roof.",
    tags: "Coworking • Booking • Space",
  },
];


export function Awards() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;
      const distance = Math.max(0, track.scrollWidth - window.innerWidth + 48);
      const total = wrap.offsetHeight - window.innerHeight;
      const progress = total > 0 ? -wrap.getBoundingClientRect().top / total : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      setX(-clamped * distance);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="awards" className="border-y border-border bg-secondary/25">
      <div ref={wrapRef} className="relative h-[240vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionTitle light="OUR " bold="SERVICES." eyebrow="" />
          </div>
          <div className="w-full pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2))]">
            <div
              ref={trackRef}
              className="flex gap-6 will-change-transform"
              style={{ transform: `translate3d(${x}px,0,0)` }}
            >
              {awards.map((a) => (
                <article
                  key={a.title}
                  className="group w-[78vw] shrink-0 overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 sm:w-[52vw] md:w-[22rem]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold leading-snug">{a.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                    <p className="mt-6 text-xs uppercase tracking-[0.18em] text-accent">{a.tags}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle light="About" bold="Me" />
      <div className="grid gap-10 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I have been working on building businesses and initiatives focused on skill development,
          technology, entrepreneurship, and creating opportunities for young people. I strongly
          believe that India’s greatest strength is its young population, and I want to contribute
          by helping young people develop practical skills, become employable, and pursue
          entrepreneurship.

          As a strategic-minded entrepreneur, my goal is to build organizations that create
          employment, encourage innovation, and contribute meaningfully to India’s economic and
          social development.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground"></p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          ["7+", "Years building"],
          ["40+", "Products shipped"],
          ["12", "Teams collaborated"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-2xl border border-border bg-card p-7">
            <p className="text-display text-5xl text-accent">{n}</p>
            <p className="mt-3 text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const roles = [
  {
    role: "Senior Web Developer",
    company: "Bhavana College",
    place: "Hyderabad Area, India",
    date: "May 2019 – Apr 2019",
    points: [
      "Developed and maintained brand new responsive websites for the organisation.",
      "Responsible for maintaining the organisation's database.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Innovations Labs",
    place: "Dubai, UAE",
    date: "2021 – 2023",
    points: [
      "Led the front-end architecture for a multi-tenant enterprise dashboard.",
      "Cut page load times by 48% through bundle and rendering optimisation.",
    ],
  },
  {
    role: "Creative Engineer",
    company: "Independent",
    place: "Remote",
    date: "2023 – Present",
    points: [
      "Design and build motion-heavy marketing sites for founders and studios.",
      "Ship end-to-end products from brand system to production deployment.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-secondary/25 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle light="Work" bold="Experience" eyebrow="Where I have been" />
        <div className="space-y-4">
          {roles.map((r) => (
            <div
              key={r.role}
              className="rounded-2xl border border-border bg-card p-7 md:flex md:gap-10"
            >
              <div className="md:w-1/3">
                <h3 className="text-display text-2xl md:text-3xl">{r.role}</h3>
                <p className="mt-2 text-sm text-accent">{r.company}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.place}</p>
                <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {r.date}
                </p>
              </div>
              <ul className="mt-6 space-y-3 md:mt-0 md:w-2/3">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const quotes = [
  {
    text: "I had the opportunity to work alongside him on a demanding platform rebuild. He owns problems end to end and the quality never slips.",
    name: "Priya Nair",
    role: "Product Lead, Innovations",
  },
  {
    text: "Rare combination of taste and engineering rigour. Our conversion rate moved 30% after the redesign he shipped.",
    name: "Omar Haddad",
    role: "Founder, Northwind",
  },
  {
    text: "He turned a vague brief into a design system the whole team now builds on. Fast, clear, unusually thoughtful.",
    name: "Sara Menon",
    role: "Head of Design, Atlas",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle light="Client" bold="Recommendations" eyebrow="What people say about me" />
      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <figure key={q.name} className="rounded-2xl border border-border bg-card p-7">
            <Quote className="size-5 text-accent" />
            <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {q.text}
            </blockquote>
            <figcaption className="mt-7 border-t border-border pt-5">
              <p className="text-sm font-semibold">{q.name}</p>
              <p className="text-xs text-muted-foreground">{q.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 opacity-40"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-display text-5xl md:text-7xl">
          <span className="text-muted-foreground/50">Let&apos;s Work </span>
          <span>Together</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Currently open to senior/lead full-stack roles in the UAE or India. Whether you have an
          enterprise project or a creative vision to bring to life, I&apos;d love to hear from you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@akshay.dev"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Mail className="size-4" /> Send a message
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            <Download className="size-4" /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
