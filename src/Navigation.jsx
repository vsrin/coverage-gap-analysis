// Navigation component with Wiki menu item
import React from 'react';
import { BookOpen } from 'lucide-react';

const Navigation = ({ onWikiClick }) => {
  return (
    <div className="w-full bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">CoverageGap Analysis Tool</div>
        <div className="flex space-x-4">
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Dashboard</button>
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Policies</button>
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Analysis</button>
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Reports</button>
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

export default Navigation;