import Editor from "@/components/editor";
import Sidebar from "@/components/sidebar";
import Terminal from "@/components/terminal";
import Topbar from "@/components/topbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Editor editorText={"Sample text"} />
    </div>
  );
}
