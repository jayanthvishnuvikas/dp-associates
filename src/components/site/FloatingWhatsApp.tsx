import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919160467846"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-accent text-accent-foreground inline-flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(61,90,128,0.6)] hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
      <MessageCircle size={22} className="relative" />
    </a>
  );
}
