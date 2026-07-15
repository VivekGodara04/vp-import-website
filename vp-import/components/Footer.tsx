import Link from "next/link";
import { Facebook, Instagram, Ship, Phone } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE, waLink } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-500/10 bg-navy-900">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-gold-500 to-rust-500 text-navy-950">
              <Ship size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold text-ivory">
              V&amp;P <span className="text-gold-500">Import</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
            V&amp;P Sattava Pvt. Ltd. connects Indian businesses with verified
            Chinese manufacturers — coordinating sourcing, quality inspection,
            logistics, and customs documentation from factory to your door.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/20 text-ivory/70 transition-colors hover:border-gold-500 hover:text-gold-400"
            >
              <Facebook size={16} />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/20 text-ivory/70 transition-colors hover:border-gold-500 hover:text-gold-400"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="manifest-label mb-4">Quick Links</p>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ivory/60 transition-colors hover:text-gold-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="manifest-label mb-4">Services</p>
          <ul className="space-y-2.5">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title} className="text-sm text-ivory/60">
                {s.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-500/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-ivory/40">
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-ivory/50 hover:text-gold-400"
          >
            <Phone size={13} />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
