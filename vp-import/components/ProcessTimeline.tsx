"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        aria-hidden
        className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent sm:block"
      />
      <ol className="space-y-4">
        {PROCESS_STEPS.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass relative flex gap-5 rounded-2xl p-5 sm:p-6"
          >
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-navy-900 font-mono text-sm text-gold-400">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-ivory sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ivory/60">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
