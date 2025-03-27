
import React from 'react';
import RecyQuestPresentation from '@/components/presentation/RecyQuestPresentation';
import ExportTool from '@/components/presentation/ExportTool';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ExportTool presentationId="recyquest-presentation" />
      <RecyQuestPresentation />
    </div>
  );
};

export default Index;
