
'use client';

import { motion } from 'framer-motion';

const ProblemSection = () => {
  return (
    <section id="mission" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-5 gap-12 items-center"
        >
          {/* Left Side - The Paradox */}
          <div className="md:col-span-3">
            <div className="pl-6 border-l-4 border-electric-blue">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                The African Data Paradox
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Globally, businesses invest billions in data intelligence. Yet, across Africa, a different story unfolds. Countless enterprises are data-rich but insight-poor, becoming{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple font-semibold">
                  "Paper Prisoners."
                </span>{' '}
                They generate vast quantities of valuable information, only to see its potential locked away in physical files and outdated systems, hindering growth and obscuring opportunity.
              </p>
            </div>
          </div>
          
          {/* Right Side - The Mission */}
          <div className="md:col-span-2">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-400">
                To democratize data intelligence for every African business. We provide the keys to unlock your paper prison, transforming dormant data into your most powerful asset for decision-making and competitive advantage.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
