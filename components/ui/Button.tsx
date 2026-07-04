"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  icon?: IconType;
  className?: string;
  download?: boolean;
  target?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon: Icon,
  className = "",
  download,
  target,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5",
    secondary:
      "border border-white/20 text-white hover:bg-white/5 transition-all duration-300",
    ghost:
      "text-slate-300 hover:text-white hover:bg-white/5",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="text-lg" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        download={download}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
