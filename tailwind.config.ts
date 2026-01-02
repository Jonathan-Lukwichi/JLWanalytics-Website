
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'data-void-navy': '#0B0F19',
        'electric-blue': '#3B82F6',
        'neon-purple': '#8B5CF6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'blob-spin': 'blob-spin 15s linear infinite',
      },
      keyframes: {
        'blob-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px 0 rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px 0 rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
