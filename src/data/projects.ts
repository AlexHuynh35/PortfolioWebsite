type ProjectType = "software" | "game" | "data";

export interface Project {
  slug: string;
  title: string;
  description: string;
  collaborators: string[];
  types: ProjectType[];
  videoUrl?: string;
  interactiveUrl?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "frogger_remake",
    title: "Frogger Remake",
    description: "Desc",
    collaborators: ["Summit Pradhan"],
    types: ["game", "software"],
    videoUrl: undefined,
    interactiveUrl: undefined,
    images: [],
  },
  {
    slug: "fruit_ninja_demake",
    title: "Fruit Ninja Demake",
    description: "Desc",
    collaborators: ["Summit Pradhan"],
    types: ["game", "software"],
    videoUrl: undefined,
    interactiveUrl: undefined,
    images: [],
  },
  {
    slug: "laboratory",
    title: "LaboRATory",
    description: "Desc",
    collaborators: ["Chris Guerrero"],
    types: ["game"],
    videoUrl: undefined,
    interactiveUrl: undefined,
    images: [],
  },
  {
    slug: "subscription_campaign_optimization",
    title: "Subscription Campaign Optimization",
    description: "Desc",
    collaborators: ["Ronald Catahimican", "Kaila Li"],
    types: ["data"],
    videoUrl: undefined,
    interactiveUrl: undefined,
    images: [],
  },
  {
    slug: "box_office_profitability",
    title: "Box Office Profitability",
    description: "Desc",
    collaborators: ["Ronald Catahimican", "Kaila Li"],
    types: ["data"],
    videoUrl: undefined,
    interactiveUrl: undefined,
    images: [],
  },
  {
    slug: "predicting_emotions_with_gru",
    title: "Predicting Emotions with GRU",
    description: "Desc",
    collaborators: ["Branley Mmasi"],
    types: ["data", "software"],
    videoUrl: undefined,
    interactiveUrl: undefined,
    images: [],
  },
  {
    slug: "angklung_educational_website",
    title: "Angklung Educational Website",
    description: "Desc",
    collaborators: [],
    types: ["software"],
    videoUrl: undefined,
    interactiveUrl: undefined,
    images: [],
  },
];