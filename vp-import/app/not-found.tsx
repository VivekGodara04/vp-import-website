import Link from "next/link";
import { Compass } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-navy-950 py-24">
      <div className="container-px mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/30 text-gold-400">
          <Compass size={28} />
        </div>
        <p className="manifest-label mb-3">Error 404</p>
        <h1 className="font-display text-3xl font-semibold text-ivory sm:text-4xl">
          This shipment took a wrong turn.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ivory/60 sm:text-base">
          The page you're looking for doesn't exist or may have moved. Let's
          get you back on route.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-gold-500 to-rust-500 px-7 py-3.5 font-body text-sm font-semibold text-navy-950 transition-transform hover:scale-105"
          >
            Back to Home
          </Link>
          <WhatsAppButton label="Ask Us Directly" />
        </div>
      </div>
    </section>
  );
}
