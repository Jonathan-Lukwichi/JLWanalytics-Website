# JLWanalytics Premium UI Design System
## Fluorescent & Dynamic Effects - Complete Implementation Guide

---

# 🎨 DESIGN PHILOSOPHY

**Theme:** "Digital Petroleum" - Where raw data transforms into liquid gold
**Style:** Cyberpunk meets Corporate Premium
**Effects:** Fluorescent glows, fluid animations, particle systems, glassmorphism

---

# 🌈 PREMIUM COLOR PALETTE

## Primary Colors (Fluorescent Gold Spectrum)
```css
:root {
  /* Fluorescent Gold (Primary) */
  --gold-50: #fffbeb;
  --gold-100: #fef3c7;
  --gold-200: #fde68a;
  --gold-300: #fcd34d;
  --gold-400: #fbbf24;
  --gold-500: #f59e0b;
  --gold-600: #d97706;
  --gold-glow: #ffaa00;
  --gold-neon: #ffcc00;
  --gold-electric: #ffe566;
  
  /* Fluorescent Cyan (Secondary) */
  --cyan-400: #22d3ee;
  --cyan-500: #06b6d4;
  --cyan-glow: #00ffff;
  --cyan-neon: #00e5ff;
  --cyan-electric: #67ffff;
  
  /* Fluorescent Purple (Accent) */
  --purple-glow: #a855f7;
  --purple-neon: #c084fc;
  --purple-electric: #e879f9;
  
  /* Deep Background Layers */
  --bg-primary: #030712;      /* Near black */
  --bg-secondary: #0a0f1a;    /* Dark navy */
  --bg-tertiary: #111827;     /* Lighter navy */
  --bg-card: #0f172a;         /* Card background */
  --bg-elevated: #1e293b;     /* Elevated surfaces */
  
  /* Glassmorphism */
  --glass-bg: rgba(15, 23, 42, 0.7);
  --glass-border: rgba(255, 170, 0, 0.2);
  --glass-highlight: rgba(255, 255, 255, 0.05);
  
  /* Glow Effects */
  --glow-gold: 0 0 20px rgba(255, 170, 0, 0.5), 0 0 40px rgba(255, 170, 0, 0.3), 0 0 60px rgba(255, 170, 0, 0.1);
  --glow-cyan: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 255, 255, 0.1);
  --glow-purple: 0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3);
  
  /* Text Glow */
  --text-glow-gold: 0 0 10px rgba(255, 170, 0, 0.8), 0 0 20px rgba(255, 170, 0, 0.5), 0 0 30px rgba(255, 170, 0, 0.3);
  --text-glow-cyan: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5);
}
```

---

# ⚡ CLAUDE CLI PROMPTS - PREMIUM EFFECTS

---

## PROMPT 1: Global Styles & CSS Variables

```
Create a comprehensive global CSS file with premium fluorescent design system for my Next.js website (JLWanalytics).

File: src/app/globals.css

Include:

1. CSS VARIABLES for:
   - Fluorescent gold spectrum (#ffaa00, #ffcc00, #ffe566)
   - Fluorescent cyan (#00ffff, #00e5ff, #67ffff)  
   - Fluorescent purple (#a855f7, #c084fc, #e879f9)
   - Deep backgrounds (#030712, #0a0f1a, #111827, #0f172a)
   - Glassmorphism settings
   - Glow effects (box-shadow values)
   - Text glow effects

2. UTILITY CLASSES:
   - .text-glow-gold (fluorescent gold text with glow)
   - .text-glow-cyan (fluorescent cyan text with glow)
   - .glow-border-gold (animated glowing border)
   - .glass-card (glassmorphism card style)
   - .gradient-gold-cyan (animated gradient)
   - .shimmer (shimmer/shine effect)
   - .pulse-glow (pulsing glow animation)
   - .float (floating animation)

3. KEYFRAME ANIMATIONS:
   - @keyframes glow-pulse (pulsing glow effect)
   - @keyframes shimmer (left-to-right shine)
   - @keyframes float (gentle up-down floating)
   - @keyframes gradient-shift (moving gradient)
   - @keyframes border-glow (rotating border glow)
   - @keyframes flicker (neon flicker effect)
   - @keyframes data-flow (flowing data particles)

4. SCROLLBAR styling (premium dark with gold accent)

5. SELECTION styling (gold highlight)

6. Base HTML/Body styling with the dark theme

Make it production-ready and well-commented.
```

