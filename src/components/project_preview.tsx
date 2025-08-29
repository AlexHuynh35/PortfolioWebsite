import Link from "next/link";
import Image from "next/image";

type ProjectType = 'software' | 'game' | 'data';
type QuadVariant = 'A' | 'B';

type ProjectCardProps = {
  slug: string;
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

const typeToImage = {
  data: "/data.png",
  software: "/software.png",
  game: "/game.png",
};

const typeToPadding = {
  data: "p-4",
  software: "p-4",
  game: "p-2",
};

export default function ProjectCard({ slug, title, description, types, variant }: ProjectCardProps) {
  const clipPath = variant === "A" ? "[clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)]" : "[clip-path:polygon(0_0,100%_5%,95%_95%,5%_100%)]";
  const typePosUp = variant === "A" ? "top-7 left-6" : "top-2 left-2";
  const typePosDown = variant === "A" ? "bottom-2 right-2" : "bottom-7 right-6";

  return (
    <div className="relative w-90 aspect-[5/6] hover:scale-105">
      <Link href={`/project/${slug}`}>
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

        <div className={`absolute inset-0 -translate-x-2 -translate-y-2 ${typeToColor[types[0]]} rounded-xl ${clipPath} -z-10`} />

        {types[1] ? (
          <div className={`absolute inset-0 translate-x-2 translate-y-2 ${typeToColor[types[1]]} rounded-xl ${clipPath} -z-20`} />
        ) : (
          <div className={`absolute inset-0 translate-x-2 translate-y-2 ${typeToColor[types[0]]} rounded-xl ${clipPath} -z-20`} />
        )}

        <div className={`relative w-full h-full bg-slate-200 shadow-lg p-4 flex flex-col text-center justify-center ${clipPath}`}>
          <h3 className="text-3xl text-black font-orbitron font-semibold">{title}</h3>
          <p className="text-xl text-gray-800 mt-2 font-rajdhani">{description}</p>
        </div>
      </Link>
    </div>
  );
}
