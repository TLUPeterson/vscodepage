import SyncedScrollContainer from "@/components/syncscroll";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <SyncedScrollContainer lineCount={150}>
      <a href='https://github.com/TLUPeterson/SolidStartParts' target='_blank' className="flex flex-right items-center align">
        <h1 className="text-3xl text-[#a477c7] font-bold mb-6 mr-2">SolidStart Parts</h1> 
        <Image src='/static/images/github.svg'
        alt='github logo'
        width={40}
        height={40}
        className="mb-6"
        ></Image>
      </a>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#409cd6]">Website to pick parts for your PC</h2>
        <p className="mb-4 text-[#c1cccc]">
          This is a project that I made to learn the basics of SolidStart framework. 
          It uses arvutitark API to get the list of parts, adds up the cost of the parts
          using SolidJS createMemo function.
          <br />
          Hosting this relatively new framework proved to be a challenge and ultimately was unsuccessful 
        </p>
      </section>
      {/* <Image src="/static/images/github.svg" alt="Project Image" className="mb-8" width={200} height={200} /> */}
      <Image src="/static/images/SolidStart/home.png" alt="Project Image" 
      className="mb-8" 
      width={800} 
      height={200} 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image src="/static/images/SolidStart/builder.png" alt="Project Image" 
      className="mb-8" 
      width={800} 
      height={200} 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#409cd6]">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="flex flex-wrap items-center">
            <span className="mr-2">•</span>
            <div className="flex flex-wrap items-center">
              <Image src='/static/icons/solidjs.svg' alt='JavaScript' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
              <span className="mr-2 md:mr-4">SolidJS</span>
            </div>
          </li>
          <li className="flex flex-wrap items-center">
            <span className="mr-2">•</span>
            <div className="flex flex-wrap items-center">
              <Image src='/static/icons/solidjs.svg' alt='JavaScript' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
              <span className="mr-2 md:mr-4">SolidStart</span>
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