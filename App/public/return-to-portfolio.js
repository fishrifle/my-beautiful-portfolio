// Return to Portfolio Button - Embeddable Script
// Usage: Add <script src="./return-to-portfolio.js"></script> to any project demo

(function() {
  'use strict';

  // Configuration
  const config = {
    portfolioUrl: 'https://fishrifle.github.io/my-beautiful-portfolio',
    position: 'top-right', // top-left, top-right, bottom-left, bottom-right
    theme: 'gradient', // dark, light, gradient
    size: 'medium', // small, medium, large
    text: '← Portfolio'
  };

  // Create the button
  function createReturnButton() {
    const button = document.createElement('button');
    button.id = 'return-to-portfolio-btn';
    button.innerHTML = config.text;
    button.title = 'Return to Jesse Davis Portfolio';
    
    // Get return URL from session storage or use default
    const returnUrl = sessionStorage.getItem('portfolioReturnUrl') || config.portfolioUrl;
    
    button.onclick = function() {
      window.location.href = returnUrl;
    };

    // Apply styles
    applyStyles(button);
    
    // Add to page
    document.body.appendChild(button);
    
    // Animate in
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    }, 500);
  }

  function applyStyles(button) {
    // Base styles
    const baseStyles = {
      position: 'fixed',
      zIndex: '9999',
      padding: getSizePadding(),
      fontSize: getSizeFontSize(),
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontWeight: '600',
      border: '2px solid',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      opacity: '0',
      transform: 'translateY(-8px)',
      backdropFilter: 'blur(10px)',
      userSelect: 'none'
    };

    // Position styles
    Object.assign(baseStyles, getPositionStyles());
    
    // Theme styles
    Object.assign(baseStyles, getThemeStyles());

    // Apply all styles
    Object.assign(button.style, baseStyles);

    // Hover effects
    button.onmouseenter = function() {
      this.style.transform = 'translateY(0) scale(1.05)';
      this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
    };

    button.onmouseleave = function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    };
  }

  function getPositionStyles() {
    const positions = {
      'top-left': { top: '16px', left: '16px' },
      'top-right': { top: '16px', right: '16px' },
      'bottom-left': { bottom: '16px', left: '16px' },
      'bottom-right': { bottom: '16px', right: '16px' }
    };
    return positions[config.position] || positions['top-right'];
  }

  function getSizePadding() {
    const sizes = {
      small: '8px 12px',
      medium: '12px 16px',
      large: '16px 24px'
    };
    return sizes[config.size] || sizes.medium;
  }

  function getSizeFontSize() {
    const sizes = {
      small: '14px',
      medium: '16px',
      large: '18px'
    };
    return sizes[config.size] || sizes.medium;
  }

  function getThemeStyles() {
    const themes = {
      dark: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#ffd700',
        borderColor: 'rgba(255, 215, 0, 0.5)'
      },
      light: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: '#374151',
        borderColor: '#d1d5db'
      },
      gradient: {
        background: 'linear-gradient(45deg, #ffd700, #ff6b35)',
        color: '#000',
        borderColor: 'transparent'
      }
    };
    return themes[config.theme] || themes.gradient;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createReturnButton);
  } else {
    createReturnButton();
  }

})();