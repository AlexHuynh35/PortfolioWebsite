type ProjectType = 'software' | 'game' | 'data';

export type Project = {
  title: string;
  description: string;
  link: string;
  types: ProjectType[];
};

export const projects: Project[] = [
  {
    title: "Frogger Remake",
    description: "A web app that suggests games based on player preferences.",
    link: "/project/frogger_remake",
    types: ['data', 'software'],
  },
  {
    title: "Fruit Ninja Demake",
    description: "A retro roguelike built with Construct 3.",
    link: "/project/fruit_ninja_remake",
    types: ['game'],
  },
  {
    title: "Movie Insights",
    description: "An exploratory data analysis of profitability trends in film.",
    link: "",
    types: ['data'],
  },
  {
    title: "AI Review Summarizer",
    description: "Summarizes game reviews using generative AI.",
    link: "",
    types: ['data', 'software'],
  },
];