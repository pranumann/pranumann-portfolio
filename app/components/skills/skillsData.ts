export type Skill = {
  name: string;
  level: number;
  category: string;
};

export const skills: Skill[] = [
  // Programming
  { name: "Go", level: 95, category: "Programming" },
  { name: "Python", level: 95, category: "Programming" },
  { name: "JavaScript", level: 90, category: "Programming" },
  { name: "TypeScript", level: 90, category: "Programming" },

  // Backend
  { name: "FastAPI", level: 95, category: "Backend" },
  { name: "Gin", level: 90, category: "Backend" },
  { name: "REST API", level: 95, category: "Backend" },
  { name: "PostgreSQL", level: 90, category: "Database" },

  // AI
  { name: "LangChain", level: 95, category: "AI" },
  { name: "LangGraph", level: 95, category: "AI" },
  { name: "LLMs", level: 90, category: "AI" },
  { name: "OpenAI API", level: 90, category: "AI" },

  // Cloud
  { name: "Docker", level: 90, category: "DevOps" },
  { name: "Kubernetes", level: 85, category: "DevOps" },
  { name: "Git", level: 95, category: "Tools" },
  { name: "Linux", level: 90, category: "Tools" },
];