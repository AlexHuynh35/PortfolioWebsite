import Image from "next/image";
import Link from "next/link";
import { Sidebar, SectionTitle, ToolShowcase, ProjectGallery } from "@/components";
import { wipProjects } from "@/data/projects";
import { socials, aboutMe } from "@/data/about";

export default function About() {
  return (
    <section className="p-6 lg:pl-64">
      <Sidebar />

      <div className="max-w-md mx-auto flex justify-center mb-15">
        <div className="w-full aspect-[5/7] flex flex-col justify-center items-center gap-2">
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
            <div className="absolute bottom-0 w-full z-10">
              <SectionTitle title="Alex Huynh" variant="B" proportion={3} type="main" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            {socials.map((social, index) => (
              <div key={index} className="relative w-18 h-18 sm:w-20 sm:h-20">
                <div className="absolute inset-0 w-full h-full bg-neutral-700 rounded-full" />
                <Link href={social.link} target="_blank" rel="noopener noreferrer" className={`block absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 bg-cyan-500 hover:bg-cyan-400 rounded-full translate-x-1 transform translate-y-0 transition-transform active:translate-y-1 transition`}>
                  <Image
                    src={social.imageUrl}
                    alt={social.name}
                    fill
                    className={`object-contain p-3`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto h-150 my-30">
        <div className="absolute hidden md:block right-10 -top-15 w-80 z-10">
          <SectionTitle title="About Me" variant="B" proportion={3} type="main" />
        </div>
        <div className="absolute md:hidden left-1/2 -top-20 transform -translate-x-1/2 w-64 z-10">
          <SectionTitle title="About Me" variant="B" proportion={3} type="main" />
        </div>
        <div className={`absolute inset-0 -m-[10px] bg-slate-300 [clip-path:polygon(0_0,100%_5%,100%_95%,0%_100%)] -z-20`} />
        <div className={`absolute inset-0 bg-slate-200 [clip-path:polygon(0_0,100%_5%,100%_95%,0%_100%)] -z-10`} />
        <div className="absolute inset-0 text-black flex justify-center items-center px-8">
          <ul className="list-none list-inside mt-8">
            {aboutMe.map((about, index) => (
              <li key={index} className="text-xs sm:text-md md:text-lg xl:text-xl mb-4">
                <span className="font-semibold font-rajdhani">{about}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ToolShowcase />

      <div className="max-w-5xl mx-auto">
        <div className="relative w-3/5 mx-auto">
          <SectionTitle title="Current Projects" variant="B" proportion={2} type="main" />
        </div>

        <ProjectGallery projectList={wipProjects} />
      </div>
    </section>
  );
}