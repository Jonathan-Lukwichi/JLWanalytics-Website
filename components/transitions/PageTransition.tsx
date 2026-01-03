"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";

// Logo SVG component for the transition
function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* JLW letters stylized */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#107FAE" />
          <stop offset="50%" stopColor="#281080" />
          <stop offset="100%" stopColor="#107FAE" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="rgba(16,127,174,0.1)"
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="white"
        fontSize="24"
        fontWeight="bold"
        fontFamily="system-ui"
      >
        JLW
      </text>
    </svg>
  );
}

// Particle component for explosion effect
function Particle({ delay, angle, distance }: { delay: number; angle: number; distance: number }) {
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-primary"
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: x,
        y: y,
        opacity: 0,
        scale: 0,
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    />
  );
}

// Main page transition wrapper
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsTransitioning(true);

      // After animation completes, update content
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setCurrentPath(pathname);
        setIsTransitioning(false);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children, currentPath]);

  // Generate particles for explosion effect
  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i * Math.PI * 2) / 12,
    delay: 0.3 + (i * 0.02),
    distance: 100 + Math.random() * 50,
  }));

  return (
    <>
      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Spinning logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1.2, 1, 0],
                rotate: [0, 180, 360, 720],
              }}
              transition={{
                duration: 0.8,
                times: [0, 0.3, 0.5, 1],
                ease: "easeInOut",
              }}
            >
              <LogoIcon className="w-24 h-24" />

              {/* Particles explosion */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {particles.map((p, i) => (
                  <Particle key={i} {...p} />
                ))}
              </div>
            </motion.div>

            {/* Radial glow effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.8 }}
              style={{
                background: "radial-gradient(circle at center, rgba(16,127,174,0.3) 0%, transparent 50%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <motion.div
        key={currentPath}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {displayChildren}
      </motion.div>
    </>
  );
}

// Simpler transition for internal navigation (no full page reload feel)
export function PageFade({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
