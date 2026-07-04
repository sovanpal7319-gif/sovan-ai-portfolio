"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="mb-16 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>

      <div className="w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

      {subtitle && (
        <p className="mt-5 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}