import heroImg from "@/assets/hero.jpg";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid grid-cols-1 grid-rows-1 min-h-[100svh] md:min-h-[680px] w-full overflow-hidden"
    >
      {/* Background (Grid Row 1 / Col 1) */}
      <div className="col-start-1 row-start-1 h-full w-full relative">
        <img
          src={heroImg}
          alt="Modern luxury villa at twilight"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,240,210,0.18),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.78))]" />
      </div>

      {/* Content (Grid Row 1 / Col 1) */}
      <div className="col-start-1 row-start-1 relative z-10 container-x flex min-h-[92svh] md:min-h-[620px] flex-col justify-end pt-20 sm:pt-24 md:pt-20 pb-16 sm:pb-18 text-white">
        <h1 className="font-display text-[38px] leading-[1.06] sm:text-5xl md:text-7xl lg:text-[88px] max-w-5xl text-balance reveal in">
          Designing Timeless Spaces
          <br className="hidden sm:block" /> With{" "}
          <em className="italic text-white/90">Precision</em>.
        </h1>
        <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/75 leading-relaxed reveal in">
          We create modern architectural, structural, and interior solutions that blend innovation,
          aesthetics, and engineering excellence.
        </p>
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 reveal in max-w-md sm:max-w-none">
          <a
            href="#projects"
            className="group inline-flex justify-center items-center gap-3 bg-accent text-accent-foreground px-6 sm:px-7 py-4 text-xs uppercase tracking-[0.25em] shadow-[0_18px_45px_-24px_rgba(191,156,94,0.85)] hover:bg-white hover:text-foreground transition-colors w-full sm:w-auto"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center gap-3 border border-white/45 text-white px-6 sm:px-7 py-4 text-xs uppercase tracking-[0.25em] backdrop-blur-sm hover:bg-white hover:text-foreground transition-colors w-full sm:w-auto"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator overlay */}
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 text-[10px] uppercase tracking-[0.3em] pointer-events-auto"
      >
        Scroll
        <ArrowDown size={16} className="animate-scroll-pulse" />
      </a>
    </section>
  );
}
