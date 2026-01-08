"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
  glowColor?: "gold" | "cyan" | "purple";
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export function GlowButton({
  children,
  variant = "primary",
  size = "md",
  glowColor = "gold",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "right",
  onClick,
  className,
  href,
  type = "button",
}: GlowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    gold: {
      bg: "linear-gradient(135deg, #f59e0b, #ffaa00)",
      glow: "rgba(255, 170, 0, 0.5)",
      text: "#030712",
      border: "rgba(255, 170, 0, 0.5)",
    },
    cyan: {
      bg: "linear-gradient(135deg, #06b6d4, #00ffff)",
      glow: "rgba(0, 255, 255, 0.5)",
      text: "#030712",
      border: "rgba(0, 255, 255, 0.5)",
    },
    purple: {
      bg: "linear-gradient(135deg, #a855f7, #c084fc)",
      glow: "rgba(168, 85, 247, 0.5)",
      text: "#ffffff",
      border: "rgba(168, 85, 247, 0.5)",
    },
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const color = colors[glowColor];

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          background: color.bg,
          color: color.text,
          boxShadow: isHovered
            ? `0 0 20px ${color.glow}, 0 0 40px ${color.glow}`
            : `0 0 10px ${color.glow}40`,
        };
      case "secondary":
        return {
          background: isHovered ? color.bg : "rgba(15, 23, 42, 0.6)",
          color: isHovered ? color.text : color.border,
          border: `1px solid ${color.border}`,
          boxShadow: isHovered ? `0 0 20px ${color.glow}` : "none",
          backdropFilter: "blur(8px)",
        };
      case "outline":
        return {
          background: "transparent",
          color: color.border,
          border: `2px solid ${color.border}`,
          boxShadow: isHovered
            ? `0 0 20px ${color.glow}, inset 0 0 20px ${color.glow}20`
            : "none",
        };
      case "ghost":
        return {
          background: "transparent",
          color: isHovered ? color.border : "#e2e8f0",
        };
      case "neon":
        return {
          background: "transparent",
          color: color.border,
          border: `2px solid ${color.border}`,
          boxShadow: `0 0 10px ${color.glow}, 0 0 20px ${color.glow}, 0 0 30px ${color.glow}, inset 0 0 10px ${color.glow}40`,
        };
      default:
        return {};
    }
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 overflow-hidden",
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={getVariantStyles()}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {/* Shimmer effect */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          }}
          animate={isHovered ? { x: ["-100%", "100%"], opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && (
              <motion.span
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.span>
            )}
          </>
        )}
      </span>
    </Component>
  );
}

export default GlowButton;
