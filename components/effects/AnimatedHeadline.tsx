"use client";

import { motion } from "framer-motion";

interface AnimatedHeadlineProps {
  line1?: string;
  highlight1?: string;
  line2?: string;
  line3?: string;
  className?: string;
}

export function AnimatedHeadline({
  line1 = "DATA",
  highlight1 = "IS THE NEW",
  line2 = "PETROL",
  line3 = "WE REFINE IT.",
  className = "",
}: AnimatedHeadlineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`space-y-2 ${className}`}
    >
      {/* Line 1: DATA IS THE NEW */}
      <motion.div variants={wordVariants} className="flex flex-wrap items-baseline gap-4">
        <span
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight neon-flicker"
          style={{
            color: "#ffcc00",
            textShadow:
              "0 0 10px rgba(255, 204, 0, 0.8), 0 0 20px rgba(255, 204, 0, 0.5), 0 0 30px rgba(255, 204, 0, 0.3)",
          }}
        >
          {line1}
        </span>
        <span className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-300">
          {highlight1}
        </span>
      </motion.div>

      {/* Line 2: PETROL */}
      <motion.div variants={wordVariants}>
        <span
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gradient-gold"
          style={{
            background: "linear-gradient(135deg, #fbbf24, #ffaa00, #f59e0b, #ffaa00)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradient-shift 3s ease infinite",
          }}
        >
          {line2}
        </span>
      </motion.div>

      {/* Line 3: WE REFINE IT. */}
      <motion.div variants={wordVariants} className="flex items-baseline">
        <span className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
          {line3.replace(".", "")}
        </span>
        <span
          className="text-4xl md:text-6xl lg:text-7xl font-black"
          style={{
            color: "#00ffff",
            textShadow: "0 0 10px rgba(0, 255, 255, 0.8)",
          }}
        >
          .
        </span>
      </motion.div>
    </motion.div>
  );
}

export default AnimatedHeadline;
