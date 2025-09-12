import { SectionTitle } from "@/components";

type TableauEmbedProps = {
  url: string,
  width: number,
  height: number
}

export default function TableauEmbed({ url, width, height }: TableauEmbedProps) {
  const maxWidth = Math.min(width, 1000)
  const maxHeight = Math.min(height, 750)

  return (
    <div className="relative max-w-6xl mx-auto h-200 my-15 flex justify-center">
      <div className="absolute left-10 md:left-20 -top-20 w-80 z-10">
        <SectionTitle title="Explore the Data!" variant="A" proportion={2} type="main" />
      </div>

      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(4%_4%,96%_6%,94%_94%,6%_96%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(4%_4%,96%_6%,94%_94%,6%_96%)] -z-30" />

      <div className="absolute inset-0 flex justify-center items-center px-8">
        <div className="relative w-2/3 h-2/3">
          <iframe
            src={url}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full border-4 border-black bg-black"
          />
        </div>
      </div>
    </div>
  );
}