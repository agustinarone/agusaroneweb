"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" className="bg-[var(--background)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Get in Touch
          </h2>
          <blockquote className="text-lg text-[var(--foreground-muted)] max-w-3xl mx-auto italic">
            &ldquo;If you&apos;re shaping your next product, let&apos;s talk. Together we can define what&apos;s worth building — and how to build it right.&rdquo;
          </blockquote>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              Schedule a Call
            </h3>
            <div className="bg-white rounded-lg border border-[var(--border)] overflow-hidden">
              <iframe
                title="Schedule with Agus"
                src="https://calendly.com/agusarone/intro?hide_event_type_details=1&hide_gdpr_banner=1"
                className="w-full h-[600px]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Other Ways to Connect
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:agus@example.com"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-[var(--border)] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[var(--border)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--foreground-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Email</p>
                    <p className="text-sm text-[var(--foreground-muted)]">agus@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/agusarone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-[var(--border)] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[var(--border)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--foreground-muted)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">LinkedIn</p>
                    <p className="text-sm text-[var(--foreground-muted)]">linkedin.com/in/agusarone</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
