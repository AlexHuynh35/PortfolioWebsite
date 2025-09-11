import { SectionTitle } from "@/components";

type TableauEmbedProps = {
  url?: string,
  width?: number,
  height?: number
}

export default function TableauEmbed({ url, width, height }: TableauEmbedProps) {
  return (
    <div className="relative max-w-6xl mx-auto h-250 my-15 flex justify-center">
      <div className="absolute left-10 -top-30 w-80 z-10">
        <SectionTitle title="Explore the Data!" variant="A" proportion={2} type="main" />
      </div>

      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_0,100%_2%,98%_98%,2%_100%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(0_0,100%_2%,98%_98%,2%_100%)] -z-30" />

      <div className="absolute inset-0 flex justify-center items-center px-8">
        <iframe
          src={url}
          width={width}
          height={height}
          frameBorder="0"
          allowFullScreen
          className="border-4 border-black"
        ></iframe>
      </div>
    </div>
  );
}