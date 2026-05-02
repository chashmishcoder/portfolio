"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, BookOpen, Trophy, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import AnimatedSection from "./AnimatedSection";

type Badge = "published-ieee" | "published-springer" | "hackathon" | "live" | "in-dev";

interface Project {
  title: string;
  story: string;
  description: string;
  stack: string[];
  results: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  badge?: Badge;
  badgeLabel?: string;
  accent: string;
  featured?: boolean;
  pushed: string;
  stars?: number;
}

const projects: Project[] = [
  {
    title: "Agentic Industrial Diagnostics",
    story:
      "What if a maintenance engineer could sleep while four AI agents diagnosed the breakdown?",
    description:
      "Multi-agent LLM system for real-time root cause analysis of industrial equipment failures. An LSTM Autoencoder catches anomalies with 95.3% precision, an OWL/RDF knowledge graph maps causal chains, and four LangGraph agents (Diagnostic, Reasoning, Planning, Learning) collaborate to produce an explanation and remediation plan in ~77 seconds.",
    stack: ["FastAPI", "LangGraph", "LangChain", "Gemini", "LSTM", "OWL/RDF", "Next.js 14"],
    results: [
      "84.6% root cause identification rate on AI4I dataset",
      "77 s avg. diagnosis, down from 2-4 h manual",
      "72% zero-shot cross-domain transfer (AI4I to MetroPT)",
      "100% workflow success rate",
    ],
    github: "https://github.com/chashmishcoder/Agentic-Root-Cause-Diagnostic-Advisor",
    demo: "https://rca-frontend-dri9.onrender.com/",
    demoLabel: "Live App",
    badge: "published-springer",
    badgeLabel: "Under Review, Springer",
    accent: "#7C3AED",
    featured: true,
    pushed: "Apr 2026",
  },
  {
    title: "SwishFit",
    story: "My two worlds, basketball and code, finally on the same court.",
    description:
      "AI-powered basketball training platform where Google Gemini 2.5 Flash generates personalised workout plans. Role-based access for players, coaches, and admins. JWT + bcrypt + Helmet.js security stack. Deployed on Vercel + Render + MongoDB Atlas.",
    stack: ["React (Vite)", "Node.js", "Express", "MongoDB Atlas", "Gemini 2.5", "JWT"],
    results: [
      "70% bundle size reduction over initial build",
      "90% faster DB queries via compound indexing",
    ],
    github: "https://github.com/chashmishcoder/SwishFit",
    demo: "https://swishfit.vercel.app",
    demoLabel: "swishfit.vercel.app",
    badge: "live",
    badgeLabel: "Live",
    accent: "#16A34A",
    pushed: "Nov 2025",
  },
  {
    title: "GangaFlow",
    story: "One river. Three models. Drone imagery meeting deep learning at scale.",
    description:
      "AI-driven water quality monitoring for the Ganga River Basin. YOLOv8 bounding box detection, U-Net area segmentation, and AlexNet severity classification fused into a single real-time pipeline giving environmental agencies actionable, annotated outputs.",
    stack: ["Python", "YOLOv8", "U-Net", "AlexNet", "OpenCV"],
    results: [
      "Published, IEEE ICoICC 2025",
      "Real-time pollution severity classification from drone feeds",
    ],
    github: "https://github.com/chashmishcoder/GangaFlow",
    demo: "https://ieeexplore.ieee.org/abstract/document/11052075",
    demoLabel: "IEEE Paper",
    badge: "published-ieee",
    badgeLabel: "IEEE ICoICC 2025",
    accent: "#0284C7",
    pushed: "Dec 2024",
    stars: 1,
  },
  {
    title: "CNC Anomaly Detector",
    story: "4,096 vibration samples, one autoencoder, and a Bosch Research benchmark.",
    description:
      "Convolutional autoencoder trained on tri-axial vibration signals from CNC milling machines. Dynamic threshold adapts to machine state drift without retraining. Ships with a live Streamlit dashboard: upload a CSV, get a verdict.",
    stack: ["Python", "Autoencoder NN", "Streamlit", "Signal Processing"],
    results: [
      "86% anomaly recall, 98% specificity",
      "1.2% false positive rate on Bosch CIRP dataset",
    ],
    github: "https://github.com/chashmishcoder/CNC-Milling-Machine-Anomaly-Detection",
    demo: "https://cncanomalyproject.streamlit.app/",
    demoLabel: "Live Demo",
    accent: "#1D4ED8",
    pushed: "Jan 2025",
  },
  {
    title: "Mild Steel Degradation",
    story: "Hackathon prompt: detect rust. My answer: build the whole analysis pipeline.",
    description:
      "Real-time corrosion detection on microscopic steel imagery using CNN + HSV colour segmentation + Canny edge detection. Flask web app with corrosion zone heatmap overlays and automated severity report generation.",
    stack: ["Python", "CNN", "OpenCV", "Flask"],
    results: [
      "15% F1-score improvement over baseline",
      "90%+ user accuracy in severity classification",
    ],
    demo: "https://steel-structure-analysis.streamlit.app/",
    demoLabel: "Live Demo",
    badge: "hackathon",
    badgeLabel: "1st Runner-up, Ninja Hack 2K25",
    accent: "#DC2626",
    pushed: "2025",
  },
  {
    title: "Hotel Reservation MLOps",
    story: "Predicting cancellations, but the point was always the pipeline.",
    description:
      "End-to-end MLOps workflow: MLflow tracks every experiment, FastAPI serves predictions behind API key auth. Ships in Docker Compose.",
    stack: ["Python", "MLflow", "FastAPI", "Random Forest", "Docker", "scikit-learn"],
    results: [
      "Full experiment comparison logged in MLflow",
      "Dockerised from training to serving in one compose file",
    ],
    github: "https://github.com/chashmishcoder/Hotel-Reservation-Prediction",
    accent: "#6B7280",
    pushed: "Apr 2025",
  },
];

