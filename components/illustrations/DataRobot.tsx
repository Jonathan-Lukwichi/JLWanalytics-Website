"use client";

import { motion } from "framer-motion";

interface DataRobotProps {
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "cyan";
}

export function DataRobot({ size = "md", variant = "gold" }: DataRobotProps) {
  const sizeMap = { sm: 120, md: 200, lg: 300 };
  const dimensions = sizeMap[size];

  const primaryColor = variant === "gold" ? "#D4A853" : "#0EA5E9";
  const secondaryColor = variant === "gold" ? "#E8C373" : "#38BDF8";
  const darkColor = variant === "gold" ? "#B8923F" : "#0284C7";

  return (
    <motion.div
      className="relative"
      style={{ width: dimensions, height: dimensions }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={`robotBody-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={secondaryColor} />
            <stop offset="100%" stopColor={primaryColor} />
          </linearGradient>
          <linearGradient id={`robotFace-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A3A5C" />
            <stop offset="100%" stopColor="#0F2744" />
          </linearGradient>
          <filter id="robotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Antenna */}
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 45px" }}
        >
          <line x1="100" y1="45" x2="100" y2="25" stroke={primaryColor} strokeWidth="4" strokeLinecap="round" />
          <motion.circle
            cx="100"
            cy="20"
            r="8"
            fill={primaryColor}
            filter="url(#robotGlow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Head */}
        <rect x="55" y="45" width="90" height="75" rx="15" fill={`url(#robotBody-${variant})`} />

        {/* Face screen */}
        <rect x="65" y="55" width="70" height="55" rx="10" fill={`url(#robotFace-${variant})`} />

        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        >
          <circle cx="82" cy="80" r="10" fill={primaryColor} />
          <circle cx="118" cy="80" r="10" fill={primaryColor} />
          <circle cx="85" cy="77" r="4" fill="white" opacity="0.8" />
          <circle cx="121" cy="77" r="4" fill="white" opacity="0.8" />
        </motion.g>

        {/* Mouth - smile */}
        <motion.path
          d="M 85 95 Q 100 105 115 95"
          stroke={primaryColor}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          animate={{ d: ["M 85 95 Q 100 105 115 95", "M 85 97 Q 100 102 115 97", "M 85 95 Q 100 105 115 95"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Body */}
        <rect x="65" y="125" width="70" height="50" rx="10" fill={`url(#robotBody-${variant})`} />

        {/* Chest panel */}
        <rect x="80" y="135" width="40" height="30" rx="5" fill={`url(#robotFace-${variant})`} />

        {/* Chest lights */}
        <motion.circle
          cx="92"
          cy="150"
          r="5"
          fill={primaryColor}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="108"
          cy="150"
          r="5"
          fill={variant === "gold" ? "#0EA5E9" : "#D4A853"}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Arms */}
        <motion.g
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "55px 140px" }}
        >
          <rect x="35" y="130" width="25" height="12" rx="6" fill={darkColor} />
          <circle cx="35" cy="136" r="8" fill={primaryColor} />
        </motion.g>

        <motion.g
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "145px 140px" }}
        >
          <rect x="140" y="130" width="25" height="12" rx="6" fill={darkColor} />
          <circle cx="165" cy="136" r="8" fill={primaryColor} />
        </motion.g>

        {/* Base/legs */}
        <rect x="75" y="175" width="50" height="15" rx="5" fill={darkColor} />
        <rect x="80" y="185" width="15" height="10" rx="3" fill={primaryColor} />
        <rect x="105" y="185" width="15" height="10" rx="3" fill={primaryColor} />
      </svg>
    </motion.div>
  );
}
