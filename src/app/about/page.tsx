import Image from "next/image";
import { Sidebar, SectionTitle } from "@/components";

export default function About() {
  return (
    <section className="p-6 lg:pl-64">
      <Sidebar />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse justify-center items-center gap-30">
        <div className="w-1/2 aspect-[5/7] flex flex-col justify-center items-center gap-2">
          <div className="relative w-full h-full">
            <div className={`absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(8%_8%,92%_9%,91%_91%,9%_92%)] -z-20`} />
            <div className={`absolute inset-0 bg-slate-200 [clip-path:polygon(8%_8%,92%_9%,91%_91%,9%_92%)] -z-10 flex items-center justify-center`}>
              <div className="relative w-4/5 aspect-[5/7]">
                <Image
                  src="/about/portrait.jpg"
                  alt="portrait"
                  fill
                  className="object-cover border-4 border-black -z-30"
                />
              </div>
            </div>
            <div className="absolute bottom-10 w-full h-20 z-10">
              <SectionTitle title="Alex Huynh" variant="B" proportion={3} type="main" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div className={`absolute inset-0 w-18 h-18 bg-cyan-500 hover:bg-cyan-400 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition`}>
                <Image
                  src="/icons/linkedin.png"
                  alt="linkedin"
                  fill
                  className={`object-contain p-2`}
                />
              </div>
            </div>
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div className={`absolute inset-0 w-18 h-18 bg-cyan-500 hover:bg-cyan-400 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition`}>
                <Image
                  src="/icons/github.png"
                  alt="github"
                  fill
                  className={`object-contain p-2`}
                />
              </div>
            </div>
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div className={`absolute inset-0 w-18 h-18 bg-cyan-500 hover:bg-cyan-400 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition`}>
                <Image
                  src="/icons/itch.png"
                  alt="itch"
                  fill
                  className={`object-contain p-3`}
                />
              </div>
            </div>
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div className={`absolute inset-0 w-18 h-18 bg-cyan-500 hover:bg-cyan-400 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition`}>
                <Image
                  src="/icons/tableau.png"
                  alt="tableau"
                  fill
                  className={`object-contain p-3`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 aspect-[5/7]">
        </div>
      </div>
    </section>
  );
}