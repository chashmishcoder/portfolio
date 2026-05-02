"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const publications = [
  {
    title:
      "GangaFlow: A Multi-Model Deep Learning Framework for Real-Time River Pollution Detection and Analysis Using Drone Imagery",
    venue: "IEEE ICoICC 2025",
    status: "published" as const,
    link: "https://ieeexplore.ieee.org/abstract/document/11052075",
  },
  {
    title:
      "Agentic Industrial Diagnostics: A Multi-Agent LLM Framework for Explainable Root Cause Analysis",
    venue: "Under Review, Springer",
    status: "under-review" as const,
  },
];

export default function Publications() {
  return (
    <AnimatedSection id="publications" className="py-24 bg-gray-50 dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
          Publications
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-12 leading-tight">
          Research contributions.
        </h2>

        <div className="flex flex-col gap-4">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex gap-4 p-6 bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-[#2D2D2D]"
              style={{
                borderLeftWidth: "3px",
                borderLeftColor: pub.status === "published" ? "#16A34A" : "#D97706",
              }}
            >
              <BookOpen
                className="flex-shrink-0 mt-0.5 text-gray-400 dark:text-gray-600"
                size={18}
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#0C0C0B] dark:text-[#F0EFEC] leading-snug mb-3 text-sm md:text-base">
                  {pub.title}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      pub.status === "published"
                        ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                        : "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400"
                    }`}
                  >
                    {pub.venue}
                  </span>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#1D4ED8] dark:text-[#60A5FA] hover:underline"
                    >
                      View paper <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
