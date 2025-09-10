"use client"

import { useState } from "react";
import { ItchEmbed, TableauEmbed, SlideViewer } from "@/components";

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

export default function MediaCarouselProps({ itchUrl, tableauUrl, images }: MediaCarouselProps ) {
  const [current, setCurrent] = useState(0);

  const mediaSlides: { type: string; content: React.ReactNode; label: string }[] = [];

  if (itchUrl) {
    mediaSlides.push({
      type: "itch",
      content: <ItchEmbed url={itchUrl} />,
      label: "Play Game",
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
      label: "See Dashboard",
    });
  }

  if (images.length > 0) {
    mediaSlides.push({
      type: "images",
      content: <SlideViewer urls={images} />,
      label: "View Gallery",
    });
  }

  if (mediaSlides.length === 0) return null;

  const next = () => setCurrent((current + 1) % mediaSlides.length);
  const prev = () => setCurrent((current - 1 + mediaSlides.length) % mediaSlides.length);

  return (
    <div className="relative">
      {mediaSlides.length > 1 && (
        <button
          onClick={prev}
          className="absolute inset-y-0 left-0 p-3 text-4xl font-bold mix-blend-difference rounded-full z-10"
        >
          &lt;
        </button>
      )}

      {mediaSlides[current].content}

      {mediaSlides.length > 1 && (
        <button
          onClick={next}
          className="absolute inset-y-0 right-0 p-3 text-4xl font-bold mix-blend-difference rounded-full z-10"
        >
          &gt;
        </button>
      )}
    </div>
  );
}