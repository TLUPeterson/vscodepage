import { Button } from "@/components/ui/button";
import SidebarTree from "./sidebarTree";

export default function Sidebar() {
  return (
    <div className="w-[15%] bg-[#181818] h-screen flex flex-col pl-2 py-4 border-t border-r border-[#2b2b2b]">
      <SidebarTree />
    </div>
  );
};