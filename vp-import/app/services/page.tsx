import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Supplier sourcing, verification, quality inspection, logistics, customs documentation guidance, and OEM support for importing from China.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-gold-500/10 bg-navy-950 py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="manifest-label mb-4">Our Services</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Everything between your idea and your inventory.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/65">
            Every service below can stand alone or combine into a full,
            managed import — you decide how much of the process you want us
            to run.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <ServicesGrid />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px mx-auto max-w-5xl">
          <ContactCTA
            title="Not sure which services you need?"
            description="Describe your product on WhatsApp and we'll recommend exactly what to use — nothing more."
          />
        </div>
      </section>
    </>
  );
}
