import React, { useState } from 'react';
import { Rocket, Globe } from 'lucide-react';
import DeploymentModal from './DeploymentModal';

interface DeployButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  projectName?: string;
}

export default function DeployButton({ 
  className = '', 
  variant = 'primary',
  size = 'md',
  projectName = "AI Paper Assistant"
}: DeployButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseClasses = "font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700",
    secondary: "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700",
    outline: "border-2 border-blue-500 text-blue-600 hover:bg-blue-50 bg-white"
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      >
        <Rocket className={iconSizes[size]} />
        Deploy to Web
      </button>

      <DeploymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName={projectName}
      />
    </>
  );
}