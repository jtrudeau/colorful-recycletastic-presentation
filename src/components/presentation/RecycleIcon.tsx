
import React from 'react';

interface RecycleIconProps {
  className?: string;
  color?: string;
}

const RecycleIcon: React.FC<RecycleIconProps> = ({ className = "", color = "#10B981" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`recycling-animation ${className}`}
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.615 5.312 1.219 2.115a1.83 1.83 0 0 0 1.23.858 1.784 1.784 0 0 0 1.5-.397L17 5" />
      <path d="m14 7 3-3-3-3" />
    </svg>
  );
};

export default RecycleIcon;
