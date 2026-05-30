import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a
          href="#top"
          aria-label="DP Associates home"
          className="transition-all duration-300 hover:opacity-90 active:scale-[0.98] inline-flex"
        >
          <Logo variant={scrolled ? "dark" : "light"} size="medium" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[12px] uppercase tracking-[0.2em] transition-colors ${
                scrolled ? "text-foreground/70 hover:text-accent" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden md:inline-flex items-center text-[12px] uppercase tracking-[0.2em] border px-5 py-2.5 transition-all ${
            scrolled
              ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
              : "border-white/70 text-white hover:bg-white hover:text-foreground"
          }`}
        >
          Get a Quote
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--ink)] text-white animate-in fade-in overflow-y-auto">
          <div className="container-x flex items-center justify-between py-4 md:py-5">
            <Logo variant="light" size="large" />
            <button aria-label="Close" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="container-x mt-10 sm:mt-12 flex flex-col gap-5 sm:gap-6 pb-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl sm:text-4xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 sm:mt-6 inline-flex w-fit border border-white px-6 py-3 text-xs uppercase tracking-[0.25em]"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
