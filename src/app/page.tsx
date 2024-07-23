'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import SyncedScrollContainer from "@/components/syncscroll";
import Image from "next/image";

export default function Home() {

  return (
    <SyncedScrollContainer>
      {/* <h1 className="text-3xl font-bold mb-6 ">Welcome to My Portfolio</h1> */}
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#bb86c0]">About Me</h2>
        <p className="mb-4">
          Hello! I'm Margen, a software developer passionate about the web.
          I specialize in building websites using modern web technologies.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#bb86c0]">Skills</h2>
        <ul className="list-disc list-inside">

           {/* Languages */}
          <ul className="space-y-2">
            <div className='text-[#4ec9a4]'>Languages</div>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex flex-wrap items-center">
                <Image src='/static/icons/javascript.svg' alt='JavaScript' 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span className="mr-2 md:mr-4">JavaScript</span>
              </div>
              <div className="flex flex-wrap items-center">
                <Image src='/static/icons/typescript.svg' alt='TypeScript' 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>TypeScript</span>
              </div>
            </li>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/python.svg' alt='Python' 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>Python</span>
              </div>
            </li>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/Php_dark.svg' alt='php' 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>PHP</span>
              </div>
            </li>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/html5.svg' alt='html' 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>HTML</span>
                <Image src='/static/icons/html5.svg' alt='css' 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>CSS</span>
              </div>
            </li>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/c.svg' alt='c' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>C</span>
              </div>
            </li>
          </ul>

          {/* Frameworks */}
          <ul className="space-y-2">
          <div className='mt-2 text-[#4ec9a4]'>Frameworks</div>
          <li className="flex flex-wrap items-center">
            <span className="mr-2">•</span>
            <div className="flex items-center">
              <Image src='/static/icons/react.svg' alt='react' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />  
              <span>React</span>
            
              <Image src='/static/icons/nextjs_icon_dark.svg' alt='nextjs' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />  
              <span>Next.js</span>
            </div>
          </li>
          <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/solidjs.svg' alt='solidjs' 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>Solid.js</span>
              </div>
            </li>
          <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/tailwindcss.svg' alt='tailwindcss' 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>Tailwindcss</span>
              </div>
            </li>
          </ul>
          {/* Tools */}
          <ul className="space-y-2">
            <div className='mt-2 text-[#4ec9a4]'>Tools</div>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/git.svg' alt='git' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>Git</span>
              </div>
            </li>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/docker.svg' alt='docker' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>Docker</span>
              </div>
            </li>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/Vercel_wordmark_dark.svg' alt='vercel' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>Vercel</span>
              </div>
            </li>
          </ul>

          {/* Libraries */}
          <ul className="space-y-2">
            <div className='mt-2 text-[#4ec9a4]'>Libraries</div>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/nodejs.svg' alt='node' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>Node.js</span>
              </div>
            </li>
            <li className="flex flex-wrap items-center">
              <span className="mr-2">•</span>
              <div className="flex items-center">
                <Image src='/static/icons/ui_dark.svg' alt='shadui' 
                width={18} 
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2" />
                <span>shadcn/ui</span>
              </div>
            </li>
          </ul>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#bb86c0]">Navigation Guide</h2>
        <p>
          Use the sidebar on the left to explore my projects. Each project page contains
          detailed information about the project, including the tech stack used and key features.
        </p>
      </section>
      
      <Button className="mt-4">Contact Me</Button>
    </SyncedScrollContainer>
  );
}