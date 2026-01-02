
'use client';

import { motion } from 'framer-motion';
import { FaCogs, FaChartLine, FaChalkboardTeacher, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Consulting & Implementation',
    description: 'Strategic roadmaps to data maturity.',
    icon: FaCogs,
  },
  {
    title: 'Managed Analytics',
    description: 'Your outsourced data insights team.',
    icon: FaChartLine,
  },
  {
    title: 'Training Academy',
    description: 'Upskilling your teams for a data-driven future.',
    icon: FaChalkboardTeacher,
  },
  {
    title: 'Data Digitalization',
    description: 'Transforming paper trails into digital assets.',
    icon: FaFileAlt,
  },
];

const stats = [
  { value: '19x', label: 'Higher Profitability' },
  { value: '23x', label: 'Better Customer Acquisition' },
  { value: '30%', label: 'Operational Risk Reduction' },
];

const ServicesAndStats = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Actionable Data Intelligence</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">From strategy to execution, we provide end-to-end solutions to activate your data.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                         hover:border-blue-500/50 hover:shadow-glow-blue transition-all duration-300"
            >
              <service.icon className="text-4xl text-electric-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Bar */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border border-white/10 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <span className="block font-mono text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-neon-purple">
                  {stat.value}
                </span>
                <span className="block mt-1 text-sm text-gray-300 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndStats;
