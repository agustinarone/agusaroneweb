"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <div id="contact" className="bg-[var(--foreground)]">
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
              <h2 className="text-[var(--background)] font-sans text-3xl lg:text-4xl font-medium">
                Get in Touch
              </h2>
              <blockquote className="text-[var(--background)] font-sans text-lg leading-relaxed mt-6 italic">
              If you&apos;re working on something new, exploring an idea, or just want to connect, let&apos;s talk.
              I&apos;m always open to sharing thoughts, exchanging experiences, or exploring ways we can build better products together.
              </blockquote>
            </motion.div>

            {/* Schedule CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              
              <a
                href="https://calendly.com/agustinarone/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--accent)] text-white px-8 py-4 rounded-lg  transition-colors font-sans text-lg font-medium"
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
