import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Loading from "./loading";
import React, { Suspense } from "react";

const SidebarTree = dynamic(() => import('./sidebarTree'), {
  loading: () => <Loading />,
});

const Sidebar = React.memo(() => {
  return (
    <div className="w-[15%] bg-[#181818] h-screen flex flex-col pl-2 py-4 border-t border-r border-[#2b2b2b]">
      <Suspense fallback={<Loading />}>
        <SidebarTree />
      </Suspense>
    </div>
  );
})

Sidebar.displayName = 'Sidebar';
export default Sidebar;