"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16"
      >
        {/* Section Label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-cyan-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            Featured Projects
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A collection of AI/ML projects spanning deep learning, reinforcement
            learning, NLP, and production-grade intelligent systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <motion.article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02] hover:border-indigo-500/20 transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/4 to-cyan-500/4 pointer-events-none z-0" />
              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 z-10" />

              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent" />

                {/* Language badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-indigo-300 text-xs font-semibold tracking-wide">
                    {project.tech[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 p-6 gap-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-slate-300 text-xs font-medium hover:border-indigo-500/30 hover:bg-indigo-500/8 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5" />

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/8 bg-white/[0.03] text-white text-sm font-medium hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300"
                  >
                    <FaGithub className="text-base" />
                    Code
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-500 text-sm font-medium cursor-not-allowed">
                      <FaExternalLinkAlt className="text-xs" />
                      Demo Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}