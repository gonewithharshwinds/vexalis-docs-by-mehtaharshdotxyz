import React from 'react';

export const Ruler: React.FC = () => {
  return (
    <div className="h-6 w-full bg-muted border-b border-border flex items-end relative overflow-hidden select-none">
      <div className="absolute top-0 left-0 bottom-0 w-[calc(50%-400px)] bg-background/50 z-10 border-r border-border" />
      <div className="absolute top-0 right-0 bottom-0 w-[calc(50%-400px)] bg-background/50 z-10 border-l border-border" />
      
      {/* Ruler markings mockup */}
      <div className="mx-auto w-[800px] h-full flex justify-between items-end px-12 relative">
        {Array.from({ length: 41 }).map((_, i) => (
          <div 
            key={i} 
            className={`w-[1px] bg-foreground/20 ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`} 
          />
        ))}
        {/* Left Margin Indicator */}
        <div className="absolute left-[48px] top-0 bottom-0 w-[1px] border-l border-dashed border-primary z-20">
             <div className="absolute -top-[1px] -left-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary cursor-col-resize" />
        </div>
      </div>
    </div>
  );
};