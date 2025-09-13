type ToolProficiency = "beginner" | "proficient" | "expert";

export interface Tool {
  name: string;
  proficiency: ToolProficiency;
  subTools: string[];
  imageUrl: string;
  favorite: boolean;
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
            favorite: true,
            projects: [["Angklung Education Website", "/project/angklung_educational_website"]],
        },
        {
            name: "Tailwind CSS",
            proficiency: "expert",
            subTools: ["Mobile-Friendly Websites"],
            imageUrl: "/svgs/tailwind.svg",
            favorite: true,
            projects: [["Angklung Education Website", "/project/angklung_educational_website"]],
        },
        {
            name: "TypeScript",
            proficiency: "expert",
            subTools: [],
            imageUrl: "/svgs/typescript.svg",
            favorite: true,
            projects: [["Angklung Education Website", "/project/angklung_educational_website"]],
        },
    ],
    backend: [
        {
            name: "Python",
            proficiency: "expert",
            subTools: ["Flask", "Pandas", "Numpy"],
            imageUrl: "/svgs/python.svg",
            favorite: true,
            projects: [],
        },
    ],
    database: [
        {
            name: "PostgreSQL",
            proficiency: "proficient",
            subTools: ["Relational Database"],
            imageUrl: "/svgs/postgresql.svg",
            favorite: true,
            projects: [],
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
            favorite: true,
            projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Predicting Emotions with GRU", "/project/predicting_emotions_with_gru"]],
        },
        {
            name: "SQL",
            proficiency: "proficient",
            subTools: ["PostgreSQL", "Joins", "Data Aggregation", "CTEs"],
            imageUrl: "/svgs/sql.svg",
            favorite: false,
            projects: [],
        },
    ],
    spreadsheet: [
        {
            name: "Microsoft Excel",
            proficiency: "expert",
            subTools: ["VLOOKUPs", "INDEX-MATCH", "Pivot Tables", "REGEX", "Wild Cards"],
            imageUrl: "/svgs/excel.svg",
            favorite: false,
            projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Subscription Campaign Optimization", "/project/subscription_campaign_optimization"]],
        },
        {
            name: "Google Sheets",
            proficiency: "expert",
            subTools: ["VLOOKUPs", "INDEX-MATCH", "Pivot Tables", "REGEX", "Wild Cards"],
            imageUrl: "/svgs/sheets.svg",
            favorite: true,
            projects: [["Box Office Profitability", "/project/box_office_profitability"], ["Subscription Campaign Optimization", "/project/subscription_campaign_optimization"]],
        },
    ],
    visualization: [
        {
            name: "Tableau",
            proficiency: "proficient",
            subTools: ["Interactive Dashboards", "Calculated Fields"],
            imageUrl: "/svgs/tableau.svg",
            favorite: true,
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
            favorite: true,
            projects: [],
        },
        {
            name: "C",
            proficiency: "beginner",
            subTools: [],
            imageUrl: "/svgs/c.svg",
            favorite: false,
            projects: [["Fruit Ninja Demake", "/project/fruit_ninja_demake"]],
        },
        {
            name: "Lua",
            proficiency: "beginner",
            subTools: ["Software Design Patterns"],
            imageUrl: "/svgs/lua.svg",
            favorite: false,
            projects: [["Frogger Remake", "/project/frogger_remake"]],
        },
    ],
    engine: [
        {
            name: "Unity",
            proficiency: "proficient",
            subTools: ["Photon Fusion"],
            imageUrl: "/svgs/unity.svg",
            favorite: true,
            projects: [],
        },
        {
            name: "Construct 3",
            proficiency: "proficient",
            subTools: [],
            imageUrl: "/svgs/construct3.svg",
            favorite: false,
            projects: [],
        },
    ]
};