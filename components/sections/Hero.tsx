"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { heroData } from "@/lib/data";
import TypeWriter from "@/components/ui/TypeWriter";
import Button from "@/components/ui/Button";

export default function Hero() {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.05, duration: 0.5 },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle hero-only glow on top of global background */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              className="text-slate-300 text-lg md:text-xl mb-4 font-mono"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {heroData.greeting}
            </motion.p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              {heroData.name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className={char === " " ? "" : "gradient-text text-glow"}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            {/* Role typewriter */}
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-medium text-indigo-400 mb-8 h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <TypeWriter words={heroData.roles} />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-slate-300 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              Building intelligent systems at the intersection of deep learning,
              NLP, and reinforcement learning — transforming research into
              production-grade AI solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <Button href="#projects" icon={FaArrowRight}>View Projects</Button>
              <Button variant="secondary" href={heroData.resumeUrl} icon={FaDownload} download>Resume</Button>
              <Button variant="secondary" href={heroData.githubUrl} icon={FaGithub} target="_blank">GitHub</Button>
              <Button variant="secondary" href={heroData.linkedinUrl} icon={FaLinkedin} target="_blank">LinkedIn</Button>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 opacity-60 blur-sm animate-pulse-glow" />

            {/* Dark background circle + image */}
            <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-[#0a0a0f] bg-[#0d0d14]">
              {/* Negative top pushes image UP so hair touches the circle edge */}
              <div className="absolute inset-0" style={{ top: "-8%", bottom: "-8%" }}>
                <Image
                  src="/profile.jpeg"
                  alt="Sovan Pal"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Subtle dark vignette around edges */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_25px_8px_rgba(10,10,15,0.55)] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-indigo-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}