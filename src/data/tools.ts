type ToolProficiency = "beginner" | "proficient" | "expert";

export const ToolImageDict: Record<string, [string, string]> = {
  react: ["React", "/svgs/react.svg"],
  tailwind: ["Tailwind CSS", "/svgs/tailwind.svg"],
  typescript: ["TypeScript", "/svgs/typescript.svg"],
  python: ["Python", "/svgs/python.svg"],
  postgresql: ["PostgreSQL", "/svgs/postgresql.svg"],
  sql: ["SQL", "/svgs/sql.svg"],
  r: ["R", "/svgs/r.svg"],
  excel: ["Microsoft Excel", "/svgs/excel.svg"],
  sheets: ["Google Sheets", "/svgs/sheets.svg"],
  tableau: ["Tableau", "/svgs/tableau.svg"],
  csharp: ["C#", "/svgs/csharp.svg"],
  c: ["C", "/svgs/c.svg"],
  lua: ["Lua", "/svgs/lua.svg"],
  unity: ["Unity", "/svgs/unity.svg"],
  construct3: ["Construct 3", "/svgs/construct3.svg"],
};

export interface Tool {
  name: string;
  proficiency: ToolProficiency;
  subTools: string[];
  imageUrl: string;
  projects: [string, string][];
};

export interface SoftwareTools {
  frontend: Tool[];
  backend: Tool[];
  database: Tool[];
};
export const softwareTools: SoftwareTools = {
  frontend: [
    {
      name: ToolImageDict.react[0],
      proficiency: "expert",
      subTools: ["Next.JS", "Vite"],
      imageUrl: ToolImageDict.react[1],
      projects: [["Angklung Educational Website", "/project/angklung_educational_website"], ["Video Game Recommender", "/project/video_game_recommender"]],
    },
    {
      name: ToolImageDict.tailwind[0],
      proficiency: "expert",
      subTools: ["Mobile-Friendly Websites"],
      imageUrl: ToolImageDict.tailwind[1],
      projects: [["Angklung Educational Website", "/project/angklung_educational_website"], ["Video Game Recommender", "/project/video_game_recommender"]],
    },
    {
      name: ToolImageDict.typescript[0],
      proficiency: "expert",
      subTools: [],
      imageUrl: ToolImageDict.typescript[1],
      projects: [["Angklung Educational Website", "/project/angklung_educational_website"], ["Video Game Recommender", "/project/video_game_recommender"]],
    },
  ],
  backend: [
    {
      name: ToolImageDict.python[0],
      proficiency: "proficient",
      subTools: ["Flask", "Pandas", "Numpy"],
      imageUrl: ToolImageDict.python[1],
      projects: [["Video Game Recommender", "/project/video_game_recommender"]],
    },
  ],
  database: [
    {
      name: ToolImageDict.postgresql[0],
      proficiency: "beginner",
      subTools: ["Relational Database"],
      imageUrl: ToolImageDict.postgresql[1],
      projects: [["Video Game Recommender", "/project/video_game_recommender"]],
    },
  ]
};

export interface DataTools {
  language: Tool[];
  spreadsheet: Tool[];
  visualization: Tool[];
};
export const dataTools: DataTools = {
  language: [
    {
      name: ToolImageDict.python[0],
      proficiency: "expert",
      subTools: ["Pandas", "Numpy", "Matplotlib", "Scikit-Learn", "Keras", "Tensorflow", "APIs"],
      imageUrl: ToolImageDict.python[1],
      projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Predicting Emotions with GRU", "/project/predicting_emotions_with_gru"]],
    },
    {
      name: ToolImageDict.sql[0],
      proficiency: "proficient",
      subTools: ["PostgreSQL", "Joins", "Data Aggregation", "CTEs"],
      imageUrl: ToolImageDict.sql[1],
      projects: [["Video Game Recommender", "/project/video_game_recommender"]],
    },
    {
      name: ToolImageDict.r[0],
      proficiency: "proficient",
      subTools: ["R Studio", "Hypothesis Tests", "Linear Regression"],
      imageUrl: ToolImageDict.r[1],
      projects: [["Subscription Campaign Optimization", "/project/subscription_campaign_optimization"]],
    },
  ],
  spreadsheet: [
    {
      name: ToolImageDict.excel[0],
      proficiency: "expert",
      subTools: ["VLOOKUPs", "INDEX-MATCH", "Pivot Tables", "Conditional Formatting", "REGEX", "Wild Cards"],
      imageUrl: ToolImageDict.excel[1],
      projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Subscription Campaign Optimization", "/project/subscription_campaign_optimization"]],
    },
    {
      name: ToolImageDict.sheets[0],
      proficiency: "expert",
      subTools: ["VLOOKUPs", "INDEX-MATCH", "Pivot Tables", "Conditional Formatting", "REGEX", "Wild Cards"],
      imageUrl: ToolImageDict.sheets[1],
      projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Subscription Campaign Optimization", "/project/subscription_campaign_optimization"]],
    },
  ],
  visualization: [
    {
      name: ToolImageDict.tableau[0],
      proficiency: "proficient",
      subTools: ["Interactive Dashboards", "Calculated Fields"],
      imageUrl: ToolImageDict.tableau[1],
      projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Subscription Campaign Optimization", "/project/subscription_campaign_optimization"]],
    },
  ]
};

export interface GameTools {
  language: Tool[];
  engine: Tool[];
};
export const gameTools: GameTools = {
  language: [
    {
      name: ToolImageDict.csharp[0],
      proficiency: "proficient",
      subTools: ["Object-Oriented Programming", "Software Design Patterns"],
      imageUrl: ToolImageDict.csharp[1],
      projects: [["Blocky Rain", "/project/blocky_rain"], ["Swarm2D", "/project/swarm2d"]],
    },
    {
      name: ToolImageDict.c[0],
      proficiency: "beginner",
      subTools: [],
      imageUrl: ToolImageDict.c[1],
      projects: [["Fruit Ninja Demake", "/project/fruit_ninja_demake"]],
    },
    {
      name: ToolImageDict.lua[0],
      proficiency: "beginner",
      subTools: ["Software Design Patterns"],
      imageUrl: ToolImageDict.lua[1],
      projects: [["Frogger Remake", "/project/frogger_remake"]],
    },
  ],
  engine: [
    {
      name: ToolImageDict.unity[0],
      proficiency: "proficient",
      subTools: ["Photon Fusion"],
      imageUrl: ToolImageDict.unity[1],
      projects: [["Blocky Rain", "/project/blocky_rain"], ["Swarm2D", "/project/swarm2d"]],
    },
    {
      name: ToolImageDict.construct3[0],
      proficiency: "proficient",
      subTools: [],
      imageUrl: ToolImageDict.construct3[1],
      projects: [],
    },
  ]
};

function getAllTools(): [string, string][] {
  return Object.values(ToolImageDict);
}

export const allTools = getAllTools().map((tool) => tool[0]);