"use client";

import { motion } from "framer-motion";

export function HowIHelp() {
  return (
    <div className="min-h-screen bg-[var(--accent)] flex flex-col">
      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex-1 flex items-center px-8 py-16"
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
              How I can help you
              </h2>
            </motion.div>

            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="border-b border-white/20 pb-8"
            >
              <h2 className="text-white font-sans text-2xl lg:text-3xl font-medium mb-4">
                Shape your idea into a product
              </h2>
              <p className="text-white/90 font-sans text-lg leading-relaxed">
                I guide discovery, define the strategy, and turn it into a clear solution.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="border-b border-white/20 pb-8"
            >
              <h2 className="text-white font-sans text-2xl lg:text-3xl font-medium mb-4">
                Design and develop your website
              </h2>
              <p className="text-white/90 font-sans text-lg leading-relaxed">
                From structure and content to a clean, responsive build.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="border-b border-white/20 pb-8"
            >
              <h2 className="text-white font-sans text-2xl lg:text-3xl font-medium mb-4">
                Design and develop your e-commerce
              </h2>
              <p className="text-white/90 font-sans text-lg leading-relaxed">
                Storefront, catalog, checkout, and payments ready to sell.
              </p>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-white font-sans text-2xl lg:text-3xl font-medium mb-4">
                Automate complex workflows
              </h2>
              <p className="text-white/90 font-sans text-lg leading-relaxed">
                Replace manual tasks with reliable, scalable automations.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
