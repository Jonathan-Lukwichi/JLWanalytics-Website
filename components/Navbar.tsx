
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Mission', href: '#mission' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="container mx-auto px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-lg">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            JLW<span className="text-blue-400">analytics</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </div>
          <Link href="#contact" className="hidden md:block bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold px-6 py-2 rounded-full hover:scale-105 hover:shadow-glow-blue transition-all duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
