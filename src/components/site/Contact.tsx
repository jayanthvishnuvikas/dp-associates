import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleRedirect = (type: "whatsapp" | "email") => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const formattedMessage =
      `Hello DP Associates,\n\n` +
      `I would like to make a project inquiry.\n\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Email: ${email}\n` +
      `• Service Needed: ${service}\n` +
      `• Message: ${message || "N/A"}`;

    if (type === "whatsapp") {
      const whatsappNumber = "919160467846";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } else {
      const toEmail = "dpassociates7846@gmail.com";
      const mailtoUrl = `mailto:${toEmail}?subject=Project Inquiry - ${encodeURIComponent(name)}&body=${encodeURIComponent(formattedMessage)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section id="contact" className="section-space-sm">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow reveal">Get in Touch</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-balance reveal">
            Let&apos;s design something extraordinary.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md reveal">
            Tell us about your site, your brief, or simply your aspiration. We respond within one
            business day.
          </p>

          <div className="mt-10 space-y-5 reveal">
            {[
              {
                icon: MapPin,
                label: "Studio",
                value:
                  "D.No 1-88, Panchayat Street, Near Nookalamma Temple, Suryaraopeta Road, Chintaluru — 533232",
              },
              { icon: Phone, label: "Call", value: "+91 91604 67846" },
              { icon: Mail, label: "Email", value: "dpassociates7846@gmail.com" },
              { icon: Clock, label: "Hours", value: "Mon — Sat · 09:00 to 19:00" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-5">
                <span className="mt-1 h-10 w-10 inline-flex items-center justify-center border border-border text-accent">
                  <c.icon size={16} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 text-sm md:text-base">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 reveal">
            <iframe
              title="DP Associates location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.9846489076463!2d81.89977009999999!3d16.7938462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a32e3c3c3c3c3c3%3A0xChIJQ8AHpS2VNzoRiqk2yhHhj_M!2sDP%20Associates!5e0!3m2!1sen!2sin!4v1715425200000"
              className="w-full h-56 border border-border rounded-lg"
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              handleRedirect("whatsapp");
            }}
            className="bg-card p-7 md:p-10 border border-border"
          >
            <>
              <h3 className="font-display text-2xl">Project Inquiry</h3>
              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required className="md:col-span-2" />
                <div className="md:col-span-2">
                  <Label>Service Needed</Label>
                  <select
                    name="service"
                    className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent"
                  >
                    <option>Architectural Planning</option>
                    <option>Interior Designing</option>
                    <option>Structural Design</option>
                    <option>3D Walkthrough</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <Label>Your Message</Label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent resize-none"
                    placeholder="Tell us about your project…"
                  />
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleRedirect("whatsapp")}
                  className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-[#1ebd54] transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.27 1.471h.005c5.733 0 10.397-4.661 10.4-10.399.001-2.779-1.077-5.39-3.037-7.35-1.96-1.96-4.574-3.037-7.355-3.038C6.15 3.038 1.487 7.7 1.485 13.438c-.001 1.946.515 3.846 1.498 5.485l-.993 3.626 3.714-.974zm12.381-6.1c-.244-.122-1.44-.71-1.662-.792-.223-.082-.385-.122-.547.123-.162.244-.63.792-.771.953-.142.162-.284.183-.528.061-.244-.122-.962-.355-1.833-1.134-.678-.605-1.136-1.353-1.27-1.577-.134-.223-.014-.344.108-.465.11-.11.244-.284.365-.426.122-.142.162-.244.244-.406.082-.162.041-.305-.02-.426-.062-.122-.547-1.32-.75-1.81-.197-.474-.398-.41-.547-.417-.142-.007-.305-.007-.468-.007-.162 0-.427.061-.65.305-.224.244-.854.834-.854 2.031 0 1.198.871 2.353.993 2.516.122.162 1.713 2.616 4.15 3.668.58.25 1.033.4 1.385.512.583.185 1.113.159 1.533.096.467-.069 1.44-.588 1.643-1.157.203-.569.203-1.057.142-1.157-.061-.101-.223-.162-.468-.284z" />
                  </svg>
                  Submit via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => handleRedirect("email")}
                  className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-accent hover:text-white transition-colors cursor-pointer"
                >
                  <Mail size={14} className="transition-transform group-hover:translate-x-0.5" />
                  Submit via Email
                </button>
              </div>
            </>
          </form>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; className?: string }) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        {...props}
        className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}
