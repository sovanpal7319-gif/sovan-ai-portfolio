"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SectionTitle from "@/components/ui/SectionTitle";
import { socialLinks } from "@/lib/data";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="contact"
      className="py-32 sm:py-40 overflow-hidden"
    >
      <div
        className="max-w-5xl mx-auto px-6 sm:px-8"
        ref={ref}
      >
        {/* Heading */}
        <SectionTitle title="Get In Touch" />

        {/* Small Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8 -mt-8"
        >
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-sm tracking-wide text-slate-300">
            LET&apos;S CONNECT
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Main Heading */}
          <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-9 mb-16">
            I&apos;m always open to discussing new projects,
            creative ideas, AI research collaborations,
            or opportunities to build impactful intelligent systems.
          </p>

          {/* Contact Cards */}
          <div className="space-y-5">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  className="group relative flex items-center justify-between rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7 hover:border-indigo-500/20 transition-all duration-500"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 rounded-3xl" />

                  {/* Left */}
                  <div className="relative z-10 flex items-center gap-5 text-left">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-all duration-300">
                      <Icon className="text-indigo-400 text-2xl" />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-slate-400 text-sm mb-1">
                        {link.label}
                      </p>

                      <p className="text-white text-lg sm:text-xl font-semibold break-all">
                        {link.href
                          .replace("mailto:", "")
                          .replace("https://", "")}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white/[0.03] flex items-center justify-center group-hover:bg-indigo-500/10 transition-all duration-300">
                    <span className="text-indigo-400 text-2xl">
                      ↗
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-14 text-slate-400 text-lg"
          >
            ✦ Looking forward to{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              connecting
            </span>{" "}
            with you!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}