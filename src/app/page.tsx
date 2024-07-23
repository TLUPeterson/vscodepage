'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import SyncedScrollContainer from "@/components/syncscroll";

export default function Home() {

  return (
    <SyncedScrollContainer>
      <h1 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">
          Hello! I'm [Your Name], a [Your Profession/Role] passionate about [Your Interests].
          I specialize in building [types of projects/applications] using modern web technologies.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>JavaScript/TypeScript</li>
          <li>React.js & Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Navigation Guide</h2>
        <p>
          Use the sidebar on the left to explore my projects. Each project page contains
          detailed information about the project, including the tech stack used and key features.
        </p>
      </section>
      
      <Button className="mt-4">Contact Me</Button>
    </SyncedScrollContainer>
  );
}