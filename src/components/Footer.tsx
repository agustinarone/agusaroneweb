import { Section } from "./Section";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--border)]">
      <Section className="py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-[var(--foreground-muted)]">
            © 2024 Agus Arone. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a
              href="https://linkedin.com/in/agusarone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:agus@example.com"
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
}
