export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI SaaS Platform",
    description:
      "Production-ready AI SaaS platform with authentication, subscriptions, OpenAI integration and dashboard.",

    tech: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Stripe",
      "Tailwind",
    ],

    github: "https://github.com/pranumann",
    live: "#",
    featured: true,
  },

  {
    id: 2,
    title: "AI Agent",
    description:
      "Autonomous AI Agent built using LangGraph and LangChain with memory and tool calling.",

    tech: [
      "Python",
      "LangGraph",
      "LangChain",
      "FastAPI",
    ],

    github: "https://github.com/pranumann",
    live: "#",
    featured: true,
  },

  {
    id: 3,
    title: "Backend Microservice",
    description:
      "REST API backend built with Go, PostgreSQL and Docker following clean architecture.",

    tech: [
      "Go",
      "PostgreSQL",
      "Docker",
      "REST API",
    ],

    github: "https://github.com/pranumann",
    live: "#",
    featured: false,
  },
];