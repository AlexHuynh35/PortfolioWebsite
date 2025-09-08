type ProjectType = "software" | "game" | "data";

export interface Project {
  slug: string;
  title: string;
  description: string;
  collaborators: string[];
  types: ProjectType[];
  videoUrl?: string;
  interactiveUrl?: string;
  otherUrls: string[]
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
    interactiveUrl: "https://itch.io/embed-upload/13681337?color=333333&autoplay=0",
    otherUrls: ["https://humanbean35.itch.io/frogger-remake"],
    images: [],
  },
  {
    slug: "fruit_ninja_demake",
    title: "Fruit Ninja Demake",
    description: "Desc",
    collaborators: ["Summit Pradhan"],
    types: ["game", "software"],
    videoUrl: undefined,
    interactiveUrl: "https://itch.io/embed-upload/13840436?color=333333&autoplay=0",
    otherUrls: ["https://humanbean35.itch.io/fruit-ninja-demake"],
    images: [],
  },
  {
    slug: "laboratory",
    title: "LaboRATory",
    description: "Desc",
    collaborators: ["Chris Guerrero"],
    types: ["game"],
    videoUrl: undefined,
    interactiveUrl: "https://itch.io/embed-upload/13840698?color=333333&autoplay=0",
    otherUrls: ["https://humanbean35.itch.io/laboratory"],
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
    otherUrls: [],
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
    otherUrls: [],
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
    otherUrls: [],
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
    otherUrls: [],
    images: [],
  },
];