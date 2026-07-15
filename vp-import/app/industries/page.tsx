import type { Metadata } from "next";
import IndustriesGrid from "@/components/IndustriesGrid";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "V&P Import sources for electronics, industrial equipment, lighting, machinery, furniture, packaging, construction materials, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-gold-500/10 bg-navy-950 py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="manifest-label mb-4">Industries</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Sourcing expertise across ten sectors.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/65">
            Different products need different supplier networks and
            inspection standards — here's where our experience runs deepest.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <IndustriesGrid />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px mx-auto max-w-5xl">
          <ContactCTA
            title="Don't see your industry listed?"
            description="Message us anyway — if it's manufactured in China, there's a good chance we can source it."
          />
        </div>
      </section>
    </>
  );
}
