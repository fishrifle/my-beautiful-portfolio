import { useEffect, useState } from 'react';

export const ReturnToPortfolio = ({ 
  position = 'top-right', 
  portfolioUrl = null, 
  theme = 'dark',
  size = 'medium' 
}) => {
  const [returnUrl, setReturnUrl] = useState(portfolioUrl);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for stored portfolio URL or use provided URL
    const storedUrl = sessionStorage.getItem('portfolioReturnUrl');
    if (storedUrl) {
      setReturnUrl(storedUrl);
    } else if (!portfolioUrl) {
      // Fallback to your portfolio domain
      setReturnUrl('https://fishrifle.github.io/my-beautiful-portfolio');
    }

    // Show after a brief delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, [portfolioUrl]);

  const handleReturn = () => {
    if (returnUrl) {
      window.location.href = returnUrl;
    }
  };

  // Position styles
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  };

  // Size styles
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  // Theme styles
  const themeClasses = {
    dark: 'bg-black/80 text-yellow-400 border-yellow-400/50 hover:bg-yellow-400 hover:text-black',
    light: 'bg-white/90 text-gray-800 border-gray-300 hover:bg-gray-800 hover:text-white',
    gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400'
  };

  if (!returnUrl) return null;

  return (
    <button
      onClick={handleReturn}
      className={`
        fixed z-50 
        ${positionClasses[position]} 
        ${sizeClasses[size]}
        ${themeClasses[theme]}
        border-2 rounded-lg font-semibold
        transition-all duration-300 hover:scale-105 hover:shadow-lg
        backdrop-blur-sm
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
      `}
      title="Return to Jesse Davis Portfolio"
    >
      ← Portfolio
    </button>
  );
};

// Standalone version that can be easily embedded in any project
export const EmbeddableReturnButton = () => {
  return (
    <ReturnToPortfolio 
      position="top-right"
      theme="gradient"
      size="medium"
      portfolioUrl="https://fishrifle.github.io/my-beautiful-portfolio"
    />
  );
};

export default ReturnToPortfolio;