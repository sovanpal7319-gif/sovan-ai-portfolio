"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPython, FaBrain, FaRobot, FaDatabase } from "react-icons/fa";
import { SiPytorch, SiTensorflow } from "react-icons/si";

const icons = [
  { Icon: FaPython,     x: "8%",  y: "12%" , delay: 0   },
  { Icon: SiPytorch,   x: "83%", y: "8%"  , delay: 1.5 },
  { Icon: FaBrain,     x: "72%", y: "38%" , delay: 3   },
  { Icon: SiTensorflow,x: "12%", y: "55%" , delay: 0.8 },
  { Icon: FaRobot,     x: "48%", y: "22%" , delay: 2.2 },
  { Icon: FaDatabase,  x: "88%", y: "62%" , delay: 4   },
  { Icon: FaPython,    x: "25%", y: "78%" , delay: 5   },
  { Icon: FaBrain,     x: "60%", y: "85%" , delay: 1.2 },
  { Icon: FaRobot,     x: "5%",  y: "88%" , delay: 3.5 },
  { Icon: SiPytorch,   x: "93%", y: "30%" , delay: 2.7 },
];

function GlobalParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number; hue: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() > 0.5 ? 220 : 270;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width  = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      const count = Math.min(150, Math.floor((canvas.width * canvas.height) / 12000));
      particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(canvas.width, canvas.height); p.draw(ctx); });
      drawConnections();
      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", init); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

export default function GlobalBackground() {
  return (
    <>
      {/* Particles + connections — fixed so they cover viewport as you scroll */}
      <GlobalParticles />

      {/* Floating tech icons spread across the full page height */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {icons.map(({ Icon, x, y, delay }, i) => (
          <motion.div
            key={i}
            className="absolute text-white/[0.04] text-5xl"
            style={{ left: x, top: y }}
            animate={{ y: [0, -15, 5, -10, 0], rotate: [0, 5, -5, 3, 0] }}
            transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </>
  );
}