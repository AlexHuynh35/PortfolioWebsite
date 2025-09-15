import { ToolImageDict } from "./tools";

type ProjectType = "software" | "game" | "data";

type TableauInfo = {
  url: string,
  width: number,
  height: number
}

export interface Project {
  slug: string;
  title: string;
  date: string;
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
    description: "This game is a recreation of the 1981 arcade game Frogger on the TIC-80 virtual console. The game involves helping the frog navigate across various obstacles (cars, snakes, crocodiles, etc.) to its home.",
    date: "2023-10",
    contributions: [
      "Overcame the TIC-80's limitations such as restricted graphics and lack of full object-oriented programming by implementing custom functionality classes.",
      "Leveraged design patterns like Component, Singleton, and Update Method to implement core gameplay systems, including collision detection, sprite animations, level patterns, obstacles, sound effects, and time limits.",
      "Optimized development workflow by prioritizing essential game mechanics and balancing ease of implementation with graphical fidelity.",
    ],
    tools: [ToolImageDict.lua],
    collaborators: ["Summit Pradhan"],
    types: ["game", "software"],
    itchUrl: "https://itch.io/embed-upload/13681337?color=333333&autoplay=0",
    otherUrls: [["Itch Page", "https://humanbean35.itch.io/frogger-remake"], ["GitHub Repo", ""]],
    images: ["/projects/Frogger_Remake_Poster.png"],
  },
  {
    slug: "fruit_ninja_demake",
    title: "Fruit Ninja Demake",
    description: "This game is a recreation of the mobile game Fruit Ninja on 8-bit Workshop's NES Emulator. Gameplay involves moving the sword to try and cut as many fruits as possible while avoiding bombs.",
    date: "2023-11",
    contributions: [
      "Recreated core gameplay, including translating touch-based mechanics into controller-based sword slicing, collision detection, and a lives/points system.",
      "Implemented a physics system with randomized velocities for fruit throws, utilizing integer-based frame skipping to simulate smooth motion despite hardware constraints.",
      "Designed an efficient object pooling system for fruit, bomb, and splatter sprites, overcoming NES graphical and space limitations.",
    ],
    tools: [ToolImageDict.c],
    collaborators: ["Summit Pradhan"],
    types: ["game", "software"],
    itchUrl: "https://itch.io/embed-upload/13840436?color=333333&autoplay=0",
    otherUrls: [["Itch Page", "https://humanbean35.itch.io/fruit-ninja-demake"], ["GitHub Repo", ""]],
    images: [],
  },
  {
    slug: "laboratory",
    title: "LaboRATory",
    description: "This is a puzzle game that takes place in the aftermath of failed experiment to create intelligent rats. Play as a rat and escape the laboratory by using the scattered journal pages as clues.",
    date: "2024-03",
    contributions: [
      "Designed an escape-room-style narrative in Bitsy, integrating environmental storytelling, journal entries, NPC interactions to guide players through puzzle-solving.",
      "Blend story and gameplay with atmospheric visuals and somber audio design that reinforce the game's themes.",
      "Conducted playtesting with 12 students, gathering feedback to refine puzzle difficulty, clue clarity, and narrative pacing, ensuring an intuitive and immersive player experience.",
    ],
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
    description: "This analysis aims to optimize a telecommunication company's subscription drive through data-driven strategies. To do this, we analyzed and benchmarked campaign results across four categories: audience, location, creative, and inventory.",
    date: "2025-05",
    contributions: [
      "Segmented 700+ audience records into 13 categories using Excel's regex, linking persona labels with VLOOKUP to ensure data integrity and accurate identification of top-performing personas.",
      "Conducted A/B tests in R on various ad sizes and messaging variants to uncover statistically significant performance differences and inform creative strategy.",
      "Built an interactive Tableau dashboard with to visualize 7 KPIs across personas and creatives, streamlining analysis while reducing visual clutter by 85%.",
    ],
    tools: [ToolImageDict.excel, ToolImageDict.tableau, ToolImageDict.r],
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
    description: "The goal of this analysis is to inform a mock production company on what strategy to adopt when making a new movie. We looked at box office data of successful movies in the past 10 years to identify trends to guide our recommendations.",
    date: "2025-03",
    contributions: [
      "Addressed missing data in a public movie dataset by collecting and preparing 2,000+ The Movies Database records with Python (Pandas) to support teammates' analyses.",
      "Analyzed profitability trends across film genres, using Excel's pivot tables and Tableau's scatterplots to uncover relationships between budget, revenue, and ROI.",
      "Presented on optimal genres for varying budget levels, projecting an ROI increase of 40% for low-budget films and 20% for high-budget films.",
    ],
    tools: [ToolImageDict.excel, ToolImageDict.tableau, ToolImageDict.python],
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
    description: "The goal of the project is see how machine learning can categorize the sentiment behind textual data. To do this, we trained a Gated Recurrent Unit (GRU) model on a labeled dataset of tweets.",
    date: "2024-05",
    contributions: [
      "Built and trained a single-layer GRU model with Keras/TensorFlow on a 70k-tweet dataset for six-class sentiment prediction, using tokenization and word embeddings.",
      "Tuned hyperparameters via learning curves, analyzed misclassifications with confusion matrices, and observed model validity by visualizing embedded vectors with color maps.",
      "Achieved 93% test accuracy with a 60k/10k train-test split, improving by 5% over other models.",
    ],
    tools: [ToolImageDict.python],
    collaborators: ["Branley Mmasi"],
    types: ["data", "software"],
    otherUrls: [["GitHub Repo", ""]],
    images: [],
  },
  {
    slug: "angklung_educational_website",
    title: "Angklung Educational Website",
    description: "This website was developed for Saung Angklung of San Francisco. It provides a centralized place to learn about the Angklung, explore events, and understand the mission and people behind the organization.",
    date: "2025-08",
    contributions: [
      "Collaborated closely with the client to define project scope, translating their vision into a site architecture that aligned expectations and streamlined development.",
      "Built a fully responsive informational website using React (Next.js), TailwindCSS, and TypeScript, implementing a clean UI with scalable components.",
      "Deployed the site with SEO best practices, submitting sitemaps to Google Search Console, optimizing metadata, and ensuring search discoverability to maximize organic reach.",
    ],
    tools: [ToolImageDict.react, ToolImageDict.tailwind, ToolImageDict.typescript],
    collaborators: [],
    types: ["software"],
    otherUrls: [["Live Website", ""], ["GitHub Repo", ""]],
    images: [],
  },
];

export const wipProjects: Project[] = [
  {
    slug: "blocky_rain",
    title: "Blocky Rain",
    description: "This project is WIP, check back later for more details!",
    date: "TBD",
    contributions: [],
    tools: [ToolImageDict.unity, ToolImageDict.csharp],
    collaborators: [],
    types: ["game", "software"],
    otherUrls: [["GitHub Repo", ""]],
    images: [],
  },
  {
    slug: "swarm2d",
    title: "Swarm2D",
    description: "This project is WIP, check back later for more details!",
    date: "TBD",
    contributions: [],
    tools: [ToolImageDict.unity, ToolImageDict.csharp],
    collaborators: ["Jason Yu", "Timmy Tram", "Jacky Liu"],
    types: ["software", "game"],
    otherUrls: [],
    images: [],
  },
  {
    slug: "video_game_recommender",
    title: "Video Game Recommender",
    description: "This project is WIP, check back later for more details!",
    date: "TBD",
    contributions: [],
    tools: [ToolImageDict.react, ToolImageDict.tailwind, ToolImageDict.typescript, ToolImageDict.python, ToolImageDict.postgresql],
    collaborators: [],
    types: ["software", "data"],
    otherUrls: [["GitHub Repo", ""]],
    images: [],
  },
]