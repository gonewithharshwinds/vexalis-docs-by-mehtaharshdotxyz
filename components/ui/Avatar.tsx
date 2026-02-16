import React from 'react';

interface AvatarProps {
  src?: string;
  fallback: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, fallback, className = '' }) => {
  return (
    <div className={`relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full ${className}`}>
      {src ? (
        <img className="aspect-square h-full w-full object-cover" src={src} alt="User" />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
          {fallback}
        </div>
      )}
    </div>
  );
};