"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <div id="contact" className="bg-[var(--background)]">
      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="px-8 py-16"
      >
        <div className="w-full max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-[var(--foreground)] font-sans text-3xl lg:text-4xl font-medium">
                Get in Touch
              </h2>
              <blockquote className="text-[var(--foreground-muted)] font-sans text-lg leading-relaxed mt-6 italic">
                If you&apos;re shaping your next product, let&apos;s talk. Together we can define what&apos;s worth building and how to build it right.
              </blockquote>
            </motion.div>

            {/* Schedule CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <h3 className="text-[var(--foreground)] font-sans text-xl font-medium mb-6">
                Schedule a Call
              </h3>
              <a
                href="https://calendly.com/agustinarone/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--accent)] text-white px-8 py-4 rounded-lg hover:bg-[var(--accent-soft)] transition-colors font-sans text-lg font-medium"
              >
                Book a 30-minute call →
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
