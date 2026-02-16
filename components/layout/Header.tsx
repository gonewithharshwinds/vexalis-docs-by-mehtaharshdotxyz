import React from 'react';
import { Icons } from '../icons';
import { Button } from '../ui/Button';
import { Avatar } from '../ui/Avatar';
import { useTheme } from '../../functions/ThemeProvider';
import { DocumentMetadata } from '../../types';

interface HeaderProps {
  doc: DocumentMetadata;
}

export const Header: React.FC<HeaderProps> = ({ doc }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-background border-b border-border">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="p-2 bg-primary/10 rounded-lg">
           <Icons.Logo className="w-6 h-6 text-primary" />
        </div>

        {/* Document Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <input 
              defaultValue={doc.title} 
              className="text-lg font-medium text-foreground bg-transparent border-none outline-none focus:ring-1 focus:ring-ring rounded px-1 -ml-1"
            />
            {doc.status === 'saved' && (
              <span className="flex items-center text-xs text-muted-foreground gap-1">
                <Icons.CloudCheck className="w-3 h-3" />
                <span className="hidden sm:inline">Saved to Vexalis Cloud</span>
              </span>
            )}
          </div>
          
          {/* Menu Bar */}
          <div className="flex items-center gap-1 mt-1 text-sm text-foreground/80">
            <button className="px-2 py-0.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors">File</button>
            <button className="px-2 py-0.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors">Edit</button>
            <button className="px-2 py-0.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors">View</button>
            <button className="px-2 py-0.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors">Insert</button>
            <button className="px-2 py-0.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors">Format</button>
            <button className="px-2 py-0.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors">Tools</button>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme} 
          title="Toggle Theme"
        >
          {theme === 'light' ? <Icons.Moon className="w-5 h-5" /> : <Icons.Sun className="w-5 h-5" />}
        </Button>
        
        <Button variant="ghost" size="icon" title="Comment History">
          <Icons.MessageSquare className="w-5 h-5" />
        </Button>
        
        <Button variant="primary" className="gap-2 rounded-full px-6 shadow-md shadow-primary/20">
          <Icons.Share className="w-4 h-4" />
          Share
        </Button>

        <Avatar 
          fallback="HM" 
          src="https://picsum.photos/200"
          className="ml-2 ring-2 ring-background shadow-sm"
        />
      </div>
    </header>
  );
};