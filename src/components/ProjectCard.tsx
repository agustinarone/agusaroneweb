"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { formatUrl } from "@/lib/utils";
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
        <a
          href={formatUrl(project.url)}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            className="w-5 h-5 text-[var(--foreground-muted)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            {project.name}
          </h3>
          <span className="text-sm text-[var(--foreground-muted)]">
            {project.year}
          </span>
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
