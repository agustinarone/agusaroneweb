"use client";

import { motion } from "framer-motion";
import { tools } from "@/data/tools";

export function Tools() {
  return (
    <div className="bg-[var(--foreground)]">
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
              <h2 className="text-white font-sans text-3xl lg:text-4xl font-medium">
                Tools & Stack
              </h2>
            </motion.div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.05), ease: "easeOut" }}
                  className="flex flex-col items-center space-y-3"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-white/90 font-sans text-sm text-center">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
