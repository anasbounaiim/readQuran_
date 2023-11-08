import React from 'react';
import Q_icon from '/public/Q-icon.png'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <img src={Q_icon} className='w-20 animate-bounce' alt="logo" />
    </div>
  );
};

export default LoadingSpinner;
