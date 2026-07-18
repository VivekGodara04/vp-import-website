import type { Metadata } from "next";
import { Phone, Facebook, Instagram, MapPin, Mail } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach V&P Import on WhatsApp, phone, Facebook, or Instagram. Based in Delhi, sourcing from Shenzhen and Hong Kong.",
};

const CHANNELS = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: SITE.phoneDisplay,
    href: waLink(),
  },
  {
    icon: Phone,
    label: "Alternate Contact",
    value: SITE.phoneDisplaySecondary,
    href: `tel:+${SITE.phoneDisplaySecondary.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "General Enquiries",
    value: SITE.emailInfo,
    href: `mailto:${SITE.emailInfo}`,
  },
  {
    icon: Mail,
    label: "Customer Support",
    value: SITE.emailSupport,
    href: `mailto:${SITE.emailSupport}`,
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "V&P Import",
    href: SITE.facebook,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@navsheoran_official",
    href: SITE.instagram,
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Delhi, India",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-gold-500/10 bg-navy-950 py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="manifest-label mb-4">Contact</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Let's talk about your shipment.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/65">
            We don't run an online store — every enquiry is a real
            conversation. The fastest way to reach us is WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-5xl">
          <div className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
            />
            <p className="manifest-label mb-3">Fastest Response</p>
            <h2 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
              Message us directly on WhatsApp
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ivory/60 sm:text-base">
              Share your product, target quantity, and timeline — we'll
              reply with next steps, usually within the same day.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton label="Chat on WhatsApp Now" />
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              const content = (
                <>
                  <Icon size={20} className="text-gold-400" strokeWidth={1.75} />
                  <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ivory/45">
                    {c.label}
                  </p>
                  <p className="mt-1 break-words font-display text-base font-medium text-ivory">
                    {c.value}
                  </p>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 transition-colors hover:border-gold-500/40"
                >
                  {content}
                </a>
              ) : (
                <div key={c.label} className="glass rounded-2xl p-6">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
