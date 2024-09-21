import SyncedScrollContainer from "@/components/syncscroll";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <SyncedScrollContainer lineCount={150}>
      <a href='https://github.com/TLUPeterson/exilerng' target='_blank' className="flex flex-right items-center align">
        <h1 className="text-3xl text-[#a477c7] font-bold mb-6 mr-2">ExileRNG</h1> 
        <Image src='/static/images/github.svg'
        alt='github logo'
        width={40}
        height={40}
        className="mb-6"
        ></Image>
      </a>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#409cd6]">Website to randomly pick a gem for your build</h2>
        <p className="mb-4 text-[#c1cccc]">
        I made this projects for me and my friends to make our league starts more interesting. 
        It chooses 3 random gems from all available gems 
        <p className='text-[#438a55]'>(reads from json file).</p> 
        Afterwards the gems can be locked in to keep the from being rerolled (incase there are some unworkable gems)
        
        </p>
      </section>
      {/* <Image src="/static/images/github.svg" alt="Project Image" className="mb-8" width={200} height={200} /> */}
      <a target='_blank' href="https://exilerng.vercel.app/">
        <Image src="/static/images/Exile/rngexile.png" alt="Project Image" 
        className="mb-8" 
        width={600} 
        height={200} 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </a>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#409cd6]">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex flex-wrap items-center">
            <span className="mr-2">•</span>
            <div className="flex flex-wrap items-center">
              <Image src='/static/icons/react.svg' alt='JavaScript' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
              <span className="mr-2 md:mr-4">React</span>
            </div>
          </li>
          <li className="flex flex-wrap items-center">
            <span className="mr-2">•</span>
            <div className="flex flex-wrap items-center">
              <Image src='/static/icons/nextjs_icon_dark.svg' alt='JavaScript' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
              <span className="mr-2 md:mr-4">NextJS</span>
            </div>
          </li>
          <li className="flex flex-wrap items-center">
            <span className="mr-2">•</span>
            <div className="flex flex-wrap items-center">
              <Image src='/static/icons/tailwindcss.svg' alt='JavaScript' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
              <span className="mr-2 md:mr-4">TailWind</span>
            </div>
          </li>
          <li className="flex flex-wrap items-center">
            <span className="mr-2">•</span>
            <div className="flex flex-wrap items-center">
              <Image src='/static/icons/typescript.svg' alt='JavaScript' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
              <span className="mr-2 md:mr-4">TypeScript</span>
            </div>
          </li>
          {/* Add more technologies */}
        </ul>
      </section>
      
      {/* Add more sections as needed */}
    </SyncedScrollContainer>
  );
}