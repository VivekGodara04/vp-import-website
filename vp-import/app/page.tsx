import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import Warehousing from "@/components/Warehousing";
import IndustriesGrid from "@/components/IndustriesGrid";
import ContactCTA from "@/components/ContactCTA";
import StockImage from "@/components/StockImage";

export const metadata: Metadata = {
  title: "Import from China to India | Sourcing & Logistics Partner",
  description:
    "V&P Import helps Indian businesses source, inspect, and ship products from verified Chinese manufacturers — from first quote to final delivery.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-gold-500/10 bg-navy-900 py-24">
        <div className="container-px mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="manifest-label mb-4">About V&amp;P Import</p>
            <h2 className="font-display text-2xl font-semibold leading-snug text-ivory sm:text-3xl">
              We simplify importing from China — from the first supplier
              conversation to the day your shipment reaches your warehouse.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/60 sm:text-base">
              V&amp;P Sattava Pvt. Ltd. operates as your on-ground team in
              China, coordinating supplier sourcing, quotations, quality
              checks, logistics, warehousing, and delivery — so you can focus
              on running your business, not chasing suppliers.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-gold-300"
            >
              Learn more about us
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Add your own image at public/images/about-warehouse.jpg —
              search "warehouse logistics" or "shipping containers" on
              unsplash.com or pexels.com (free to use). */}
          <div className="glass overflow-hidden rounded-2xl">
            <StockImage
              src="/images/about-warehouse.jpg"
              alt="V&P Import warehousing and logistics operations"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end sourcing services"
            description="From finding the right factory to clearing customs at your border, every step is covered."
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-gold-300"
            >
              View all services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gold-500/10 bg-navy-900 py-24">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How It Works"
            title="A clear, tracked import process"
            description="Nine checkpoints, each visible to you, from requirement discussion to delivery."
          />
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why V&P Import"
            title="Why businesses choose us"
          />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="border-t border-gold-500/10 bg-navy-900 py-24">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Logistics Network"
            title="Warehousing across three hubs"
            description="Consolidation and short-term storage positioned exactly where your shipment needs it."
          />
          <div className="mt-14">
            <Warehousing />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Industries we source for"
          />
          <div className="mt-14">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px mx-auto max-w-5xl">
          <ContactCTA />
        </div>
      </section>
    </>
  );
}
