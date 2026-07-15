"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ship } from "lucide-react";
import { NAV_LINKS, waLink } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-xl border-b border-gold-500/10 shadow-[0_1px_0_0_rgba(212,175,106,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-gold-500 to-rust-500 text-navy-950">
            <Ship size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ivory">
            V&amp;P <span className="text-gold-500">Import</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm tracking-wide transition-colors ${
                  active ? "text-gold-400" : "text-ivory/75 hover:text-ivory"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-gold-500"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <a
            href={waLink("Hi V&P Import, I'd like to request a quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-gold-500 to-rust-500 px-5 py-2.5 font-body text-sm font-semibold text-navy-950 transition-transform hover:scale-105 active:scale-95"
          >
            Get Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ivory lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gold-500/10 bg-navy-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px mx-auto flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-3 font-body text-sm ${
                    pathname === link.href
                      ? "bg-gold-500/10 text-gold-400"
                      : "text-ivory/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={waLink("Hi V&P Import, I'd like to request a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-gradient-to-r from-gold-500 to-rust-500 px-5 py-3 text-center font-body text-sm font-semibold text-navy-950"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
