import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

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
    title: "Sree Sankaracharya Institute of Advanced Skills",
    desc: "Digital presence and solutions for the educational institution — campus, courses and community.",
    tags: "Education • Institution • Web",
  },
  {
    image: serviceManager,
    title: "The Manager LLP",
    desc: "A smart management dashboard for analytics, team coordination and data-driven decisions.",
    tags: "Dashboard • Analytics • SaaS",
  },
  {
    image: serviceBdirection,
    title: "B-Direction group of company",
    desc: "Asset management and investment holding company — leading business strategy, investment operations and growth initiatives focused on performance and returns.",
    tags: "Investment • Asset Management • Growth",
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
    role: "Founder & Chairman",
    company: "Sports & Cultural Organization",
    place: "",
    date: "2026 – Present",
    points: [
      "Founded and lead a pan-India sports and cultural organization focused on youth development and participation.",
      "Oversee the planning and execution of sports, cultural activities, competitions, and youth-focused events.",
      "Work toward creating opportunities for young people through sports, culture, community engagement, and nationwide programs.",
    ],
  },
{
    role: "Chairman",
    company: "The Flash Marketing",
    place: "",
    date: "2025 – Present",
    points: [
      "Provided strategic leadership and direction for marketing and business-development activities.",
      "Oversaw organizational growth, strategic decision-making, and development of marketing-focused business initiatives.",
      "Guided the team in building and expanding marketing, sales, branding, and client-growth opportunities.",
    ],
  },
{
    role: "Founder & CEO",
    company: "Manager",
    place: "",
    date: "2024 – Present",
    points: [
      "Founded and lead an AI-powered technology and automation company focused on modern business solutions.",
      "Oversee product strategy, business development, organizational growth, and development of AI-based automation solutions.",
      "Focus on helping businesses automate operations, improve efficiency, reduce operational costs, and manage business processes through technology.",
    ],
  },
{
    role: "CEO & Director",
    company: "NextGen Innovators",
    place: "",
    date: "2023 – Present",
    points: [
      "Led a group focused on investing in and developing educational institutions to provide modern, industry-oriented education.",
      "Directed strategic planning, institutional development, business operations, and organizational expansion.",
      "Focused on creating modern education opportunities for youth and developing scalable education ventures.",
    ],
  },
{
    role: "Director",
    company: "Sree Sankaracharya Institute of Advanced Skills",
    place: "",
    date: "2023 – Present",
    points: [
      "Led institutional expansion and franchise development initiatives, including plans for expanding the institution across India.",
      "Worked on modernizing administration, institutional systems, and operational processes.",
      "Contributed to strategic institutional development with a focus on modern education and scalable operations.",
    ],
  },
{
    role: "CEO & Managing Director",
    company: "B Direction",
    place: "",
    date: "October 2022 – Present",
    points: [
      "Led the overall management and strategic direction of an asset management and investment holding company, with a focus on investment performance and returns.",
      "Directed business strategy, investment-related operations, organizational development, and management activities.",
      "Oversaw growth initiatives focused on asset management, investment opportunities, and return on investment.",
    ],
  },
{
    role: "Managing Partner",
    company: "Workspace",
    place: "",
    date: "2020 – Present",
    points: [
      "Led business consulting and growth initiatives across marketing, sales, financial management, accounting, and auditing.",
      "Worked directly with businesses to identify growth opportunities and improve financial and commercial performance.",
      "Managed a team delivering integrated marketing, sales, and business-growth solutions to client organizations.",
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
        </div>
      </div>
    </section>
  );
}
