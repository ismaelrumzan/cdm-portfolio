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

export type PublicationKind = "publication" | "presentation" | "course";

export type ConferenceOrPublication = {
  kind: PublicationKind;
  year: number;
  title: string;
  venue: string;
  href?: string;
};

export const writingOverview =
  "Technical writing for documentation and guides written for the Vercel platform with content planning for larger pieces using the Diátaxis framework, in collaboration with engineering and product teams. Community contribution with papers and conference presentations.";

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

export const conferencesAndPublications: ConferenceOrPublication[] = [
  {
    kind: "publication",
    year: 2019,
    title:
      "Best Practices Using Flipped Classroom in Teaching a Second Language in different Learning Environments",
    venue:
      "Book chapter in Emerging Technologies and Pedagogies in the Curriculum",
  },
  {
    kind: "course",
    year: 2019,
    title: "Flipped Classroom",
    venue: "MOOC hosted on edraak.org (June 2019)",
  },
  {
    kind: "presentation",
    year: 2019,
    title: "Best Practices for Flipped Classroom in Language Learning",
    venue: "WCBL 2019 (World Conference on Blended Learning)",
  },
  {
    kind: "presentation",
    year: 2015,
    title: "Activating the Four Language Skills Online",
    venue: "Instructure Con 2015",
  },
  {
    kind: "publication",
    year: 2010,
    title: "An Integrated Learning Management System for Islamic Studies",
    venue: "Educational Technology, May–June 2010",
  },
  {
    kind: "publication",
    year: 2005,
    title: "Using the SECTIONS Framework to Evaluate Flash Media",
    venue: "Innovate Journal of Online Education, 2005",
    href: "/pdf/Using_the_SECTIONS_Framework_to_Evaluate.pdf",
  },
  {
    kind: "presentation",
    year: 2004,
    title: "Interactive video and audio in a flash",
    venue: "Best Practices in E-Learning Conference 2004",
  },
];

export function publicationKindLabel(kind: PublicationKind): string {
  switch (kind) {
    case "publication":
      return "Publication";
    case "presentation":
      return "Presentation";
    case "course":
      return "Course";
  }
}
