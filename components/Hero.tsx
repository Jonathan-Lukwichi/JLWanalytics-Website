
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center space-y-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-neon-purple mb-4">
            Refining Africa's New Oil
          </span>
          <span className="block text-white">Data Intelligence.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="max-w-2xl text-lg md:text-xl text-gray-300">
          We unlock the latent value in your data, turning paper trails into pathways for profitability and progress.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link href="#services" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-electric-blue to-neon-purple rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-glow-blue">
            Explore Services
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="#mission" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-glow-purple">
            Our Mission
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full opacity-10 blur-[150px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
