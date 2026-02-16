import React, { useRef, useEffect } from 'react';

export const EditorCanvas: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto bg-muted/30 scrollbar-thin scrollbar-thumb-border">
      <div className="flex justify-center py-8 min-h-full cursor-text" onClick={() => editorRef.current?.focus()}>
        <div 
          ref={editorRef}
          contentEditable
          className="w-[816px] min-h-[1056px] bg-background shadow-sm border border-border/50 px-[96px] py-[96px] outline-none text-foreground leading-relaxed selection:bg-primary/20 transition-shadow focus:shadow-md"
          spellCheck={false}
          role="textbox"
          aria-multiline="true"
        >
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Alpha: Phase 1 Specification</h1>
          <p className="mb-4 text-foreground/90">
            <span className="font-semibold text-primary">Vexalis Labs</span> is initiating the primary research phase for the new neural interface protocols.
            This document outlines the core requirements and architectural constraints identified during the preliminary discovery sessions.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">1. Executive Summary</h2>
          <p className="mb-4 text-foreground/90">
            The objective is to streamline the deployment pipeline found at <span className="text-blue-500 underline cursor-pointer">api.mehtaharsh.xyz</span>. 
            By leveraging the new R&D findings from the labs subdomain, we expect a 40% increase in throughput.
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-foreground/90">
            <li>Integrate with Vexalis Identity Provider.</li>
            <li>Implement real-time collaboration using OT (Operational Transformation).</li>
            <li>Ensure full compliance with the updated Design System (Amber/Orange primary).</li>
          </ul>
           <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">2. Design System Audit</h2>
           <p className="mb-4 text-foreground/90">
             All components must adhere strictly to the variable definitions. Specifically, the <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono text-primary">--primary</code> color (#f59e0b) should be used for call-to-actions and active states.
           </p>
           <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
             "Consistency is the bedrock of the Vexalis ecosystem." - Harsh Mehta
           </blockquote>
           <p className="mb-4 text-foreground/90">
            (End of current draft)
           </p>
        </div>
      </div>
    </div>
  );
};