"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "John Deere India Pvt. Ltd.",
    role: "AI/ML Intern",
    period: "Jun 2025 – Dec 2025",
    location: "Pune · On-site",
    dotColor: "#16A34A",
    highlights: [
      {
        text: "Applied object detection & segmentation models (YOLO, SAM2, DETR, ViT, Grounding DINO) to automate manual processes",
        metric: "saved 4+ hrs/task",
      },
      {
        text: "Fine-tuned Large Language Models on custom image datasets",
        metric: "50% accuracy improvement, hallucinations reduced",
      },
      {
        text: "Built end-to-end speech-to-text pipeline: Whisper + GPT-4o Transcribe + GPT-4o Mini with JS frontend/backend",
        metric: "10% transcription boost, saved 2 hrs/day",
      },
      {
        text: "Designed multi-agent workflow using Knowledge Graphs + GNN, deployed on AWS (EC2, S3, DynamoDB)",
        metric: "4+ hours saved in document workflows",
      },
      {
        text: "Implemented cross-encoder reranker for semantic retrieval outperforming similarity search. Databricks for large-scale extraction + OpenAI embeddings for evaluation",
        metric: "",
      },
      {
        text: "Conducted hallucination-reduction experiments for deployed LLMs",
        metric: "improved reliability & robustness",
      },
    ],
    tags: ["Python", "YOLO", "SAM2", "LangGraph", "AWS", "GPT-4o", "Databricks", "GNN", "LangChain"],
  },
  {
    company: "K.S.J Recruitment Pvt. Ltd.",
    role: "Data Analyst Intern",
    period: "Feb 2023 – Feb 2024",
    location: "Remote",
    dotColor: "#7C3AED",
    highlights: [
      {
        text: "Created and maintained Power BI dashboards for recruitment metrics, providing actionable insights to optimize hiring strategies",
        metric: "",
      },
      {
        text: "Performed data cleaning and analysis using Excel and Python ensuring accurate reporting",
        metric: "",
      },
      {
        text: "Automated data workflows",
        metric: "20% reduction in manual effort",
      },
      {
        text: "Collaborated with cross-functional teams to streamline recruitment data pipelines",
        metric: "",
      },
    ],
    tags: ["Python", "Power BI", "Excel", "SQL"],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.7"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <AnimatedSection id="experience" className="py-24 bg-gray-50 dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
          Experience
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-16 leading-tight">
          Where I&apos;ve built things.
        </h2>

        <div ref={containerRef} className="relative">
          {/* Timeline track */}
          <div className="absolute left-4 md:left-6 top-3 bottom-3 w-px bg-gray-200 dark:bg-[#2D2D2D]" aria-hidden>
            <motion.div
              className="w-full bg-[#1D4ED8] dark:bg-[#60A5FA] origin-top"
              style={{ scaleY: lineScaleY, height: "100%" }}
            />
          </div>

          <div className="space-y-14">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div
                  className="absolute left-2 md:left-4 top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-[#FAFAF9] dark:bg-[#0F0F0E]"
                  style={{ borderColor: exp.dotColor }}
                  aria-hidden
                />

                {/* Card */}
                <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-[#2D2D2D] p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.dotColor }}
                        />
                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[#0C0C0B] dark:text-[#F0EFEC]">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-[#1D4ED8] dark:text-[#60A5FA] font-semibold text-sm ml-4">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                      <div className="font-medium">{exp.period}</div>
                      <div className="text-xs mt-0.5">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="text-gray-300 dark:text-gray-600 mt-0.5 flex-shrink-0 text-xs">→</span>
                        <span>
                          {h.text}
                          {h.metric && (
                            <span className="ml-1.5 inline-flex items-center font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#1D4ED8] dark:text-[#60A5FA] bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800/40 font-medium">
                              {h.metric}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-[#0F0F0E] text-gray-600 dark:text-gray-400 rounded-md border border-gray-200 dark:border-[#2D2D2D] font-[family-name:var(--font-jetbrains-mono)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
