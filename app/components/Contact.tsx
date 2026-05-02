"use client";

import { Mail, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "./SocialIcons";
import AnimatedSection from "./AnimatedSection";

const links = [
  {
    icon: Mail,
    label: "omkar.thorve2001@gmail.com",
    href: "mailto:omkar.thorve2001@gmail.com",
  },
  {
    icon: LinkedInIcon,
    label: "linkedin.com/in/omkar-thorve-47595a111",
    href: "https://www.linkedin.com/in/omkar-thorve-47595a111",
  },
  {
    icon: GitHubIcon,
    label: "github.com/chashmishcoder",
    href: "https://github.com/chashmishcoder",
  },
  {
    icon: TwitterXIcon,
    label: "@_hustle_master",
    href: "https://twitter.com/_hustle_master",
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-24 bg-[#FAFAF9] dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#1D4ED8] dark:text-[#60A5FA] mb-3 block">
            Contact
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-[#0C0C0B] dark:text-[#F0EFEC] mb-4 leading-tight">
            Let&apos;s build something.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-[0.95rem]">
            I&apos;m open to ML engineering roles, research collaborations, and genuinely interesting
            problems. Drop me a line. I read every message.
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-[#1D4ED8] dark:hover:text-[#60A5FA] transition-colors group"
              >
                <span className="p-2 bg-gray-100 dark:bg-[#1A1A1A] rounded-lg border border-gray-200 dark:border-[#2D2D2D] group-hover:border-[#1D4ED8]/30 transition-colors">
                  <Icon size={14} />
                </span>
                {label}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1D4ED8] text-white font-medium rounded-lg hover:bg-[#1E40AF] transition-colors text-sm"
          >
            <FileText size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
