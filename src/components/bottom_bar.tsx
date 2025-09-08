import Link from "next/link";

type ProjectType = 'software' | 'game' | 'data';

type BottomBarProps = {
  type: ProjectType;
};

export default function BottomBar({ type }: BottomBarProps) {
  const background = type === "software" ? "bg-indigo-600" : type === "game" ? "bg-rose-600" : "bg-emerald-600";
  const foreground = type === "software" ? "bg-indigo-500" : type === "game" ? "bg-rose-500" : "bg-emerald-500";

  return (
    <footer className="fixed bottom-0 left-0 w-full h-32 py-4 z-40">
      <div className={`absolute bottom-0 left-0 right-0 w-128 h-28 ${background} [clip-path:polygon(0%_15%,90%_10%,85%_100%,0%_100%)] -z-20`} />
      <div className={`absolute bottom-0 left-0 right-0 w-128 h-26 ${foreground} [clip-path:polygon(0%_15%,90%_10%,85%_100%,0%_100%)] -z-10`} />
      <div className={`absolute bottom-0 left-0 right-0 h-16 ${background} [clip-path:polygon(0_10%,100%_20%,100%_100%,0_100%)] -z-20`} />
      <div className={`absolute bottom-0 left-0 right-0 h-14 ${foreground} [clip-path:polygon(0_10%,100%_20%,100%_100%,0_100%)] -z-10`} />
      <nav className="flex flex-col text-center justify-center">
        <div className="relative left-10 bottom-10 w-64">
          <div className="absolute inset-0 bg-neutral-700 shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(0_50%,10%_10%,100%_15%,90%_90%,10%_95%)]" />
          <Link href="/" className="block bg-neutral-600 hover:bg-neutral-500 m-1 py-8 px-4 font-orbitron font-bold text-xl text-white transform -translate-y-1 transition-transform active:translate-y-0 [clip-path:polygon(0_50%,10%_10%,100%_15%,90%_90%,10%_95%)]">Project Dex</Link>
        </div>
      </nav>
    </footer>
  );
}