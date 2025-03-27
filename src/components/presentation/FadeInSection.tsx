
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10 animate-slide-in-up';
      case 'down':
        return '-translate-y-10 animate-slide-in-down';
      case 'left':
        return '-translate-x-10 animate-slide-in-left';
      case 'right':
        return 'translate-x-10 animate-slide-in-right';
      case 'none':
        return 'animate-fade-in';
      default:
        return 'translate-y-10 animate-slide-in-up';
    }
  };
  
  return (
    <div
      className={cn(
        'opacity-0 transition-all duration-700 ease-out',
        isVisible ? 'opacity-100' : '',
        isVisible ? getAnimationClass() : '',
        className
      )}
      ref={domRef}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
