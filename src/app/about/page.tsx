import Image from "next/image";
import { Sidebar, SectionTitle, ToolShowcase } from "@/components";

export default function About() {
  return (
    <section className="p-6 lg:pl-64">
      <Sidebar />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse justify-center items-center gap-5">
        <div className="w-full md:w-9/20 aspect-[5/7] flex flex-col justify-center items-center gap-2">
          <div className="relative w-full h-full">
            <div className={`absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(8%_8%,92%_9%,91%_91%,9%_92%)] -z-20`} />
            <div className={`absolute inset-0 bg-slate-200 [clip-path:polygon(8%_8%,92%_9%,91%_91%,9%_92%)] -z-10 flex items-center justify-center`}>
              <div className="relative w-7/10 md:w-4/5 aspect-[5/7]">
                <Image
                  src="/about/portrait.jpg"
                  alt="portrait"
                  fill
                  className="object-cover border-4 border-black -z-30"
                />
              </div>
            </div>
            <div className="absolute bottom-0 w-full z-10">
              <SectionTitle title="Alex Huynh" variant="B" proportion={3} type="main" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div className={`absolute inset-0 w-18 h-18 bg-cyan-500 hover:bg-cyan-400 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition`}>
                <Image
                  src="/svgs/linkedin.svg"
                  alt="linkedin"
                  fill
                  className={`object-contain p-3`}
                />
              </div>
            </div>
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div className={`absolute inset-0 w-18 h-18 bg-cyan-500 hover:bg-cyan-400 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition`}>
                <Image
                  src="/svgs/github.svg"
                  alt="github"
                  fill
                  className={`object-contain p-3`}
                />
              </div>
            </div>
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
              <div className={`absolute inset-0 w-18 h-18 bg-cyan-500 hover:bg-cyan-400 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition`}>
                <Image
                  src="/svgs/itch.svg"
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
                  src="/svgs/tableau.svg"
                  alt="tableau"
                  fill
                  className={`object-contain p-3`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-11/20 aspect-[5/7] flex flex-col justify-center items-center gap-2">
          <div className="relative w-full h-full">
            <div className={`absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(8%_8%,92%_9%,91%_91%,9%_92%)] -z-20`} />
            <div className={`absolute inset-0 bg-slate-200 [clip-path:polygon(8%_8%,92%_9%,91%_91%,9%_92%)] -z-10 flex items-center justify-center`}>
              <div className="relative w-4/5 aspect-[5/7]">
              </div>
            </div>
            <div className="absolute top-5 left-5 w-3/5 z-10 -rotate-5">
              <SectionTitle title="About Me" variant="B" proportion={3} type="main" />
            </div>
          </div>
        </div>
      </div>

      <ToolShowcase />
    </section>
  );
}