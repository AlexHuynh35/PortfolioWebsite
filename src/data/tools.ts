type ToolProficiency = "beginner" | "proficient" | "expert";

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
            name: "React",
            proficiency: "expert",
            subTools: ["Next.JS", "Vite"],
            imageUrl: "/svgs/react.svg",
            projects: [["Angklung Educational Website", "/project/angklung_educational_website"], ["Video Game Recommender", "/project/video_game_recommender"]],
        },
        {
            name: "Tailwind CSS",
            proficiency: "expert",
            subTools: ["Mobile-Friendly Websites"],
            imageUrl: "/svgs/tailwind.svg",
            projects: [["Angklung Educational Website", "/project/angklung_educational_website"], ["Video Game Recommender", "/project/video_game_recommender"]],
        },
        {
            name: "TypeScript",
            proficiency: "expert",
            subTools: [],
            imageUrl: "/svgs/typescript.svg",
            projects: [["Angklung Educational Website", "/project/angklung_educational_website"], ["Video Game Recommender", "/project/video_game_recommender"]],
        },
    ],
    backend: [
        {
            name: "Python",
            proficiency: "proficient",
            subTools: ["Flask", "Pandas", "Numpy"],
            imageUrl: "/svgs/python.svg",
            projects: [["Video Game Recommender", "/project/video_game_recommender"]],
        },
    ],
    database: [
        {
            name: "PostgreSQL",
            proficiency: "beginner",
            subTools: ["Relational Database"],
            imageUrl: "/svgs/postgresql.svg",
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
            name: "Python",
            proficiency: "expert",
            subTools: ["Pandas", "Numpy", "Matplotlib", "Scikit-Learn", "Keras", "Tensorflow", "APIs"],
            imageUrl: "/svgs/python.svg",
            projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Predicting Emotions with GRU", "/project/predicting_emotions_with_gru"]],
        },
        {
            name: "SQL",
            proficiency: "proficient",
            subTools: ["PostgreSQL", "Joins", "Data Aggregation", "CTEs"],
            imageUrl: "/svgs/sql.svg",
            projects: [["Video Game Recommender", "/project/video_game_recommender"]],
        },
    ],
    spreadsheet: [
        {
            name: "Microsoft Excel",
            proficiency: "expert",
            subTools: ["VLOOKUPs", "INDEX-MATCH", "Pivot Tables", "Conditional Formatting", "REGEX", "Wild Cards"],
            imageUrl: "/svgs/excel.svg",
            projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Subscription Campaign Optimization", "/project/subscription_campaign_optimization"]],
        },
        {
            name: "Google Sheets",
            proficiency: "expert",
            subTools: ["VLOOKUPs", "INDEX-MATCH", "Pivot Tables", "Conditional Formatting", "REGEX", "Wild Cards"],
            imageUrl: "/svgs/sheets.svg",
            projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Subscription Campaign Optimization", "/project/subscription_campaign_optimization"]],
        },
    ],
    visualization: [
        {
            name: "Tableau",
            proficiency: "proficient",
            subTools: ["Interactive Dashboards", "Calculated Fields"],
            imageUrl: "/svgs/tableau.svg",
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
            name: "C#",
            proficiency: "proficient",
            subTools: ["Object-Oriented Programming", "Software Design Patterns"],
            imageUrl: "/svgs/csharp.svg",
            projects: [["Blocky Rain", "/project/blocky_rain"], ["Swarm2D", "/project/swarm2d"]],
        },
        {
            name: "C",
            proficiency: "beginner",
            subTools: [],
            imageUrl: "/svgs/c.svg",
            projects: [["Fruit Ninja Demake", "/project/fruit_ninja_demake"]],
        },
        {
            name: "Lua",
            proficiency: "beginner",
            subTools: ["Software Design Patterns"],
            imageUrl: "/svgs/lua.svg",
            projects: [["Frogger Remake", "/project/frogger_remake"]],
        },
    ],
    engine: [
        {
            name: "Unity",
            proficiency: "proficient",
            subTools: ["Photon Fusion"],
            imageUrl: "/svgs/unity.svg",
            projects: [["Blocky Rain", "/project/blocky_rain"], ["Swarm2D", "/project/swarm2d"]],
        },
        {
            name: "Construct 3",
            proficiency: "proficient",
            subTools: [],
            imageUrl: "/svgs/construct3.svg",
            projects: [],
        },
    ]
};