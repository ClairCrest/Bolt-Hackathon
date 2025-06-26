import React, { useState } from 'react';
import { X, Globe, Rocket, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export default function DeploymentModal({ isOpen, onClose, projectName = "AI Paper Assistant" }: DeploymentModalProps) {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  const [deploymentUrl, setDeploymentUrl] = useState<string>('');
  const [claimUrl, setClaimUrl] = useState<string>('');

  const handleDeploy = async () => {
    setIsDeploying(true);
    setDeploymentStatus('deploying');

    try {
      // Simulate deployment process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock successful deployment
      const mockUrl = `https://${projectName.toLowerCase().replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 8)}.netlify.app`;
      const mockClaimUrl = `https://app.netlify.com/sites/${projectName.toLowerCase().replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 8)}/overview`;
      
      setDeploymentUrl(mockUrl);
      setClaimUrl(mockClaimUrl);
      setDeploymentStatus('success');
    } catch (error) {
      setDeploymentStatus('error');
    } finally {
      setIsDeploying(false);
    }
  };

  const resetModal = () => {
    setDeploymentStatus('idle');
    setDeploymentUrl('');
    setClaimUrl('');
    setIsDeploying(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Deploy Project</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {deploymentStatus === 'idle' && (
            <div className="text-center">
              <div className="mb-6">
                <Globe className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Ready to Deploy
                </h3>
                <p className="text-gray-600 text-sm">
                  Deploy your {projectName} to the web and share it with the world. 
                  Your app will be live in minutes!
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <h4 className="font-medium text-blue-800 mb-2">What happens next:</h4>
                <ul className="text-sm text-blue-700 space-y-1 text-left">
                  <li>• Build your project for production</li>
                  <li>• Deploy to Netlify hosting</li>
                  <li>• Get a live URL to share</li>
                  <li>• Option to claim and manage your site</li>
                </ul>
              </div>

              <button
                onClick={handleDeploy}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Deploy Now
              </button>
            </div>
          )}

          {deploymentStatus === 'deploying' && (
            <div className="text-center">
              <div className="mb-6">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                  <Rocket className="w-6 h-6 text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Deploying Your Project
                </h3>
                <p className="text-gray-600 text-sm">
                  Building and deploying your application...
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Building project files
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    Optimizing assets
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    Deploying to Netlify
                  </div>
                </div>
              </div>
            </div>
          )}

          {deploymentStatus === 'success' && (
            <div className="text-center">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Deployment Successful!
                </h3>
                <p className="text-gray-600 text-sm">
                  Your {projectName} is now live and accessible to everyone.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 mb-6">
                <h4 className="font-medium text-green-800 mb-3">Your live site:</h4>
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <a
                    href={deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all"
                  >
                    {deploymentUrl}
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={deploymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Site
                </a>
                
                <a
                  href={claimUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Globe className="w-5 h-5" />
                  Claim & Manage Site
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Use the "Claim & Manage Site" link to transfer this deployment to your Netlify account
              </p>
            </div>
          )}

          {deploymentStatus === 'error' && (
            <div className="text-center">
              <div className="mb-6">
                <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Deployment Failed
                </h3>
                <p className="text-gray-600 text-sm">
                  Something went wrong during deployment. Please try again.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-4 mb-6">
                <p className="text-red-700 text-sm">
                  The deployment process encountered an error. This might be due to:
                </p>
                <ul className="text-sm text-red-600 mt-2 space-y-1 text-left">
                  <li>• Network connectivity issues</li>
                  <li>• Build configuration problems</li>
                  <li>• Service temporarily unavailable</li>
                </ul>
              </div>

              <button
                onClick={handleDeploy}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}