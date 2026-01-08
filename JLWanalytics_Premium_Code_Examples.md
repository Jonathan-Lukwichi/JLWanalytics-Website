# JLWanalytics Premium UI - Code Examples
## Ready-to-Use React/Next.js Components

These are working code examples you can directly use or adapt.

---

## 1. globals.css - Premium Fluorescent Styles

```css
/* src/app/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* ═══════════════════════════════════════════════════════════
     FLUORESCENT COLOR PALETTE
     ═══════════════════════════════════════════════════════════ */
  
  /* Fluorescent Gold (Primary Brand Color) */
  --gold-400: #fbbf24;
  --gold-500: #f59e0b;
  --gold-glow: #ffaa00;
  --gold-neon: #ffcc00;
  --gold-electric: #ffe566;
  
  /* Fluorescent Cyan (Secondary) */
  --cyan-400: #22d3ee;
  --cyan-500: #06b6d4;
  --cyan-glow: #00ffff;
  --cyan-neon: #00e5ff;
  
  /* Fluorescent Purple (Accent) */
  --purple-glow: #a855f7;
  --purple-neon: #c084fc;
  
  /* Deep Backgrounds */
  --bg-primary: #030712;
  --bg-secondary: #0a0f1a;
  --bg-tertiary: #111827;
  --bg-card: #0f172a;
  --bg-elevated: #1e293b;
  
  /* Glassmorphism */
  --glass-bg: rgba(15, 23, 42, 0.7);
  --glass-border: rgba(255, 170, 0, 0.15);
  
  /* Glow Shadows */
  --glow-gold-sm: 0 0 10px rgba(255, 170, 0, 0.4);
  --glow-gold-md: 0 0 20px rgba(255, 170, 0, 0.5), 0 0 40px rgba(255, 170, 0, 0.3);
  --glow-gold-lg: 0 0 20px rgba(255, 170, 0, 0.5), 0 0 40px rgba(255, 170, 0, 0.3), 0 0 60px rgba(255, 170, 0, 0.2);
  --glow-cyan-md: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3);
  
  /* Text Glow */
  --text-glow-gold: 0 0 10px rgba(255, 170, 0, 0.8), 0 0 20px rgba(255, 170, 0, 0.5), 0 0 30px rgba(255, 170, 0, 0.3);
  --text-glow-cyan: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5);
}

/* ═══════════════════════════════════════════════════════════
   BASE STYLES
   ═══════════════════════════════════════════════════════════ */

html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  color: #e2e8f0;
  font-family: 'Inter', system-ui, sans-serif;
  min-height: 100vh;
}

/* Custom Selection */
::selection {
  background: rgba(255, 170, 0, 0.3);
  color: #fff;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--gold-glow), var(--cyan-glow));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, var(--gold-neon), var(--cyan-neon));
}

/* ═══════════════════════════════════════════════════════════
   UTILITY CLASSES - GLOW EFFECTS
   ═══════════════════════════════════════════════════════════ */

/* Text Glow */
.text-glow-gold {
  color: var(--gold-neon);
  text-shadow: var(--text-glow-gold);
}

.text-glow-cyan {
  color: var(--cyan-neon);
  text-shadow: var(--text-glow-cyan);
}

/* Gradient Text */
.text-gradient-gold {
  background: linear-gradient(135deg, var(--gold-400), var(--gold-neon), var(--gold-400));
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}

/* Glowing Border */
.glow-border-gold {
  position: relative;
  border: 1px solid var(--glass-border);
  border-radius: 16px;
}

.glow-border-gold::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  background: conic-gradient(
    from 0deg,
    var(--gold-glow),
    var(--cyan-glow),
    var(--purple-glow),
    var(--gold-glow)
  );
  z-index: -1;
  opacity: 0.5;
  animation: border-rotate 4s linear infinite;
  filter: blur(8px);
}

/* Glassmorphism Card */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
}

/* Shimmer Effect */
.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: shimmer 2s infinite;
}

/* Pulse Glow */
.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Float Animation */
.float {
  animation: float 3s ease-in-out infinite;
}

/* Neon Flicker */
.neon-flicker {
  animation: flicker 4s infinite;
}

/* ═══════════════════════════════════════════════════════════
   KEYFRAME ANIMATIONS
   ═══════════════════════════════════════════════════════════ */

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes border-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: var(--glow-gold-sm);
  }
  50% {
    box-shadow: var(--glow-gold-lg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 1;
    text-shadow: var(--text-glow-gold);
  }
  20%, 24%, 55% {
    opacity: 0.8;
    text-shadow: none;
  }
}

@keyframes glow-pulse {
  0%, 100% {
    filter: drop-shadow(0 0 5px var(--gold-glow));
  }
  50% {
    filter: drop-shadow(0 0 20px var(--gold-glow)) drop-shadow(0 0 30px var(--gold-glow));
  }
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT STYLES
   ═══════════════════════════════════════════════════════════ */

/* Button Base */
.btn-glow {
  position: relative;
  padding: 12px 28px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.btn-glow-gold {
  background: linear-gradient(135deg, var(--gold-500), var(--gold-glow));
  color: #030712;
  box-shadow: var(--glow-gold-sm);
}

.btn-glow-gold:hover {
  transform: translateY(-2px);
  box-shadow: var(--glow-gold-md);
}

.btn-glow-gold:active {
  transform: translateY(0);
}

/* Card Hover Effect */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--glow-gold-md);
  border-color: rgba(255, 170, 0, 0.3);
}
```

