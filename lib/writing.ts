export type WritingCategory =
  | "planning"
  | "conceptual"
  | "tutorial"
  | "referential";

export type WritingPiece = {
  title: string;
  href?: string;
  note?: string;
};

export type WritingSection = {
  id: WritingCategory;
  title: string;
  description: string;
  pieces: WritingPiece[];
};

export const writingOverview =
  "Developer documentation and guides written for the Vercel platform. Content planning for larger pieces was guided by the Diátaxis framework, in collaboration with engineering and product teams.";

export const writingSections: WritingSection[] = [
  {
    id: "planning",
    title: "Content planning",
    description:
      "Information architecture and section planning across major documentation areas.",
    pieces: [
      {
        title: "Vercel WAF and subpages",
        href: "https://vercel.com/docs/vercel-firewall/vercel-waf",
      },
      {
        title: "Vercel CDN and subpages",
        href: "https://vercel.com/docs/cdn",
      },
    ],
  },
  {
    id: "conceptual",
    title: "Conceptual",
    description: "Explainers that build mental models for core platform concepts.",
    pieces: [
      {
        title: "What is Retrieval Augmented Generation (RAG)",
        href: "https://vercel.com/kb/guide/what-is-rag",
      },
      {
        title: "Firewall concepts",
        href: "https://vercel.com/docs/vercel-firewall/firewall-concepts",
      },
      {
        title: "Model Context Protocol",
        href: "https://vercel.com/docs/mcp",
      },
      {
        title: "How Vercel CDN works",
        href: "https://vercel.com/docs/how-vercel-cdn-works",
      },
    ],
  },
  {
    id: "tutorial",
    title: "Tutorial / How-to",
    description: "Step-by-step guides for building with Vercel products.",
    pieces: [
      {
        title: "How to build an on-demand voice agent with Vercel Sandbox",
        href: "https://vercel.com/kb/guide/how-to-build-an-on-demand-voice-agent-with-vercel-sandbox",
      },
      {
        title: "Using Vercel Sandbox to run Claude’s Agent SDK",
        href: "https://vercel.com/kb/guide/using-vercel-sandbox-claude-agent-sdk",
      },
      {
        title: "Build an MCP Server with Weather tools using Express and Vercel",
        href: "https://vercel.com/kb/guide/mcp-server-with-weather-tool-express",
      },
      {
        title: "Create an Integration",
        href: "https://vercel.com/docs/integrations/create-integration",
      },
    ],
  },
  {
    id: "referential",
    title: "Referential",
    description: "Lookup references for configuration and APIs.",
    pieces: [
      {
        title: "WAF Rule Configuration Reference",
        href: "https://vercel.com/docs/vercel-firewall/vercel-waf/rule-configuration",
      },
      {
        title: "Vercel REST API and SDK",
        href: "https://vercel.com/docs/rest-api",
        note: "Generated from the OpenAPI specification",
      },
    ],
  },
];
