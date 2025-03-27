
import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import Navigation from './Navigation';
import FadeInSection from './FadeInSection';
import RecycleIcon from './RecycleIcon';
import { cn } from '@/lib/utils';

const RecyQuestPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        navigateToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        navigateToPreviousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const navigateToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const navigateToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Render recycling symbols in the background
  const renderRecycleSymbols = () => {
    const symbols = [];
    for (let i = 0; i < 10; i++) {
      const size = Math.floor(Math.random() * 80) + 40;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const opacity = (Math.random() * 0.2) + 0.05;
      
      symbols.push(
        <div 
          key={i}
          className="recycle-symbol"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            opacity: opacity
          }}
        >
          <RecycleIcon 
            className="recycling-animation" 
            color={
              ['#10B981', '#0EA5E9', '#FBBF24', '#F97316', '#8B5CF6'][Math.floor(Math.random() * 5)]
            } 
          />
        </div>
      );
    }
    return symbols;
  };

  return (
    <div className="slide-container bg-pattern">
      {renderRecycleSymbols()}
      
      {/* Title Slide */}
      <Slide 
        id="slide-1" 
        className="bg-gradient-to-br from-recyblue/10 to-recygreen/20"
        isActive={currentSlide === 0}
        speakerNotes="Welcome everyone! Today, we will present our innovative project, RecyQuest, a game designed to educate and encourage better recycling habits through interactive play."
      >
        <div className="flex flex-col items-center justify-center h-full">
          <FadeInSection delay={100}>
            <div className="mb-2 px-3 py-1 bg-recygreen/90 text-white text-sm rounded-full inline-block">
              Interactive Game Project
            </div>
          </FadeInSection>
          
          <FadeInSection delay={300}>
            <h1 className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-recyblue to-recygreen">
              RecyQuest
            </h1>
          </FadeInSection>
          
          <FadeInSection delay={500}>
            <h2 className="text-3xl font-semibold mb-8 text-gray-700">
              The Interactive Recycling Adventure
            </h2>
          </FadeInSection>
          
          <FadeInSection delay={700}>
            <div className="glass py-4 px-8 rounded-xl mb-10">
              <p className="text-2xl font-bold text-gray-800">
                "Sort Smart, Play Hard, Save Our Planet!"
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={900}>
            <div className="mt-12 flex items-center gap-6">
              <RecycleIcon className="w-20 h-20" />
            </div>
          </FadeInSection>
        </div>
      </Slide>
      
      {/* Team Members Slide */}
      <Slide 
        id="slide-2"
        className="bg-gradient-to-br from-recypurple/10 to-recyblue/20"
        isActive={currentSlide === 1}
        speakerNotes="We divided responsibilities based on our strengths to create this project together."
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-12">
              <div className="mb-2 px-3 py-1 bg-recypurple/90 text-white text-sm rounded-full inline-block">
                Meet the Team
              </div>
              <h1 className="text-4xl font-bold">The Recycling Rangers</h1>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
            <FadeInSection delay={300} direction="left">
              <div className="glass rounded-xl p-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-recyblue/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Project Manager</h3>
                <p className="text-gray-600 font-medium">[Name]</p>
                <p className="text-gray-500 text-sm mt-2">Coordinated our meetings and deadlines</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={500} direction="up">
              <div className="glass rounded-xl p-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-recygreen/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Lead Researcher</h3>
                <p className="text-gray-600 font-medium">[Name]</p>
                <p className="text-gray-500 text-sm mt-2">Gathered information on recycling behaviors</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={700} direction="right">
              <div className="glass rounded-xl p-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-recyyellow/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h20"></path>
                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                    <path d="m7 21 5-5 5 5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Designer</h3>
                <p className="text-gray-600 font-medium">[Name]</p>
                <p className="text-gray-500 text-sm mt-2">Created game visuals and presentation slides</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={900} direction="left">
              <div className="glass rounded-xl p-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-recyorange/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Programmer</h3>
                <p className="text-gray-600 font-medium">[Name]</p>
                <p className="text-gray-500 text-sm mt-2">Developed the game using Scratch</p>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={1100} direction="up">
              <div className="glass rounded-xl p-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-recypink/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Communications Lead</h3>
                <p className="text-gray-600 font-medium">[Name]</p>
                <p className="text-gray-500 text-sm mt-2">Organized our presentation</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Slide>
      
      {/* Problem Slide */}
      <Slide 
        id="slide-3"
        className="bg-gradient-to-br from-recyred/10 to-recyorange/20"
        isActive={currentSlide === 2}
        speakerNotes="Our project focuses on the issue of low participation in recycling and common mistakes in sorting recyclables. We identified that many students and community members face confusion or lack motivation."
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-10">
              <div className="mb-2 px-3 py-1 bg-recyred/90 text-white text-sm rounded-full inline-block">
                The Problem
              </div>
              <h1 className="text-4xl font-bold">Recycling Challenges</h1>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-grow">
            <FadeInSection delay={300} direction="left">
              <div className="glass rounded-xl p-8 flex flex-col h-full relative overflow-hidden">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Global Issue</h2>
                
                <div className="space-y-4 z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-recyred/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <p className="text-gray-700">Low recycling rates worldwide</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-recyred/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <p className="text-gray-700">Growing landfills and ocean pollution</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-recyred/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <p className="text-gray-700">Recyclable materials going to waste</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
                  <RecycleIcon color="#EF4444" />
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={500} direction="right">
              <div className="glass rounded-xl p-8 flex flex-col h-full relative overflow-hidden">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Our School Problem</h2>
                
                <div className="space-y-6 z-10">
                  <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-recyred rounded-full" style={{ width: '60%' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center font-semibold text-gray-800">
                      60% Recyclables in Trash
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mt-6">
                    <p className="text-gray-700 mb-3">Common recycling mistakes at our school:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="text-gray-600">Not knowing which bin to use</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="text-gray-600">Throwing food waste in recycling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="text-gray-600">Lack of motivation to recycle properly</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Slide>
      
      {/* Solution Slide */}
      <Slide 
        id="slide-4" 
        className="bg-gradient-to-br from-recygreen/10 to-recyteal/20"
        isActive={currentSlide === 3}
        speakerNotes="After brainstorming multiple approaches, we decided a game would be the most effective way to engage our peers in learning about recycling."
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-10">
              <div className="mb-2 px-3 py-1 bg-recygreen/90 text-white text-sm rounded-full inline-block">
                Our Solution
              </div>
              <h1 className="text-4xl font-bold">Interactive Recycling Game</h1>
            </div>
          </FadeInSection>
          
          <div className="flex flex-col md:flex-row gap-8 flex-grow">
            <FadeInSection delay={300} direction="left" className="flex-1">
              <div className="glass rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Brainstormed Solutions</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 bg-recyblue/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"></path>
                          <path d="M19.5 2.5 21 4l-8 8-4 1 1-4 8-8z"></path>
                        </svg>
                      </div>
                      <div className="absolute top-10 left-5 w-0.5 h-full bg-gray-200"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Recycling Posters</h3>
                      <p className="text-gray-600 text-sm mt-1">Create posters for recycling bins with clear visual guides</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 bg-recyteal/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                          <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        </svg>
                      </div>
                      <div className="absolute top-10 left-5 w-0.5 h-full bg-gray-200"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Mobile App</h3>
                      <p className="text-gray-600 text-sm mt-1">Develop a mobile app for recycling information</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="w-10 h-10 bg-recygreen/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Interactive Game</h3>
                      <p className="text-gray-600 text-sm mt-1">Design an interactive game to teach proper recycling</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={500} direction="right" className="flex-1">
              <div className="glass rounded-xl p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Why We Chose a Game</h2>
                
                <div className="space-y-4 flex-grow">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recygreen/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-700">Fun & Engaging</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Games make learning enjoyable and memorable</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recygreen/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-700">Interactive Learning</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Players learn through doing, not just reading</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recygreen/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-700">Competitive Element</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Scoring system encourages improvement and practice</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recygreen/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-700">Easy to Share</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Digital format makes it accessible to everyone</p>
                  </div>
                </div>
                
                <FadeInSection delay={800} className="mt-6">
                  <div className="bg-recygreen/10 border border-recygreen/30 rounded-lg p-4 text-center">
                    <p className="text-recygreen font-semibold">RecyQuest combines education with entertainment to make recycling fun!</p>
                  </div>
                </FadeInSection>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Slide>
      
      {/* SDG Goals Slide */}
      <Slide 
        id="slide-5"
        className="bg-gradient-to-br from-recyblue/10 to-recyteal/20"
        isActive={currentSlide === 4}
        speakerNotes="We align our project closely with SDGs 12 and 4, aiming to educate through gameplay while encouraging sustainable recycling practices."
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-10">
              <div className="mb-2 px-3 py-1 bg-recyblue/90 text-white text-sm rounded-full inline-block">
                Our Impact
              </div>
              <h1 className="text-4xl font-bold">Sustainable Development Goals</h1>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-grow">
            <FadeInSection delay={300} direction="left">
              <div className="glass rounded-xl p-8 flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 rounded-full bg-recygreen flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                    <path d="M16.5 9.4 7.55 4.24"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                    <circle cx="18.5" cy="15.5" r="2.5"></circle>
                    <path d="M20.27 17.27 22 19"></path>
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-recygreen">SDG 12</h2>
                <h3 className="text-xl font-semibold mb-6 text-gray-700">Responsible Consumption and Production</h3>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <p className="text-gray-600">RecyQuest helps students understand the importance of proper waste sorting and recycling, contributing to more sustainable consumption patterns.</p>
                </div>
                
                <div className="mt-auto">
                  <div className="text-sm px-4 py-2 bg-recygreen/10 rounded-lg text-recygreen font-medium">
                    Our game directly supports Target 12.5: Substantially reduce waste generation through prevention, reduction, recycling and reuse
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={500} direction="right">
              <div className="glass rounded-xl p-8 flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 rounded-full bg-recyblue flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    <path d="m9 9 2 2 4-4"></path>
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-recyblue">SDG 4</h2>
                <h3 className="text-xl font-semibold mb-6 text-gray-700">Quality Education</h3>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <p className="text-gray-600">By creating an educational game, we're making environmental knowledge accessible and engaging for all students, regardless of learning style.</p>
                </div>
                
                <div className="mt-auto">
                  <div className="text-sm px-4 py-2 bg-recyblue/10 rounded-lg text-recyblue font-medium">
                    Our project supports Target 4.7: Ensure all learners acquire knowledge and skills needed to promote sustainable development
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Slide>
      
      {/* Research Slide */}
      <Slide 
        id="slide-6"
        className="bg-gradient-to-br from-recypurple/10 to-recypink/20"
        isActive={currentSlide === 5}
        speakerNotes="Our background research showed that incorrect recycling stems from confusion, lack of motivation, and poor knowledge. For example, nearly 25% of recyclables end up contaminated due to incorrect sorting."
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-10">
              <div className="mb-2 px-3 py-1 bg-recypurple/90 text-white text-sm rounded-full inline-block">
                Research
              </div>
              <h1 className="text-4xl font-bold">What We Discovered</h1>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
            <FadeInSection delay={300} direction="left">
              <div className="glass rounded-xl p-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-recypurple/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Knowledge Gap</h3>
                
                <div className="flex-grow">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <p className="text-gray-600 text-sm">Many students don't know which materials can be recycled or how to properly prepare items for recycling.</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm font-medium mb-2">
                    <span className="text-gray-600">Students confused about recycling:</span>
                    <span className="text-recypurple">73%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-recypurple h-2.5 rounded-full" style={{ width: '73%' }}></div>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={500} direction="up">
              <div className="glass rounded-xl p-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-recypink/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.464 10.464c-.575 1.146-.179 2.521.868 3.568a2.5 2.5 0 1 0 3.536-3.536 2.499 2.499 0 0 0-3.568-.868L4.544 3.888a16.5 16.5 0 0 1 5.776-2.046A14.687 14.687 0 0 1 12 1.602c5.782 0 10.706 3.684 12.322 8.833a.5.5 0 0 1 0 .33A15.052 15.052 0 0 1 22.933 14" />
                    <path d="M21.428 17.025a13.084 13.084 0 0 1-4.87 3.962 12.691 12.691 0 0 1-5.941 1.011 9.944 9.944 0 0 1-4.9-1.897 9.105 9.105 0 0 1-3.085-4.074.5.5 0 0 1 0-.33c.318-.982.738-1.892 1.245-2.717" />
                    <path d="M14.31 14.31a2.5 2.5 0 0 1-4.62 0" />
                    <path d="m3 3 18 18" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Lack of Motivation</h3>
                
                <div className="flex-grow">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <p className="text-gray-600 text-sm">Students often don't see the immediate benefits of recycling or feel their individual actions matter.</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm font-medium mb-2">
                    <span className="text-gray-600">Students unmotivated to recycle:</span>
                    <span className="text-recypink">62%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-recypink h-2.5 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={700} direction="right">
              <div className="glass rounded-xl p-6 flex flex-col h-full">
                <div className="w-16 h-16 bg-recyorange/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Recycling Statistics</h3>
                
                <div className="flex-grow space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">Contaminated recyclables:</span>
                      <span className="text-recyorange font-bold">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-recyorange h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">Recyclables in trash:</span>
                      <span className="text-recyorange font-bold">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-recyorange h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">Students interested in games:</span>
                      <span className="text-recyorange font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-recyorange h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Slide>
      
      {/* Prototype Slide */}
      <Slide 
        id="slide-7"
        className="bg-gradient-to-br from-recyteal/10 to-recygreen/20"
        isActive={currentSlide === 6}
        speakerNotes="RecyQuest is a Scratch-based game where players sort virtual items into the correct bins. Each correct sort earns points, and players advance through increasingly challenging levels."
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-8">
              <div className="mb-2 px-3 py-1 bg-recyteal/90 text-white text-sm rounded-full inline-block">
                Our Solution
              </div>
              <h1 className="text-4xl font-bold">How RecyQuest Works</h1>
            </div>
          </FadeInSection>
          
          <div className="flex flex-col md:flex-row gap-8 flex-grow">
            <FadeInSection delay={300} direction="left" className="w-full md:w-1/2">
              <div className="glass rounded-xl p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Game Features</h2>
                
                <div className="space-y-4 flex-grow">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recyteal/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 14v7"></path>
                          <path d="M16 14v7"></path>
                          <path d="M8 14h8"></path>
                          <path d="M9 3H7a2 2 0 0 0-2 2v6"></path>
                          <path d="M15 3h2a2 2 0 0 1 2 2v6"></path>
                          <path d="M12 3v10"></path>
                          <path d="M6 21h12"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-700">Drag & Drop Mechanics</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Players drag waste items to the correct recycling bin</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recyteal/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                          <line x1="6" y1="6" x2="6.01" y2="6"></line>
                          <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-700">Multiple Levels</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Increasing difficulty with more complex sorting challenges</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recyteal/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-700">Point System</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Earn points for correct sorts, lose points for mistakes</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recyteal/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-700">Time Challenges</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Race against the clock to sort items quickly</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-recyteal/20 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5 12.99 3.01a.996.996 0 0 0-1.41 0l-9.59 9.58a.996.996 0 0 0 0 1.41l9.59 9.58a.996.996 0 0 0 1.41 0l8.01-8.01" />
                          <path d="M14.5 14.5 20 20" />
                          <path d="M8.5 8.5 3 3" />
                          <path d="M15 9h0" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-700">Recycling Facts</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Learn interesting recycling facts while playing</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={500} direction="right" className="w-full md:w-1/2">
              <div className="glass rounded-xl p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Game Screenshot</h2>
                
                <div className="flex-grow flex flex-col justify-center">
                  <div className="border-2 border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg">
                    {/* This is where you'd place a screenshot of the game. For now, we'll use a placeholder */}
                    <div className="bg-gray-100 aspect-video flex items-center justify-center relative">
                      <div className="text-center">
                        <p className="text-gray-500 mb-2">Place Game Screenshot Here</p>
                        <div className="flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Visual elements to suggest a game interface */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-recyteal/90 text-white text-sm rounded-full">
                        Level 2
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-recyteal text-sm rounded-full">
                        Score: 120
                      </div>
                      
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                        <div className="w-16 h-24 bg-recyblue/20 border-2 border-recyblue rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="w-16 h-24 bg-recygreen/20 border-2 border-recygreen rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"></path>
                              <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"></path>
                              <path d="M12 11v-4"></path>
                              <path d="M12 11v9"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="w-16 h-24 bg-recyyellow/20 border-2 border-recyyellow rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                              <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-300">
                      <h3 className="font-bold text-gray-700 mb-2">How to Play:</h3>
                      <p className="text-gray-600 text-sm">Drag the waste items to the correct bin. Paper goes in blue, organic waste in green, and plastics in yellow!</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="bg-recyteal/10 border border-recyteal/30 rounded-lg p-4">
                    <h3 className="font-bold text-gray-700 mb-2">Technology Used:</h3>
                    <div className="flex items-center gap-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Scratchlogo.svg/1200px-Scratchlogo.svg.png" alt="Scratch Logo" className="h-8" />
                      <p className="text-gray-600 text-sm">Built with Scratch, a block-based visual programming language designed for education</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Slide>
      
      {/* Demo Slide */}
      <Slide 
        id="slide-8"
        className="bg-gradient-to-br from-recyblue/10 to-recypurple/20"
        isActive={currentSlide === 7}
        speakerNotes="Let's see how the game works in action! [Demonstrate gameplay with a volunteer if possible]"
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-8">
              <div className="mb-2 px-3 py-1 bg-recyblue/90 text-white text-sm rounded-full inline-block">
                Demo Time
              </div>
              <h1 className="text-4xl font-bold">Watch RecyQuest in Action</h1>
            </div>
          </FadeInSection>
          
          <div className="flex-grow flex items-center justify-center">
            <FadeInSection delay={300}>
              <div className="glass border-2 border-recyblue/40 rounded-xl p-6 max-w-3xl mx-auto">
                <div className="bg-black/90 rounded-lg aspect-video flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Demo Video</h3>
                    <p className="text-gray-400 max-w-md mx-auto">Click to play a demonstration of our RecyQuest game</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2 text-center">Live Demonstration Instructions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Open Scratch project at <span className="font-semibold">scratch.mit.edu/projects/example</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Click the green flag to start the game</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Invite a volunteer to try sorting some items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span>Show how points are earned and levels advance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Slide>
      
      {/* Feedback Slide */}
      <Slide 
        id="slide-9"
        className="bg-gradient-to-br from-recyyellow/10 to-recyorange/20"
        isActive={currentSlide === 8}
        speakerNotes="We tested our prototype with classmates. Feedback included enthusiasm for competitive and collaborative gameplay, and useful suggestions that improved clarity and engagement."
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-8">
              <div className="mb-2 px-3 py-1 bg-recyyellow/90 text-white text-sm rounded-full inline-block">
                User Testing
              </div>
              <h1 className="text-4xl font-bold">Feedback & Improvements</h1>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
            <FadeInSection delay={300} direction="left">
              <div className="glass rounded-xl p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">What Users Told Us</h2>
                
                <div className="space-y-6 flex-grow">
                  <div className="bg-white/90 rounded-lg p-5 relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-recyyellow/90 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <p className="text-gray-700 italic">"The game is fun, but I wasn't always sure which bin to use for certain items."</p>
                    <p className="text-gray-500 text-sm mt-2">- 5th Grade Student</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-lg p-5 relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-recyyellow/90 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <p className="text-gray-700 italic">"I liked competing with my friends to get the highest score. It made me want to learn more about recycling."</p>
                    <p className="text-gray-500 text-sm mt-2">- 6th Grade Student</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-lg p-5 relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-recyyellow/90 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <p className="text-gray-700 italic">"I learned that pizza boxes with food stains shouldn't go in the paper recycling. I didn't know that before!"</p>
                    <p className="text-gray-500 text-sm mt-2">- Science Teacher</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="p-4 border border-recyyellow/30 bg-recyyellow/10 rounded-lg">
                    <h3 className="font-bold text-gray-700 mb-2">Testing Results:</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">15 students tested our game</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"></path>
                        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">90% said they would play it again</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={500} direction="right">
              <div className="glass rounded-xl p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Changes We Made</h2>
                
                <div className="space-y-6 flex-grow">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-recyorange/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-700">Added Item Information</h3>
                        <p className="text-gray-600 text-sm mt-1">Now each item has a tooltip explaining why it belongs in a specific bin</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-recyorange/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-700">Added Multiplayer Mode</h3>
                        <p className="text-gray-600 text-sm mt-1">Students can now compete in teams to sort items faster</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-recyorange/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-700">Improved Visual Cues</h3>
                        <p className="text-gray-600 text-sm mt-1">Bins now glow green when the correct item is hovering over them</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-recyorange/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-700">Added Recycling Facts</h3>
                        <p className="text-gray-600 text-sm mt-1">Between levels, players now see interesting recycling facts and statistics</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="p-4 border border-recyorange/30 bg-recyorange/10 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-700">Game Improvements</h3>
                      <span className="text-recyorange font-medium text-sm">Before → After</span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Fun Rating:</span>
                          <span className="text-recyorange">70% → 90%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-recyorange/30 rounded-full" style={{ width: '70%' }}></div>
                          <div className="h-full bg-recyorange rounded-full -mt-2" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Learning Effectiveness:</span>
                          <span className="text-recyorange">65% → 85%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-recyorange/30 rounded-full" style={{ width: '65%' }}></div>
                          <div className="h-full bg-recyorange rounded-full -mt-2" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Slide>
      
      {/* Future Improvements Slide */}
      <Slide 
        id="slide-10"
        className="bg-gradient-to-br from-recypurple/10 to-recypink/20"
        isActive={currentSlide === 9}
        speakerNotes="Looking ahead, we plan to refine our game further and potentially develop a mobile app. Integration into educational programs could amplify our impact."
      >
        <div className="h-full flex flex-col">
          <FadeInSection delay={100}>
            <div className="text-center mb-8">
              <div className="mb-2 px-3 py-1 bg-recypurple/90 text-white text-sm rounded-full inline-block">
                What's Next
              </div>
              <h1 className="text-4xl font-bold">Future Improvements</h1>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
            <FadeInSection delay={300} direction="left">
              <div className="glass rounded-xl p-6 flex flex-col h-full relative overflow-hidden">
                <div className="w-16 h-16 bg-recypink/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Mobile App Version</h3>
                
                <div className="space-y-3 flex-grow">
                  <p className="text-gray-600">Develop a smartphone app version that students can play anytime, anywhere.</p>
                  
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">Add push notifications with daily recycling challenges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">Include a barcode scanner to learn if specific products are recyclable</span>
                    </li>
                  </ul>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={500} direction="up">
              <div className="glass rounded-xl p-6 flex flex-col h-full relative overflow-hidden">
                <div className="w-16 h-16 bg-recypurple/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M18.4 7.44A10.98 10.98 0 0 0 8 4.5c-3.68 0-6.94 1.83-8.92 4.65l-.92 1.35a.997.997 0 0 0 0 1"></path>
                    <path d="M8 4.5a10.98 10.98 0 0 1 10.4 7.06L20 14.1a10.937 10.937 0 0 1-9.99 5.9H8"></path>
                    <path d="M10.8 15a3 3 0 1 0 0-6"></path>
                    <path d="M20 9h-4v4"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Advanced Game Features</h3>
                
                <div className="space-y-3 flex-grow">
                  <p className="text-gray-600">Enhance the game with more complex mechanics and educational content.</p>
                  
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">Add simulated recycling facility tour level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">Create avatar system with sustainable fashion items as rewards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">Include mini-games about upcycling and waste reduction</span>
                    </li>
                  </ul>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m16 8-8 8"></path>
                    <path d="m8 8 8 8"></path>
                  </svg>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={700} direction="right">
              <div className="glass rounded-xl p-6 flex flex-col h-full relative overflow-hidden">
                <div className="w-16 h-16 bg-recyblue/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Curriculum Integration</h3>
                
                <div className="space-y-3 flex-grow">
                  <p className="text-gray-600">Partner with schools to integrate RecyQuest into science and environmental education.</p>
                  
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">Create teacher resources with lesson plans based on the game</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">Develop school recycling challenges using the game's scoring system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <polyline points="9 11 12 14 22 4"></polyline>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                      </svg>
                      <span className="text-gray-600 text-sm">Track real improvements in school recycling rates</span>
                    </li>
                  </ul>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
              </div>
            </FadeInSection>
          </div>
          
          <FadeInSection delay={900} className="mt-8">
            <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 text-center">We believe RecyQuest can grow beyond a school project to become a widely-used educational tool that makes proper recycling fun and accessible for students everywhere!</p>
            </div>
          </FadeInSection>
        </div>
      </Slide>
      
      {/* Q&A Slide */}
      <Slide 
        id="slide-11"
        className="bg-gradient-to-br from-recygreen/10 to-recyblue/20"
        isActive={currentSlide === 10}
        speakerNotes="Thank you for listening. We'd now love to answer any questions you might have."
      >
        <div className="h-full flex flex-col items-center justify-center">
          <FadeInSection delay={100}>
            <div className="text-center mb-8">
              <h1 className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-recygreen to-recyblue">
                Thank You!
              </h1>
              <p className="text-2xl text-gray-700">Any questions?</p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={300}>
            <div className="glass rounded-xl p-8 max-w-2xl">
              <div className="flex items-center justify-center mb-6 space-x-4">
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 rounded-full bg-recygreen/20 animate-pulse"></div>
                  <RecycleIcon className="w-full h-full" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">RecyQuest</h2>
              </div>
              
              <p className="text-gray-700 text-center mb-6">
                Remember our slogan: "Sort Smart, Play Hard, Save Our Planet!"
              </p>
              
              <div className="mt-6 text-center">
                <p className="text-lg font-medium text-gray-700">Contact us:</p>
                <p className="text-gray-600">recycling.rangers@school.edu</p>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={500} className="mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-recyblue/20 rounded-full flex items-center justify-center animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              
              <div className="w-12 h-12 bg-recygreen/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              
              <div className="w-12 h-12 bg-recypurple/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
              </div>
              
              <div className="w-12 h-12 bg-recyorange/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              
              <div className="w-12 h-12 bg-recyyellow/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
          </FadeInSection>
        </div>
      </Slide>
      
      {/* Navigation controls */}
      <Navigation 
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onPrevious={navigateToPreviousSlide}
        onNext={navigateToNextSlide}
      />
    </div>
  );
};

export default RecyQuestPresentation;
