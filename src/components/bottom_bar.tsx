import Link from "next/link";

export default function BottomBar() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-32 text-white py-4">
      <div className="absolute inset-0 w-128 bg-slate-800 [clip-path:polygon(0%_15%,90%_10%,85%_95%,0%_100%)] -z-10" />
      <div className="absolute inset-0 w-128 bg-slate-900 [clip-path:polygon(0%_10%,92%_5%,87%_95%,0%_100%)] -z-20" />
      <div className="absolute inset-0 bg-slate-800 [clip-path:polygon(0_60%,100%_50%,100%_100%,0_100%)] -z-10" />
      <div className="absolute inset-0 bg-slate-900 [clip-path:polygon(0_55%,100%_45%,100%_100%,0_100%)] -z-20" />
    </footer>
  );
}