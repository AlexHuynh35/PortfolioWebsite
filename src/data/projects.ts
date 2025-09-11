type ProjectType = "software" | "game" | "data";

type TableauInfo = {
  url: string,
  width: number,
  height: number
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  contributions: string[];
  tools: [string, string][];
  collaborators: string[];
  types: ProjectType[];
  videoUrl?: string;
  itchUrl?: string;
  tableauUrl?: TableauInfo;
  otherUrls: [string, string][]
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "frogger_remake",
    title: "Frogger Remake",
    description: "Desc",
    contributions: [""],
    tools: [],
    collaborators: ["Summit Pradhan"],
    types: ["game", "software"],
    itchUrl: "https://itch.io/embed-upload/13681337?color=333333&autoplay=0",
    otherUrls: [["Itch Page", "https://humanbean35.itch.io/frogger-remake"], ["GitHub Repo", ""]],
    images: ["/projects/Frogger_Remake_Poster.png"],
  },
  {
    slug: "fruit_ninja_demake",
    title: "Fruit Ninja Demake",
    description: "Desc",
    contributions: [""],
    tools: [],
    collaborators: ["Summit Pradhan"],
    types: ["game", "software"],
    itchUrl: "https://itch.io/embed-upload/13840436?color=333333&autoplay=0",
    otherUrls: [["Itch Page", "https://humanbean35.itch.io/fruit-ninja-demake"], ["GitHub Repo", ""]],
    images: [],
  },
  {
    slug: "laboratory",
    title: "LaboRATory",
    description: "Desc",
    contributions: [""],
    tools: [],
    collaborators: ["Chris Guerrero"],
    types: ["game"],
    itchUrl: "https://itch.io/embed-upload/13840698?color=333333&autoplay=0",
    otherUrls: [["Itch Page", "https://humanbean35.itch.io/laboratory"], ["GitHub Repo", ""]],
    images: [],
  },
  {
    slug: "subscription_campaign_optimization",
    title: "Subscription Campaign Optimization",
    description: "Desc",
    contributions: [""],
    tools: [],
    collaborators: ["Ronald Catahimican", "Kaila Li"],
    types: ["data"],
    tableauUrl: {
      url: "https://public.tableau.com/views/CreativeStrategyCampaignResults/CreativeStrategyDashboard?:showVizHome=no&:embed=true",
      width: 808,
      height: 635
    },
    otherUrls: [["Tableau Public", ""]],
    images: ["/projects/Subscription_Campaign_Optimization_OnePager.png"],
  },
  {
    slug: "box_office_profitability",
    title: "Box Office Profitability",
    description: "Desc",
    contributions: [""],
    tools: [],
    collaborators: ["Ronald Catahimican", "Kaila Li"],
    types: ["data"],
    tableauUrl: {
      url: "https://public.tableau.com/views/BoxOfficePerformance_17432301568260/BOPBudgetAnalysis?:showVizHome=no&:embed=true",
      width: 1032,
      height: 803
    },
    otherUrls: [["Tableau Public", ""], ["GitHub Repo", ""]],
    images: ["/projects/Box_Office_Profitability_OnePager.png"],
  },
  {
    slug: "predicting_emotions_with_gru",
    title: "Predicting Emotions with GRU",
    description: "Desc",
    contributions: [""],
    tools: [],
    collaborators: ["Branley Mmasi"],
    types: ["data", "software"],
    otherUrls: [["GitHub Repo", ""]],
    images: [],
  },
  {
    slug: "angklung_educational_website",
    title: "Angklung Educational Website",
    description: "Desc",
    contributions: [""],
    tools: [],
    collaborators: [],
    types: ["software"],
    otherUrls: [["Live Website", ""], ["GitHub Repo", ""]],
    images: [],
  },
];