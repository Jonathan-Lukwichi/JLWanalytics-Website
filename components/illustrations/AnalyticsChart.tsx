"use client";

import { motion } from "framer-motion";

interface AnalyticsChartProps {
  variant?: "gold" | "cyan" | "mixed";
}

export function AnalyticsChart({ variant = "mixed" }: AnalyticsChartProps) {
  const goldColor = "#D4A853";
  const cyanColor = "#0EA5E9";

  const bars = [
    { height: 45, color: variant === "cyan" ? cyanColor : goldColor },
    { height: 70, color: variant === "gold" ? goldColor : cyanColor },
    { height: 55, color: variant === "cyan" ? cyanColor : goldColor },
    { height: 85, color: variant === "gold" ? goldColor : cyanColor },
    { height: 65, color: variant === "cyan" ? cyanColor : goldColor },
    { height: 90, color: variant === "gold" ? goldColor : cyanColor },
  ];

  return (
    <div className="relative w-full h-full min-h-[200px]">
      <svg
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="chartGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E8C373" />
            <stop offset="100%" stopColor="#D4A853" />
          </linearGradient>
          <linearGradient id="chartCyan" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A853" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#D4A853" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          <line x1="40" y1="30" x2="280" y2="30" />
          <line x1="40" y1="70" x2="280" y2="70" />
          <line x1="40" y1="110" x2="280" y2="110" />
          <line x1="40" y1="150" x2="280" y2="150" />
        </g>

        {/* Y-axis */}
        <line x1="40" y1="30" x2="40" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* X-axis */}
        <line x1="40" y1="170" x2="280" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* Bar chart */}
        {bars.map((bar, i) => (
          <motion.rect
            key={i}
            x={55 + i * 38}
            y={170 - bar.height}
            width="25"
            height={bar.height}
            fill={bar.color === goldColor ? "url(#chartGold)" : "url(#chartCyan)"}
            rx="4"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            style={{ transformOrigin: "bottom" }}
            opacity="0.8"
          />
        ))}

        {/* Trend line */}
        <motion.path
          d="M 55 140 Q 100 100 140 120 T 220 70 T 280 50"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Data points on line */}
        {[
          { x: 55, y: 140 },
          { x: 120, y: 115 },
          { x: 180, y: 85 },
          { x: 240, y: 60 },
          { x: 280, y: 50 },
        ].map((point, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#0A1628"
              stroke={i % 2 === 0 ? goldColor : cyanColor}
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1 + i * 0.2 }}
            />
          </motion.g>
        ))}

        {/* Animated pulse on latest point */}
        <motion.circle
          cx="280"
          cy="50"
          r="6"
          fill="transparent"
          stroke={cyanColor}
          strokeWidth="2"
          animate={{ r: [6, 15, 6], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
