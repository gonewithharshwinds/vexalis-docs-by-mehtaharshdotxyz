import React from 'react';
import { Icons } from '../icons';

const ToolbarDivider = () => <div className="w-[1px] h-5 bg-border mx-1" />;

const ToolbarButton: React.FC<{ 
  icon: React.ReactNode; 
  active?: boolean; 
  onClick?: () => void 
}> = ({ icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`p-1.5 rounded transition-colors ${
      active 
        ? 'bg-accent text-accent-foreground' 
        : 'text-foreground/70 hover:bg-muted hover:text-foreground'
    }`}
  >
    {icon}
  </button>
);

export const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center gap-1 px-4 py-1.5 bg-background border-b border-border sticky top-0 z-10 shadow-sm overflow-x-auto">
      <div className="flex items-center gap-1 shrink-0">
        <button className="flex items-center gap-1 px-2 py-1 text-sm rounded hover:bg-muted text-foreground/80 font-medium">
          <span>Normal Text</span>
          <Icons.ChevronDown className="w-3 h-3 opacity-50" />
        </button>
        <ToolbarDivider />
        <button className="flex items-center gap-1 px-2 py-1 text-sm rounded hover:bg-muted text-foreground/80 font-sans">
          <span>Inter</span>
          <Icons.ChevronDown className="w-3 h-3 opacity-50" />
        </button>
        <div className="flex items-center border border-border rounded overflow-hidden mx-1">
          <button className="px-2 py-0.5 hover:bg-muted text-sm">-</button>
          <input className="w-8 text-center text-sm border-x border-border py-0.5 outline-none bg-background" defaultValue="11" />
          <button className="px-2 py-0.5 hover:bg-muted text-sm">+</button>
        </div>
      </div>

      <ToolbarDivider />

      <div className="flex items-center gap-0.5 shrink-0">
        <ToolbarButton icon={<Icons.Bold className="w-4 h-4" />} />
        <ToolbarButton icon={<Icons.Italic className="w-4 h-4" />} />
        <ToolbarButton icon={<Icons.Underline className="w-4 h-4" />} />
      </div>

      <ToolbarDivider />
      
      <div className="flex items-center gap-0.5 shrink-0">
        <ToolbarButton icon={<Icons.AlignLeft className="w-4 h-4" />} active />
        <ToolbarButton icon={<Icons.AlignCenter className="w-4 h-4" />} />
        <ToolbarButton icon={<Icons.AlignRight className="w-4 h-4" />} />
      </div>

      <ToolbarDivider />

      <div className="flex items-center gap-0.5 shrink-0">
        <ToolbarButton icon={<Icons.List className="w-4 h-4" />} />
      </div>

      <div className="ml-auto flex items-center text-sm text-muted-foreground px-2">
         Editing
         <Icons.ChevronDown className="w-3 h-3 ml-1" />
      </div>
    </div>
  );
};