import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";
import p5 from "@/assets/project5.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    img: p1,
    name: "Maison Olivier",
    category: "Residential",
    location: "Bengaluru, IN",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    img: p4,
    name: "Cliffside Retreat",
    category: "Hospitality",
    location: "Coorg, IN",
    span: "lg:col-span-5",
  },
  {
    img: p2,
    name: "The Atrium House",
    category: "Interior",
    location: "Mumbai, IN",
    span: "lg:col-span-5",
  },
  {
    img: p3,
    name: "Crystal Tower",
    category: "Commercial",
    location: "Hyderabad, IN",
    span: "lg:col-span-7",
  },
  {
    img: p5,
    name: "Light Well",
    category: "Architecture",
    location: "Pune, IN",
    span: "lg:col-span-5",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <p className="eyebrow reveal">Featured Work</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl max-w-2xl text-balance reveal">
              A selection of recent projects.
            </h2>
          </div>
          <a
            href="#contact"
            className="reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors w-fit"
          >
            Request Portfolio <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:auto-rows-[280px]">
          {projects.map((p) => (
            <a
              key={p.name}
              href="#contact"
              className={`reveal img-zoom relative block group overflow-hidden ${p.span} h-[300px] sm:h-[340px] md:h-[360px] lg:h-auto rounded-2xl`}
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-white">
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  {p.category} — {p.location}
                </div>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <h3 className="font-display text-2xl md:text-3xl">{p.name}</h3>
                  <ArrowUpRight
                    size={22}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