---

## PROMPT 2: Animated Background with Particles

```
Create a stunning animated particle background component for my Next.js website hero section.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS
Theme: Dark background with fluorescent gold and cyan particles

File: src/components/effects/ParticleBackground.tsx

Requirements:

1. CANVAS-BASED particle system with:
   - 80-120 floating particles
   - Mix of gold (#ffaa00) and cyan (#00ffff) particles
   - Varying sizes (1px to 4px)
   - Slow, organic floating movement
   - Slight parallax effect on mouse move
   - Connection lines between nearby particles (within 150px)
   - Connection lines should be gradient (gold to cyan)
   - Lines opacity based on distance

2. PERFORMANCE optimizations:
   - Use requestAnimationFrame
   - Throttle mouse events
   - Cleanup on unmount
   - Reduce particles on mobile (50-60)

3. ADDITIONAL EFFECTS:
   - Occasional "sparkle" effect on random particles
   - Particles should slightly attract toward mouse cursor
   - Fade in on mount

4. Make it a background layer (position absolute, z-index 0)
   - Content should render on top
   - Should not block interactions

5. Props:
   - particleCount?: number
   - enableMouseInteraction?: boolean
   - enableConnections?: boolean

Include the full implementation with TypeScript types.
```

---

## PROMPT 3: Fluorescent Hero Section

```
Create a stunning premium hero section with fluorescent effects for JLWanalytics.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion
Theme: "Data is the New Petrol. We Refine It."

File: src/components/HeroPremium.tsx

VISUAL DESIGN:

1. BACKGROUND LAYERS:
   - Base: Deep gradient (#030712 to #0a0f1a)
   - ParticleBackground component (from previous prompt)
   - Radial gradient glow spots (gold top-right, cyan bottom-left)
   - Subtle grid pattern overlay (very faint)

2. MAIN HEADLINE with effects:
   - "DATA" - Large, fluorescent gold with text-glow, slight flicker animation
   - "IS THE NEW" - White/gray, clean
   - "PETROL" - Animated gradient text (gold → orange → gold), shimmer effect
   - "WE REFINE IT." - White with cyan accent on period

3. ANIMATED ELEMENTS:
   - Headline letters animate in sequentially (stagger)
   - Floating geometric shapes around text (hexagons, data nodes)
   - Animated "oil drop" → "gold bar" transformation icon
   - Typing effect on subtitle

4. SUBTITLE:
   - "Transform your raw business data into refined intelligence that powers decisions and drives growth."
   - Fade in after headline
   - Subtle glow on hover

5. CTA BUTTONS:
   Primary: "Book Free Consultation"
   - Glassmorphism style
   - Gold glowing border (animated)
   - Hover: border intensifies, slight scale up, glow expands
   - Click: ripple effect
   
   Secondary: "Watch How It Works"
   - Outline style with play icon
   - Hover: fill animation left-to-right

6. TRUST INDICATORS below CTAs:
   - Three items with icons: "South African Founded" | "Pan-African Reach" | "Enterprise Ready"
   - Subtle separator lines with glow
   - Fade in with stagger

7. SCROLL INDICATOR at bottom:
   - Animated chevron pointing down
   - "Scroll to explore" text
   - Bouncing animation

Make it fully responsive. Mobile should simplify some effects for performance.
```

---

## PROMPT 4: Glassmorphism Card Component

```
Create a premium glassmorphism card component with fluorescent accents.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion

File: src/components/ui/GlassCard.tsx

CARD DESIGN:

1. BASE STYLING:
   - Background: rgba(15, 23, 42, 0.6)
   - Backdrop blur: 16px
   - Border: 1px solid rgba(255, 170, 0, 0.1)
   - Border radius: 24px
   - Subtle inner shadow for depth

2. GLOW BORDER EFFECT (optional prop):
   - Animated gradient border that rotates
   - Colors: gold → cyan → purple → gold
   - Use CSS conic-gradient with animation
   - Border should appear to "flow"

3. HOVER EFFECTS:
   - Scale up slightly (1.02)
   - Border opacity increases
   - Background lightens slightly
   - Add subtle glow around card
   - Lift shadow increases

4. CORNER ACCENTS (optional prop):
   - Small fluorescent dots or lines in corners
   - Animate on hover

5. VARIANTS:
   - default: Standard glass effect
   - highlighted: Permanent glow border (for featured items)
   - interactive: Enhanced hover effects
   - minimal: Reduced effects for dense layouts

6. PROPS:
   - variant?: 'default' | 'highlighted' | 'interactive' | 'minimal'
   - glowColor?: 'gold' | 'cyan' | 'purple'
   - enableHover?: boolean
   - className?: string
   - children: React.ReactNode

Include example usage in comments.
```

