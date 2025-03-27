
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
  const [showNotes, setShowNotes] = React.useState(false);

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

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
    >
      {children}
      
      {speakerNotes && (
        <div className="absolute bottom-4 right-4 z-20">
          <button
            onClick={toggleNotes}
            className="p-2 rounded-full bg-recygreen text-white hover:bg-recygreen/80 transition-all"
            aria-label="Toggle speaker notes"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          
          <div className={cn(
            'speaker-notes absolute bottom-12 right-0 w-80 p-4 rounded-lg bg-white/95 dark:bg-gray-800/95 shadow-lg border border-gray-200 dark:border-gray-700 text-left text-sm',
            showNotes ? 'show' : ''
          )}>
            <h4 className="font-bold mb-2 text-recygreen">Speaker Notes:</h4>
            <p>{speakerNotes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
