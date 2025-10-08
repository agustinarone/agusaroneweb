"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";

export function Capabilities() {
  const capabilities = [
    {
      title: "Product Strategy",
      items: [
        "Define direction and measurable outcomes.",
        "Roadmap design, prioritization, and OKR alignment.",
      ],
    },
    {
      title: "Design & Systems Thinking",
      items: [
        "Map user journeys and flows before code.",
        "Connect architecture with business context.",
      ],
    },
    {
      title: "Automation & Delivery",
      items: [
        "Build and integrate low-code tools.",
        "Translate vision into scalable, data-backed products.",
      ],
    },
  ];

  return (
    <Section id="capabilities" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            What I Can Do
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-3xl mx-auto">
            Summarizing capabilities clearly, blending strategic and hands-on skills.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {capability.title}
              </h3>
              <ul className="space-y-2">
                {capability.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-[var(--foreground-muted)] flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <a
            href="#"
            className="inline-flex items-center text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            See how I work →
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
