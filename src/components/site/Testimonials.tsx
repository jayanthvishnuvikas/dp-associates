import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    quote:
      "DP Associates designed our home in Kakinada with thoughtful planning, clean detailing, and a calm sense of space. The team stayed responsive at every stage.",
    name: "Suresh Kumar",
    role: "Kakinada · East Godavari",
  },
  {
    quote:
      "For our project in Rajamahendravaram, they balanced a premium design language with practical family needs. The result feels elegant and well resolved.",
    name: "Ananya Devi",
    role: "Rajamahendravaram · East Godavari",
  },
  {
    quote:
      "Our home in Amalapuram was handled with real attention to structure, proportion, and finish. The experience felt professional and dependable throughout.",
    name: "Krishna Prasad",
    role: "Amalapuram · East Godavari",
  },
  {
    quote:
      "In Samalkot, the team gave us a home that feels modern yet comfortable for everyday living. They listened carefully and turned the brief into something refined.",
    name: "Madhavi Latha",
    role: "Samalkot · East Godavari",
  },
  {
    quote:
      "Our Pithapuram project moved clearly from consultation to handover. The studio brought strong design sense, steady communication, and dependable execution.",
    name: "Venkata Rao",
    role: "Pithapuram · East Godavari",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, []);
  const it = items[i];
  return (
    <section className="section-space bg-secondary/40">
      <div className="container-x">
        <p className="eyebrow text-center justify-center flex reveal">Client Voices</p>
        <div className="mt-10 md:mt-12 max-w-4xl mx-auto text-center reveal px-1 sm:px-0">
          <Quote size={40} strokeWidth={1} className="mx-auto text-accent" />
          <blockquote
            key={i}
            className="mt-8 font-display text-xl sm:text-2xl md:text-4xl leading-snug text-balance animate-in fade-in duration-700"
          >
            “{it.quote}”
          </blockquote>
          <div className="mt-10 text-sm">
            <div className="font-medium">{it.name}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {it.role}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              aria-label="Previous"
              onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
              className="h-10 w-10 inline-flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors shrink-0"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2 flex-wrap justify-center">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-px w-10 transition-all ${
                    idx === i ? "bg-accent h-[2px]" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setI((p) => (p + 1) % items.length)}
              className="h-10 w-10 inline-flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors shrink-0"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
