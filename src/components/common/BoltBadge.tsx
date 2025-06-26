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
    try {
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
    } catch {
      // Fallback to CSS-based badge if images fail to load
      return null;
    }
  };

  const imageSrc = getImageSrc();

  // Fallback CSS badge if no image available
  if (!imageSrc) {
    const baseStyles = `${sizeClasses[size]} rounded-full flex items-center justify-center font-bold transition-all duration-200 hover:scale-110 cursor-pointer shadow-lg border-2`;
    
    const variantStyles = variant === 'white' 
      ? `${baseStyles} bg-white text-gray-800 border-gray-300 hover:border-gray-400`
      : `${baseStyles} bg-gray-900 text-white border-gray-700 hover:bg-gray-800`;

    return (
      <a
        href="https://bolt.new/"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${className}`}
        title="Built with Bolt.new"
      >
        <div className={variantStyles}>
          <span className="font-extrabold tracking-tight text-xs">BOLT</span>
        </div>
      </a>
    );
  }

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
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="${sizeClasses[size]} rounded-full flex items-center justify-center font-bold bg-gray-900 text-white border-2 border-gray-700 hover:bg-gray-800 shadow-lg">
                <span class="font-extrabold tracking-tight text-xs">BOLT</span>
              </div>
            `;
          }
        }}
      />
    </a>
  );
}
</boltBadge>