function BadgeChip({ badge, label }: { badge: Badge; label: string }) {
  const cls: Record<Badge, string> = {
    "published-ieee":
      "bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800/30",
    "published-springer":
      "bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800/30",
    hackathon:
      "bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800/30",
    live: "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30",
    "in-dev":
      "bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/30",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${cls[badge]}`}>
      {badge === "live" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />}
      {badge === "in-dev" && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 pulse-dot flex-shrink-0" />}
      {(badge === "published-ieee" || badge === "published-springer") && <BookOpen size={10} />}
      {badge === "hackathon" && <Trophy size={10} />}
      {label}
    </span>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <AnimatedSection id="projects" className="py-24 bg-[#FAFAF9] dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section label */}
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
          Projects
        </span>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-16 leading-tight">
          Here&apos;s what I&apos;ve been building.
        </h2>

        {/* ── Flagship ─────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20"
        >
          {/* Browser chrome mock */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-[#2D2D2D] shadow-xl shadow-black/5 dark:shadow-black/30">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-[#1C1C1C] border-b border-gray-200 dark:border-[#2D2D2D]">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 flex-1 bg-gray-200 dark:bg-[#2D2D2D] rounded text-[11px] text-gray-400 dark:text-gray-600 px-3 py-0.5 font-[family-name:var(--font-jetbrains-mono)] truncate">
                {featured.demo ?? featured.github}
              </span>
            </div>

            {/* Preview area */}
            <div
              className="relative h-52 md:h-72 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${featured.accent}18 0%, #0C0C0B 100%)` }}
            >
              <div className="text-center px-8">
                <p className="text-xs font-[family-name:var(--font-jetbrains-mono)] text-gray-500 mb-3 tracking-widest uppercase">
                  Flagship project
                </p>
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-2xl md:text-4xl text-[#F0EFEC] leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 italic max-w-md mx-auto">
                  &ldquo;{featured.story}&rdquo;
                </p>
              </div>
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </div>

          {/* Details below the preview */}
          <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              {featured.badge && (
                <div className="mb-4">
                  <BadgeChip badge={featured.badge} label={featured.badgeLabel!} />
                </div>
              )}
              <p className="text-[0.95rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                {featured.description}
              </p>
              {/* Stack as flowing text */}
              <p className="text-xs text-gray-400 dark:text-gray-600 font-[family-name:var(--font-jetbrains-mono)]">
                {featured.stack.join("  ·  ")}
              </p>
            </div>

            <div className="md:w-60 flex-shrink-0">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-400 dark:text-gray-600 mb-3">
                Outcomes
              </p>
              <ul className="space-y-2">
                {featured.results.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: featured.accent }} />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-6">
                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-gray-200 dark:border-[#2D2D2D] text-gray-500 dark:text-gray-400 rounded-lg hover:text-[#0C0C0B] dark:hover:text-[#F0EFEC] hover:border-gray-400 transition-colors"
                  >
                    <GitHubIcon size={12} /> Code
                  </a>
                )}
                {featured.demo && (
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white rounded-lg transition-colors"
                    style={{ background: featured.accent }}
                  >
                    <ExternalLink size={12} /> {featured.demoLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Rest: compact indexed list ────────────────────── */}
        <div className="mb-4">
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-600">
            More work
          </p>
        </div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="divide-y divide-gray-100 dark:divide-[#1E1E1E]"
        >
          {rest.map((project, i) => (
            <motion.li
              key={project.title}
              variants={fadeUp}
              className="group py-5 flex items-start gap-5"
            >
              {/* Index */}
              <span className="w-6 flex-shrink-0 text-[11px] font-[family-name:var(--font-jetbrains-mono)] text-gray-300 dark:text-gray-700 pt-0.5 select-none">
                0{i + 1}
              </span>

              {/* Accent dot */}
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: project.accent }}
              />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[15px] text-[#0C0C0B] dark:text-[#F0EFEC]">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <BadgeChip badge={project.badge} label={project.badgeLabel!} />
                  )}
                  <span className="text-[11px] text-gray-400 dark:text-gray-600 font-[family-name:var(--font-jetbrains-mono)]">
                    {project.pushed}
                  </span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-3 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  {/* Stack inline */}
                  <p className="text-[11px] text-gray-400 dark:text-gray-600 font-[family-name:var(--font-jetbrains-mono)]">
                    {project.stack.join(" · ")}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-3 ml-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#0C0C0B] dark:hover:text-[#F0EFEC] transition-colors"
                      >
                        <GitHubIcon size={12} /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs transition-colors group-hover:opacity-100 opacity-70"
                        style={{ color: project.accent }}
                      >
                        {project.demoLabel}
                        <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* GitHub CTA */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-[#1E1E1E]">
          <a
            href="https://github.com/chashmishcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0C0C0B] dark:hover:text-[#F0EFEC] transition-colors group"
          >
            <GitHubIcon size={14} />
            See all 30+ repos on GitHub
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </AnimatedSection>
  );
}


