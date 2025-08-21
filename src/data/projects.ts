type ProjectType = 'software' | 'game' | 'data';

export type Project = {
  title: string;
  description: string;
  types: ProjectType[];
};

export const projects: Project[] = [
  {
    title: "Game Recommender",
    description: "A web app that suggests games based on player preferences.",
    types: ['data', 'software'],
  },
  {
    title: "Pixel Dungeon",
    description: "A retro roguelike built with Construct 3.",
    types: ['game'],
  },
  {
    title: "Movie Insights",
    description: "An exploratory data analysis of profitability trends in film.",
    types: ['data'],
  },
  {
    title: "AI Review Summarizer",
    description: "Summarizes game reviews using generative AI.",
    types: ['data', 'software'],
  },
];