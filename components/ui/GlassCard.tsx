"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  variant?: "default" | "highlighted" | "interactive" | "minimal";
  glowColor?: "gold" | "cyan" | "purple";
  enableHover?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  variant = "default",
  glowColor = "gold",
  enableHover = true,
  className,
}: GlassCardProps) {
  const glowColors = {
    gold: "rgba(255, 170, 0, 0.5)",
    cyan: "rgba(0, 255, 255, 0.5)",
    purple: "rgba(168, 85, 247, 0.5)",
  };

  const borderColors = {
    gold: "rgba(255, 170, 0, 0.2)",
    cyan: "rgba(0, 255, 255, 0.2)",
    purple: "rgba(168, 85, 247, 0.2)",
  };

  const variantStyles = {
    default: "",
    highlighted: "shadow-glow-gold",
    interactive: "cursor-pointer",
    minimal: "backdrop-blur-sm bg-opacity-40",
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-[rgba(15,23,42,0.6)] backdrop-blur-xl",
        variantStyles[variant],
        className
      )}
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: borderColors[glowColor],
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={
        enableHover
          ? {
              scale: 1.02,
              boxShadow: `0 0 30px ${glowColors[glowColor]}, 0 0 60px ${glowColors[glowColor]}40`,
              borderColor: glowColors[glowColor],
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {/* Gradient overlay on top edge */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColors[glowColor]}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Animated glow for highlighted variant */}
      {variant === "highlighted" && (
        <div
          className="absolute inset-0 opacity-20 animate-pulse pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${glowColors[glowColor]}, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}

export default GlassCard;
