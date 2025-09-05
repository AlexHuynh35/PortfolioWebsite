import Image from "next/image";
import { Sidebar, SectionTitle } from "@/components";

export default function About() {
  return (
    <section className="p-6 lg:pl-64">
      <Sidebar />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse justify-center items-center gap-30">
        <div className="relative w-1/2 aspect-[5/7] flex justify-center items-center">
          <div className={`absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(8%_8%,92%_10%,90%_90%,10%_92%)] -z-40`} />
          <div className="relative w-4/5 aspect-[5/7]">
            <Image
              src="/portrait.jpg"
              alt="portrait"
              fill
              className="object-cover border-4 border-black -z-30"
            />
          </div>
          <div className="absolute bottom-20 w-full h-20">
            <SectionTitle title="Alex Huynh" variant="B" proportion={3} type="main" />
          </div>
        </div>
        <div className="relative w-1/2 aspect-[5/7]">
        </div>
      </div>
    </section>
  );
}