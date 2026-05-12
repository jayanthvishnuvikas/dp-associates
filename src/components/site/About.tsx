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
    <span ref={ref} className="font-display text-5xl md:text-6xl text-foreground">
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section-space-sm">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        <div className="lg:col-span-6 reveal img-zoom lg:pt-2">
          <img
            src={aboutImg}
            alt="Architectural model in studio"
            width={1280}
            height={1600}
            loading="lazy"
            className="w-full h-[440px] md:h-[520px] lg:h-[560px] object-cover"
          />
        </div>

        <div className="lg:col-span-6 lg:pt-2">
          <p className="eyebrow reveal">About the Studio</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance reveal max-w-xl">
            A studio of architects and engineers crafting spaces that last.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed reveal max-w-xl">
            DP Associates is a multidisciplinary practice rooted in modern design vision and
            engineering rigour. From private residences to commercial developments, we deliver work
            that is intentional, considered, and built to endure.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed reveal max-w-xl">
            Every project begins with listening — to the client, the site, and the brief — and ends
            with spaces our clients are proud to call their own.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 reveal max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter to={s.value} suffix={s.suffix} />
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
