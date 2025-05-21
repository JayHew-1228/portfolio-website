'use client';

import { useEffect, useRef, useMemo } from 'react';
import VanillaTilt from 'vanilla-tilt';

// Add vanilla-tilt types
declare global {
  interface HTMLElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
  
  namespace VanillaTilt {
    interface Options {
      max: number;
      speed: number;
      glare: boolean;
      'max-glare': number;
      scale: number;
      perspective: number;
    }
  }
}

type TiltCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  proficiency: number;
  [key: string]: any; // Allow additional props
};

export default function TiltCard({ title, description, icon, className = '', proficiency, ...props }: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement & { vanillaTilt?: { destroy: () => void } }>(null);

  useEffect(() => {
    if (!tiltRef.current) return;
    
    const tiltNode = tiltRef.current;
    
    // Initialize vanilla-tilt with TypeScript type assertion
    const options = {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.1,
      scale: 1.02,
      perspective: 1000,
      'glare-prerender': false,
    } as const;

    VanillaTilt.init(tiltNode, options);

    return () => {
      if (tiltNode.vanillaTilt) {
        tiltNode.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={tiltRef}
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20 hover:border-yellow-400/50 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        backdropFilter: 'blur(4px)',
      }}
      {...props}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col p-6 z-20">
        {/* Icon */}
        <div className="w-12 h-12 mb-4 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500/20 transition-colors duration-300">
          <div className="text-xl">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        {/* Proficiency bar */}
        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-400">Proficiency</span>
            <span className="text-xs font-medium text-yellow-400">{proficiency}%</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${proficiency}%`,
                boxShadow: '0 0 10px rgba(234, 179, 8, 0.5)'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Glare effect container */}
      <div className="vanilla-tilt-glare" />
    </div>
  );
}
