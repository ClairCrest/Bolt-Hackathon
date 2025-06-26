import React from 'react';

interface BoltBadgeProps {
  variant?: 'white' | 'black' | 'text';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BoltBadge({ 
  variant = 'black', 
  className = '',
  size = 'md'
}: BoltBadgeProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base'
  };

  const getStyles = () => {
    const baseStyles = `${sizeClasses[size]} rounded-full flex items-center justify-center font-bold transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg border-2`;
    
    switch (variant) {
      case 'white':
        return `${baseStyles} bg-white text-gray-800 border-gray-300 hover:border-gray-400`;
      case 'black':
        return `${baseStyles} bg-gray-900 text-white border-gray-700 hover:bg-gray-800`;
      case 'text':
        return `${baseStyles} bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent`;
      default:
        return `${baseStyles} bg-gray-900 text-white border-gray-700 hover:bg-gray-800`;
    }
  };

  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
      title="Built with Bolt.new"
    >
      <div className={getStyles()}>
        <span className="font-extrabold tracking-tight">BOLT</span>
      </div>
    </a>
  );
}