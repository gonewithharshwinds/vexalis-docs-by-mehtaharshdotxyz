import React, { useState } from 'react';
import { EditorPage } from './pages/EditorPage';
import { ThemeProvider } from './functions/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen w-full overflow-hidden bg-background text-foreground selection:bg-primary/20">
        <EditorPage />
      </div>
    </ThemeProvider>
  );
};

export default App;