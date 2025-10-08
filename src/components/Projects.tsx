"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
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
              <h2 className="text-[var(--foreground)] font-sans text-3xl lg:text-4xl font-medium">
                Selected Projects
              </h2>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[var(--border)] lg:border-0">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                  className={`border-b border-[var(--border)] py-6 px-6 ${
                    index % 2 === 0 ? 'lg:border-r' : ''
                  } ${
                    index >= projects.length - (projects.length % 2) ? 'border-b-0' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={project.logo} 
                        alt={project.name}
                        className="w-8 h-8 object-contain"
                      />
                      <div>
                        <h3 className="text-[var(--foreground)] font-sans text-lg font-medium">
                          {project.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-[var(--foreground-muted)]">
                          <span>{project.year}</span>
                          <span>•</span>
                          <span>{project.roles.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:text-[var(--accent-soft)] transition-colors font-sans text-sm"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
