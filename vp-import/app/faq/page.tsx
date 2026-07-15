import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about sourcing, sampling, supplier verification, customs clearance, and OEM branding with V&P Import.",
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-gold-500/10 bg-navy-950 py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="manifest-label mb-4">FAQ</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Questions, answered plainly.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto">
          <FAQAccordion />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px mx-auto max-w-5xl">
          <ContactCTA
            title="Still have a question?"
            description="Skip the form — message us directly on WhatsApp and get a real answer."
          />
        </div>
      </section>
    </>
  );
}
