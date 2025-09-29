import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-900 text-gray-200 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-green-400 to-indigo-500 text-transparent bg-clip-text">
              Miracle
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl text-indigo-400 mb-6"
          >
            <Typewriter
              words={["Frontend Developer", "React Enthusiast", "Problem Solver"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 mb-6 leading-relaxed"
          >
            Crafting beautiful, accessible web experiences with modern technologies.
            I specialize in React, TypeScript, and TailwindCSS, turning complex
            problems into simple, intuitive solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold 
              hover:bg-green-400 transition shadow-lg shadow-green-500/50 
              hover:shadow-green-500/70 hover:scale-105 duration-300"
            >
              View My Work
            </a>
            <a
              href="/public/Brown Simple Resume.pdf"
              download
              className="px-6 py-3 border border-green-500 text-green-500 rounded-lg font-semibold 
              hover:bg-green-500 hover:text-black transition shadow-lg shadow-green-500/30 
              hover:shadow-green-500/60 hover:scale-105 duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right image with glowing effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex-1 flex justify-center"
        >
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-4 border-green-500 
            shadow-[0_0_40px_#22c55e,0_0_80px_#22c55e] animate-pulse"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
