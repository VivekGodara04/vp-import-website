"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Container, PackageCheck, Plane } from "lucide-react";
import GlowRoute from "./GlowRoute";
import AnimatedCounter from "./AnimatedCounter";
import StockImage from "./StockImage";
import { waLink } from "@/lib/constants";

const floatingIcons = [
  { Icon: Container, top: "18%", left: "8%", delay: 0 },
  { Icon: Plane, top: "62%", left: "12%", delay: 1.2 },
  { Icon: PackageCheck, top: "24%", left: "88%", delay: 0.6 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-24 pt-20 sm:pt-28">
      {/* Stock photo layer — add your own image at public/images/hero-port.jpg.
          Search "container port aerial" or "cargo ship" on unsplash.com or
          pexels.com (free to use) and save it at that path. */}
      <div className="pointer-events-none absolute inset-0">
        <StockImage
          src="/images/hero-port.jpg"
          alt=""
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/50 to-white" />
      </div>

      <GlowRoute />

      {floatingIcons.map(({ Icon, top, left, delay }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden h-11 w-11 items-center justify-center rounded-lg border border-gold-500/20 bg-navy-900/60 text-gold-400 backdrop-blur-sm md:flex"
          style={{ top, left }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={18} />
        </motion.div>
      ))}

      <div className="container-px relative mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="manifest-label mb-6 inline-block rounded-full stamp-border px-4 py-1.5"
        >
          Delhi · Shenzhen · Hong Kong
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ivory sm:text-6xl"
        >
          Import from China with{" "}
          <span className="text-gradient-gold">Confidence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/65 sm:text-lg"
        >
          We help Indian businesses source quality products from trusted
          Chinese manufacturers through supplier sourcing, quotation support,
          quality inspection, logistics coordination, customs documentation
          guidance, and delivery support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={waLink("Hi V&P Import, I'd like a free quote for my import requirement.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-rust-500 px-7 py-3.5 font-body text-sm font-semibold text-navy-950 transition-transform hover:scale-105 active:scale-95"
          >
            Get Free Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={waLink("Hi V&P Import, I have a question before I proceed.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-7 py-3.5 font-body text-sm font-semibold text-ivory transition-colors hover:border-gold-500 hover:text-gold-400"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="glass mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 rounded-2xl px-6 py-8 sm:grid-cols-4"
        >
          <AnimatedCounter value={300} suffix="+" label="Shipments Coordinated" />
          <AnimatedCounter value={120} suffix="+" label="Verified Suppliers" />
          <AnimatedCounter value={3} label="Regional Hubs" />
          <AnimatedCounter value={10} suffix="+" label="Industries Served" />
        </motion.div>
      </div>
    </section>
  );
}
