import React, { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Toolbar } from '../components/editor/Toolbar';
import { Ruler } from '../components/editor/Ruler';
import { EditorCanvas } from '../components/editor/EditorCanvas';
import { DocumentMetadata } from '../types';

export const EditorPage: React.FC = () => {
  const [doc, setDoc] = useState<DocumentMetadata>({
    id: 'doc-123',
    title: 'Project Alpha Specification',
    lastModified: new Date(),
    status: 'saved',
    owner: {
      id: 'user-1',
      name: 'Harsh Mehta',
      email: 'harsh@mehtaharsh.xyz',
      avatarUrl: 'https://picsum.photos/200'
    }
  });

  // Simulate auto-save status toggling for effect
  useEffect(() => {
    const timer = setInterval(() => {
      setDoc(prev => ({ ...prev, status: 'saving' }));
      setTimeout(() => {
        setDoc(prev => ({ ...prev, status: 'saved' }));
      }, 800);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Header doc={doc} />
      <Toolbar />
      <div className="flex flex-1 overflow-hidden relative">
        {/* Optional: Left Sidebar for outline could go here */}
        <div className="flex flex-col flex-1 min-w-0 bg-muted/10">
          <Ruler />
          <EditorCanvas />
        </div>
        {/* Optional: Right Sidebar for comments could go here */}
      </div>
    </div>
  );
};