import { useState } from "react";
import {
  Compass,
  Building2,
  Ruler,
  Sofa,
  FileCheck2,
  Map,
  Calculator,
  Glasses,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Architectural Planning",
    desc: "Master plans and concept development tailored to site, brief, and brand.",
  },
  {
    icon: Building2,
    title: "Elevation Designing",
    desc: "Distinctive façades that balance proportion, material, and light.",
  },
  {
    icon: Ruler,
    title: "Structural Design",
    desc: "Engineered systems built for resilience, safety, and longevity.",
  },
  {
    icon: Sofa,
    title: "Interior Designing",
    desc: "Considered interiors that pair function with elevated material palettes.",
  },
  {
    icon: FileCheck2,
    title: "Building Plan Approvals",
    desc: "End-to-end liaison and documentation for statutory approvals.",
  },
  {
    icon: Map,
    title: "Land Survey & Layouts",
    desc: "Accurate site surveys and layout planning for development clarity.",
  },
  {
    icon: Calculator,
    title: "Estimation & Valuation",
    desc: "Transparent costing, BOQs, and valuation reports for every stage.",
  },
  {
    icon: Glasses,
    title: "3D Walkthrough & VR",
    desc: "Cinematic visualization that lets you experience spaces before they exist.",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="section-space bg-secondary/50">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <p className="eyebrow reveal">What We Do</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl max-w-2xl text-balance reveal">
              A complete spectrum of design &amp; engineering services.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground reveal">
            From the first sketch to the final handover, our integrated team handles every
            discipline of the build under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 overflow-hidden rounded-none sm:rounded-xl">
          {services.map((s, i) => (
            <div
              key={s.title}
              onClick={() => setActiveService(activeService === i ? null : i)}
              className={`reveal group relative cursor-pointer p-8 md:p-10 border transition-all transform ${
                activeService === i
                  ? "bg-accent text-white scale-[1.01] sm:scale-105 border-accent shadow-[0_30px_70px_-20px_rgba(204,171,124,0.4)]"
                  : "bg-card/90 border-border/80 hover:bg-background hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(18,18,18,0.18)]"
              }`}
              style={{
                transitionDelay: `${(i % 4) * 60}ms`,
              }}
            >
              <span
                className={`absolute inset-x-0 bottom-0 h-px transition-all duration-500 ${
                  activeService === i
                    ? "scale-x-0"
                    : "bg-accent scale-x-0 group-hover:scale-x-100 origin-left"
                }`}
              />
              <s.icon
                size={28}
                strokeWidth={1.25}
                className={`transition-colors ${
                  activeService === i ? "text-white" : "text-accent"
                }`}
              />
              <h3 className="mt-6 sm:mt-8 font-display text-xl sm:text-2xl">{s.title}</h3>
              <p
                className={`mt-4 text-sm leading-relaxed transition-colors ${
                  activeService === i ? "text-white/90" : "text-muted-foreground"
                }`}
              >
                {s.desc}
              </p>
              <div
                className={`mt-8 text-[10px] uppercase tracking-[0.3em] transition-colors ${
                  activeService === i
                    ? "text-white/80"
                    : "text-foreground/50 group-hover:text-accent"
                }`}
              >
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