---

## PROMPT 5: Animated Service Cards Grid

```
Create a premium animated service cards section with fluorescent effects.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion

File: src/components/ServicesGrid.tsx

SECTION DESIGN:

1. SECTION HEADER:
   - Subtitle: "WHAT WE REFINE" (cyan, letter-spacing wide, small)
   - Title: "Our Refinery Processes" ("Refinery" in gradient gold text)
   - Animated underline that draws itself

2. CARDS GRID (6 services):
   Use GlassCard component with these enhancements:
   
   Each card contains:
   - ICON: Custom animated icon (not static)
     • Icon has glow effect
     • Icon animates on hover (pulse, rotate, or morph)
     • Icon color matches service theme
   
   - TITLE: Service name with subtle glow on hover
   
   - DESCRIPTION: Muted text that brightens on hover
   
   - HOVER EFFECT: 
     • Card lifts and glows
     • Icon animation triggers
     • Reveal "Learn more →" link
     • Border glow intensifies

3. SERVICES DATA:
   Card 1 - Data Digitalization
   - Icon: Document transforming to digital (animated)
   - Color: Cyan
   
   Card 2 - Advanced Analytics  
   - Icon: Chart with animated data points
   - Color: Gold
   
   Card 3 - AI & Machine Learning
   - Icon: Brain/neural network with pulsing nodes
   - Color: Purple
   
   Card 4 - Custom Dashboards
   - Icon: Dashboard with animated metrics
   - Color: Cyan
   
   Card 5 - Training Academy
   - Icon: Graduation cap with sparkle
   - Color: Gold
   
   Card 6 - Custom Solutions (highlighted)
   - Icon: Puzzle pieces connecting
   - Color: Gradient (gold to cyan)
   - This card has permanent glow border

4. GRID LAYOUT:
   - Desktop: 3 columns (2 large, then 3 below)
   - Tablet: 2 columns
   - Mobile: 1 column

5. SCROLL ANIMATIONS:
   - Cards fade in and slide up on scroll
   - Stagger animation (each card 100ms delay)
   - Only animate once (not on every scroll)

Include all icons as inline SVGs with animation capabilities.
```

---

## PROMPT 6: Animated Process Timeline

```
Create a premium animated process timeline showing the data refinery steps.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion

File: src/components/ProcessTimeline.tsx

VISUAL DESIGN:

1. SECTION HEADER:
   - Subtitle: "THE REFINERY PROCESS"
   - Title: "From Raw to Refined" ("Raw" in cyan, "Refined" in gold)

2. TIMELINE STRUCTURE:
   4 steps connected by an animated line
   
   CONNECTING LINE:
   - Horizontal line connecting all steps
   - Gradient from cyan (start) to gold (end)
   - Animated "energy flow" effect (particles/dots moving along line)
   - Line draws itself on scroll into view
   - Glowing effect on the line

3. STEP NODES (4 steps):
   
   Step 1 - COLLECT
   - Circle node with "01" inside
   - Cyan glow
   - Icon: Database/inbox
   - Description: "Gather your raw data from all sources"
   - Animated: Data icons flowing into the node
   
   Step 2 - CLEAN
   - Circle node with "02"
   - Transitioning color (cyan to teal)
   - Icon: Filter/funnel
   - Description: "Structure, validate, and standardize"
   - Animated: Messy dots becoming organized
   
   Step 3 - ANALYZE
   - Circle node with "03"
   - Teal to gold transition
   - Icon: Magnifying glass/chart
   - Description: "Extract insights and patterns"
   - Animated: Lightbulb moments/sparkles
   
   Step 4 - DELIVER
   - Circle node with "04"
   - Gold glow (brightest)
   - Icon: Dashboard/presentation
   - Description: "Actionable dashboards and reports"
   - Animated: Radiating success waves

4. ANIMATION SEQUENCE (on scroll):
   - Line starts drawing from left
   - As line reaches each node, node lights up
   - Node icon animates
   - Description fades in
   - Continue to next node
   - Final node has celebratory effect

5. MOBILE LAYOUT:
   - Vertical timeline (line goes down)
   - Steps stack vertically
   - Same animation principles

6. INTERACTIVE:
   - Hovering a step highlights it and dims others
   - Clicking could open more details (optional modal)
```

