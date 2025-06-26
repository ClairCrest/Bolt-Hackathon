import React from 'react';

interface PoweredByBoltProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export default function PoweredByBolt({ 
  className = '', 
  size = 'md',
  variant = 'light'
}: PoweredByBoltProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed top-4 right-4 z-50 
        ${sizeClasses[size]} 
        rounded-full 
        bg-white/90 backdrop-blur-sm 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 
        hover:scale-110 
        border border-white/20
        flex items-center justify-center
        group
        ${className}
      `}
      title="Powered by Bolt"
    >
      {/* Bolt Lightning Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300"
        >
          <path 
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-10 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Powered by Bolt
      </div>
    </a>
  );
}