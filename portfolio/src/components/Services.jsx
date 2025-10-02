/* eslint-disable no-unused-vars */

import { Code, Palette, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern and responsive websites with clean code and high performance.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive, and user-friendly designs for all devices.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Seamless mobile-first experiences optimized for speed and usability.",
    color: "from-green-500 to-emerald-500"
  },
];

// Animation variants for scroll reveal
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background text-textDark relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-primary mb-12"
        >
          My Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index} // pass index for stagger delay
              >
                {/* Glowing animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-100 animate-pulse transition duration-500"></div>

                {/* Card content */}
                <div className="relative p-6 rounded-2xl shadow-lg bg-card border border-border z-10">
                  {/* Icon with bounce animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`w-16 h-16 flex items-center justify-center mx-auto mb-4 
                                rounded-full bg-gradient-to-r ${service.color} text-white shadow-lg`}
                  >
                    <Icon size={40} />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-textLight">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
