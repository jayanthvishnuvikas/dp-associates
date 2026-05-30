import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about.jpg";

const stats = [
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Consultation Support" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span
      ref={ref}
      className="font-display text-5xl md:text-6xl font-medium tracking-tight text-foreground leading-none inline-block"
    >
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section-space bg-bone/45 relative overflow-hidden border-b border-border/40">
      {/* Background ambient gold/light element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[100px] pointer-events-none" />

      <div className="container-x relative z-10">
        {/* Main Split Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Beautiful Image Showcase */}
          <div className="lg:col-span-5 reveal img-zoom">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/80 shadow-[0_24px_50px_-25px_rgba(0,0,0,0.12)]">
              <img
                src={aboutImg}
                alt="Architectural model in studio"
                width={1280}
                height={1600}
                loading="lazy"
                className="w-full h-[380px] sm:h-[460px] md:h-[500px] lg:h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Narrative text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="eyebrow reveal">About the Studio</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-foreground reveal text-balance">
              A studio of architects and engineers crafting spaces that last.
            </h2>
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-muted-foreground text-base sm:text-[17px] leading-relaxed reveal">
              <p>
                DP Associates is a multidisciplinary practice rooted in modern design vision and
                engineering rigour. From private residences to commercial developments, we deliver work
                that is intentional, considered, and built to endure.
              </p>
              <p>
                Every project begins with listening — to the client, the site, and the brief — and ends
                with spaces our clients are proud to call their own.
              </p>
            </div>
          </div>
        </div>

        {/* Separator / Divider */}
        <div className="mt-16 sm:mt-20 border-t border-border/80 reveal" />

        {/* Bottom: Professional Stats Row (4 Columns) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 reveal">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="inline-flex items-baseline transition-transform duration-300 group-hover:-translate-y-1">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
