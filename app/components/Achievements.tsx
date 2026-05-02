"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const achievements = [
  {
    emoji: "🏆",
    title: "1st Runner-up",
    event: "The Great Ninja Hack 2K25",
    org: "DYPCET Kolhapur",
    detail: "Mild Steel Degradation Analysis Using Microscopic Imaging & Deep Learning",
    colorCls: "border-t-amber-400",
  },
  {
    emoji: "🥇",
    title: "1st Position",
    event: "Smart India Hackathon",
    org: "Internal, SIT",
    detail: "Traffic Signal Control System using YOLOv5 + Reinforcement Learning",
    colorCls: "border-t-blue-500",
  },
  {
    emoji: "🥈",
    title: "2nd Runner-up",
    event: "Best Manager Competition",
    org: "NICMAR University",
    detail: "Competed in the prestigious national-level management challenge",
    colorCls: "border-t-purple-500",
  },
  {
    emoji: "🏀",
    title: "Zonal Champion",
    event: "Basketball, Team Captain",
    org: "Deogiri Institute",
    detail: "Led college team to zonal championship. Competed at State & National level.",
    colorCls: "border-t-green-500",
    note: "Not everything I build is code.",
  },
];

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-24 bg-gray-50 dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
          Achievements
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-12 leading-tight">
          Outside the notebooks.
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.title + a.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              className={`bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-[#2D2D2D] border-t-4 p-5 flex flex-col gap-3 ${a.colorCls}`}
            >
              <span className="text-3xl">{a.emoji}</span>
              <div>
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0C0C0B] dark:text-[#F0EFEC] text-base leading-tight">
                  {a.title}
                </p>
                <p className="text-[#1D4ED8] dark:text-[#60A5FA] text-sm font-semibold mt-0.5">
                  {a.event}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{a.org}</p>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {a.detail}
              </p>
              {a.note && (
                <p className="text-xs text-gray-400 dark:text-gray-500 italic border-t border-gray-100 dark:border-[#2D2D2D] pt-2">
                  {a.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
