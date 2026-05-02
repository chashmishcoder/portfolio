"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Languages & Libraries",
    subtitle: "The building blocks.",
    skills: [
      "Python", "C", "SQL", "PyTorch", "TensorFlow", "NumPy", "SciPy",
      "OpenCV", "NLTK", "Flask", "Hugging Face Transformers",
      "LangChain", "LangGraph", "GCP Gymnasium",
    ],
    tagCls:
      "bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800/30",
    headingCls: "text-blue-700 dark:text-blue-400",
  },
  {
    title: "AI / ML Domains",
    subtitle: "What I actually know.",
    skills: [
      "LLMs", "RAG", "Agentic AI", "Computer Vision", "NLP",
      "CNN", "RNN", "GNN", "Transformers", "GANs", "AutoEncoders",
      "Reinforcement Learning", "Image Processing", "MCP",
    ],
    tagCls:
      "bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800/30",
    headingCls: "text-purple-700 dark:text-purple-400",
  },
  {
    title: "Tools & Infrastructure",
    subtitle: "How I ship.",
    skills: [
      "Git", "Docker", "AWS (EC2, S3, DynamoDB)", "Streamlit",
      "Power BI", "Databricks", "Pinecone", "LangSmith", "Linux", "Vercel",
    ],
    tagCls:
      "bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800/30",
    headingCls: "text-green-700 dark:text-green-400",
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24 bg-[#FAFAF9] dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
          Skills
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-12 leading-tight">
          What&apos;s in the toolkit.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className="p-6 bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-[#2D2D2D]"
            >
              <h3 className={`font-[family-name:var(--font-space-grotesk)] font-bold text-base mb-1 ${cat.headingCls}`}>
                {cat.title}
              </h3>
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-4 italic">{cat.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.22,
                      delay: catIdx * 0.04 + i * 0.025,
                    }}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md border ${cat.tagCls}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
