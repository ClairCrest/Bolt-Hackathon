import React, { useState } from 'react';
import { Rocket, Globe, Zap, Shield, Clock } from 'lucide-react';
import DeploymentModal from './DeploymentModal';

interface DeploymentCardProps {
  className?: string;
  projectName?: string;
}

export default function DeploymentCard({ className = '', projectName = "AI Paper Assistant" }: DeploymentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Deploy in under 30 seconds"
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      title: "Global CDN",
      description: "Served from 100+ locations worldwide"
    },
    {
      icon: <Shield className="w-5 h-5 text-green-500" />,
      title: "Secure HTTPS",
      description: "SSL certificate included"
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-500" />,
      title: "Always Online",
      description: "99.9% uptime guarantee"
    }
  ];

  return (
    <>
      <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-card p-8 border border-white/50 ${className}`}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Deploy Your Project</h3>
          <p className="text-gray-600 leading-relaxed">
            Share your {projectName} with the world. Get a live URL in seconds with our one-click deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 bg-gray-50/80 rounded-xl">
              <div className="flex justify-center mb-2">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-3 text-lg"
        >
          <Rocket className="w-6 h-6" />
          Deploy to Web
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Free deployment • No credit card required • Ready in 30 seconds
        </p>
      </div>

      <DeploymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectName={projectName}
      />
    </>
  );
}