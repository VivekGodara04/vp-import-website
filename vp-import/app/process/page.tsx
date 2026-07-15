import type { Metadata } from "next";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Import Process",
  description:
    "A nine-step, fully tracked import process — from requirement discussion and supplier search to shipping, customs, and delivery.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-gold-500/10 bg-navy-950 py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="manifest-label mb-4">Import Process</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Nine checkpoints. Full visibility.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/65">
            Every shipment follows the same tracked sequence, so you always
            know exactly which stage your order is at.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <ProcessTimeline />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px mx-auto max-w-5xl">
          <ContactCTA
            title="Ready to start step one?"
            description="Message us your requirement on WhatsApp and we'll open the file today."
          />
        </div>
      </section>
    </>
  );
}
