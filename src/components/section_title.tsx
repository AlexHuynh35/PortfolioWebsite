type QuadVariant = 'A' | 'B';

type SectionTitleProps = {
  title: string;
  variant: QuadVariant;
};

export default function SectionTitle({ title, variant }: SectionTitleProps) {
  const clipPath = variant === "A" ? "[clip-path:polygon(5%_5%,95%_0,100%_100%,0_95%)]" : "[clip-path:polygon(0_0,100%_5%,95%_95%,5%_100%)]";

  return (
    <div className="relative max-w-5xl mx-auto aspect-[6/1] text-center mb-20">
      <div className={`absolute inset-0 -m-[10px] bg-gold ${clipPath} -z-10`} />
      <div className={`absolute inset-0 bg-parchment ${clipPath} shadow-md flex items-center justify-center px-8`}>
        <h2 className="text-darkbrown font-bold tracking-wide" style={{ fontSize: "4cqw" }}>
          {title}
        </h2>
      </div>
    </div>
  )
}