---

## PROMPT 7: Animated Statistics Section

```
Create a premium animated statistics section with impressive number counters and effects.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion

File: src/components/StatsSection.tsx

VISUAL DESIGN:

1. BACKGROUND:
   - Subtle gradient different from other sections
   - Floating particles (fewer, larger, slower than hero)
   - Horizontal glowing line accents

2. SECTION HEADER:
   - Subtitle: "THE IMPACT"
   - Title: "Why Data Refining Matters" ("Refining" in gold gradient)

3. STATS DISPLAY (4 statistics):

   Stat 1 - Growth Chart Visual
   - Animated bar chart that builds up on scroll
   - Bars in gradient (cyan to gold)
   - Final bar is gold and tallest
   - Label: "Data-driven organizations outperform"
   
   Stat 2 - "23x"
   - Large animated counter (counts from 0 to 23)
   - "x" has special animation (pops in after number)
   - Fluorescent cyan color with glow
   - Subtitle: "Customer Acquisition"
   - Description: "Better targeting with data"
   
   Stat 3 - "775%"
   - Animated counter with percentage
   - Gold color with intense glow
   - Subtitle: "Churn Prevention ROI"
   - Description: "Predictive retention"
   - Number should have slight "electric" flicker
   
   Stat 4 - "R2.4M"
   - Counter with prefix (R) and suffix (M)
   - Decimal animation
   - Purple accent glow
   - Subtitle: "Potential Annual Savings"
   - Description: "Average for data-driven SMEs"

4. COUNTER ANIMATION FEATURES:
   - Start counting when section is 30% in view
   - Easing: easeOut for natural feel
   - Duration: 2-2.5 seconds
   - Add slight overshoot and settle (spring physics)
   - Each number has subtle glow that intensifies as count increases

5. ADDITIONAL EFFECTS:
   - Background "pulse" when all counters complete
   - Connecting line between stats with flowing particles
   - Each stat card has glass effect

6. CITATION:
   - Small text at bottom: "*Based on McKinsey Global Institute research"
   - Subtle, doesn't distract

Make numbers genuinely impressive with the animation quality.
```

---

## PROMPT 8: Floating 3D Elements

```
Create floating 3D geometric elements that add depth to the website.

Tech stack: Next.js 14+, TypeScript, CSS 3D transforms (no heavy 3D library)

File: src/components/effects/FloatingElements.tsx

DESIGN:

1. ELEMENTS TO CREATE:
   
   Element 1 - Hexagon (Data/Tech symbol)
   - 3D hexagon with depth
   - Gold wireframe edges that glow
   - Transparent faces with subtle gradient
   - Slow rotation on Y axis
   - Floating up/down motion
   
   Element 2 - Data Cube
   - 3D cube with data visualization on faces
   - Faces show mini charts/graphs
   - Cyan edges glow
   - Rotates on multiple axes slowly
   
   Element 3 - Sphere with particles
   - Sphere made of dots/points
   - Points connected with faint lines
   - Purple/cyan gradient
   - Morphs slightly (breathes)
   
   Element 4 - Diamond/Crystal
   - Representing refined data/value
   - Gold/amber color
   - Refracts light effect (shimmer)
   - Floats and rotates elegantly
   
   Element 5 - Ring/Torus
   - Orbital ring with flowing particles
   - Gradient from cyan to gold
   - Particles flow around the ring

2. BEHAVIOR:
   - Elements float independently
   - Slight parallax on scroll
   - React subtly to mouse position (tilt toward cursor)
   - Don't obstruct content (positioned in margins/corners)
   - Reduce/hide on mobile for performance

3. CSS 3D APPROACH:
   - Use CSS 3D transforms (transform-style: preserve-3d)
   - perspective on container
   - No WebGL needed - keep it lightweight
   - Combine with Framer Motion for orchestration

4. POSITIONS:
   - Hero: Hexagon (right side, floating)
   - Services: Data Cube (left margin)
   - Process: Ring around timeline
   - Stats: Diamond (decorative)

5. PERFORMANCE:
   - Use will-change for animated elements
   - GPU acceleration
   - Intersection Observer to pause when not visible

Create as a flexible component system that can place elements anywhere.
```

