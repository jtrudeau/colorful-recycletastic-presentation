
import React from 'react';

interface YouTubeEmbedProps {
  embedUrl: string;
  title?: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ 
  embedUrl, 
  title = "YouTube video player", 
  className = "" 
}) => {
  return (
    <div className={`aspect-video w-full max-w-4xl mx-auto ${className}`}>
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
