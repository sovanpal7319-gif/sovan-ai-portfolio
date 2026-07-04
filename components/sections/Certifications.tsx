"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certificationsData } from "@/lib/data";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-600/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16">

        {/* Label */}
        <motion.div className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-cyan-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Certifications</span>
        </motion.div>

        {/* Heading */}
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Credentials &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Verified credentials and course completions that demonstrate expertise across AI, ML, and data science domains.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/[0.02] p-6 hover:border-indigo-500/20 transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500" />

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                  <FaCertificate className="text-indigo-400 text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-1 text-base group-hover:text-indigo-300 transition-colors duration-300">{cert.title}</h3>
                  <p className="text-indigo-400 text-sm font-medium mb-1">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs mb-3">{cert.date}</p>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-cyan-400 transition-colors">
                      <FaExternalLinkAlt className="text-[10px]" />
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}