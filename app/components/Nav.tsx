"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = NAV_ITEMS.map((item) => item.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 dark:bg-[#0F0F0E]/90 backdrop-blur-md border-b border-gray-200/70 dark:border-[#2D2D2D]/70 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[#0C0C0B] dark:text-[#F0EFEC] tracking-tight"
        >
          OT<span className="text-[#1D4ED8]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#1D4ED8] dark:text-[#60A5FA]"
                    : "text-gray-500 dark:text-gray-400 hover:text-[#0C0C0B] dark:hover:text-[#F0EFEC]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1D4ED8] dark:bg-[#60A5FA] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#0C0C0B] dark:hover:text-[#F0EFEC] hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium bg-[#1D4ED8] text-white rounded-lg hover:bg-[#1E40AF] transition-colors"
          >
            Resume
          </a>
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-gray-200 dark:border-[#2D2D2D] bg-white dark:bg-[#0F0F0E]"
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#1D4ED8] dark:hover:text-[#60A5FA] rounded-lg hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 px-3 py-2 text-sm font-medium bg-[#1D4ED8] text-white rounded-lg text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
