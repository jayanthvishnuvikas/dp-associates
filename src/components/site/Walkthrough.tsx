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
    <section className="relative section-space bg-[var(--ink)] text-white overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 max-w-2xl lg:max-w-none">
            <p className="eyebrow text-white/60 reveal">Visual Experience</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-balance reveal">
              Step inside before a single brick is laid.
            </h2>
            <p className="mt-6 sm:mt-8 text-white/65 leading-relaxed max-w-md reveal">
              Cinematic 3D walkthroughs, interior visualization and immersive VR previews — so you
              experience your space fully, before construction begins.
            </p>
            <a
              href="#contact"
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 border border-white/60 px-6 sm:px-7 py-4 text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] hover:bg-white hover:text-foreground transition-colors reveal w-full sm:w-auto justify-center"
            >
              Request a Walkthrough
            </a>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative group img-zoom overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
              <img
                src={reelFrames[frame]}
                alt="Project visual reel preview"
                loading="lazy"
                className="w-full h-[320px] sm:h-[380px] md:h-[480px] lg:h-[560px] object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent group-hover:from-black/45 transition-colors" />
              <div className="absolute left-4 top-4 sm:left-5 sm:top-5 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 sm:px-4 py-2 text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/80 backdrop-blur-sm border border-white/10">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Project Reel
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex items-end justify-between gap-4">
                <div className="max-w-sm rounded-2xl bg-black/35 px-3 sm:px-4 py-3 backdrop-blur-md border border-white/10">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                    Visual Experience
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-white/85">
                    A moving preview of project imagery, styled like a short concept video.
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2 rounded-full bg-black/35 px-4 py-3 backdrop-blur-md border border-white/10">
                  {reelFrames.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Preview frame ${idx + 1}`}
                      onClick={() => setFrame(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx === frame ? "w-8 bg-white" : "w-3 bg-white/35 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button
                aria-label="Play project reel"
                onClick={() => setFrame((current) => (current + 1) % reelFrames.length)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="relative h-24 w-24 rounded-full border border-white/60 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 bg-white/5 backdrop-blur-sm">
                  <span className="absolute inset-0 rounded-full border border-white/30 animate-ping" />
                  <Play size={26} className="text-white translate-x-[2px]" fill="currentColor" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
