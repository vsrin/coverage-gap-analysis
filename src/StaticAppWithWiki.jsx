// StaticAppWithWiki.jsx - Modified version of StaticDataApp.jsx to include Wiki functionality
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import Navigation from './Navigation';
import Wiki from './Wiki';

// Main app component with static data and Wiki
const StaticAppWithWiki = () => {
  const [showWiki, setShowWiki] = useState(false);
  
  const handleWikiClick = () => {
    setShowWiki(true);
  };
  
  const handleCloseWiki = () => {
    setShowWiki(false);
  };
  
  if (showWiki) {
    return <Wiki onClose={handleCloseWiki} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navigation onWikiClick={handleWikiClick} />
      <div className="flex-grow">
        {/* Just a placeholder for the actual Dashboard component */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Coverage Gap Analysis (Static Data)</h1>
          <p className="mb-4">This is a simplified version using static sample data.</p>
          <p>Click on the Wiki button in the navigation bar to explore the business logic and other information about this application.</p>
        </div>
      </div>
    </div>
  );
};

export default StaticAppWithWiki;