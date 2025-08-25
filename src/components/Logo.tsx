import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  // Debug logging
  React.useEffect(() => {
    console.log('Logo component rendered with size:', size, 'showText:', showText);
  }, [size, showText]);

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div 
        className={`${sizeClasses[size]} flex-shrink-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-800 logo-icon`}
        style={{
          minWidth: sizeClasses[size], 
          minHeight: sizeClasses[size],
          backgroundColor: '#3B82F6',
          boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
        }}
      >
        <div 
          className="w-3/4 h-3/4 bg-white rounded-full flex items-center justify-center"
          style={{backgroundColor: 'white'}}
        >
          <div 
            className="w-1/2 h-1/2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full relative flex items-center justify-center"
            style={{backgroundColor: '#F97316'}}
          >
            {/* Simple arrow pointing up-right */}
            <div 
              className="w-3 h-3 bg-white rounded-sm transform rotate-45"
              style={{backgroundColor: 'white'}}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Company Name */}
      {showText && (
        <span className={`font-bold text-gray-900 dark:text-white ${textSizes[size]} whitespace-nowrap`}>
          Nova Creations
        </span>
      )}
    </div>
  );
};

export default Logo; 