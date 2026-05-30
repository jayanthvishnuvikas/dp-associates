import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import walkthroughImg from "@/assets/walkthrough.jpg";

const reelFrames = [
  walkthroughImg,
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
  "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
];

export function Walkthrough() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((current) => (current + 1) % reelFrames.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="walkthrough" className="relative section-space bg-bone/45 overflow-hidden border-b border-border/40">
      {/* Background ambient gold/light element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[300px] h-[300px] rounded-full bg-accent/4 blur-[100px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 max-w-2xl lg:max-w-none">
            <p className="eyebrow reveal">Visual Experience</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-foreground text-balance reveal">
              Step inside before a single brick is laid.
            </h2>
            <p className="mt-6 sm:mt-8 text-muted-foreground leading-relaxed max-w-md reveal text-base sm:text-[17px]">
              Cinematic 3D walkthroughs, interior visualization and immersive VR previews — so you
              experience your space fully, before construction begins.
            </p>
            <a
              href="#contact"
              className="mt-8 sm:mt-10 inline-flex items-center justify-center gap-3 border border-border bg-card text-foreground px-6 sm:px-7 py-4 text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-soft hover:shadow-elegant transition-all duration-300 reveal w-full sm:w-auto"
            >
              Request a Walkthrough
            </a>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative group img-zoom overflow-hidden rounded-[2rem] border border-border/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]">
              <img
                src={reelFrames[frame]}
                alt="Project visual reel preview"
                loading="lazy"
                className="w-full h-[320px] sm:h-[380px] md:h-[480px] lg:h-[560px] object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-colors pointer-events-none" />
              
              {/* Floating tag */}
              <div className="absolute left-4 top-4 sm:left-6 sm:top-6 inline-flex items-center gap-2 rounded-full bg-card/85 px-4 py-2.5 text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/80 backdrop-blur-md border border-border/80 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Project Reel
              </div>

              {/* Bottom bar inside image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4">
                <div className="max-w-sm rounded-[1.2rem] bg-card/85 px-5 py-4 backdrop-blur-md border border-border/80 shadow-elegant">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-accent font-semibold">
                    Visual Experience
                  </div>
                  <div className="mt-2 text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                    A moving preview of project imagery, styled like a short concept video.
                  </div>
                </div>

                {/* Dot Indicators */}
                <div className="hidden sm:flex items-center gap-2.5 rounded-full bg-card/80 border border-border/60 px-4.5 py-3 backdrop-blur-md shadow-soft">
                  {reelFrames.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Preview frame ${idx + 1}`}
                      onClick={() => setFrame(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                        idx === frame ? "w-8 bg-accent" : "w-3 bg-foreground/20 hover:bg-foreground/45"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Play Button */}
              <button
                aria-label="Play project reel"
                onClick={() => setFrame((current) => (current + 1) % reelFrames.length)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <span className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-md flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-[0_12px_36px_-12px_rgba(204,171,124,0.4)]">
                  <span className="absolute inset-0 rounded-full border border-accent/30 animate-ping opacity-60" />
                  <Play size={24} className="text-accent translate-x-[2px]" fill="currentColor" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
