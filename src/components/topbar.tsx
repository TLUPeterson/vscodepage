import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full h-12 bg-[#181818] text-white flex items-center px-4 border-b border-[#2b2b2b]">
      <div className="flex space-x-1">
        <a href='https://www.github.com/TLUPeterson' className='items-center pt-1'>
          <Github color='#0078d4' />
        </a>
        <div>
          <Button variant='ghost' size='sm' className='hover:bg-slate-200/20 hover:text-white cursor-default'>File</Button>
        </div>
        <div>
          <Button variant='ghost' size='sm' className='hover:bg-slate-200/20 hover:text-white cursor-default'>Edit</Button>
        </div>
        <div>
          <Button variant='ghost'size='sm' className='hover:bg-slate-200/20 hover:text-white cursor-default'>View</Button>
        </div>
        <div>
          <Button variant='ghost' size='sm' className='hover:bg-slate-200/20 hover:text-white cursor-default'>Terminal</Button>
        </div>

      </div>
    </div>
  );
};
