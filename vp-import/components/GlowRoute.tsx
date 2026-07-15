"use client";

import { motion } from "framer-motion";

/**
 * Lightweight SVG signature element: a glowing manifest route between
 * Delhi and Shenzhen/Hong Kong, echoing a shipping-lane map without the
 * weight of a full 3D globe. Particles drift along the dashed lane.
 */
export default function GlowRoute() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* faint grid, evokes a nautical chart */}
      <div className="absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

      <svg
        viewBox="0 0 1200 700"
        className="absolute inset-0 h-full w-full opacity-80"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9922F" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#C9922F" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D9591F" stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#C9922F" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C9922F" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* route path: Delhi (left) to Shenzhen/HK (right) */}
        <path
          id="tradeRoute"
          d="M 230 430 Q 550 200 940 260"
          fill="none"
          stroke="url(#routeGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          className="animate-route-dash"
        />

        {/* nodes */}
        {[
          { cx: 230, cy: 430, label: "DELHI" },
          { cx: 940, cy: 260, label: "SHENZHEN / HK" },
        ].map((n) => (
          <g key={n.label}>
            <circle cx={n.cx} cy={n.cy} r="26" fill="url(#nodeGlow)" />
            <circle cx={n.cx} cy={n.cy} r="4" fill="#16263A" />
            <circle cx={n.cx} cy={n.cy} r="4" fill="none" stroke="#C9922F" strokeWidth="1">
              <animate attributeName="r" values="4;16;4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* moving shipment marker along the route */}
        <circle r="4" fill="#D9591F">
          <animateMotion dur="4.5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#tradeRoute" />
          </animateMotion>
        </circle>
      </svg>

      {/* ambient particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gold-400/50"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
