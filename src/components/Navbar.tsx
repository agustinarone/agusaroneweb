"use client";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/75 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2">
            <span className="text-sm tracking-widest text-[var(--foreground-muted)]">AGUSTÍN ARONE</span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="mailto:agus@example.com"
              className="hidden sm:inline text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/agusarone"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://calendly.com/agustinarone/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--foreground)] text-[var(--background)] px-3 py-1.5 rounded-md hover:bg-[var(--foreground-muted)] transition-colors text-sm"
            >
              Book 30’
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
