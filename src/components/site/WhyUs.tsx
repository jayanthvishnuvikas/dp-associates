import { Gem, Layers, ShieldCheck, Clock4, Sparkles, Users } from "lucide-react";

const items = [
  {
    icon: Gem,
    title: "Precision Engineering",
    desc: "Detail-led documentation and structural rigour at every scale.",
  },
  {
    icon: Sparkles,
    title: "Modern Design Vision",
    desc: "Contemporary aesthetics rooted in context and material honesty.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    desc: "Concept, approvals, execution support — under one roof.",
  },
  {
    icon: Clock4,
    title: "Timely Delivery",
    desc: "Disciplined timelines respected from sketch to handover.",
  },
  {
    icon: ShieldCheck,
    title: "Structural Excellence",
    desc: "Code-compliant, resilient designs built to outlast trends.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    desc: "Bespoke attention — every brief is treated as singular.",
  },
];

export function WhyUs() {
  return (
    <section className="section-space bg-[var(--ink)] text-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow text-white/55 reveal">Our Promise</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-balance reveal">
            Why clients trust <em className="italic">DP Associates</em>.
          </h2>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {items.map((it, index) => (
            <div
              key={it.title}
              className="reveal bg-gradient-to-br from-white/8 to-white/3 border border-accent/20 hover:border-accent/50 p-6 sm:p-8 md:p-10 group cursor-pointer transition-all duration-500 rounded-lg hover:bg-gradient-to-br hover:from-white/12 hover:to-white/6 hover:shadow-[0_20px_60px_-20px_rgba(204,171,124,0.3)] hover:-translate-y-2 animate-float-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative inline-block">
                <it.icon
                  size={32}
                  strokeWidth={1.2}
                  className="text-accent transition-all duration-500 group-hover:text-white group-hover:animate-icon-pulse"
                />
                <div className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
              <h3 className="mt-6 sm:mt-8 font-display text-xl md:text-2xl transition-colors duration-500 group-hover:text-accent">
                {it.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/75">
                {it.desc}
              </p>
              <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-accent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
