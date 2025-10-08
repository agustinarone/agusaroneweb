# Agus Arone Portfolio

A minimal, clean, and sharp personal portfolio website showcasing strategic product design work.

## Features

- **Minimal Design**: Clean, warm-neutral aesthetic with generous whitespace
- **Responsive**: Optimized for all device sizes
- **Accessible**: WCAG compliant with proper focus states and semantic HTML
- **Performance**: Built with Next.js 14+ and optimized for speed
- **SEO Ready**: Complete metadata, OpenGraph, and structured data

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Sections

1. **Hero**: Clear value proposition and CTAs
2. **Projects**: Featured and complete project showcase
3. **Tools & Stack**: Technical capabilities organized by category
4. **Capabilities**: Three-column service breakdown
5. **Contact**: Calendly integration with multiple contact methods

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and design tokens
├── components/         # React components
│   ├── Navbar.tsx     # Navigation component
│   ├── Hero.tsx       # Hero section
│   ├── Projects.tsx   # Projects showcase
│   ├── Tools.tsx      # Tools and stack
│   ├── Capabilities.tsx # What I can do section
│   ├── Contact.tsx    # Contact form and info
│   ├── Footer.tsx     # Footer component
│   └── Section.tsx    # Reusable section wrapper
├── data/              # Data files
│   ├── projects.ts    # Project data and types
│   └── tools.ts       # Tools data and categories
└── lib/               # Utility functions
    └── utils.ts       # Helper functions
```

## Customization

### Adding Projects
Edit `src/data/projects.ts` to add or modify projects. Each project includes:
- Name, year, URL, roles, and featured status
- Placeholder logo system (replace SVGs in `public/logos/projects/`)

### Adding Tools
Edit `src/data/tools.ts` to add or modify tools. Tools are organized by category:
- Design, Automation, Development, Data & Systems
- Placeholder logo system (replace SVGs in `public/logos/tools/`)

### Design System
Colors and typography are defined in `src/app/globals.css` using CSS custom properties:
- `--background`: Warm neutral background
- `--foreground`: Primary text color
- `--foreground-muted`: Secondary text color
- `--accent`: Accent color for highlights
- `--border`: Border and divider color

## Deployment

The site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. The build will automatically deploy on push to main
3. Environment variables can be set in Vercel dashboard

## License

© 2024 Agus Arone. All rights reserved.