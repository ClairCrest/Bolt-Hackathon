import React, { useState } from 'react';
import { Rocket, X, Sparkles } from 'lucide-react';
import DeploymentModal from './DeploymentModal';

interface DeploymentBannerProps {
  onDismiss?: () => void;
  projectName?: string;
}

export default function DeploymentBanner({ onDismiss, projectName = "AI Paper Assistant" }: DeploymentBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  Ready to share your {projectName}?
                </p>
                <p className="text-xs sm:text-sm opacity-90">
                  Deploy to the web in seconds and get a live URL to share with anyone!
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 text-sm flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Deploy Now
              </button>
              
              <button
                onClick={handleDismiss}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <DeploymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName={projectName}
      />
    </>
  );
}