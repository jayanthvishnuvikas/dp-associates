const steps = [
  { n: "01", t: "Consultation", d: "Understanding ambition, brief, and budget." },
  { n: "02", t: "Site Analysis", d: "Surveying context, climate, and constraints." },
  { n: "03", t: "Planning & Design", d: "Concept, schematic and design development." },
  { n: "04", t: "Engineering & Approvals", d: "Documentation, MEP, structural and statutory." },
  { n: "05", t: "Execution Support", d: "On-site coordination, supervision, quality control." },
  { n: "06", t: "Final Delivery", d: "Snagging, handover and post-occupancy support." },
];

export function Process() {
  return (
    <section id="process" className="section-space relative overflow-hidden">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow reveal">How We Work</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-balance reveal">
            A considered process, from sketch to key handover.
          </h2>
        </div>

        <div className="mt-14 md:mt-16 relative">
          {/* Enhanced gradient connecting line */}
          <div className="absolute left-0 right-0 top-[34px] h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden md:block rounded-full blur-sm" />
          <div className="absolute left-0 right-0 top-[34px] h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent hidden md:block opacity-70" />

          <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-6 relative">
            {steps.map((s, index) => (
              <li
                key={s.n}
                className="reveal group cursor-pointer"
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div className="flex md:block items-center gap-4 sm:gap-5 transition-all duration-700 ease-out group-hover:-translate-y-0.5">
                  {/* Soft hover circle */}
                  <div className="relative flex-shrink-0">
                    {/* Outer glow */}
                    <div className="absolute inset-0 rounded-full bg-accent/15 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -m-3" />

                    {/* Subtle halo */}
                    <div className="absolute inset-0 rounded-full bg-accent/8 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 -m-2" />

                    {/* Main circle */}
                    <div className="relative h-[18px] w-[18px] rounded-full bg-background border-2 border-accent/80 transition-all duration-700 group-hover:scale-115 group-hover:border-accent group-hover:shadow-[0_0_16px_rgba(204,171,124,0.22)]" />

                    {/* Inner glow */}
                    <div className="absolute inset-1 rounded-full bg-accent/12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
                  </div>

                  {/* Content with color animations */}
                  <div className="md:mt-12 transition-all duration-700 ease-out group-hover:-translate-y-1">
                    {/* Step number with restrained accent */}
                    <div className="text-[10px] tracking-[0.3em] font-semibold transition-all duration-700">
                      <span className="inline-block text-accent/65 group-hover:text-accent/90 transition-colors duration-500">
                        STEP {s.n}
                      </span>
                    </div>

                    {/* Title with subtle emphasis */}
                    <h3 className="font-display text-base sm:text-lg md:text-xl mt-2 sm:mt-3 text-foreground transition-all duration-700 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:font-semibold">
                      {s.t}
                    </h3>

                    {/* Description with smooth color fade */}
                    <p className="mt-2 sm:mt-3 text-xs md:text-sm text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-all duration-700 opacity-75 group-hover:opacity-100 group-hover:translate-y-0.5 max-w-[18rem] md:max-w-none">
                      {s.d}
                    </p>

                    {/* Accent underline on hover */}
                    <div className="mt-4 w-0 h-px bg-gradient-to-r from-accent/70 to-accent/20 rounded-full group-hover:w-10 transition-all duration-700" />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
