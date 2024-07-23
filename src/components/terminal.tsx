'use client'
import { useEffect, useRef, useState } from 'react';

const Terminal = ({ className }: { className: string }) => {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentInput.trim()) {
        setCommands([...commands, currentInput]);
        setCurrentInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <div className={`bg-[#181818] h-1/4 p-4 pr-0  ${className} relative custom-scrollbar`}>
      <div className="bg-[#181818] h-full overflow-y-auto pb-10" ref={terminalRef}>
        <div className="">
          {commands.map((command, index) => (
            <div className='text-white' key={index}>
              e:\projects&gt; <span className='text-[#e7f543]'>{command}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-90% flex items-center bg-[#181818] p-4">
        <span className="text-white bg-[#181818]">e:\projects&gt;</span>
        <textarea
          className="bg-transparent text-[#e7f543] ml-2 focus:outline-none w-full resize-none"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyPress={handleKeyPress}
          rows={1}
          ref={textareaRef}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
