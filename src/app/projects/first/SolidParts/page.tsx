import SyncedScrollContainer from "@/components/syncscroll";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <SyncedScrollContainer lineCount={150}>
      <h1 className="text-3xl font-bold mb-6">SolidStart Parts</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Website to pick parts for your PC</h2>
        <p className="mb-4">
          This is a project that I made to learn the basics of SolidStart framework. 
          It uses arvutitark API to get the list of parts, adds up the cost of the parts using SolidJS createMemo function
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
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside">
          <li>SolidJS</li>
          <li>SolidStart</li>
          <li>TypeScript</li>
          {/* Add more technologies */}
        </ul>
      </section>
      
      {/* Add more sections as needed */}
    </SyncedScrollContainer>
  );
}