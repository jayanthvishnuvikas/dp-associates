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
    <section id="why-us" className="section-space bg-bone/35 relative overflow-hidden border-b border-border/40">
      {/* Premium ambient glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[100px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <p className="eyebrow reveal">Our Promise</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground text-balance reveal">
            Why clients trust <em className="italic font-medium text-accent">DP Associates</em>.
          </h2>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((it, index) => (
            <div
              key={it.title}
              className="reveal bg-card border border-border/70 hover:border-accent/40 p-8 sm:p-10 group cursor-pointer transition-all duration-500 rounded-[1.8rem] shadow-soft hover:shadow-elegant hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/50 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                <it.icon
                  size={26}
                  strokeWidth={1.3}
                  className="transition-transform duration-500 group-hover:rotate-6"
                />
              </div>
              <h3 className="mt-6 sm:mt-8 font-display text-xl md:text-2xl text-foreground transition-colors duration-500 group-hover:text-accent">
                {it.title}
              </h3>
              <p className="mt-4 text-[14px] sm:text-base leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80">
                {it.desc}
              </p>
              <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-accent via-accent to-transparent opacity-30 group-hover:opacity-100 group-hover:w-16 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
