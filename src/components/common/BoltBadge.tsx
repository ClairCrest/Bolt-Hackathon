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
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const getImageSrc = () => {
    switch (variant) {
      case 'white':
        return '/bolt-white-circle.png';
      case 'black':
        return '/bolt-black-circle.png';
      case 'text':
        return '/bolt-logo-text.png';
      default:
        return '/bolt-black-circle.png';
    }
  };

  const getAltText = () => {
    return variant === 'text' ? 'Powered by Bolt.new' : 'Built with Bolt.new';
  };

  // Fallback to a simple SVG if images don't load
  const FallbackBadge = () => (
    <div className={`${sizeClasses[size]} bg-black rounded-full flex items-center justify-center text-white font-bold text-xs`}>
      BOLT
    </div>
  );

  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-all duration-200 hover:scale-110 hover:opacity-80 ${className}`}
      title="Built with Bolt.new"
    >
      <img
        src={getImageSrc()}
        alt={getAltText()}
        className={`${sizeClasses[size]} object-contain`}
        onError={(e) => {
          // Replace with fallback if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className={`${sizeClasses[size]} bg-black rounded-full items-center justify-center text-white font-bold text-xs hidden`}>
        BOLT
      </div>
    </a>
  );
}