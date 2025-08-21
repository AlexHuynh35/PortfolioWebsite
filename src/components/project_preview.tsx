type ProjectType = 'software' | 'game' | 'data';
type QuadVariant = 'A' | 'B';

type ProjectCardProps = {
  title: string;
  description: string;
  types: ProjectType[];
  variant: QuadVariant;
};

const typeToColor = {
  data: "bg-emerald-500",
  software: "bg-indigo-500",
  game: "bg-rose-500",
};

export default function ProjectCard({ title, description, types, variant }: ProjectCardProps) {
  const clipPath = variant === "A" ? "[clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)]" : "[clip-path:polygon(0_0,100%_5%,95%_95%,5%_100%)]";
  const typePosUp = variant === "A" ? "top-3 left-2" : "-top-2 -left-2";
  const typePosDown = variant === "A" ? "-bottom-2 -right-2" : "bottom-3 right-2";

  return (
    <div className="relative w-99/100 aspect-[5/6]">
      <div className={`absolute w-3/20 h-1/8 ${typePosUp} ${typeToColor[types[0]]} rounded-full z-10`} />

      {types[1] ? (
        <div className={`absolute w-3/20 h-1/8 ${typePosDown} ${typeToColor[types[1]]} rounded-full z-10`} />
      ) : (
        <div className={`absolute w-3/20 h-1/8 ${typePosDown} ${typeToColor[types[0]]} rounded-full z-10`} />
      )}

      <div className={`absolute inset-0 -translate-x-2 -translate-y-2 ${typeToColor[types[0]]} rounded-xl ${clipPath} -z-10`} />

      {types[1] ? (
        <div className={`absolute inset-0 translate-x-2 translate-y-2 ${typeToColor[types[1]]} rounded-xl ${clipPath} -z-20`} />
      ) : (
        <div className={`absolute inset-0 translate-x-2 translate-y-2 ${typeToColor[types[0]]} rounded-xl ${clipPath} -z-20`} />
      )}

      <div className={`relative w-full h-full bg-white shadow-lg p-4 ${clipPath}`}>
        <h3 className="text-xl font-semibold mt-10">{title}</h3>
        <p className="text-md mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
