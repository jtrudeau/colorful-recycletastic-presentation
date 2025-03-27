
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ExportToolProps {
  presentationId: string;
}

const ExportTool: React.FC<ExportToolProps> = ({ presentationId }) => {
  const exportToGoogleSlides = () => {
    // Get all slides
    const slideElements = document.querySelectorAll(`#${presentationId} .slide`);
    
    // Create a basic HTML structure for Google Slides import
    let exportContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>RecyQuest Presentation</title>
      </head>
      <body>
    `;
    
    // Add each slide content
    slideElements.forEach((slide, index) => {
      const slideContent = slide.innerHTML;
      const speakerNotes = slide.getAttribute('data-speaker-notes') || '';
      
      exportContent += `
        <div class="slide" id="slide-${index + 1}">
          ${slideContent}
          <div class="speaker-notes" style="display: none;">
            ${speakerNotes}
          </div>
        </div>
      `;
    });
    
    exportContent += `
      </body>
      </html>
    `;
    
    // Create a Blob and download it
    const blob = new Blob([exportContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recyquest_presentation.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button 
      onClick={exportToGoogleSlides}
      className="fixed top-4 right-4 z-50 bg-recygreen hover:bg-recygreen/80"
      size="sm"
    >
      <Download className="mr-2 h-4 w-4" />
      Export Slides
    </Button>
  );
};

export default ExportTool;
