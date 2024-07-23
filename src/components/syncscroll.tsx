'use client'
import React, { useEffect, useRef, useState } from 'react';

interface SyncedScrollContainerProps {
  children: React.ReactNode;
  lineCount?: number;
}

const SyncedScrollContainer: React.FC<SyncedScrollContainerProps> = ({ children, lineCount = 100 }) => {
  const [lines, setLines] = useState<number[]>([]);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLines(Array.from(Array(lineCount).keys()));

    if (mainContentRef.current && lineNumbersRef.current) {
      mainContentRef.current.addEventListener('scroll', syncScroll);
    }

    return () => {
      if (mainContentRef.current) {
        mainContentRef.current.removeEventListener('scroll', syncScroll);
      }
    };
  }, [lineCount]);

  const syncScroll = () => {
    if (mainContentRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = mainContentRef.current.scrollTop;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#1f1f1f] text-[#94d6de]">
      <div className="flex-shrink-0 w-8 border-r border-gray-600 flex flex-col items-center text-gray-400">
        <div ref={lineNumbersRef} className="h-full overflow-y-scroll custom-scrollbar2">
          {lines.map((lineNumber) => (
            <div key={lineNumber} className="w-full h-5 flex text-sm items-center justify-start pr-4 pt-3 mt-1">
              {lineNumber + 1}
            </div>
          ))}
        </div>
      </div>
      <main ref={mainContentRef} className="flex-1 p-8 overflow-y-auto custom-scrollbar" onScroll={syncScroll}>
        {children}
      </main>
    </div>
  );
};

export default SyncedScrollContainer;