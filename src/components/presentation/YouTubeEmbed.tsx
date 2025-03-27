
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
  // Make sure embedUrl is formatted for embedding (should use /embed/ format)
  const formattedUrl = embedUrl.includes('/embed/') 
    ? embedUrl 
    : embedUrl.replace('youtu.be/', 'youtube.com/embed/').replace('youtube.com/watch?v=', 'youtube.com/embed/');

  return (
    <div className={`aspect-video w-full max-w-4xl mx-auto ${className}`}>
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src={formattedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
