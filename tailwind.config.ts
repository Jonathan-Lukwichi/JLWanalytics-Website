
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: "#000000",
        panel: "#0B0B10",
        panel2: "#0E0E14",

        // Borders & Dividers
        border: "rgba(255,255,255,0.06)",
        borderHover: "rgba(255,255,255,0.12)",

        // Text
        text: "#FFFFFF",
        muted: "#A7ADB5",
        subtle: "#6B7280",

        // Primary (Teal)
        primary: "#107FAE",
        primaryHover: "#0F7AA8",
        primaryLight: "rgba(16,127,174,0.15)",

        // Accent (Purple Gradients)
        purple1: "#200870",
        purple2: "#281080",
        purple3: "#100060",
        purpleGlow: "rgba(40,16,128,0.25)",

        // Status
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      borderRadius: {
        lg2: "22px",
      },
      boxShadow: {
        soft: "0 14px 40px rgba(0,0,0,0.65)",
        glow: "0 0 20px rgba(16,127,174,0.4)",
        glowPurple: "0 0 20px rgba(40,16,128,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
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
      },
    },
  },
  plugins: [],
} satisfies Config;
