"use client";

import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="text-xl font-bold gradient-text-accent">SP</span>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label={link.label}
              >
                <link.icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Sovan Pal. All rights reserved.
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