---

## PROMPT 9: Premium Navigation Bar

```
Create a premium navigation bar with fluorescent effects and smooth animations.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion

File: src/components/NavbarPremium.tsx

DESIGN:

1. INITIAL STATE (top of page):
   - Fully transparent background
   - Logo and links visible with subtle glow
   - Blend with hero section

2. SCROLLED STATE (after ~100px scroll):
   - Glassmorphism background fades in
   - Backdrop blur activates
   - Subtle gold bottom border appears
   - Slight shadow for depth
   - Smooth transition (300ms)

3. LOGO:
   - "JLWanalytics" text logo
   - "JLW" in gold with glow effect
   - "analytics" in white
   - Small icon before text (data refinery symbol)
   - Hover: icon rotates, glow intensifies

4. NAV LINKS:
   - Home, About, Services, Blog, Contact
   - Default: White/gray text
   - Hover effect: 
     • Text glows gold
     • Animated underline draws from left
     • Underline has gradient (gold to cyan)
   - Active state:
     • Gold text
     • Permanent underline
     • Subtle glow

5. CTA BUTTON ("Start Refining"):
   - Glassmorphism with gold border
   - Border has animated glow (rotates)
   - Hover: background fills with gold gradient, text goes dark
   - Has arrow icon that moves on hover

6. MOBILE MENU:
   - Custom hamburger icon (three lines)
   - Lines are gold with glow
   - Animate to X when open
   - Full-screen overlay menu
   - Dark glassmorphism background
   - Links animate in with stagger
   - Each link has the same hover effects
   - CTA button prominent at bottom
   - Close by tapping X or outside

7. SPECIAL EFFECTS:
   - On first load, nav items fade in with stagger
   - Subtle particle/sparkle effect around logo
   - Menu open/close has smooth animation

8. RESPONSIVE BREAKPOINT:
   - Desktop: Full nav visible
   - Tablet/Mobile (< 1024px): Hamburger menu

Make it feel premium and polished. Every interaction should feel intentional.
```

---

## PROMPT 10: Premium Footer with Effects

```
Create a premium footer with fluorescent accents and subtle animations.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion

File: src/components/FooterPremium.tsx

DESIGN:

1. BACKGROUND:
   - Gradient from page background to slightly darker
   - Subtle top border with gold glow
   - Very faint particle effect (5-10 particles floating up)
   - Grid pattern overlay (very subtle)

2. MAIN FOOTER CONTENT (4 columns):

   Column 1 - BRAND
   - Logo (JLWanalytics with glow)
   - Tagline: "From Data to Decisions. From Insights to Impact."
   - Mission badge: "Data is the New Petrol. We Refine It."
     • Badge has gold border glow
     • Slight shimmer animation
   - Social icons row (LinkedIn, Twitter/X, GitHub)
     • Icons have hover glow effect
     • Color changes from white to brand color

   Column 2 - NAVIGATION
   - Title: "Navigation" (small, gold)
   - Links: Home, About, Services, Blog, Contact
   - Each link has hover effect (gold text + glow)

   Column 3 - SERVICES
   - Title: "Services" (small, cyan)
   - Links to each service (with hash anchors)
   - Same hover effect

   Column 4 - CONTACT
   - Title: "Get In Touch" (small, gold)
   - Phone: +27 84 731 4600 (click to call)
   - Email: info@jlwanalytics.com (click to email)
   - Location: Pretoria, South Africa (with small map pin icon)
   - Big CTA button: "Start Refining"
     • Gold gradient background
     • Glow effect
     • Arrow icon

3. NEWSLETTER SECTION (optional row above columns):
   - Title: "Stay Updated"
   - Description: "Get data insights delivered to your inbox"
   - Email input + Subscribe button
   - Input has glow focus state
   - Button has animated background

4. BOTTOM BAR:
   - Copyright: "© 2026 JLWanalytics (Pty) Ltd. All Rights Reserved."
   - Badge: "Serving Africa & Beyond" (with globe icon, glow)
   - Legal links: Privacy Policy, Terms (if you have them)

5. ANIMATIONS:
   - Elements fade in on scroll into view
   - Social icons have playful hover effects
   - CTA button has pulse glow
   - Links have smooth underline animation

6. RESPONSIVE:
   - Desktop: 4 columns
   - Tablet: 2x2 grid
   - Mobile: Single column stack

Make it feel like a premium brand's footer - polished and cohesive.
```

