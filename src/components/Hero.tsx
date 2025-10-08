"use client";

import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight"
            >
              Designing clarity in complex products.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-[var(--foreground-muted)] leading-relaxed"
            >
              I help teams turn ambiguity into direction — aligning strategy, design, and data to deliver measurable outcomes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://linkedin.com/in/agusarone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--foreground)] text-[var(--foreground)] rounded-md hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:agus@example.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--foreground)] text-[var(--foreground)] rounded-md hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              >
                Email
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-md hover:bg-[var(--foreground-muted)] transition-colors"
              >
                Schedule
              </button>
            </motion.div>
          </div>

          {/* Optional Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-80 h-80 bg-[var(--border)] rounded-lg flex items-center justify-center">
              <span className="text-[var(--foreground-muted)] text-lg">Portrait Placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
