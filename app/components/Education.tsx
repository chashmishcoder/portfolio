"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    degree: "M.Tech in Artificial Intelligence and Machine Learning",
    institution: "Symbiosis Institute of Technology",
    period: "2024 – 2026",
    coursework: [
      "Supervised & Unsupervised ML",
      "Deep Learning",
      "Machine Vision",
      "NLP",
      "Reinforcement Learning",
      "Graph Neural Networks",
      "GANs",
      "LLMs",
      "Agentic AI",
    ],
    badge: "In Progress",
    badgeCls: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
    accentColor: "#1D4ED8",
  },
  {
    degree: "B.Tech in Mechanical Engineering",
    institution: "Deogiri Institute of Engineering and Management Studies, Aurangabad",
    period: "2020 – 2023",
    coursework: [
      "Image Processing",
      "Linear Algebra",
      "Calculus",
      "Numerical Analysis",
      "Statistics",
      "Control Systems",
      "Python",
      "Linux",
    ],
    badge: "Completed",
    badgeCls: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400",
    accentColor: "#16A34A",
  },
];

const certifications = [
  { title: "Generative AI Engineering with LLMs", issuer: "IBM" },
  { title: "Data Analysis and Visualization with Power BI", issuer: "Microsoft" },
  { title: "AWS Cloud Training", issuer: "Unnati Development Pvt Ltd" },
];

export default function Education() {
  return (
    <AnimatedSection id="education" className="py-24 bg-[#FAFAF9] dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
          Education
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-12 leading-tight">
          Where the foundation was built.
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-[#2D2D2D] p-6"
              style={{ borderTopWidth: "3px", borderTopColor: edu.accentColor }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-base text-[#0C0C0B] dark:text-[#F0EFEC] leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{edu.period}</p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${edu.badgeCls}`}>
                  {edu.badge}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                  Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-[#0F0F0E] text-gray-600 dark:text-gray-400 rounded border border-gray-200 dark:border-[#2D2D2D]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-500 mb-5">
            Certifications
          </p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="px-4 py-3 bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-[#2D2D2D] flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#0C0C0B] dark:text-[#F0EFEC]">{cert.title}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
