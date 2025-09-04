type QuadVariant = 'A' | 'B';
type Proportion = 1 | 2 | 3;
type ProjectType = 'main' | 'sub' | 'software' | 'game' | 'data';

type SectionTitleProps = {
  title: string;
  variant: QuadVariant;
  proportion: Proportion;
  type: ProjectType;
};

export default function SectionTitle({ title, variant, proportion, type }: SectionTitleProps) {
  const clipPath = variant === "A" ? "[clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)]" : "[clip-path:polygon(0_0,100%_5%,95%_95%,5%_100%)]";
  const height = proportion === 1 ? "h-60" : proportion === 2 ? "h-30" : "h-20";
  const textSize = proportion === 1 ? "text-5xl" : proportion === 2 ? "text-3xl" : "text-xl";
  const textColor = type === "main" ? "text-darkbrown" : type === "sub" ? "text-black" : "text-slate-200";
  const background = type === "main" ? "bg-gold" : type === "sub" ? "bg-slate-300" : type === "software" ? "bg-indigo-600" : type === "game" ? "bg-rose-600" : "bg-emerald-600";
  const foreground = type === "main" ? "bg-parchment" : type === "sub" ? "bg-slate-200" : type === "software" ? "bg-indigo-500" : type === "game" ? "bg-rose-500" : "bg-emerald-500";

  return (
    <div className={`relative max-w-7xl mx-auto ${height} text-center my-15`}>
      <div className={`absolute inset-0 -m-[10px] ${background} ${clipPath} -z-20`} />
      <div className={`absolute inset-0 ${foreground} ${clipPath} -z-10 flex items-center justify-center px-8`}>
        <h2 className={`${textSize} ${textColor} font-orbitron font-bold tracking-wide`}>
          {title}
        </h2>
      </div>
    </div>
  )
}