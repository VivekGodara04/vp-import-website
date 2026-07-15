"use client";

import { motion } from "framer-motion";
import {
  Cpu, Cog, Zap, Lightbulb, Wrench, Sofa, Package, Building2, Tractor, ShoppingBag,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

const ICONS = [Cpu, Cog, Zap, Lightbulb, Wrench, Sofa, Package, Building2, Tractor, ShoppingBag];

export default function IndustriesGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {INDUSTRIES.map((industry, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <motion.div
            key={industry}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass flex flex-col items-center gap-3 rounded-xl px-4 py-7 text-center"
          >
            <Icon size={22} className="text-gold-400" strokeWidth={1.75} />
            <span className="text-sm font-medium text-ivory/80">{industry}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
