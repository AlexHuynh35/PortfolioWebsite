import { SectionTitle } from "@/components";

type ItchEmbedProps = {
  url?: string
}

export default function ItchEmbed({ url }: ItchEmbedProps) {
  return (
    <div className="relative max-w-6xl mx-auto h-200 my-15 flex justify-center">
      <div className="absolute hidden md:block left-10 -top-20 w-80 z-10">
        <SectionTitle title="Play Here!" variant="A" proportion={2} type="main" />
      </div>
      <div className="absolute md:hidden left-1/2 -top-20 transform -translate-x-1/2 w-64 z-10">
        <SectionTitle title="Play Here!" variant="A" proportion={2} type="main" />
      </div>

      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(4%_4%,96%_6%,94%_94%,6%_96%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(4%_4%,96%_6%,94%_94%,6%_96%)] -z-30" />

      <div className="absolute inset-0 flex justify-center items-center px-8">
        <div className="hidden sm:block relative w-2/3 h-2/3">
          <iframe
            src={url}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full border-4 border-black bg-black"
          />
        </div>
        <div className="sm:hidden relative w-2/3 h-2/3 flex justify-center items-center text-center">
          <h2 className="font-bold font-orbitron text-black text-4xl">For the best experience, please use a desktop to play the game!</h2>
        </div>
      </div>
    </div>
  );
}