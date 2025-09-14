"use client"

import { useState } from "react";
import { ItchEmbed, TableauEmbed, SlideViewer, SectionTitle } from "@/components";

type TableauInfo = {
  url: string,
  width: number,
  height: number
}

type MediaCarouselProps = {
  itchUrl?: string;
  tableauUrl?: TableauInfo;
  images: string[];
};

export default function MediaCarouselProps({ itchUrl, tableauUrl, images }: MediaCarouselProps) {
  const [current, setCurrent] = useState(0);

  const mediaSlides: { type: string; content: React.ReactNode; label: string }[] = [];

  if (itchUrl) {
    mediaSlides.push({
      type: "itch",
      content: <ItchEmbed url={itchUrl} />,
      label: "Game",
    });
  }

  if (tableauUrl) {
    mediaSlides.push({
      type: "tableau",
      content: (
        <TableauEmbed
          url={tableauUrl.url}
          width={tableauUrl.width}
          height={tableauUrl.height}
        />
      ),
      label: "Dashboard",
    });
  }

  if (images.length > 0) {
    mediaSlides.push({
      type: "images",
      content: <SlideViewer urls={images} />,
      label: "Report",
    });
  }

  if (mediaSlides.length === 0) return null;

  const min = 0;
  const max = mediaSlides.length - 1;

  const next = () => setCurrent(Math.min(current + 1, max));
  const prev = () => setCurrent(Math.max(current - 1, min));

  const nextLabel = current < max ? mediaSlides[current + 1].label : null;
  const prevLabel = current > min ? mediaSlides[current - 1].label : null;

  return (
    <div>
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-center gap-10 mt-30 mb-5 md:my-5">
        {mediaSlides.length > 1 && (
          <div className="flex text-center justify-center">
            <div className="relative w-32">
              <div className={`absolute inset-0 ${current > min ? "bg-slate-300" : "bg-neutral-700"} shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(0_50%,10%_10%,100%_15%,90%_90%,10%_95%)]`} />
              <div
                onClick={current > min ? prev : undefined}
                className={`block m-1 py-8 px-4 font-orbitron font-bold text-sm transform -translate-y-1 transition-transform cursor-pointer [clip-path:polygon(0_50%,10%_10%,100%_15%,90%_90%,10%_95%)] ${current > min ? "bg-slate-200 hover:bg-slate-100 text-black active:translate-y-0" : "bg-neutral-600 text-neutral-600"}`}
              >
                {current > min ? prevLabel : <p className="invisible">Prev</p>}
              </div>
            </div>
          </div>
        )}

        <div className="relative w-2/5">
          <SectionTitle title="View Media" variant="B" proportion={3} type="main" />
        </div>

        {mediaSlides.length > 1 && (
          <div className="flex text-center justify-center">
            <div className="relative w-32">
              <div className={`absolute inset-0 ${current < max ? "bg-slate-300" : "bg-neutral-700"} shadow-[0_4px_0_rgba(0,0,0,0.5)] [clip-path:polygon(100%_50%,90%_10%,0_15%,10%_90%,90%_95%)]`} />
              <div
                onClick={current < max ? next : undefined}
                className={`block m-1 py-8 px-4 font-orbitron font-bold text-sm transform -translate-y-1 transition-transform cursor-pointer [clip-path:polygon(100%_50%,90%_10%,0_15%,10%_90%,90%_95%)] ${current < max ? "bg-slate-200 hover:bg-slate-100 text-black active:translate-y-0" : "bg-neutral-600 text-neutral-600"}`}
              >
                {current < max ? nextLabel : <p className="invisible">Next</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full py-5 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {mediaSlides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0">
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}