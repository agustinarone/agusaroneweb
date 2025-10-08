"use client";

export function Navbar() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-[var(--foreground)]">
              Agus Arone
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com/in/agusarone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:agus@example.com"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToContact}
              className="bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-md hover:bg-[var(--foreground-muted)] transition-colors"
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
