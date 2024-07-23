import SyncedScrollContainer from "@/components/syncscroll";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#1f1f1f] text-[#f86943]">
      <div className="flex-shrink-0 w-8 border-r border-gray-600 flex flex-col items-center text-gray-400">
      </div>
      <main  className="flex-1 p-8 text-6xl overflow-y-auto custom-scrollbar flex flex-col justify-center items-center">
        <div>404 not found</div>
        <img src="/static/images/8.png" alt="404" className="object-contain h-full" />
      </main>
    </div>
  );
}