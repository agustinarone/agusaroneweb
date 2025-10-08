"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { toolsByCategory } from "@/data/tools";

export function Tools() {
  return (
    <Section id="tools" className="bg-[var(--background)]">
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
            Tools & Stack
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-3xl mx-auto">
            I use these tools to move from strategy to execution faster — automating workflows, validating ideas, and scaling systems without losing focus.
          </p>
        </div>

        {/* Tools by Category */}
        <div className="space-y-12">
          {Object.entries(toolsByCategory).map(([category, tools], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: toolIndex * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-center p-4 bg-white rounded-lg border border-[var(--border)] hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-[var(--border)] rounded-md flex items-center justify-center mb-2">
                      <span className="text-xs font-medium text-[var(--foreground-muted)]">
                        {tool.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-[var(--foreground-muted)] text-center">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
