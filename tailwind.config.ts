import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#3B82F6",
          bright: "#5B9BFF",
          dim: "#1E3A6E",
          glow: "#3B82F633",
        },
        canvas: {
          DEFAULT: "#0A0B0D",
          raised: "#111318",
          panel: "#15171D",
          border: "#23262E",
        },
        ink: {
          DEFAULT: "#F5F6F8",
          muted: "#9AA0AC",
          faint: "#5C6270",
        },
        signal: {
          up: "#34D399",
          down: "#F87171",
          warn: "#FBBF24",
        },
      },
      borderRadius: {
        card: "10px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-gelasio)", "Gelasio", "Georgia", "serif"],
      },
      fontSize: {
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, #23262E 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "16px 16px",
        "dot-lg": "24px 24px",
      },
      boxShadow: {
        panel: "0 1px 0 0 #23262E inset, 0 0 0 1px #23262E",
        glow: "0 0 40px -8px #3B82F655",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
