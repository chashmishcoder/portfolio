"use client";

import { GitHubIcon, LinkedInIcon, TwitterXIcon, HashnodeIcon } from "./SocialIcons";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: GitHubIcon, href: "https://github.com/chashmishcoder", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/omkar-thorve-47595a111", label: "LinkedIn" },
  { icon: TwitterXIcon, href: "https://twitter.com/_hustle_master", label: "Twitter" },
  { icon: HashnodeIcon, href: "https://chashmishcoder.hashnode.dev/", label: "Hashnode" },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-[#2D2D2D] bg-[#FAFAF9] dark:bg-[#0F0F0E]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0C0C0B] dark:text-[#F0EFEC] text-lg mb-1">
              Omkar Thorve<span className="text-[#1D4ED8]">.</span>
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Machine Learning Engineer · Pune, India</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#1D4ED8] dark:hover:text-[#60A5FA] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-gray-400 dark:text-gray-500 hover:text-[#1D4ED8] dark:hover:text-[#60A5FA] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-[#2D2D2D] flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © 2026 Omkar Thorve. Built with Next.js, Tailwind, and too much coffee.
          </p>
          <p className="text-xs text-gray-300 dark:text-gray-600 font-[family-name:var(--font-jetbrains-mono)]">
            v1.0 · April 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
