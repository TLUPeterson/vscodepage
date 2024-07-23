'use client'
import { useEffect, useRef, useState } from 'react';
import { Textarea } from "@/components/ui/textarea"

const Editor = ({ editorText }: { editorText: string }) => {
  const [lines, setLines] = useState<number[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      updateLineNumbers();
      textareaRef.current.addEventListener('input', updateLineNumbers);
    }

    if (textareaRef.current && lineNumbersRef.current) {
      textareaRef.current.addEventListener('scroll', syncScroll);
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener('input', updateLineNumbers);
        textareaRef.current.removeEventListener('scroll', syncScroll);
      }
    };
  }, []);

  const updateLineNumbers = () => {
    if (textareaRef.current) {
      const text = textareaRef.current.value;
      const lineCount = text.split('\n').length;
      setLines(Array.from(Array(lineCount).keys()));
    }
  };

  const syncScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className={`flex-1 flex bg-[#1f1f1f] h-3/4 pl-4 py-4 text-white`}>
      <div className="flex-shrink-0 w-8 border-r border-gray-600 flex flex-col items-center text-gray-400">

        <div ref={lineNumbersRef} className="h-full overflow-y-scroll custom-scrollbar2">
          {lines.map((lineNumber) => (
            <div key={lineNumber} className="w-full h-5 flex text-sm items-center justify-start pr-4 pt-3 mt-1">
              {lineNumber + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-[#1f1f1f] h-full rounded-md overflow-y-auto">
        <Textarea
          ref={textareaRef}
          className=" w-full h-full resize-none bg-transparent text-base text-[#9cdcde] border-0 focus:outline-none custom-scrollbar"
          onScroll={syncScroll}
        >{editorText}</Textarea>
      </div>
    </div>
  );
};

export default Editor;