---

## PROMPT 11: Loading Screen / Page Transition

```
Create a premium loading screen and page transition effect for the website.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion

Files: 
- src/components/effects/LoadingScreen.tsx
- src/components/effects/PageTransition.tsx

LOADING SCREEN DESIGN:

1. INITIAL LOAD (first visit):
   - Full screen dark background (#030712)
   - JLWanalytics logo in center
   - Logo builds itself (animated drawing)
   - Or: Logo pulses with gold glow
   
   Below logo:
   - Animated loading indicator
   - NOT a boring spinner. Choose one:
     Option A: Oil drop falling into container, filling up
     Option B: Data particles collecting into shape
     Option C: Progress bar with flowing gold gradient
     Option D: Three dots morphing (refining animation)
   
   - Loading text: "Refining your experience..." (typing effect)
   
   - Once loaded:
     • Logo brightens
     • Screen splits/dissolves/slides away
     • Reveal homepage with smooth entrance

2. PAGE TRANSITIONS:
   - When navigating between pages:
   - Quick transition (300-500ms)
   - Options:
     Option A: Fade out, slide up new page
     Option B: Current page slides left, new page slides from right
     Option C: Brief gold flash/wipe transition
     Option D: Dissolve/particle effect
   
   - Keep it fast - don't frustrate users
   - Logo or brand element briefly visible during transition

3. ROUTE CHANGE INDICATOR:
   - Top progress bar (like YouTube/GitHub)
   - Gold/cyan gradient
   - Glowing effect
   - Smooth animation

4. IMPLEMENTATION:
   - Use Next.js App Router patterns
   - Framer Motion AnimatePresence for transitions
   - Loading screen only on initial load (not every page)
   - Store "hasLoaded" in sessionStorage
   - Page transitions on every navigation

5. PERFORMANCE:
   - Don't block interactivity
   - Minimum display time: 1.5s (first load only)
   - Maximum wait: 3s then force show content

This should make first impressions memorable.
```

---

## PROMPT 12: Interactive Cursor Effects

```
Create custom cursor effects that enhance the premium feel of the website.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS

File: src/components/effects/CustomCursor.tsx

CURSOR DESIGN:

1. CUSTOM CURSOR (desktop only):
   - Replace default cursor with custom design
   - Main cursor: Small gold dot (8px) with glow
   - Follower: Larger ring (32px) that follows with delay
   - Ring is semi-transparent gold
   - Smooth easing on follower (lerp/spring)

2. CURSOR STATES:

   Default:
   - Small dot + ring follower
   - Ring has subtle pulse
   
   Hovering links/buttons:
   - Ring expands (48px)
   - Ring becomes solid border (not filled)
   - Dot scales up slightly
   - Color might shift to cyan
   - Optional: "View" or arrow icon appears in ring
   
   Hovering images/cards:
   - Ring expands large (64px)
   - Shows "View" or "Explore" text inside
   
   Clicking:
   - Brief scale down (squish effect)
   - Ripple emanates from click point
   
   Text selection/input:
   - Cursor becomes text cursor (I-beam) but styled
   - Gold color with glow

3. MAGNETIC EFFECT (optional):
   - When near buttons/links, cursor gets "pulled" toward center
   - Creates satisfying magnetic snap feel
   - Don't overdo it - subtle is better

4. TRAIL EFFECT (very subtle):
   - Faint trail of small particles following cursor
   - Only 3-5 particles
   - Fade quickly
   - Gold/cyan colors
   - Disable on lower-powered devices

5. IMPLEMENTATION DETAILS:
   - Use event listeners for mousemove
   - RequestAnimationFrame for smooth updates
   - CSS transform for positioning (GPU accelerated)
   - Hide default cursor with CSS
   - Fallback to default cursor on mobile/touch
   - Detect if user prefers reduced motion

6. PERFORMANCE:
   - Throttle/debounce if needed
   - Disable on mobile completely
   - Check for prefers-reduced-motion
   - Clean up listeners on unmount

This cursor should feel magical but not gimmicky.
```

