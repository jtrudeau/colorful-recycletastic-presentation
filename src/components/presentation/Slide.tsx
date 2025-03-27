
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
        'slide w-full h-full p-8 flex flex-col relative',
        color,
        isActive ? 'active' : '',
        className
      )}
      style={slideStyle}
      data-speaker-notes={speakerNotes}
    >
      {children}
    </div>
  );
};

export default Slide;
