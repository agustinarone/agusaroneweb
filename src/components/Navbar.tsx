"use client";

import { motion } from "framer-motion";

export function FixedNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]"
    >
      <div className="px-6 md:px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <h1 className="w-full text-left text-[var(--foreground)] font-sans text-lg font-medium"><a href="/">Agustín Arone Castellari</a></h1>
        <div className="hidden md:flex items-center space-x-6 md:w-auto md:justify-end">
          <a
            href="https://www.linkedin.com/in/agustinarone/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-[var(--foreground)] font-sans text-lg font-medium hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hi@agusarone.com"
            className="hidden md:inline-block text-[var(--foreground)] font-sans text-lg font-medium hover:underline transition-colors"
          >
            hi@agusarone.com
          </a>
          <a
            href="https://calendly.com/agustinarone/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-[var(--accent)] text-white px-4 py-2 rounded-md  transition-colors font-sans text-lg font-medium"
          >
            Schedule
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
