"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "2–4 hrs", label: "Diagnosis time cut to 77 s" },
  { value: "3", label: "Systems in production" },
  { value: "20%", label: "Inference cost reduced" },
  { value: "2", label: "Peer-reviewed papers" },
];

const chips = [
  { emoji: "⚙️", label: "Ex-mechanical engineer" },
  { emoji: "🏀", label: "Zonal basketball captain" },
  { emoji: "📝", label: "Writes on Hashnode" },
  { emoji: "🔬", label: "Currently: Production RAG" },
  { emoji: "🏭", label: "AI × industrial systems" },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 bg-[#FAFAF9] dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Narrative */}
          <div>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
              About
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-8 leading-tight">
              The engineer who crossed disciplines.
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-[0.95rem]">
              <p>
                Mechanical engineer turned AI/ML researcher. I train models, build pipelines,
                and ship products. Not the &ldquo;I use the ChatGPT API&rdquo; kind.
              </p>
              <p>
                I care about the gap between a model that works on Colab and one that holds up
                on real sensor data. That&apos;s where most of my work lives.
              </p>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-8">
              {chips.map(({ emoji, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-[#1A1A1A] text-sm text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-[#2D2D2D]"
                >
                  <span>{emoji}</span>
                  <span>{label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats + cards */}
          <div className="space-y-5">
            {/* Stats grid */}
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-600 mb-3">
              Impact by the numbers
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-5 bg-gray-100 dark:bg-[#1A1A1A] rounded-xl border border-gray-200 dark:border-[#2D2D2D]"
                >
                  <div className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-[#1D4ED8] dark:text-[#60A5FA] mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</div>
                </div>
              ))}
            </div>

            {/* Currently exploring */}
            <div className="p-5 border border-blue-200 dark:border-blue-800/40 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-2">
                Currently exploring
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Reinforcement learning, machine vision, and AI-driven industrial automation.
                Also building production-grade generative AI apps, not wrappers. Full systems.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="pl-4 border-l-2 border-[#1D4ED8] dark:border-[#60A5FA] italic text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              &ldquo;Mechanical engineering taught me how systems fail.
              AI taught me how to predict it before they do.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
