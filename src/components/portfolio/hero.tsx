import { useEffect, useRef, useState } from "react";
import heroPortrait from "@/assets/hero-portrait.png";


const nav = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border bg-background/70 px-5 py-2.5 backdrop-blur-xl">
        <div className="hidden gap-6 md:flex">
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
        <span className="text-display text-sm md:hidden">BAVESH</span>
        <a
          href="#contact"
          className="rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-foreground"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}




export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    let duration = 0;
    let target = 0;
    let raf = 0;

    const onMeta = () => {
      duration = video.duration || 0;
      video.currentTime = 0;
    };
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();

    // Some browsers only decode frames after a play() gesture — a muted,
    // instantly-paused play primes the decoder so seeking paints frames.
    video.play().then(() => video.pause()).catch(() => {});

    const tick = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setProgress(p);
      if (duration > 0) {
        const t = p * (duration - 0.05);
        if (Math.abs(t - target) > 0.01) {
          target = t;
          if (!video.seeking) video.currentTime = t;
        }
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={wrapRef} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-screen items-end justify-center overflow-hidden bg-background">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain object-bottom"
        >
          <source src="/hero-scrub.webm" type="video/webm" />
          <source src="/hero-scrub.mp4" type="video/mp4" />

        </video>


        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
          style={{ background: "var(--gradient-glow)" }}
        />
        <noscript>
          <img
            src={heroPortrait}
            alt="Portrait of Bavesh, creative engineer"
            width={1024}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </noscript>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        <div
          className="relative z-10 w-full px-6 pb-16 text-center will-change-transform"
          style={{
            transform: `translateY(${progress * -8}vh) scale(${1 - progress * 0.12})`,
            opacity: 1 - Math.max(0, progress - 0.75) * 3.2,
          }}
        >
          <h1 className="text-display rise-in text-[19vw] leading-[0.8] md:text-[13rem]">
            BAVESH<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-[10px] tracking-[0.6em] uppercase text-muted-foreground md:text-xs">
            Creative Engineer
          </p>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
          Scroll
        </div>
      </div>
    </section>
  );
}


const marquee = [
  "BUSINESS EXPANSION",
  "STRATEGIC OPERATIONS",
  "CORPORATE TRAINING",
  "BRANDING & MARKETING",
  "DIGITAL TRANSFORMATION",
  "TECHNOLOGY SOLUTIONS\n",
  "BUSINESS ANALYTICS00a0",
  "INNOVATION & GROWTH STRATEGY",
  "INVESTMENT STRATEGY",
  "MARKET & INDUSTRY RESEARCH\n",
  "GROWTH CAPITAL ADVISORY\n",
];

export function Marquee() {
  return (
    <div id="services" className="overflow-hidden border-y border-border bg-secondary/30 py-5">
      <div className="marquee-track flex w-max gap-10">
        {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
          <span
            key={i}
            className="text-display flex items-center gap-10 text-xl text-muted-foreground/70"
          >
            {m}
            <span className="size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