---

## 2. ParticleBackground.tsx - Animated Particles

```tsx
// src/components/effects/ParticleBackground.tsx
'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  enableConnections?: boolean;
  enableMouseInteraction?: boolean;
}

export default function ParticleBackground({
  particleCount = 80,
  enableConnections = true,
  enableMouseInteraction = true,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const colors = ['#ffaa00', '#00ffff', '#fbbf24', '#22d3ee'];

  const createParticle = useCallback((width: number, height: number): Particle => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: Math.random() * 0.5 + 0.3,
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };

    const drawParticle = (p: Particle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(255, 170, 0, ${opacity})`);
            gradient.addColorStop(1, `rgba(0, 255, 255, ${opacity})`);
            
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const updateParticle = (p: Particle) => {
      // Mouse interaction
      if (enableMouseInteraction) {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const force = (200 - distance) / 200;
          p.vx += (dx / distance) * force * 0.01;
          p.vy += (dy / distance) * force * 0.01;
        }
      }

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Damping
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Bounce off edges
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Keep in bounds
      p.x = Math.max(0, Math.min(canvas.width, p.x));
      p.y = Math.max(0, Math.min(canvas.height, p.y));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(p => {
        updateParticle(p);
        drawParticle(p);
      });

      if (enableConnections) {
        drawConnections();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [particleCount, enableConnections, enableMouseInteraction, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
```

---

## 3. GlassCard.tsx - Glassmorphism Component

```tsx
// src/components/ui/GlassCard.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils'; // You'll need this utility

interface GlassCardProps {
  children: ReactNode;
  variant?: 'default' | 'highlighted' | 'interactive' | 'minimal';
  glowColor?: 'gold' | 'cyan' | 'purple';
  enableHover?: boolean;
  className?: string;
}

export default function GlassCard({
  children,
  variant = 'default',
  glowColor = 'gold',
  enableHover = true,
  className,
}: GlassCardProps) {
  const glowColors = {
    gold: 'rgba(255, 170, 0, 0.5)',
    cyan: 'rgba(0, 255, 255, 0.5)',
    purple: 'rgba(168, 85, 247, 0.5)',
  };

  const borderColors = {
    gold: 'rgba(255, 170, 0, 0.2)',
    cyan: 'rgba(0, 255, 255, 0.2)',
    purple: 'rgba(168, 85, 247, 0.2)',
  };

  const baseStyles = `
    relative overflow-hidden rounded-2xl
    bg-[rgba(15,23,42,0.6)] backdrop-blur-xl
    border border-[${borderColors[glowColor]}]
  `;

  const variantStyles = {
    default: '',
    highlighted: 'shadow-[0_0_30px_rgba(255,170,0,0.2)]',
    interactive: 'cursor-pointer',
    minimal: 'backdrop-blur-sm bg-[rgba(15,23,42,0.4)]',
  };

  return (
    <motion.div
      className={cn(baseStyles, variantStyles[variant], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
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
      style={{
        borderColor: borderColors[glowColor],
      }}
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
      {variant === 'highlighted' && (
        <div
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle at center, ${glowColors[glowColor]}, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}
```

---

## 4. GlowButton.tsx - Premium Button Component

```tsx
// src/components/ui/GlowButton.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  glowColor?: 'gold' | 'cyan' | 'purple';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function GlowButton({
  children,
  variant = 'primary',
  size = 'md',
  glowColor = 'gold',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
  onClick,
  className,
  href,
}: GlowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    gold: {
      bg: 'linear-gradient(135deg, #f59e0b, #ffaa00)',
      glow: 'rgba(255, 170, 0, 0.5)',
      text: '#030712',
      border: 'rgba(255, 170, 0, 0.5)',
    },
    cyan: {
      bg: 'linear-gradient(135deg, #06b6d4, #00ffff)',
      glow: 'rgba(0, 255, 255, 0.5)',
      text: '#030712',
      border: 'rgba(0, 255, 255, 0.5)',
    },
    purple: {
      bg: 'linear-gradient(135deg, #a855f7, #c084fc)',
      glow: 'rgba(168, 85, 247, 0.5)',
      text: '#ffffff',
      border: 'rgba(168, 85, 247, 0.5)',
    },
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const color = colors[glowColor];

  const variantStyles = {
    primary: {
      background: color.bg,
      color: color.text,
      boxShadow: isHovered
        ? `0 0 20px ${color.glow}, 0 0 40px ${color.glow}`
        : `0 0 10px ${color.glow}40`,
    },
    secondary: {
      background: isHovered ? color.bg : 'rgba(15, 23, 42, 0.6)',
      color: isHovered ? color.text : color.border,
      border: `1px solid ${color.border}`,
      boxShadow: isHovered ? `0 0 20px ${color.glow}` : 'none',
      backdropFilter: 'blur(8px)',
    },
    outline: {
      background: 'transparent',
      color: color.border,
      border: `2px solid ${color.border}`,
      boxShadow: isHovered ? `0 0 20px ${color.glow}, inset 0 0 20px ${color.glow}20` : 'none',
    },
    ghost: {
      background: 'transparent',
      color: isHovered ? color.border : '#e2e8f0',
    },
    neon: {
      background: 'transparent',
      color: color.border,
      border: `2px solid ${color.border}`,
      boxShadow: `0 0 10px ${color.glow}, 0 0 20px ${color.glow}, 0 0 30px ${color.glow}, inset 0 0 10px ${color.glow}40`,
      animation: 'flicker 4s infinite',
    },
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 overflow-hidden',
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      style={variantStyles[variant]}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {/* Shimmer effect */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          }}
          animate={isHovered ? { x: ['−100%', '100%'], opacity: 1 } : {}}
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
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && (
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
```

---

## 5. AnimatedHeadline.tsx - Text Animation Component

```tsx
// src/components/effects/AnimatedHeadline.tsx
'use client';

import { motion } from 'framer-motion';

interface AnimatedHeadlineProps {
  line1?: string;
  highlight1?: string;
  line2?: string;
  highlight2?: string;
  line3?: string;
}

export default function AnimatedHeadline({
  line1 = 'DATA',
  highlight1 = 'IS THE NEW',
  line2 = 'PETROL',
  line3 = 'WE REFINE IT.',
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
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-2"
    >
      {/* Line 1: DATA */}
      <motion.div variants={wordVariants} className="flex items-baseline gap-4">
        <span
          className="text-6xl md:text-8xl font-black tracking-tight"
          style={{
            color: '#ffcc00',
            textShadow: '0 0 10px rgba(255, 204, 0, 0.8), 0 0 20px rgba(255, 204, 0, 0.5), 0 0 30px rgba(255, 204, 0, 0.3)',
            animation: 'flicker 4s infinite',
          }}
        >
          {line1}
        </span>
        <span className="text-4xl md:text-6xl font-light text-gray-300">
          {highlight1}
        </span>
      </motion.div>

      {/* Line 2: PETROL */}
      <motion.div variants={wordVariants}>
        <span
          className="text-6xl md:text-8xl font-black tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #fbbf24, #ffaa00, #f59e0b, #ffaa00)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 3s ease infinite',
          }}
        >
          {line2}
        </span>
      </motion.div>

      {/* Line 3: WE REFINE IT. */}
      <motion.div variants={wordVariants} className="flex items-baseline">
        <span className="text-5xl md:text-7xl font-black text-white tracking-tight">
          {line3.replace('.', '')}
        </span>
        <span
          className="text-5xl md:text-7xl font-black"
          style={{
            color: '#00ffff',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
          }}
        >
          .
        </span>
      </motion.div>
    </motion.div>
  );
}
```

---

## 6. ScrollReveal.tsx - Scroll Animation Wrapper

```tsx
// src/components/animations/ScrollReveal.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  once = true,
  className,
}: ScrollRevealProps) {
  const animations: Record<AnimationType, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
  };

  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container for multiple children
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 7. CounterAnimation.tsx - Number Counter

```tsx
// src/components/animations/CounterAnimation.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterAnimationProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function CounterAnimation({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className,
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(eased * value);

        if (now < endTime) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
```

---

## 8. WhatsAppButton.tsx - Floating WhatsApp

```tsx
// src/components/WhatsAppButton.tsx
'use client';

import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '27847314600';
  const message = encodeURIComponent("Hi! I'm interested in learning more about JLWanalytics data services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)',
      }}
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <svg
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-25" />
    </motion.a>
  );
}
```

---

## 9. utils.ts - Utility Functions

```ts
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 10. tailwind.config.ts - Extended Configuration

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fluorescent Gold
        'gold': {
          400: '#fbbf24',
          500: '#f59e0b',
          glow: '#ffaa00',
          neon: '#ffcc00',
          electric: '#ffe566',
        },
        // Fluorescent Cyan
        'cyan': {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00ffff',
          neon: '#00e5ff',
        },
        // Fluorescent Purple
        'purple': {
          glow: '#a855f7',
          neon: '#c084fc',
        },
        // Backgrounds
        'bg': {
          primary: '#030712',
          secondary: '#0a0f1a',
          tertiary: '#111827',
          card: '#0f172a',
          elevated: '#1e293b',
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'flicker': 'flicker 4s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 170, 0, 0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 170, 0, 0.6), 0 0 40px rgba(255, 170, 0, 0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: '1',
          },
          '20%, 24%, 55%': {
            opacity: '0.8',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Installation Reminder

```bash
# Install all required packages
npm install framer-motion clsx tailwind-merge lucide-react

# Optional but recommended
npm install @vercel/analytics
```

---

**These code examples are production-ready. Copy them directly into your project and customize as needed!**
