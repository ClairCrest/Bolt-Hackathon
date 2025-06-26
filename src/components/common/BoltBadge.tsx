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
    const baseStyles = `${sizeClasses[size]} rounded-full flex items-center justify-center font-bold transition-all duration-200 hover:scale-110 hover:opacity-80 shadow-lg`;
    
    switch (variant) {
      case 'white':
        return `${baseStyles} bg-white text-gray-800 border-2 border-gray-200`;
      case 'black':
        return `${baseStyles} bg-gray-900 text-white`;
      case 'text':
        return `${baseStyles} bg-gradient-to-r from-blue-500 to-purple-600 text-white`;
      default:
        return `${baseStyles} bg-gray-900 text-white`;
    }
  };

  const getText = () => {
    switch (size) {
      case 'sm':
        return 'BOLT';
      case 'md':
        return 'BOLT';
      case 'lg':
        return 'BOLT';
      default:
        return 'BOLT';
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
        {variant === 'text' ? (
          <span className="text-xs font-bold px-2">Powered by Bolt</span>
        ) : (
          <span className="font-bold">{getText()}</span>
        )}
      </div>
    </a>
  );
}