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
      <div className="px-8 py-4 flex justify-between items-center">
        <h1 className="text-[var(--foreground)] font-sans text-lg font-medium">Agustín Arone Castellari</h1>
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/agustinarone/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] font-sans text-lg font-medium hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hi@agusarone.com"
            className="text-[var(--foreground)] font-sans text-lg font-medium hover:underline transition-colors"
          >
            Email
          </a>
          <a
            href="https://calendly.com/agustinarone/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--accent)] text-white px-4 py-2 rounded-md  transition-colors font-sans text-lg font-medium"
          >
            Schedule
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
