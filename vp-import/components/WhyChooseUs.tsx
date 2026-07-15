"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, MessagesSquare, BadgePercent, BadgeCheck, Globe2, Users, Zap,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const ICONS = [ShieldCheck, MessagesSquare, BadgePercent, BadgeCheck, Globe2, Users, Zap];

export default function WhyChooseUs() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {WHY_CHOOSE_US.map((item, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-6"
          >
            <Icon size={22} className="text-gold-400" strokeWidth={1.75} />
            <h3 className="mt-4 font-display text-base font-semibold text-ivory">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ivory/60">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
