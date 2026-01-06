
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        // Backgrounds - Deep Navy
        bg: "#050B14",
        "navy-deep": "#0A1628",
        navy: "#0F2744",
        "navy-light": "#1A3A5C",
        panel: "#0A1628",
        panel2: "#0F2744",

        // Primary - Refined Gold
        gold: "#D4A853",
        "gold-light": "#E8C373",
        "gold-dark": "#B8923F",
        "gold-glow": "rgba(212,168,83,0.2)",

        // Accent - Warm Orange
        accent: "#FF6B35",
        "accent-light": "#FF8C5A",
        "accent-glow": "rgba(255,107,53,0.2)",

        // Accent - Vibrant Cyan (BerithInfinity inspired)
        cyan: "#0EA5E9",
        "cyan-light": "#38BDF8",
        "cyan-dark": "#0284C7",
        "cyan-glow": "rgba(14,165,233,0.2)",

        // Borders & Dividers
        border: "rgba(212,168,83,0.15)",
        borderHover: "rgba(212,168,83,0.3)",
        "border-light": "rgba(255,255,255,0.08)",

        // Text
        text: "#FFFFFF",
        "text-light": "#E8EDF2",
        muted: "#8BA4BE",
        subtle: "#5A7A99",

        // Legacy support (keeping for transition)
        primary: "#D4A853",
        primaryHover: "#E8C373",
        primaryLight: "rgba(212,168,83,0.15)",

        // Status
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      borderRadius: {
        lg2: "22px",
        xl2: "28px",
      },
      boxShadow: {
        soft: "0 14px 40px rgba(0,0,0,0.65)",
        glow: "0 0 20px rgba(212,168,83,0.3)",
        "glow-gold": "0 0 30px rgba(212,168,83,0.4)",
        "glow-accent": "0 0 20px rgba(255,107,53,0.3)",
        "glow-cyan": "0 0 30px rgba(14,165,233,0.4)",
        card: "0 4px 20px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.5)",
        "bento": "0 8px 32px rgba(0,0,0,0.3)",
        "bento-hover": "0 16px 48px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,168,83,0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(212,168,83,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
