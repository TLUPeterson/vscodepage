import SyncedScrollContainer from "@/components/syncscroll";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <SyncedScrollContainer lineCount={150}> {/* Adjust lineCount as needed */}
      <h1 className="text-3xl font-bold mb-6">Project Name</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
        <p className="mb-4">
          Detailed description of the project...
        </p>
      </section>
      <Image src="/static/images/github.svg" alt="Project Image" className="mb-8" width={200} height={200} />
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          {/* Add more technologies */}
        </ul>
      </section>
      
      {/* Add more sections as needed */}
    </SyncedScrollContainer>
  );
}