import React from 'react';

interface NavigationProps {
  totalSlides: number;
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  totalSlides,
  currentSlide,
  onPrevious,
  onNext
}) => {
  return (
    <div className="slide-navigation flex items-center gap-4 bg-white/60 backdrop-blur-md p-3 rounded-full shadow-xl">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-3 rounded-full bg-recyblue/90 text-white hover:bg-recyblue transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      
      <div className="px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm font-medium text-lg">
        {currentSlide + 1} / {totalSlides}
      </div>
      
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-3 rounded-full bg-recyblue/90 text-white hover:bg-recyblue transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </div>
  );
};

export default Navigation;
