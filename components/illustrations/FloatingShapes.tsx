"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingShapesProps {
  variant?: "gold" | "cyan" | "mixed";
  density?: "low" | "medium" | "high";
}

// Deterministic pseudo-random based on seed
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function FloatingShapes({ variant = "mixed", density = "medium" }: FloatingShapesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getColor = (index: number) => {
    if (variant === "gold") return "#D4A853";
    if (variant === "cyan") return "#0EA5E9";
    return index % 2 === 0 ? "#D4A853" : "#0EA5E9";
  };

  const shapeCount = density === "low" ? 6 : density === "medium" ? 10 : 15;
  const shapeTypes: Array<"circle" | "square" | "triangle"> = ["circle", "square", "triangle"];

  // Generate shapes with deterministic values based on index
  const shapes = Array.from({ length: shapeCount }, (_, i) => ({
    id: i,
    x: seededRandom(i * 1) * 100,
    y: seededRandom(i * 2) * 100,
    size: 10 + seededRandom(i * 3) * 30,
    duration: 15 + seededRandom(i * 4) * 20,
    delay: seededRandom(i * 5) * 5,
    opacity: 0.05 + seededRandom(i * 6) * 0.1,
    type: shapeTypes[Math.floor(seededRandom(i * 7) * 3)],
  }));

  // Don't render anything on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="floatGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C373" />
            <stop offset="100%" stopColor="#D4A853" />
          </linearGradient>
          <linearGradient id="floatCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>

        {shapes.map((shape) => (
          <motion.g
            key={shape.id}
            initial={{ x: `${shape.x}%`, y: `${shape.y}%` }}
            animate={{
              x: [`${shape.x}%`, `${(shape.x + 10) % 100}%`, `${shape.x}%`],
              y: [`${shape.y}%`, `${(shape.y + 15) % 100}%`, `${shape.y}%`],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {shape.type === "circle" && (
              <circle
                r={shape.size / 2}
                fill={getColor(shape.id)}
                opacity={shape.opacity}
              />
            )}
            {shape.type === "square" && (
              <rect
                width={shape.size}
                height={shape.size}
                x={-shape.size / 2}
                y={-shape.size / 2}
                fill={getColor(shape.id)}
                opacity={shape.opacity}
                rx={shape.size * 0.2}
              />
            )}
            {shape.type === "triangle" && (
              <polygon
                points={`0,${-shape.size / 2} ${shape.size / 2},${shape.size / 2} ${-shape.size / 2},${shape.size / 2}`}
                fill={getColor(shape.id)}
                opacity={shape.opacity}
              />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
