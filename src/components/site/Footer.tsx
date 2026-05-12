import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/dpassociatess?igsh=MTE0N2MzOTVjOXhx",
      label: "Instagram",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[var(--ink)] text-white/82">
      <div className="container-x py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-5">
          <Logo variant="light" size="large" />
          <p className="mt-6 text-sm leading-relaxed text-white/62 max-w-sm">
            A studio of architects and engineers designing modern, enduring spaces — from private
            residences to commercial landmarks.
          </p>
          <div className="mt-8 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="h-10 w-10 inline-flex items-center justify-center border border-white/12 bg-white/3 hover:border-accent hover:text-accent transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Quick Links"
          links={["About", "Services", "Projects", "Process", "Contact"]}
        />
        <FooterCol
          title="Services"
          links={[
            "Architectural Planning",
            "Interior Design",
            "Structural Design",
            "3D Walkthrough",
            "Approvals",
          ]}
        />
        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/50">Reach</h4>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>
              <span className="block text-white/50 text-[10px] uppercase tracking-[0.25em]">
                K.D.V.S Prasad
              </span>
              <a href="tel:+919160467846" className="block hover:text-accent transition-colors">
                +91 91604 67846
              </a>
            </li>
            <li>
              <span className="block text-white/50 text-[10px] uppercase tracking-[0.25em]">
                K. Nagaraju
              </span>
              <a href="tel:8096682466" className="block hover:text-accent transition-colors">
                8096682466
              </a>
            </li>
            <li>
              <a
                href="mailto:dpassociates7846@gmail.com"
                className="block hover:text-accent transition-colors"
              >
                dpassociates7846@gmail.com
              </a>
            </li>
            <li>Chintaluru, AP</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} DP Associates. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Architectural Designers &amp; Engineers</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/50">{title}</h4>
      <ul className="mt-6 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-white/70 hover:text-accent transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
