"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { researchData } from "@/lib/data";

export default function Research() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="research" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16">

        {/* Label */}
        <motion.div className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-cyan-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Research Interests</span>
        </motion.div>

        {/* Heading */}
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What I{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Explore</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Exploring cutting-edge domains in artificial intelligence, intelligent systems, deep learning, and scalable AI-driven applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchData.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02] p-7 hover:border-indigo-500/20 transition-all duration-500 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-indigo-400 text-xl" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-7">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}