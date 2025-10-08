export type Tool = {
  slug: string;
  name: string;
  category: "Design" | "Automation" | "Development" | "Data & Systems";
  logo: string;
};

export const tools: Tool[] = [
  // Design
  {
    slug: "figma",
    name: "Figma",
    category: "Design",
    logo: "/logos/tools/figma.svg",
  },
  
  // Automation
  {
    slug: "make",
    name: "Make",
    category: "Automation",
    logo: "/logos/tools/make.svg",
  },
  {
    slug: "n8n",
    name: "n8n",
    category: "Automation",
    logo: "/logos/tools/n8n.svg",
  },
  
  // Development
  {
    slug: "cursor",
    name: "Cursor",
    category: "Development",
    logo: "/logos/tools/cursor.svg",
  },
  {
    slug: "supabase",
    name: "Supabase",
    category: "Development",
    logo: "/logos/tools/supabase.svg",
  },
  {
    slug: "softr",
    name: "Softr",
    category: "Development",
    logo: "/logos/tools/softr.svg",
  },
  {
    slug: "wordpress",
    name: "WordPress",
    category: "Development",
    logo: "/logos/tools/wordpress.svg",
  },
  {
    slug: "woocommerce",
    name: "WooCommerce",
    category: "Development",
    logo: "/logos/tools/woocommerce.svg",
  },
  {
    slug: "webflow",
    name: "Webflow",
    category: "Development",
    logo: "/logos/tools/webflow.svg",
  },
  {
    slug: "bubble",
    name: "Bubble",
    category: "Development",
    logo: "/logos/tools/bubble.svg",
  },
  
  // Data & Systems
  {
    slug: "airtable",
    name: "Airtable",
    category: "Data & Systems",
    logo: "/logos/tools/airtable.svg",
  },
  {
    slug: "apis",
    name: "APIs",
    category: "Data & Systems",
    logo: "/logos/tools/apis.svg",
  },
  {
    slug: "posthog",
    name: "PostHog",
    category: "Data & Systems",
    logo: "/logos/tools/posthog.svg",
  },
];

export const toolsByCategory = {
  Design: tools.filter(tool => tool.category === "Design"),
  Automation: tools.filter(tool => tool.category === "Automation"),
  Development: tools.filter(tool => tool.category === "Development"),
  "Data & Systems": tools.filter(tool => tool.category === "Data & Systems"),
};
