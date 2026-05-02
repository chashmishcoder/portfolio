"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const NODE_COUNT = 28;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      const nodeColor = isDark ? "rgba(96,165,250,0.55)" : "rgba(29,78,216,0.35)";
      const lineBase = isDark ? "96,165,250" : "29,78,216";

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineBase},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = nodeColor;
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrame = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(() => { resize(); init(); });
    observer.observe(canvas);
    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      aria-hidden
    />
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF9] dark:bg-[#0F0F0E]"
    >
      <NeuralCanvas />

      {/* Blueprint dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(29,78,216,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 pt-28 pb-20 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Name — viewport scale, name IS the layout */}
          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[0.92] tracking-[-0.03em] text-[clamp(4rem,13vw,11rem)] text-[#0C0C0B] dark:text-[#F0EFEC] mb-6"
          >
            Omkar<br />
            <span className="text-[#1D4ED8] dark:text-[#60A5FA]">Thorve.</span>
          </motion.h1>

          {/* Single bio line — nothing more */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-md leading-relaxed"
          >
            I build AI systems from research to deployment.
            Some become papers. Some go live. A few do both.
          </motion.p>

          {/* Text-link CTAs — no buttons, no borders */}
          <motion.div variants={itemVariants} className="flex items-center gap-8">
            <a
              href="#projects"
              className="group flex items-center gap-1.5 text-sm font-medium text-[#0C0C0B] dark:text-[#F0EFEC] hover:text-[#1D4ED8] dark:hover:text-[#60A5FA] transition-colors"
            >
              work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-[#0C0C0B] dark:hover:text-[#F0EFEC] transition-colors"
            >
              contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-[#0C0C0B] dark:hover:text-[#F0EFEC] transition-colors"
            >
              résumé
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