---

## PROMPT 13: Scroll-Triggered Reveal Effects

```
Create a comprehensive scroll animation system with premium reveal effects.

Tech stack: Next.js 14+, TypeScript, Framer Motion

File: src/components/animations/ScrollReveal.tsx

ANIMATION COMPONENTS:

1. REVEAL WRAPPER Component:
   Props:
   - animation: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur' | 'clip'
   - delay?: number (in seconds)
   - duration?: number
   - threshold?: number (0-1, when to trigger)
   - once?: boolean (animate only first time)
   - children: ReactNode

2. ANIMATION TYPES:

   fadeUp:
   - Start: opacity 0, y: 60px
   - End: opacity 1, y: 0
   - Good for: headings, paragraphs, cards
   
   fadeDown:
   - Start: opacity 0, y: -60px
   - End: opacity 1, y: 0
   
   fadeLeft/fadeRight:
   - Horizontal slide in
   
   scale:
   - Start: opacity 0, scale: 0.8
   - End: opacity 1, scale: 1
   - Good for: images, cards
   
   blur:
   - Start: opacity 0, filter: blur(10px)
   - End: opacity 1, filter: blur(0)
   - Good for: text reveals
   
   clip:
   - Start: clip-path reveals from edge
   - End: fully visible
   - Good for: images, sections

3. STAGGER CONTAINER Component:
   - Wrap multiple children
   - Each child animates with delay
   - Props: staggerDelay (default 0.1s)

4. TEXT REVEAL Component:
   - Animates text character by character or word by word
   - Props: by: 'character' | 'word' | 'line'
   - Good for headlines

5. COUNTER Component:
   - Animates numbers counting up
   - Props: value, prefix, suffix, decimals, duration
   - Triggers on scroll into view

6. PARALLAX Component:
   - Element moves at different scroll speed
   - Props: speed (negative = slower, positive = faster)
   - Good for background elements

7. IMPLEMENTATION:
   - Use Framer Motion's useInView hook
   - Intersection Observer under the hood
   - Support for reduced motion preference
   - TypeScript types for all props

Provide clear examples for each component type.
```

---

## PROMPT 14: Glowing Button Components

```
Create a set of premium glowing button components with various styles.

Tech stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion

File: src/components/ui/GlowButton.tsx

BUTTON VARIANTS:

1. PRIMARY (Gold Glow):
   - Background: Gold gradient
   - Border: Animated glowing gold border
   - Text: Dark (black/navy)
   - Hover: 
     • Glow intensifies
     • Scale 1.02
     • Background shifts slightly
   - Active: Scale 0.98, glow dims briefly
   - Has arrow icon that slides on hover

2. SECONDARY (Glass + Gold border):
   - Background: Glassmorphism (transparent blur)
   - Border: Gold with subtle glow
   - Text: Gold
   - Hover:
     • Background fills with gold (left to right wipe)
     • Text becomes dark
     • Glow expands
   
3. OUTLINE (Cyan):
   - Background: Transparent
   - Border: Cyan, 2px
   - Text: Cyan
   - Hover:
     • Border glows intensely
     • Background gets subtle cyan tint
     • Text glow effect
   
4. GHOST:
   - No background or border
   - Text only with hover underline
   - Underline draws animated
   - Hover: text glows

5. NEON:
   - Intense neon glow effect
   - Looks like actual neon sign
   - Slight flicker animation
   - Extremely eye-catching (use sparingly)

6. SIZES:
   - sm: Small, compact
   - md: Medium (default)
   - lg: Large, prominent

7. STATES:
   - disabled: Dimmed, no glow, no interactions
   - loading: Spinner replaces text, glow pulses

8. SPECIAL EFFECTS:
   - Ripple effect on click
   - Magnetic cursor attraction (optional)
   - Sound effect ready (hook for click sound)

9. PROPS:
   interface GlowButtonProps {
     variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon'
     size: 'sm' | 'md' | 'lg'
     glowColor?: 'gold' | 'cyan' | 'purple'
     disabled?: boolean
     loading?: boolean
     icon?: ReactNode
     iconPosition?: 'left' | 'right'
     onClick?: () => void
     children: ReactNode
     className?: string
   }

Include usage examples and ensure accessibility (focus states, keyboard nav).
```

