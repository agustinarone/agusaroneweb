"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <Section id="projects" className="bg-white">
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
            Selected Projects
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-3xl mx-auto">
            A curated set of projects that reflect thinking, process, and measurable outcomes — not just visuals.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="space-y-8">
          <div className="border-t border-[var(--border)] pt-8">
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
              All Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard 
                  key={project.slug} 
                  project={project} 
                  index={index + featuredProjects.length} 
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
