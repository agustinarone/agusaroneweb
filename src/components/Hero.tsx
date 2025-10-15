"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-14 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-32 h-72 w-72 rounded-full blur-3xl opacity-10"
             style={{ background: "radial-gradient(closest-side, #0f172a, transparent)" }} />
        <div className="absolute -bottom-24 -left-32 h-72 w-72 rounded-full blur-3xl opacity-10"
             style={{ background: "radial-gradient(closest-side, #475569, transparent)" }} />
      </div>

      {/* Hero Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex-1 flex flex-col px-6 md:px-8 py-16"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Left Side - Role, Headline & copy */}
            <div className="lg:col-span-2 space-y-6">
              {/* Role Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-slate-600 text-sm font-medium tracking-widest uppercase pt-2 md:pt-0"
              >
                Product Manager
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="text-slate-900 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed font-medium"
              >
                Hi, I&apos;m Agus. Senior Product Manager with over 7 years of experience turning ideas into real products. I bridge strategy, design, and technology to shape solutions from proof of concept and MVPs to scalable, validated products.
                <br /> <br />I also build AI-powered tools and automations that simplify work and help teams focus on what truly matters.
              </motion.h1>
            </div>

            {/* Right Side - Metrics */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-px h-6 bg-slate-300"></div>
                  <div>
                    <div className="text-slate-900 font-medium">7+ Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-px h-6 bg-slate-300"></div>
                  <div>
                    <div className="text-slate-900 font-medium">Based in Buenos Aires, Argentina 🧉</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-px h-6 bg-slate-300"></div>
                  <div>
                    <div className="text-slate-900 font-medium"><span className="font-semibold">0→1</span> Specialist</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stack Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-12 max-w-6xl mx-auto w-full"
        >
          <div className="text-slate-600 text-sm font-medium tracking-widest uppercase mb-8">
            Stack
          </div>
          <div className="grid grid-cols-7 gap-8 items-center justify-items-center">
            {[
              { name: "n8n", file: "n8n.svg" },
              { name: "Make", file: "make.svg" },
              { name: "Bolt", file: "bolt.png" },
              { name: "Cursor", file: "cursor.svg" },
              { name: "Supabase", file: "supabase.svg" },
              { name: "GitHub", file: "github.svg" },
              { name: "Vercel", file: "vercel.svg" },
              { name: "WordPress", file: "wordpress.svg" },
              { name: "Figma", file: "figma.svg" },
              { name: "Linear", file: "linear.svg" },            
              { name: "Miro", file: "miro.svg" },  
              { name: "OpenAI", file: "openai.svg" },
              { name: "Airtable", file: "airtable.svg" },
              { name: "Softr", file: "softr.svg" },
            ].map((tool) => (
              <div key={tool.name} className="h-8 flex items-center">
                <img
                  src={`/logos/tools/${tool.file}`}
                  alt={tool.name}
                  className="h-8 w-auto opacity-100"
                  onError={(e) => {
                    const container = (e.target as HTMLImageElement).parentElement;
                    if (container) container.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 max-w-6xl mx-auto w-full"
        >
          <div className="text-slate-600 text-base md:text-sm font-medium tracking-widest uppercase mb-8">
            Experience
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-2">
              <div className="text-slate-900 font-medium text-base md:text-sm">Head of Product</div>
              <div className="text-slate-600 text-base md:text-sm">Sidetool</div>
              <a 
                href="https://sidetool.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 transition-colors text-base md:text-sm"
              >
                sidetool.co
              </a>
            </div>
            <div className="space-y-2">
              <div className="text-slate-900 font-medium text-base md:text-sm">Automation Specialist</div>
              <div className="text-slate-600 text-base md:text-sm">PsiMammoliti</div>
              <a 
                href="https://psimammoliti.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 transition-colors text-base md:text-sm"
              >
                psimammoliti.com
              </a>
            </div>
            <div className="space-y-2">
              <div className="text-slate-900 font-medium text-base md:text-sm">Founder</div>
              <div className="text-slate-600 text-base md:text-sm">Brandvan Agency</div>
            </div>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
}
