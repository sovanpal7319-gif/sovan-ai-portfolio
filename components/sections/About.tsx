"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutData } from "@/lib/data";
import {
  FaGraduationCap,
  FaBrain,
  FaMicrochip,
  FaRobot,
  FaNetworkWired,
} from "react-icons/fa";

const highlights = [
    {
    icon: FaMicrochip,
    title: "Machine Learning",
    desc: "Regression, classification, clustering, and ensemble learning",
  },
  {
    icon: FaBrain,
    title: "Deep Learning & NLP",
    desc: "PyTorch, Transformers, BERT, and advanced NLP systems",
  },
  {
    icon: FaRobot,
    title: "Reinforcement Learning",
    desc: "Building intelligent agents that learn adaptive strategies",
  },
  {
    icon: FaNetworkWired,
    title: "Intelligent Systems",
    desc: "Designing AI-powered systems for real-world applications",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div
        style={{
          position: "absolute", top: 0, left: "25%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: 0, right: "25%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
        }}
      />

      {/* ── Outer: full width, flex-center ── */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative", zIndex: 10 }}>
        {/* ── Inner: fixed max width with inline padding ── */}
        <div ref={ref} style={{ width: "100%", maxWidth: 1152, paddingLeft: 64, paddingRight: 64 }}>

          {/* Section Label */}
          <motion.div
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div style={{ height: 1, width: 32, background: "linear-gradient(to right, #6366f1, #06b6d4)" }} />
            <span style={{ color: "#818cf8", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              About Me
            </span>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-start">
            {/* Left — Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Building{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Intelligent
                </span>{" "}
                Systems
              </h2>
              <p className="text-slate-300 text-lg leading-8 mb-5">{aboutData.bio}</p>
              <p className="text-slate-400 text-base leading-8 mb-5">
                My work spans deep learning, NLP, reinforcement learning, and intelligent systems — with a strong focus on building impactful AI applications that solve real-world problems.
              </p>
              <p className="text-slate-400 text-base leading-8">
                I&apos;m especially interested in autonomous AI agents, reasoning systems, and scalable AI engineering that bridges research with production-grade applications.
              </p>
            </motion.div>

            {/* Right — Stats + Education */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {aboutData.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 text-center"
                  >
                    <p className="text-3xl font-bold bg-gradient-to-br from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Education */}
              {aboutData.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-indigo-500/15 bg-indigo-500/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center shrink-0 mt-1">
                      <FaGraduationCap className="text-indigo-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base leading-snug mb-1">{edu.degree}</p>
                      <p className="text-indigo-300 text-sm font-medium mb-2">{edu.institution} · {edu.year}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Highlight Cards — 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:border-indigo-500/25 transition-all duration-500 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/8 to-cyan-500/5 rounded-2xl" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500" />
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-indigo-400 text-xl" />
                  </div>
                  <h3 className="relative z-10 text-white font-semibold text-base mb-2 group-hover:text-indigo-300 transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}