---

## PROMPT 15: Complete Homepage Assembly

```
Assemble all premium components into a stunning homepage.

File: src/app/page.tsx

STRUCTURE (top to bottom):

1. LOADING SCREEN (first load only)
   - Import LoadingScreen component
   - Show once per session

2. PARTICLE BACKGROUND
   - Full page background layer
   - z-index: 0

3. NAVIGATION
   - NavbarPremium component
   - Fixed position, z-index: 50

4. HERO SECTION
   - HeroPremium component
   - Full viewport height
   - All headline animations
   - Floating 3D elements (decorative)

5. TRUST BAR
   - Simple bar with badges
   - Glass card style
   - "South African Founded" | "Pan-African Reach" | "Enterprise Ready"

6. SERVICES SECTION
   - ServicesGrid component
   - Scroll reveal animations

7. PROCESS TIMELINE
   - ProcessTimeline component
   - Full animated sequence

8. WHY CHOOSE US
   - WhyChooseUs component
   - Glass cards with icons

9. STATS SECTION
   - StatsSection component
   - Animated counters

10. PRICING TIERS
    - PricingSection component
    - Three tier cards

11. INDUSTRIES
    - Industry tags section
    - Interactive hover effects

12. CONSULTATION CTA
    - BookConsultation component
    - Big, attention-grabbing

13. FAQ SECTION
    - FAQ accordion
    - Animated expand/collapse

14. FOOTER
    - FooterPremium component

ADDITIONAL INTEGRATIONS:
- CustomCursor (desktop only)
- ScrollReveal wrappers on all sections
- Smooth scroll behavior
- PageTransition for route changes

PERFORMANCE CONSIDERATIONS:
- Lazy load below-fold sections
- Reduce particles on mobile
- Disable cursor effects on mobile/touch
- Respect prefers-reduced-motion

Create a seamless, impressive experience that showcases JLWanalytics as a premium data company.

The goal: When someone lands on this page, they should think "Wow, if their website is this good, imagine what they can do with my data."
```

---

# 📦 INSTALLATION COMMANDS

```bash
# Core dependencies
npm install framer-motion

# UI utilities  
npm install clsx tailwind-merge

# Icons
npm install lucide-react

# Optional: Sound effects
npm install use-sound

# Optional: Analytics
npm install @vercel/analytics
```

---

# 🎯 IMPLEMENTATION ORDER

**Phase 1: Foundation (Day 1-2)**
1. Prompt 1: Global Styles & CSS Variables
2. Prompt 4: Glassmorphism Card Component
3. Prompt 14: Glowing Button Components

**Phase 2: Hero Impact (Day 3-4)**
4. Prompt 2: Particle Background
5. Prompt 3: Fluorescent Hero Section
6. Prompt 9: Premium Navigation

**Phase 3: Content Sections (Day 5-7)**
7. Prompt 5: Service Cards Grid
8. Prompt 6: Process Timeline
9. Prompt 7: Stats Section
10. Prompt 13: Scroll Reveal Effects

**Phase 4: Polish & Effects (Day 8-10)**
11. Prompt 8: Floating 3D Elements
12. Prompt 10: Premium Footer
13. Prompt 11: Loading Screen
14. Prompt 12: Custom Cursor

**Phase 5: Assembly (Day 11-12)**
15. Prompt 15: Complete Homepage Assembly

---

# 💡 DESIGN TIPS

1. **Less is more**: Not every element needs every effect. Use intense effects sparingly for key moments.

2. **Performance first**: Always check mobile performance. Beautiful but slow = bad UX.

3. **Accessibility**: Ensure contrast ratios work, respect reduced motion, keep focus states visible.

4. **Consistency**: Once you establish the glow color for something, keep it consistent.

5. **Test on real devices**: Effects that look amazing on your monitor might overwhelm on others.

---

**This design system will make JLWanalytics look like a R500,000+ premium website. Execute it well! 🚀✨**
