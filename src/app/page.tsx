import Editor from "@/components/editor";
import Sidebar from "@/components/sidebar";
import Terminal from "@/components/terminal";
import Topbar from "@/components/topbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Editor className="flex-1 overflow-hidden" />
          <Terminal className="h-1/3 " />
        </div>
      </div>
    </div>
  );
}
