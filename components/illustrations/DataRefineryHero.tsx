"use client";

import { motion } from "framer-motion";

export function DataRefineryHero() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Gold gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C373" />
            <stop offset="100%" stopColor="#D4A853" />
          </linearGradient>

          {/* Cyan gradient */}
          <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>

          {/* Navy gradient */}
          <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A3A5C" />
            <stop offset="100%" stopColor="#0F2744" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background orbs */}
        <motion.circle
          cx="400"
          cy="100"
          r="80"
          fill="url(#goldGradient)"
          opacity="0.1"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="100"
          cy="300"
          r="60"
          fill="url(#cyanGradient)"
          opacity="0.1"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.12, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Central data visualization */}
        <g transform="translate(250, 200)">
          {/* Central hexagon */}
          <motion.polygon
            points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"
            fill="url(#navyGradient)"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner circle */}
          <motion.circle
            r="30"
            fill="none"
            stroke="url(#cyanGradient)"
            strokeWidth="2"
            strokeDasharray="8 4"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Core dot */}
          <circle r="8" fill="url(#goldGradient)" filter="url(#glow)" />
        </g>

        {/* Floating cubes */}
        <motion.g
          transform="translate(120, 120)"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* 3D cube - front */}
          <polygon points="0,15 30,0 60,15 30,30" fill="url(#goldGradient)" opacity="0.8" />
          {/* 3D cube - right */}
          <polygon points="60,15 60,45 30,60 30,30" fill="#B8923F" opacity="0.6" />
          {/* 3D cube - top */}
          <polygon points="0,15 30,0 30,30 0,45" fill="#E8C373" opacity="0.4" />
        </motion.g>

        {/* Floating sphere */}
        <motion.g
          transform="translate(380, 280)"
          animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle r="25" fill="url(#cyanGradient)" opacity="0.7" />
          <ellipse cx="0" cy="-10" rx="15" ry="8" fill="white" opacity="0.3" />
        </motion.g>

        {/* Data nodes */}
        {[
          { x: 150, y: 80, delay: 0 },
          { x: 350, y: 90, delay: 0.5 },
          { x: 80, y: 200, delay: 1 },
          { x: 420, y: 180, delay: 1.5 },
          { x: 180, y: 320, delay: 2 },
          { x: 320, y: 310, delay: 2.5 },
        ].map((node, i) => (
          <motion.g key={i} transform={`translate(${node.x}, ${node.y})`}>
            <motion.circle
              r="6"
              fill="url(#goldGradient)"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
            />
            <circle r="3" fill="white" opacity="0.8" />
          </motion.g>
        ))}

        {/* Connecting lines */}
        <g stroke="url(#goldGradient)" strokeWidth="1" opacity="0.3">
          <motion.line
            x1="150" y1="80" x2="250" y2="200"
            strokeDasharray="100"
            strokeDashoffset="100"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="350" y1="90" x2="250" y2="200"
            strokeDasharray="100"
            strokeDashoffset="100"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <motion.line
            x1="80" y1="200" x2="250" y2="200"
            strokeDasharray="100"
            strokeDashoffset="100"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.line
            x1="420" y1="180" x2="250" y2="200"
            strokeDasharray="100"
            strokeDashoffset="100"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
        </g>

        {/* Bar chart element */}
        <g transform="translate(60, 260)">
          {[
            { height: 40, delay: 0 },
            { height: 60, delay: 0.1 },
            { height: 35, delay: 0.2 },
            { height: 55, delay: 0.3 },
            { height: 45, delay: 0.4 },
          ].map((bar, i) => (
            <motion.rect
              key={i}
              x={i * 15}
              y={80 - bar.height}
              width="10"
              height={bar.height}
              fill="url(#cyanGradient)"
              opacity="0.6"
              rx="2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: bar.delay, repeat: Infinity, repeatDelay: 3 }}
              style={{ transformOrigin: "bottom" }}
            />
          ))}
        </g>

        {/* Pie chart element */}
        <g transform="translate(420, 80)">
          <motion.circle
            r="25"
            fill="transparent"
            stroke="url(#goldGradient)"
            strokeWidth="8"
            strokeDasharray="50 100"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            r="25"
            fill="transparent"
            stroke="url(#cyanGradient)"
            strokeWidth="8"
            strokeDasharray="30 120"
            strokeDashoffset="-50"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </g>
      </svg>
    </div>
  );
}
