type QuadVariant = 'A' | 'B';
type Proportion = 1 | 2 | 3;

type SectionTitleProps = {
  title: string;
  variant: QuadVariant;
  proportion: Proportion;
};

export default function SectionTitle({ title, variant, proportion }: SectionTitleProps) {
  const clipPath = variant === "A" ? "[clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)]" : "[clip-path:polygon(0_0,100%_5%,95%_95%,5%_100%)]";
  const height = proportion === 1 ? "h-60" : proportion === 2 ? "h-30" : "h-20";
  const textSize = proportion === 1 ? "text-5xl" : proportion === 2 ? "text-4xl" : "text-3xl";

  return (
    <div className={`relative max-w-7xl mx-auto ${height} text-center mt-10 mb-20`}>
      <div className={`absolute inset-0 -m-[10px] bg-gold ${clipPath} -z-10`} />
      <div className={`absolute inset-0 bg-parchment ${clipPath} shadow-md flex items-center justify-center px-8`}>
        <h2 className={`${textSize} text-darkbrown font-orbitron font-bold tracking-wide`}>
          {title}
        </h2>
      </div>
    </div>
  )
}