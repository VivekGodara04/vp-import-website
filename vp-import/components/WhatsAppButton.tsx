"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { waLink } from "@/lib/constants";

export default function WhatsAppButton({
  floating = false,
  message,
  label,
  className = "",
}: {
  floating?: boolean;
  message?: string;
  label?: string;
  className?: string;
}) {
  if (floating) {
    return (
      <motion.a
        href={waLink(message ?? "Hi V&P Import, I have a sourcing question.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)]"
      >
        <MessageCircle size={26} fill="white" className="text-[#25D366]" />
      </motion.a>
    );
  }

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-rust-500 px-7 py-3.5 font-body text-sm font-semibold text-navy-950 transition-transform hover:scale-105 active:scale-95 ${className}`}
    >
      <MessageCircle size={18} />
      {label ?? "Chat on WhatsApp"}
    </a>
  );
}
