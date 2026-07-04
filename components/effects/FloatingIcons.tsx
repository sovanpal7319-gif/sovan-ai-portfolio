"use client";

import { FaPython, FaBrain, FaRobot, FaDatabase } from "react-icons/fa";
import { SiPytorch, SiTensorflow } from "react-icons/si";
import { motion } from "framer-motion";

const icons = [
  { Icon: FaPython, x: "10%", y: "20%", delay: 0 },
  { Icon: SiPytorch, x: "85%", y: "15%", delay: 1.5 },
  { Icon: FaBrain, x: "75%", y: "70%", delay: 3 },
  { Icon: SiTensorflow, x: "15%", y: "75%", delay: 0.8 },
  { Icon: FaRobot, x: "50%", y: "10%", delay: 2.2 },
  { Icon: FaDatabase, x: "90%", y: "50%", delay: 4 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-white/[0.03] text-4xl md:text-5xl"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 5, -10, 0],
            rotate: [0, 5, -5, 3, 0],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
