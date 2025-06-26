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
    sm: 'w-10 h-10',
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

  const imageSrc = getImageSrc();

  // Fallback CSS badge if image fails to load
  const renderFallbackBadge = () => {
    const baseStyles = `${sizeClasses[size]} rounded-full flex items-center justify-center font-bold transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg border-2`;
    
    const variantStyles = variant === 'white' 
      ? `${baseStyles} bg-white text-gray-800 border-gray-300 hover:border-gray-400`
      : `${baseStyles} bg-gray-900 text-white border-gray-700 hover:bg-gray-800`;

    return (
      <div className={variantStyles}>
        <span className="font-extrabold tracking-tight text-xs">BOLT</span>
      </div>
    );
  };

  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-all duration-200 hover:scale-110 ${className}`}
      title="Built with Bolt.new"
    >
      <img
        src={imageSrc}
        alt="Built with Bolt.new"
        className={`${sizeClasses[size]} object-contain cursor-pointer drop-shadow-lg hover:drop-shadow-xl transition-all duration-200`}
        onError={(e) => {
          // Fallback to CSS badge if image fails to load
          const target = e.target as HTMLImageElement;
          const parent = target.parentElement;
          if (parent) {
            target.style.display = 'none';
            const fallbackDiv = document.createElement('div');
            fallbackDiv.className = variant === 'white' 
              ? `${sizeClasses[size]} rounded-full flex items-center justify-center font-bold bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-400 shadow-lg transition-all duration-200 hover:scale-110`
              : `${sizeClasses[size]} rounded-full flex items-center justify-center font-bold bg-gray-900 text-white border-2 border-gray-700 hover:bg-gray-800 shadow-lg transition-all duration-200 hover:scale-110`;
            fallbackDiv.innerHTML = '<span class="font-extrabold tracking-tight text-xs">BOLT</span>';
            parent.appendChild(fallbackDiv);
          }
        }}
      />
    </a>
  );
}