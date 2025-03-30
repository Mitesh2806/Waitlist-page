import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-dark rounded-md flex items-center justify-center">
        <div className="w-6 h-6 bg-primary rounded-sm transform rotate-45"></div>
      </div>
      <span className="text-xl font-bold">EminentAI</span>
    </div>
  );
};

export default Logo;