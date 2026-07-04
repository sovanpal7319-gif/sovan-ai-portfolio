"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ background: "#0a0a0f" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Outer ring */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-full border-2 border-transparent"
              style={{
                borderTopColor: "#3b82f6",
                borderRightColor: "#a855f7",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner ring */}
            <motion.div
              className="absolute w-12 h-12 rounded-full border-2 border-transparent"
              style={{
                borderBottomColor: "#06b6d4",
                borderLeftColor: "#3b82f6",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
            {/* Center dot */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>

          {/* Text */}
          <motion.p
            className="absolute mt-32 text-sm text-gray-500 font-mono tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            INITIALIZING
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
