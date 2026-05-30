import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Compass,
  Building2,
  Ruler,
  Sofa,
  FileCheck2,
  Map,
  Calculator,
  Glasses,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Architectural Planning",
    desc: "Master plans and concept development tailored to site, brief, and brand.",
    longDesc:
      "We design bespoke luxury properties, villas, and commercial spaces. Our architectural planning team conducts thorough microclimate analysis, solar studies, and contextual research to create blueprints that balance beautiful design with functionality and regulatory requirements.",
    image: "https://images.unsplash.com/photo-1503387762-592dedb8c260?q=80&w=1200",
    deliverables: [
      "Conceptual Layouts & Site Plan",
      "Detailed 2D Floor Plans & Sections",
      "Zoning & Bylaws Compliance Audit",
      "Material & Spatial Allocations",
    ],
    slug: "Architectural Planning",
  },
  {
    icon: Building2,
    title: "Elevation Designing",
    desc: "Distinctive façades that balance proportion, material, and light.",
    longDesc:
      "Your building's façade is its identity. We craft dramatic, elegant, and modern structural elevations combining custom metal louvers, premium stone claddings, exposed concrete, and smart lighting, creating a dynamic visual presence by day and night.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    deliverables: [
      "3D Exterior Renderings (Day/Night)",
      "Façade Material & Textures Palette",
      "Elevation Working Drawings",
      "Exterior Lighting Schemes",
    ],
    slug: "Architectural Planning",
  },
  {
    icon: Ruler,
    title: "Structural Design",
    desc: "Engineered systems built for resilience, safety, and longevity.",
    longDesc:
      "Our structural engineering division calculates and ensures the safety, load distribution, and wind/earthquake resilience of complex forms. We optimize steel reinforcement and concrete volume to deliver robust structures without inflating budgets.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    deliverables: [
      "RCC Framing & Foundation Design",
      "Structural Steel & Beam Details",
      "Slab Reinforcement Schedules",
      "Structural Stability Certificates",
    ],
    slug: "Structural Design",
  },
  {
    icon: Sofa,
    title: "Interior Designing",
    desc: "Considered interiors that pair function with elevated material palettes.",
    longDesc:
      "We design immersive interior experiences. From custom modular kitchens and premium walk-in wardrobes to bespoke false ceiling lighting and curated Italian marble selections, we elevate every corner to reflect your signature lifestyle.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    deliverables: [
      "3D Realistic Interior Renders",
      "False Ceiling & Lighting Layouts",
      "Custom Furniture & Millwork Detail",
      "Flooring & Wall Cladding Specs",
    ],
    slug: "Interior Designing",
  },
  {
    icon: FileCheck2,
    title: "Building Plan Approvals",
    desc: "End-to-end liaison and documentation for statutory approvals.",
    longDesc:
      "Navigating local municipal corporations, urban development authorities, and panchayats can be complex. We manage complete documentation, drafting in accordance with strict municipal bylaws, and handle end-to-end liaison for hassle-free sanctions.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200",
    deliverables: [
      "Municipal Sanction Drawings",
      "NOC Liaisons (Fire, Environment)",
      "Panchayat submissions",
      "Deviation Analysis Reports",
    ],
    slug: "Consultation",
  },
  {
    icon: Map,
    title: "Land Survey & Layouts",
    desc: "Accurate site surveys and layout planning for development clarity.",
    longDesc:
      "We provide high-precision land surveying utilizing modern digital levels and GPS systems. Get perfect mapping of contours, boundary coordinates, and surrounding elements to optimize site engineering and prevent layout surprises.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    deliverables: [
      "Topographic Contour Mapping",
      "Boundary GPS Coordinate Maps",
      "Plotting & Subdivision Schemes",
      "Road & Infrastructure Layouts",
    ],
    slug: "Architectural Planning",
  },
  {
    icon: Calculator,
    title: "Estimation & Valuation",
    desc: "Transparent costing, BOQs, and valuation reports for every stage.",
    longDesc:
      "We ensure total financial transparency. We prepare highly detailed Bill of Quantities (BOQ), materials lists, and labor estimates so your project remains 100% on budget. We also provide certified property valuation reports for banking and legal needs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    deliverables: [
      "Comprehensive BOQs & Costing",
      "Material Purchase Scheduling",
      "Certified Valuation Certificates",
      "Cost Optimization Proposals",
    ],
    slug: "Consultation",
  },
  {
    icon: Glasses,
    title: "3D Walkthrough & VR",
    desc: "Cinematic visualization that lets you experience spaces before they exist.",
    longDesc:
      "Walk through your dream home before a single brick is laid. We create high-definition cinematic walkthrough videos, 360-degree virtual tour panoramas, and immersive VR configurations so you can inspect textures, scale, and lighting in real-time.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    deliverables: [
      "Cinematic Full HD Walkthrough MP4",
      "Interactive 360 Panoramas",
      "Oculus VR Immersive Configs",
      "Photo-realistic Static Renderings",
    ],
    slug: "3D Walkthrough",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 35,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [emblaApi, autoplayKey]);

  const handleTabClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setAutoplayKey((k) => k + 1); // Reset autoplay timer
  };

  const handlePrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    setAutoplayKey((k) => k + 1);
  };

  const handleNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    setAutoplayKey((k) => k + 1);
  };

  const handleInquire = (serviceName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      const selectElement = document.querySelector<HTMLSelectElement>("select[name='service']");
      if (selectElement) {
        const options = Array.from(selectElement.options);
        const match = options.find(
          (opt) =>
            opt.value.toLowerCase().includes(serviceName.toLowerCase()) ||
            serviceName.toLowerCase().includes(opt.value.toLowerCase()),
        );
        if (match) {
          selectElement.value = match.value;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    }, 800);
  };

  return (
    <section id="services" className="section-space bg-secondary/50 relative overflow-hidden">
      <div className="container-x">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <p className="eyebrow reveal">What We Do</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl max-w-2xl text-balance reveal">
              A complete spectrum of design &amp; engineering services.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground reveal">
            From the first sketch to the final handover, our integrated team handles every
            discipline of the build under one roof.
          </p>
        </div>

        {/* Premium Split Interactive Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
          {/* Interactive Navigation Sidebar (Desktop Tabs) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-2 reveal hidden lg:flex">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 mb-4 font-semibold">
              EXPLORE OUR EXPERTISE
            </div>
            {services.map((s, idx) => (
              <button
                key={s.title}
                onClick={() => handleTabClick(idx)}
                className={`group flex items-center justify-between text-left p-4 rounded-xl border transition-all duration-300 ${
                  selectedIndex === idx
                    ? "bg-accent/8 border-accent text-foreground pl-6 shadow-soft"
                    : "border-transparent bg-transparent hover:bg-card/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      selectedIndex === idx
                        ? "text-accent font-semibold"
                        : "text-muted-foreground/50"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-medium tracking-wide">{s.title}</span>
                </div>
                <s.icon
                  size={16}
                  className={`transition-all duration-300 ${
                    selectedIndex === idx
                      ? "text-accent scale-110"
                      : "text-muted-foreground/40 group-hover:text-foreground/70"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Interactive Navigation Horizontal Menu (Mobile/Tablet Tabs) */}
          <div className="lg:hidden flex overflow-x-auto gap-3 pb-4 scrollbar-none reveal -mx-4 px-4 sm:mx-0 sm:px-0">
            {services.map((s, idx) => (
              <button
                key={s.title}
                onClick={() => handleTabClick(idx)}
                className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-full border text-xs font-semibold tracking-wider uppercase transition-all ${
                  selectedIndex === idx
                    ? "bg-accent border-accent text-accent-foreground shadow-[0_10px_20px_-8px_rgba(204,171,124,0.4)]"
                    : "bg-card border-border/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>0{idx + 1}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Slider Content Block */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full reveal">
            <div className="relative border border-border/60 bg-card rounded-3xl overflow-hidden shadow-elegant min-h-[580px] md:min-h-[500px] flex flex-col">
              {/* Embla Viewport */}
              <div ref={emblaRef} className="overflow-hidden flex-grow flex">
                <div className="flex w-full">
                  {services.map((s, idx) => (
                    <div
                      key={idx}
                      className="min-w-0 shrink-0 grow-0 basis-full flex flex-col md:flex-row h-full"
                    >
                      {/* Image showcase side */}
                      <div className="w-full md:w-[48%] lg:w-[50%] relative overflow-hidden h-[260px] md:h-auto group">
                        <img
                          src={s.image}
                          alt={s.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                            selectedIndex === idx ? "scale-105" : "scale-100"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/85 via-black/35 to-transparent md:from-black/80 md:via-black/25 md:to-transparent opacity-90" />

                        {/* Overlay service indicator on top of image */}
                        <div className="absolute top-6 left-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/90 backdrop-blur-md border border-white/15">
                          <s.icon size={12} className="text-accent" />
                          <span>Expertise</span>
                        </div>
                      </div>

                      {/* Content details side */}
                      <div className="w-full md:w-[52%] lg:w-[50%] p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-card text-foreground">
                        <div>
                          {/* Heading */}
                          <div className="flex items-center justify-between border-b border-border/60 pb-5">
                            <span className="font-mono text-sm text-accent uppercase tracking-[0.2em] font-semibold">
                              0{idx + 1} / 0{services.length}
                            </span>
                            <s.icon size={26} strokeWidth={1.25} className="text-accent" />
                          </div>

                          {/* Title & Long Description */}
                          <h3 className="font-display text-2xl md:text-3xl mt-6 leading-tight text-foreground">
                            {s.title}
                          </h3>
                          <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {s.longDesc}
                          </p>

                          {/* Deliverables bullet list */}
                          <div className="text-[10px] uppercase tracking-[0.25em] text-accent mt-6 font-semibold">
                            Key Deliverables
                          </div>
                          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-muted-foreground">
                            {s.deliverables.map((deliv, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-2">
                                <span className="h-4 w-4 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                  <Check size={10} strokeWidth={3} />
                                </span>
                                <span className="truncate">{deliv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA button */}
                        <button
                          onClick={() => handleInquire(s.slug)}
                          className="group mt-8 inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition-colors w-full sm:w-auto shadow-soft cursor-pointer"
                        >
                          Inquire about this
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Autoplay Loading Bar */}
              <div className="h-1 bg-border/40 relative">
                <div
                  key={`${selectedIndex}-${autoplayKey}`}
                  className="absolute inset-y-0 left-0 bg-accent animate-slide-progress"
                />
              </div>
            </div>

            {/* Slider Navigation Arrows (Bottom bar) */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                Drag to swipe through services or select from tabs
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous service"
                  className="h-12 w-12 rounded-full border border-border/80 hover:border-accent hover:text-accent bg-card/60 flex items-center justify-center transition-colors shadow-soft cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next service"
                  className="h-12 w-12 rounded-full border border-border/80 hover:border-accent hover:text-accent bg-card/60 flex items-center justify-center transition-colors shadow-soft cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
