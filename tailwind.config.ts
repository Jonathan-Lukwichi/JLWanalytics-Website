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
        // ═══════════════════════════════════════════════
        // FLUORESCENT COLOR PALETTE
        // ═══════════════════════════════════════════════

        // Deep Backgrounds
        bg: {
          DEFAULT: "#030712",
          primary: "#030712",
          secondary: "#0a0f1a",
          tertiary: "#111827",
          card: "#0f172a",
          elevated: "#1e293b",
        },

        // Navy tones
        "navy-deep": "#0A1628",
        navy: "#0F2744",
        "navy-light": "#1A3A5C",
        panel: "#0A1628",
        panel2: "#0F2744",

        // Fluorescent Gold (Primary)
        gold: {
          DEFAULT: "#ffaa00",
          400: "#fbbf24",
          500: "#f59e0b",
          glow: "#ffaa00",
          neon: "#ffcc00",
          electric: "#ffe566",
          light: "#E8C373",
          dark: "#B8923F",
        },

        // Fluorescent Cyan (Secondary)
        cyan: {
          DEFAULT: "#00ffff",
          400: "#22d3ee",
          500: "#06b6d4",
          glow: "#00ffff",
          neon: "#00e5ff",
          light: "#38BDF8",
          dark: "#0284C7",
        },

        // Fluorescent Purple (Accent)
        purple: {
          DEFAULT: "#a855f7",
          glow: "#a855f7",
          neon: "#c084fc",
          electric: "#e879f9",
        },

        // Accent - Warm Orange
        accent: "#FF6B35",
        "accent-light": "#FF8C5A",
        "accent-glow": "rgba(255,107,53,0.2)",

        // Borders & Dividers
        border: "rgba(255,170,0,0.15)",
        borderHover: "rgba(255,170,0,0.3)",
        "border-light": "rgba(255,255,255,0.08)",

        // Text
        text: "#FFFFFF",
        "text-light": "#E8EDF2",
        muted: "#8BA4BE",
        subtle: "#5A7A99",

        // Legacy support
        primary: "#ffaa00",
        primaryHover: "#ffcc00",
        primaryLight: "rgba(255,170,0,0.15)",

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
        // Gold Glows
        glow: "0 0 20px rgba(255,170,0,0.3)",
        "glow-gold": "0 0 30px rgba(255,170,0,0.4)",
        "glow-gold-sm": "0 0 10px rgba(255,170,0,0.4)",
        "glow-gold-md": "0 0 20px rgba(255,170,0,0.5), 0 0 40px rgba(255,170,0,0.3)",
        "glow-gold-lg": "0 0 20px rgba(255,170,0,0.5), 0 0 40px rgba(255,170,0,0.3), 0 0 60px rgba(255,170,0,0.2)",
        // Cyan Glows
        "glow-cyan": "0 0 30px rgba(0,255,255,0.4)",
        "glow-cyan-md": "0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)",
        // Purple Glows
        "glow-purple": "0 0 30px rgba(168,85,247,0.4)",
        "glow-purple-md": "0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.3)",
        // Card shadows
        "glow-accent": "0 0 20px rgba(255,107,53,0.3)",
        card: "0 4px 20px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.5)",
        bento: "0 8px 32px rgba(0,0,0,0.3)",
        "bento-hover": "0 16px 48px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "gradient-shift": "gradientShift 3s ease infinite",
        flicker: "flicker 4s infinite",
        "border-rotate": "borderRotate 4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,170,0,0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(255,170,0,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255, 170, 0, 0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 170, 0, 0.6), 0 0 40px rgba(255, 170, 0, 0.4)" },
        },
        shimmer: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
            opacity: "1",
          },
          "20%, 24%, 55%": {
            opacity: "0.8",
          },
        },
        borderRotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
