/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "React", level: 85 },
    { name: "TailwindCSS", level: 80 },
    { name: "TypeScript", level: 75 },

  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 75 },
    { name: "Vercel", level: 80 },
    { name: "Framer Motion", level: 85 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-gray-200 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-400"
        >
          Skills & Tools
        </motion.h2>
        <p className="text-gray-400 mt-2">
          A toolkit I use to build, design, and deploy modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-green-400 mb-6">Frontend</h3>
          <div className="space-y-5">
            {skills.frontend.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-2 bg-green-500 rounded"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-green-400 mb-6">Tools</h3>
          <div className="space-y-5">
            {skills.tools.map((tool, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{tool.name}</span>
                  <span>{tool.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.level}%` }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-2 bg-indigo-500 rounded"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
