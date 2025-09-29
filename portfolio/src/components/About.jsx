import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function About() {
  const skills = ["React", "TailwindCSS", "TypeScript", "Framer Motion", "Next.js", "GitHub"];
  const funFacts = ["Coffee enthusiast ☕", "Loves puzzles 🧩", "Music lover 🎵"];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 bg-background text-textDark relative"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-textLight max-w-2xl mx-auto">
          Get to know the person behind the code and the journey that led me here.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto relative">
        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 bg-slate-800/60 p-8 rounded-2xl shadow-lg hover:shadow-primary/30 transition-shadow z-10"
        >
          <h3 className="text-2xl font-semibold mb-4">My Story</h3>
          <p className="text-textLight leading-relaxed mb-4">
            I’m a passionate frontend developer with over 2 years of experience
            creating beautiful, functional, and user-centered digital experiences.
            My journey began with curiosity for how things work and evolved into a
            love for crafting solutions that make people’s lives easier and more enjoyable.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-textLight mb-6">
            <MapPin size={16} className="text-primary" />
            <span>Akwa Ibom, Nigeria</span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                className="bg-slate-700 px-3 py-1 rounded-full text-xs text-green-400 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Call-to-Action */}
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
          >
            Let’s Connect
          </a>
        </motion.div>

        {/* Profile Image with Background Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center relative"
        >
          {/* Green radial background */}
          <div className="absolute w-80 h-80 bg-green-500/20 rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>

          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-xl border-4 border-primary shadow-lg 
                       hover:scale-105 transition-transform duration-300 shadow-green-500/50 z-10"
          />
        </motion.div>
      </div>

      {/* Fun Facts */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {funFacts.map((fact, idx) => (
          <motion.span
            key={idx}
            className="text-sm text-green-400 bg-slate-800/50 px-3 py-1 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            {fact}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
