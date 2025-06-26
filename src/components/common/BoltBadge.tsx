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
        return '/src/assets/white_circle_360x360.png';
      case 'black':
        return '/src/assets/black_circle_360x360.png';
      case 'text':
        return '/src/assets/logotext_poweredby_360w.png';
      default:
        return '/src/assets/black_circle_360x360.png';
    }
  };

  const getAltText = () => {
    return variant === 'text' ? 'Powered by Bolt.new' : 'Built with Bolt.new';
  };

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
      />
    </a>
  );
}