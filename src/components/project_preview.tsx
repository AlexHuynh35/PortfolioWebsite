type ProjectType = 'software' | 'game' | 'data';

type ProjectCardProps = {
    title: string;
    description: string;
    types: ProjectType[];
}

const typeToColor = {
  data: "bg-emerald-500",
  software: "bg-indigo-500",
  game: "bg-rose-500",
};

export default function ProjectCard({ title, description, types }: ProjectCardProps) {
    return (
        <div className="relative w-64 h-80 m-8">
            {types[0] && (
                <div className={`absolute w-12 h-12 -top-2 -left-2 ${typeToColor[types[0]]} rounded-full z-10`} />
            )}
            {types[1] && (
                <div className={`absolute w-12 h-12 -bottom-2 -right-2 ${typeToColor[types[1]]} rounded-full z-10`} />
            )}

            <div className={`absolute inset-0 -translate-x-2 -translate-y-2 ${typeToColor[types[0]]} rounded-xl -z-10`} />
            <div className={`absolute inset-0 translate-x-2 translate-y-2 ${typeToColor[types[1]]} rounded-xl -z-20`} />

            <div className="relative w-full h-full bg-white shadow-lg p-4">
                <h3 className="text-lg font-semibold mt-10">{title}</h3>
                <p className="text-sm mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
}
