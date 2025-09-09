import Image from "next/image";
import { SectionTitle } from "@/components";

type SlideViewerProps = {
  urls: string[]
}

export default function SlideViewer({ urls }: SlideViewerProps) {
  return (
    <div className="relative max-w-6xl mx-auto h-250 my-15 flex justify-center">
      <div className="absolute left-10 -top-30 w-80 h-24 z-10">
        <SectionTitle title="View Deliverables!" variant="A" proportion={2} type="main" />
      </div>

      <div className="absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_0,100%_2%,98%_98%,2%_100%)] -z-40" />
      <div className="absolute inset-0 bg-slate-200 [clip-path:polygon(0_0,100%_2%,98%_98%,2%_100%)] -z-30" />

      <div className="absolute inset-0 flex justify-center items-center px-8">
        <div className="relative w-4/5 h-4/5">
          <Image
            src={urls[0]}
            alt="slide"
            fill
            className="object-contain border-4 border-black bg-black"
          />
        </div>
      </div>
    </div>
  );
}