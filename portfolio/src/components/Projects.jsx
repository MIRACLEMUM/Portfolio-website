/* eslint-disable no-unused-vars */

import { useState } from "react";
import {motion  } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const projects = [
    {
      id: 1,
      title: "Perfume E-Commerce",
      category: "e-commerce",
      description: "A modern perfume store built with React & TailwindCSS.",
      live: "https://parfume-psi.vercel.app/",
      github: "https://github.com/MIRACLEMUM/parfume",
      tech: ["React", "Tailwind", "TypeScript"],
      image: "/perfumemim.webp",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      category: "web3",
      description: "NFT landing page with React, TypeScript and TailwindCSS.",
      live: "https://my-nft-marketplace-six.vercel.app/",
      github: "https://github.com/MIRACLEMUM?tab=repositories",
      tech: ["React", "TypeScript", "tailwindcss"],
      image: "public/nft.png",
    },
    {
      id: 3,
      title: "Productivity App",
      category: "productivity",
      description: "A task management tool with smooth UI.",
      live: "https://example.com",
      github: "https://github.com/example",
      tech: ["React", "Tailwind"],
      image: "/images/productivity.png",
    },
    {
      id: 4,
      title: "Crypto Dashboard",
      category: "blockchain",
      description: "Real-time crypto price tracking dashboard.",
      live: "https://example.com",
      github: "https://github.com/example",
      tech: ["React", "API", "Tailwind"],
      image: "/images/crypto.png",
    },
    {
      id: 5,
      title: "Data Visualization Tool",
      category: "data",
      description: "Interactive charts and graphs using D3.js.",
      live: "https://example.com",
      github: "https://github.com/example",
      tech: ["React", "D3.js", "Tailwind"],
      image: "/images/data.png",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web3",
      description: "Personal portfolio showcasing skills and projects.",
      live: "https://example.com",
      github: "https://github.com/example",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "/portfolio.png",
    },
    {
      id: 7,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Banking UI built with React Native.",
      live: "https://example.com",
      github: "https://github.com/example",
      tech: ["React Native", "Expo"],
      image: "/images/banking.png",
    },
    {
      id: 8,
      title: "E-Learning Platform",
      category: "e-commerce",
      description: "Platform for online courses and tutorials.",
      live: "https://example.com",
      github: "https://github.com/example",
      tech: ["React", "Next.js", "Tailwind"],
      image: "/images/elearning.png",
    },
    {
      id: 9,
      title: "AI Chatbot UI",
      category: "productivity",
      description: "Frontend for an AI chatbot interface.",
      live: "https://example.com",
      github: "https://github.com/example",
      tech: ["React", "Tailwind", "TypeScript"],
      image: "/images/chatbot.png",
    },
  ];

  const categories = [
    "all",
    "web3",
    "e-commerce",
    "blockchain",
    "productivity",
    "data",
    "mobile",
  ];

  const filteredProjects = projects.filter((project) => {
    const searchLower = search.toLowerCase().trim();

    if (searchLower) {
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.category.toLowerCase().includes(searchLower) ||
        project.tech.some((tech) => tech.toLowerCase().includes(searchLower))
      );
    }

    return filter === "all" || project.category === filter;
  });

  // Motion variants for tech tags
  const techContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const techItem = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 text-gray-200 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my works showcasing skills in React, Tailwind, and modern web technologies.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg w-full md:w-1/3 text-black"
        />

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === cat
                  ? "bg-green-500 text-black"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.length === 0 && (
          <p className="text-gray-400 col-span-full text-center">
            No projects found.
          </p>
        )}

        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-slate-800 rounded-xl p-6 shadow-md"
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 10px 20px rgba(34,197,94,0.5)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Tech Tags with Stagger Animation */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              variants={techContainer}
              initial="hidden"
              animate="visible"
            >
              {project.tech.map((t, idx) => (
                <motion.span
                  key={idx}
                  className="text-xs bg-slate-700 px-2 py-1 rounded-md text-gray-300"
                  variants={techItem}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <div className="flex gap-4">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Live
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-green-500 text-green-500 rounded-lg font-semibold"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#22c55e",
                  color: "#000",
                }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
