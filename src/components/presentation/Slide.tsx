import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  id: string;
  className?: string;
  children: ReactNode;
  color?: string;
  backgroundImage?: string;
  speakerNotes?: string;
  isActive?: boolean;
}

const Slide: React.FC<SlideProps> = ({
  id,
  className,
  children,
  color = 'bg-white',
  backgroundImage,
  speakerNotes,
  isActive = false,
}) => {
  const slideStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div
      id={id}
      className={cn(
        'slide w-full h-full flex flex-col relative',
        color,
        isActive ? 'active' : '',
        className
      )}
      style={slideStyle}
      data-speaker-notes={speakerNotes}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto px-8 sm:px-10 md:px-12 lg:px-16 py-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default Slide;
