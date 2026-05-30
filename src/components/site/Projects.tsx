import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    name: "Godavari Riverfront Villa",
    category: "Residential Construction",
    location: "Rajahmundry, East Godavari",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    name: "Venkateswara Commercial Complex",
    category: "Commercial Development",
    location: "Kakinada, East Godavari",
    span: "lg:col-span-5",
  },
  {
    img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800",
    name: "Siri Luxury Duplexes",
    category: "Residential Construction",
    location: "Bhimavaram, West Godavari",
    span: "lg:col-span-5",
  },
  {
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800",
    name: "Elite Interior & Architecture",
    category: "Residential Architecture",
    location: "Tanuku, West Godavari",
    span: "lg:col-span-7",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    name: "Godavari Vista Apartments",
    category: "Apartment Structural Framing",
    location: "Tadepalligudem, West Godavari",
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
