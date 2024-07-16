import Editor from "@/components/editor";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
      <Topbar />
      <Editor />
      </div>
    </div>
  );
}
