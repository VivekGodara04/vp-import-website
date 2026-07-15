"use client";

import { motion } from "framer-motion";
import { Warehouse } from "lucide-react";
import { WAREHOUSING_HUBS } from "@/lib/constants";

export default function Warehousing() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {WAREHOUSING_HUBS.map((hub, i) => (
        <motion.div
          key={hub.city}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.1 }}
          className="glass relative overflow-hidden rounded-2xl p-7"
        >
          <p className="manifest-label">Hub 0{i + 1}</p>
          <div className="mt-4 flex items-center gap-3">
            <Warehouse size={20} className="text-gold-400" />
            <h3 className="font-display text-xl font-semibold text-ivory">
              {hub.city}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ivory/60">
            {hub.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
