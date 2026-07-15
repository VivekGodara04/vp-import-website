"use client";

import { motion } from "framer-motion";
import {
  Search, ShieldCheck, FileText, PackageSearch, ScanEye, Wallet,
  Factory, Warehouse, Ship, ClipboardList, Truck, Tag,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS = [
  Search, ShieldCheck, FileText, PackageSearch, ScanEye, Wallet,
  Factory, Warehouse, Ship, ClipboardList, Truck, Tag,
];

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[0_0_40px_-12px_rgba(212,175,106,0.35)]"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400 transition-colors group-hover:bg-gold-500/20">
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-lg font-semibold text-ivory">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ivory/60">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
