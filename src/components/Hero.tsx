"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col pt-20">

      {/* Hero Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex-1 flex items-center px-8 py-16"
      >
        <div className="w-full grid lg:grid-cols-3 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-[var(--foreground)] font-sans text-4xl lg:text-5xl font-medium leading-relaxed"
            >
              Hi, I'm Agus. Senior Product Manager focused on solution design and zero to one. I take a problem, shape the strategy, write the plan, and build the first version that proves value, whether it is a POC, an MVP, or a robust product ready to scale.
            </motion.p>
          </div>

        </div>
      </motion.section>

    </div>
  );
}
