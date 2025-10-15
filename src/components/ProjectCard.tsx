"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn(
        "group relative bg-white rounded-lg border border-[var(--border)] p-6 hover:shadow-lg transition-all duration-300",
        project.featured && "lg:col-span-2"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-[var(--border)] rounded-lg flex items-center justify-center">
          <span className="text-xs font-medium text-[var(--foreground-muted)]">
            {project.name.charAt(0)}
          </span>
        </div>
        {/* External link removed as projects no longer have url */}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            {project.name}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.roles.map((role, roleIndex) => (
            <span
              key={roleIndex}
              className="px-2 py-1 text-xs bg-[var(--border)] text-[var(--foreground-muted)] rounded-md"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
