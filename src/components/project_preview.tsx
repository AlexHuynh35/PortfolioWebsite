import Link from "next/link";
import Image from "next/image";

type ProjectType = 'software' | 'game' | 'data';
type QuadVariant = 'A' | 'B';

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  types: ProjectType[];
  collaborators: number;
  variant: QuadVariant;
};

const typeToColor = {
  data: "bg-emerald-500",
  software: "bg-indigo-500",
  game: "bg-rose-500",
};

const typeToImage = {
  data: "/icons/data.png",
  software: "/icons/software.png",
  game: "/icons/game.png",
};

const typeToPadding = {
  data: "p-4",
  software: "p-4",
  game: "p-2",
};

export default function ProjectCard({ slug, title, description, types, collaborators, variant }: ProjectCardProps) {
  const clipPath = variant === "A" ? "[clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)]" : "[clip-path:polygon(0_0,100%_5%,95%_95%,5%_100%)]";
  const typePosUp = variant === "A" ? "top-6 left-5" : "top-2.5 left-2.5";
  const typePosDown = variant === "A" ? "bottom-2.5 right-2.5" : "bottom-6 right-5";
  const typePosCollab = variant === "A" ? "top-2 right-5" : "top-5 right-2";

  return (
    <div className="relative w-70 aspect-[5/6] hover:scale-105">
      <Link href={`/project/${slug}`}>
        {collaborators != 0 && (
          <div className={`absolute w-1/7 h-5/42 ${typePosCollab} rounded-full z-10`}>
            <Image
              src="/icons/collaborate.png"
              alt="collaborate"
              fill
              className="object-contain"
            />
          </div>
        )}

        <div className={`absolute w-1/5 h-1/6 ${typePosUp} ${typeToColor[types[0]]} rounded-full z-10`}>
          <Image
            src={typeToImage[types[0]]}
            alt={title}
            fill
            className={`object-contain ${typeToPadding[types[0]]}`}
          />
        </div>

        {types[1] ? (
          <div className={`absolute w-1/5 h-1/6 ${typePosDown} ${typeToColor[types[1]]} rounded-full z-10`}>
            <Image
              src={typeToImage[types[1]]}
              alt={title}
              fill
              className={`object-contain ${typeToPadding[types[1]]}`}
            />
          </div>
        ) : (
          <div className={`absolute w-1/5 h-1/6 ${typePosDown} ${typeToColor[types[0]]} rounded-full z-10`}>
            <Image
              src={typeToImage[types[0]]}
              alt={title}
              fill
              className={`object-contain ${typeToPadding[types[0]]}`}
            />
          </div>
        )}

        <div className={`absolute inset-0 -translate-x-2 -translate-y-2 ${typeToColor[types[0]]} ${clipPath} -z-10`} />

        {types[1] ? (
          <div className={`absolute inset-0 translate-x-2 translate-y-2 ${typeToColor[types[1]]} ${clipPath} -z-20`} />
        ) : (
          <div className={`absolute inset-0 translate-x-2 translate-y-2 ${typeToColor[types[0]]} ${clipPath} -z-20`} />
        )}

        <div className={`relative w-full h-full bg-slate-200 shadow-lg p-4 flex flex-col text-center justify-center ${clipPath}`}>
          <h3 className="text-3xl text-black font-orbitron font-semibold">{title}</h3>
          <p className="text-xl text-gray-800 mt-2 font-rajdhani">{description}</p>
        </div>
      </Link>
    </div>
  );
}
