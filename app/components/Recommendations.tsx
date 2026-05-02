"use client";

import { motion, type Variants } from "framer-motion";
import { LinkedInIcon } from "./SocialIcons";
import AnimatedSection from "./AnimatedSection";

interface Recommendation {
  name: string;
  title: string;
  company: string;
  relationship: string;
  quote: string;
  linkedIn?: string;
  initials: string;
  accentColor: string;
}

// ─── Replace placeholder content with real LinkedIn recommendations ───────────
const recommendations: Recommendation[] = [
  {
    name: "Dr. Pooja Kamat",
    title: "Associate Professor (AI and ML) | Research Associate, SCAAI",
    company: "Symbiosis Institute of Technology",
    relationship: "Pooja was Omkar's mentor",
    quote:
      "I guided Omkar through his M.Tech dissertation project over the past year, with a focus on agentic AI for predictive maintenance closely aligned with my own research area. What stood out was his ability to work independently. He took ownership of both the research and implementation, showing strong research instincts and a genuinely hardworking attitude. Our collaboration resulted in a paper currently under review with Springer. He has deep knowledge of agentic frameworks and systems, and the kind of intellectual curiosity that drives good research. I'd genuinely recommend him for roles in AI/ML, he's the kind of student you don't have to push.",
    linkedIn: "https://www.linkedin.com/in/pooja-kamat-b5ba5119/",
    initials: "PK",
    accentColor: "#7C3AED",
  },
  {
    name: "Nishit Bohra M",
    title: "AI Engineer · LLMs · RAG · Agentic AI | IEEE Author · Patent Holder",
    company: "John Deere",
    relationship: "Colleague at M.Tech & John Deere",
    quote:
      "I had the chance to work closely with Omkar during our M.Tech, where we collaborated on projects, patents, and hackathons together. He's a dedicated and skilled person who always brings good ideas and a calm problem-solving approach to the team. It was great continuing the journey as colleagues at John Deere as well. I'd definitely recommend him to anyone looking for a reliable and talented professional.",
    linkedIn: "https://www.linkedin.com/in/nishitbohram/",
    initials: "NB",
    accentColor: "#1D4ED8",
  },
  {
    name: "Latheef D",
    title: "Data Scientist",
    company: "John Deere",
    relationship: "Project lead on the 2D drawing automation tool",
    quote:
      "I had the privilege of collaborating with Omkar during his internship, where he contributed to several AI and automation projects. His energy and eagerness to learn were remarkable, especially in exploring and implementing GenAI technologies and making them practically workable. As an intern, grasping complex concepts and applying them effectively is never easy, yet Omkar managed it with confidence. Though he started with limited business knowledge, he quickly picked up the essentials and worked towards delivering solutions aligned with business needs. Omkar's adaptability, curiosity, and commitment to learning made him a valuable contributor, and I am confident he will continue to excel in his career.",
    linkedIn: "",
    initials: "LD",
    accentColor: "#16A34A",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Recommendations() {
  return (
    <AnimatedSection id="recommendations" className="py-24 bg-white dark:bg-[#111110]">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
          Recommendations
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-4 leading-tight">
          What people say.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base mb-12 max-w-lg">
          From colleagues, managers, and mentors, in their own words.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {recommendations.map((rec) => (
            <motion.div
              key={rec.name + rec.relationship}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FAFAF9] dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-[#2D2D2D] p-6 flex flex-col"
              style={{ borderTopWidth: "2px", borderTopColor: rec.accentColor }}
            >
              {/* Quote */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-6">
                &ldquo;{rec.quote}&rdquo;
              </p>

              {/* Recommender */}
              <div className="flex items-center gap-3">
                {/* Avatar initials */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: rec.accentColor }}
                >
                  {rec.initials}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-[#0C0C0B] dark:text-[#F0EFEC] truncate">
                    {rec.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                    {rec.title} · {rec.company}
                  </p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-600 mt-0.5 font-[family-name:var(--font-jetbrains-mono)]">
                    {rec.relationship}
                  </p>
                </div>

                {rec.linkedIn && (
                  <a
                    href={rec.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-gray-300 dark:text-gray-700 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors"
                    aria-label={`${rec.name} on LinkedIn`}
                  >
                    <LinkedInIcon size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-xs text-gray-400 dark:text-gray-600">
          Full recommendations on{" "}
          <a
            href="https://www.linkedin.com/in/omkar-thorve-47595a111"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#0A66C2] transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </AnimatedSection>
  );
}
