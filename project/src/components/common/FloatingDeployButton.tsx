import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import DeploymentModal from '../DeploymentModal';

interface FloatingDeployButtonProps {
  projectName?: string;
  showAfterScroll?: number;
}

export default function FloatingDeployButton({ 
  projectName = "AI Paper Assistant",
  showAfterScroll = 500 
}: FloatingDeployButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  if (!isVisible) return null;

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-40 group"
        title="Deploy to Web"
      >
        <Rocket className="w-6 h-6 group-hover:animate-bounce" />
        <div className="absolute -top-12 right-0 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Deploy to Web
        </div>
      </button>

      <DeploymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName={projectName}
      />
    </>
  );
}