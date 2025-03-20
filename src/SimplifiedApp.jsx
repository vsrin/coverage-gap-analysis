// SimplifiedApp.jsx - A minimal app wrapper that preserves your original dashboard
// while adding Wiki functionality
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import Wiki from './Wiki';

// The main navigation with working tabs
const Navigation = ({ activeTab, setActiveTab, onWikiClick }) => {
  return (
    <div className="w-full bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">CoverageGap Analysis Tool</div>
        <div className="flex space-x-4">
          <button 
            className={`px-3 py-2 rounded ${activeTab === 'dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`px-3 py-2 rounded ${activeTab === 'policies' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('policies')}
          >
            Policies
          </button>
          <button 
            className={`px-3 py-2 rounded ${activeTab === 'analysis' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('analysis')}
          >
            Analysis
          </button>
          <button 
            className={`px-3 py-2 rounded ${activeTab === 'reports' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('reports')}
          >
            Reports
          </button>
          <button 
            className="hover:bg-gray-700 px-3 py-2 rounded flex items-center"
            onClick={onWikiClick}
          >
            <BookOpen className="h-4 w-4 mr-1" />
            Wiki
          </button>
        </div>
        <div>
          <span className="bg-blue-600 px-3 py-2 rounded">Carrier View</span>
        </div>
      </div>
    </div>
  );
};

// Placeholder for tab content - replace with your actual components
const TabContent = ({ tab, children }) => {
  if (tab === 'dashboard') {
    return children; // Return existing dashboard content
  } else {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{tab.charAt(0).toUpperCase() + tab.slice(1)}</h1>
        <p>This tab is under development.</p>
      </div>
    );
  }
};

// Main app component
const SimplifiedApp = ({ children }) => {
  const [showWiki, setShowWiki] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
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
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onWikiClick={handleWikiClick} 
      />
      <div className="flex-grow">
        <TabContent tab={activeTab}>
          {children}
        </TabContent>
      </div>
    </div>
  );
};

export default SimplifiedApp;
