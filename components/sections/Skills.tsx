"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "@/lib/data";
import { FaCode, FaBrain, FaComments, FaChartBar, FaTools } from "react-icons/fa";
import { IconType } from "react-icons";

const categoryIcons: Record<string, IconType> = {
  Programming: FaCode,
  "Machine Learning": FaBrain,
  NLP: FaComments,
  "Data Science": FaChartBar,
  Tools: FaTools,
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16">

        {/* Label */}
        <motion.div className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-cyan-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Technical Skills</span>
        </motion.div>

        {/* Heading */}
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What I{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Work With</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A curated set of tools and technologies I use to build intelligent, production-grade AI systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, catIdx) => {
            const CatIcon = categoryIcons[category.category] || FaCode;
            return (
              <motion.div
                key={category.category}
                className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02] p-7 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-500 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.12, duration: 0.6 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500" />

                <div className="relative z-10 flex items-start gap-4 mb-6">
                  <div className="min-w-[52px] h-13 w-13 rounded-2xl bg-indigo-500/10 flex items-center justify-center p-3 group-hover:bg-indigo-500/20 transition-all duration-300 group-hover:scale-110">
                    <CatIcon className="text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold leading-tight group-hover:text-indigo-300 transition-colors duration-300">{category.category}</h3>
                    <p className="text-slate-500 text-sm mt-1">{category.skills.length} Technologies</p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-slate-300 text-sm font-medium hover:border-indigo-500/30 hover:bg-indigo-500/8 hover:text-white transition-all duration-300 cursor-default">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}