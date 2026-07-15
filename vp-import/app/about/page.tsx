import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import Warehousing from "@/components/Warehousing";
import ContactCTA from "@/components/ContactCTA";
import StockImage from "@/components/StockImage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "V&P Sattava Pvt. Ltd. is a Delhi-based import partner coordinating sourcing, quality checks, and logistics between China and India.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-gold-500/10 bg-navy-950 py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="manifest-label mb-4">About V&amp;P Import</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Your team on the ground in China.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/65">
            V&amp;P Sattava Pvt. Ltd., operating as V&amp;P Import, was built
            to remove the guesswork from importing. We sit between Indian
            buyers and Chinese manufacturers, translating not just language
            but expectations — on pricing, quality, and timelines — so both
            sides can trust the deal in front of them.
          </p>

          {/* Add your own image at public/images/about-hero.jpg — search
              "factory manufacturing China" or "supply chain team" on
              unsplash.com or pexels.com (free to use). */}
          <div className="glass mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl">
            <StockImage
              src="/images/about-hero.jpg"
              alt="V&P Import sourcing and quality inspection team"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="manifest-label mb-3">What We Do</p>
            <h2 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
              A single point of accountability for your import
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ivory/60 sm:text-base">
              Most businesses trying to import from China alone run into the
              same three problems: unverified suppliers, unclear quality
              standards, and a logistics chain with no single owner. We built
              V&amp;P Import to solve exactly that.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60 sm:text-base">
              We coordinate supplier sourcing, quotations, quality checks,
              logistics, warehousing support, and delivery under one
              relationship — so instead of managing five vendors, you manage
              one conversation, with us, on WhatsApp.
            </p>
          </div>
          <div>
            <p className="manifest-label mb-3">Where We Operate</p>
            <h2 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
              Positioned where the goods move
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ivory/60 sm:text-base">
              Our sourcing team works out of Shenzhen, close to China's
              largest manufacturing clusters. Hong Kong serves as our trade
              and documentation gateway, and Delhi is home base for customs
              coordination and final-mile delivery to you.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60 sm:text-base">
              That footprint means we're never relying on a single supplier's
              word — we can verify, inspect, and follow up in person, at
              every stage of the shipment.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gold-500/10 bg-navy-900 py-24">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Commitment" title="What you can expect from us" />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Network"
            title="Three hubs, one supply chain"
          />
          <div className="mt-14">
            <Warehousing />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px mx-auto max-w-5xl">
          <ContactCTA
            title="Want to know if we're the right fit?"
            description="Send us your product and quantity on WhatsApp — we'll give you an honest answer, not a sales pitch."
          />
        </div>
      </section>
    </>
  );
}
