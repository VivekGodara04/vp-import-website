import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Repurposed as the light neutral/surface scale (was dark navy)
        navy: {
          950: "#FFFFFF", // page background
          900: "#F4F7FB", // alternating section background
          800: "#EAF0F8", // card/border tint
          700: "#D8E3F0",
          600: "#C3D3E6",
        },
        // Darkened for legibility on light backgrounds (was light gold on dark navy)
        gold: {
          400: "#B7791F",
          500: "#C9922F",
          600: "#A9772E",
          700: "#8C611D",
        },
        rust: {
          400: "#E17F4C",
          500: "#D9591F",
          600: "#B84717",
        },
        // Repurposed as the dark ink text color (was light text on dark bg)
        ivory: "#16263A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(22,38,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,38,58,0.05) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "route-dash": "dash 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        dash: {
          to: { strokeDashoffset: "-200" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
