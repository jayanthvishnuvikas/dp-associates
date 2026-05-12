import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import { submitContactInquiry } from "@/lib/contact.functions";

export function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const sendInquiry = async () => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitContactInquiry({ data: new FormData(form) });
      setShowPopup(true);
      form.reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not submit your inquiry right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
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
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              void sendInquiry();
            }}
            className="bg-card p-7 md:p-10 border border-border"
          >
            <>
              <h3 className="font-display text-2xl">Project Inquiry</h3>
              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  className="md:col-span-2"
                />
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
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.22em] hover:bg-accent transition-colors disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              {submitError ? (
                <p className="mt-4 text-sm text-destructive">{submitError}</p>
              ) : null}
            </>
          </form>
        </div>
      </div>

      {showPopup ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4">
          <div className="w-full max-w-md border border-border bg-background p-6 md:p-8 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.45)]">
            <p className="eyebrow">Thank You</p>
            <h3 className="mt-5 font-display text-3xl">Your inquiry has been received.</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Thank you for contacting DP Associates. Our team will review your message and get
              back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="mt-6 inline-flex items-center justify-center border border-border px-5 py-2.5 text-xs uppercase tracking-[0.22em] hover:border-accent hover:text-accent transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
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
