"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function ContactCTA({
  title = "Ready to source your next shipment?",
  description = "Tell us what you need on WhatsApp and we'll get supplier options moving within days.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />
      <h2 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ivory/60 sm:text-base">
        {description}
      </p>
      <div className="mt-8 flex justify-center">
        <WhatsAppButton />
      </div>
    </motion.div>
  );
}
