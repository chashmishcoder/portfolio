"use client";

import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const articles = [
  {
    title: "Getting Started with RAG: Building a Document Q&A System",
    excerpt: "How to build a retrieval-augmented generation pipeline from scratch: chunking, embeddings, and why similarity search isn't always enough.",
    tag: "RAG · LLMs",
  },
  {
    title: "What I Learned Building a Multi-Agent System at John Deere",
    excerpt: "The gap between a multi-agent demo and a production-grade system is larger than the papers make it seem. Here's what actually surprised me.",
    tag: "Agentic AI · Real-world",
  },
  {
    title: "From Mechanical Engineering to ML: The Honest Version",
    excerpt: "Not a LinkedIn pivot story. A practical account of what transferred, what didn't, and what I had to relearn from scratch.",
    tag: "Career · Learning",
  },
];

export default function Writing() {
  return (
    <AnimatedSection id="writing" className="py-24 bg-gray-50 dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
          Writing
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-3 leading-tight">
          Things worth writing down.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base mb-12 max-w-lg">
          I write about what I&apos;m learning: RAG pipelines, ML systems, things that took me too long
          to figure out.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-[#2D2D2D] p-5 flex flex-col gap-3"
            >
              <span className="text-xs font-medium text-[#1D4ED8] dark:text-[#60A5FA] bg-blue-50 dark:bg-blue-950/20 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800/30 self-start">
                {article.tag}
              </span>
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-sm text-[#0C0C0B] dark:text-[#F0EFEC] leading-snug flex-1">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://chashmishcoder.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1D4ED8] dark:text-[#60A5FA] hover:underline"
        >
          Read all articles on Hashnode <ExternalLink size={13} />
        </a>
      </div>
    </AnimatedSection>
  );
}
