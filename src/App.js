// App.js with integrated Wiki access
import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Upload, 
  FileText, 
  AlertTriangle, 
  Check, 
  Info,
  BarChart,
  Loader,
  BookOpen
} from 'lucide-react';
import useDataLoader from './DataLoad';
import Wiki from './Wiki';

// Collapsible panel component
const CollapsiblePanel = ({ title, children, icon, initialState = false }) => {
  const [isOpen, setIsOpen] = React.useState(initialState);
  
  return (
    <div className="border rounded-md mb-4 bg-white">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {icon}
          <h3 className="text-lg font-medium ml-2">{title}</h3>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div className="p-4 border-t">
          {children}
        </div>
      )}
    </div>
  );
};

// Client profile component
const ClientProfile = ({ client, riskProfile }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-medium mb-2">Business Information</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-gray-600">Client Name:</div>
          <div>{client}</div>
          <div className="text-gray-600">Industry:</div>
          <div>{riskProfile.industry}</div>
          <div className="text-gray-600">Sub-Industry:</div>
          <div>{riskProfile.subIndustry}</div>
          <div className="text-gray-600">Revenue Range:</div>
          <div>{riskProfile.revenueRange}</div>
          <div className="text-gray-600">Employees:</div>
          <div>{riskProfile.employees}</div>
          <div className="text-gray-600">Year Established:</div>
          <div>{riskProfile.yearEstablished}</div>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Risk Profile</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-gray-600">Property Exposure:</div>
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
              riskProfile.riskFactors?.propertyExposure === 'High' ? 'bg-red-500' : 
              riskProfile.riskFactors?.propertyExposure === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
            }`}></span>
            {riskProfile.riskFactors?.propertyExposure || 'Unknown'}
          </div>
          <div className="text-gray-600">Product Liability:</div>
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
              riskProfile.riskFactors?.productLiabilityExposure === 'High' ? 'bg-red-500' : 
              riskProfile.riskFactors?.productLiabilityExposure === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
            }`}></span>
            {riskProfile.riskFactors?.productLiabilityExposure || 'Unknown'}
          </div>
          <div className="text-gray-600">Operations Exposure:</div>
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
              riskProfile.riskFactors?.operationsExposure === 'High' ? 'bg-red-500' : 
              riskProfile.riskFactors?.operationsExposure === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
            }`}></span>
            {riskProfile.riskFactors?.operationsExposure || 'Unknown'}
          </div>
          <div className="text-gray-600">Claims History:</div>
          <div>{riskProfile.claimsHistory?.rating || 'Unknown'}</div>
          <div className="text-gray-600">Risk Management:</div>
          <div>{riskProfile.riskManagement?.score || 'Unknown'}</div>
        </div>
      </div>
    </div>
  );
};

// Policy summary component
const PolicySummary = ({ policies }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Policy Type</th>
              <th className="border p-2 text-left">Policy Number</th>
              <th className="border p-2 text-left">Carrier</th>
              <th className="border p-2 text-left">Effective Date</th>
              <th className="border p-2 text-left">Expiration Date</th>
              <th className="border p-2 text-right">Premium</th>
              <th className="border p-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {policies.map(policy => (
              <tr key={policy.id} className="hover:bg-gray-50">
                <td className="border p-2">{policy.coverageType}</td>
                <td className="border p-2">{policy.policyNumber}</td>
                <td className="border p-2">{policy.carrier}</td>
                <td className="border p-2">{policy.effectiveDate}</td>
                <td className="border p-2">{policy.expirationDate}</td>
                <td className="border p-2 text-right">${policy.premium.toLocaleString()}</td>
                <td className="border p-2 text-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    {policy.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Gap analysis results component
const GapAnalysisResults = ({ gaps }) => {
  const [filter, setFilter] = React.useState({
    category: 'All Categories',
    severity: 'All Severities'
  });
  
  const filteredGaps = gaps.filter(gap => {
    return (filter.category === 'All Categories' || gap.category === filter.category) &&
           (filter.severity === 'All Severities' || gap.severity === filter.severity);
  });
  
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">Identified Coverage Gaps</h3>
        <div>
          <select 
            className="p-2 border rounded mr-2"
            value={filter.category}
            onChange={(e) => setFilter({...filter, category: e.target.value})}
          >
            <option>All Categories</option>
            <option>Property</option>
            <option>General Liability</option>
            <option>Cyber</option>
          </select>
          <select 
            className="p-2 border rounded"
            value={filter.severity}
            onChange={(e) => setFilter({...filter, severity: e.target.value})}
          >
            <option>All Severities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredGaps.length === 0 ? (
          <div className="text-center p-4 text-gray-500">No gaps match your filter criteria</div>
        ) : (
          filteredGaps.map(gap => (
            <div key={gap.id} className="border rounded-md overflow-hidden">
              <div className={`p-4 flex justify-between items-center ${
                gap.severity === 'High' ? 'bg-red-50 border-l-4 border-l-red-500' : 
                gap.severity === 'Medium' ? 'bg-yellow-50 border-l-4 border-l-yellow-500' : 
                'bg-blue-50 border-l-4 border-l-blue-500'
              }`}>
                <div className="flex items-center">
                  <AlertTriangle className={`${
                    gap.severity === 'High' ? 'text-red-500' : 
                    gap.severity === 'Medium' ? 'text-yellow-500' : 
                    'text-blue-500'
                  }`} />
                  <div className="ml-2">
                    <div className="font-medium">{gap.category}: {gap.description}</div>
                    <div className="text-sm text-gray-600">ID: {gap.id} | Severity: {gap.severity}</div>
                  </div>
                </div>
                <div>
                  <button className="bg-white border px-3 py-1 rounded text-sm hover:bg-gray-50 ml-2">
                    Resolve
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-gray-600">Impact</h4>
                    <p>{gap.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-600">Recommendation</h4>
                    <p>{gap.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Upload section component
const PolicyUpload = () => {
  return (
    <div className="border-2 border-dashed rounded-lg p-6 text-center">
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-lg font-medium">Upload Policy Documents</h3>
      <p className="mt-1 text-sm text-gray-600">Drag and drop policy files or click to browse</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Browse Files
      </button>
      <p className="mt-2 text-xs text-gray-500">Supports PDF, DOCX, XLSX formats (max 10MB)</p>
    </div>
  );
};

// Summary statistics component
const SummaryStatistics = ({ gaps }) => {
  const highSeverityCount = gaps.filter(gap => gap.severity === 'High').length;
  const mediumSeverityCount = gaps.filter(gap => gap.severity === 'Medium').length;
  const lowSeverityCount = gaps.filter(gap => gap.severity === 'Low').length;
  const resolvedCount = gaps.filter(gap => gap.status === 'Resolved').length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <div className="ml-4">
            <div className="text-gray-500 text-sm">High Severity Gaps</div>
            <div className="text-2xl font-bold">{highSeverityCount}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center">
          <div className="bg-yellow-100 p-3 rounded-full">
            <Info className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="ml-4">
            <div className="text-gray-500 text-sm">Medium Severity Gaps</div>
            <div className="text-2xl font-bold">{mediumSeverityCount}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-full">
            <Info className="h-6 w-6 text-blue-500" />
          </div>
          <div className="ml-4">
            <div className="text-gray-500 text-sm">Low Severity Gaps</div>
            <div className="text-2xl font-bold">{lowSeverityCount}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center">
          <div className="bg-green-100 p-3 rounded-full">
            <Check className="h-6 w-6 text-green-500" />
          </div>
          <div className="ml-4">
            <div className="text-gray-500 text-sm">Resolved Gaps</div>
            <div className="text-2xl font-bold">{resolvedCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Recommendation details component
const RecommendationDetails = ({ opportunities }) => {
  return (
    <div className="border rounded-lg p-4 bg-blue-50">
      <h3 className="text-lg font-medium mb-2">Cross-Sell Opportunities</h3>
      <div className="space-y-3">
        {opportunities.map(opportunity => (
          <div key={opportunity.id} className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full">
              <Check className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3">
              <div className="font-medium">{opportunity.product}</div>
              <p className="text-sm text-gray-600">{opportunity.description}</p>
              <div className="mt-1 text-xs text-gray-500">
                Est. Premium: ${opportunity.annualPremiumEstimate.toLocaleString()} | Priority: {opportunity.priority}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Generate Sales Materials
        </button>
      </div>
    </div>
  );
};

// Navigation component with Wiki button
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

// Main dashboard component
const Dashboard = ({ client, policies, gaps, riskProfile, crossSellOpportunities }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Coverage Gap Analysis: {client}</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Generate Report
          </button>
        </div>
      </div>
      
      <SummaryStatistics gaps={gaps} />
      
      <div className="mt-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <CollapsiblePanel 
            title="Client Profile" 
            icon={<Info className="h-5 w-5 text-blue-500" />}
            initialState={true}
          >
            <ClientProfile client={client} riskProfile={riskProfile} />
          </CollapsiblePanel>
          
          <CollapsiblePanel 
            title="Policy Information" 
            icon={<FileText className="h-5 w-5 text-blue-500" />}
            initialState={true}
          >
            <PolicySummary policies={policies} />
          </CollapsiblePanel>
          
          <CollapsiblePanel 
            title="Coverage Gap Analysis" 
            icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
            initialState={true}
          >
            <GapAnalysisResults gaps={gaps} />
          </CollapsiblePanel>
        </div>
        
        <div className="space-y-6">
          <CollapsiblePanel 
            title="Document Upload" 
            icon={<Upload className="h-5 w-5 text-blue-500" />}
          >
            <PolicyUpload />
          </CollapsiblePanel>
          
          <CollapsiblePanel 
            title="Cross-Sell Opportunities" 
            icon={<BarChart className="h-5 w-5 text-green-500" />}
            initialState={true}
          >
            <RecommendationDetails opportunities={crossSellOpportunities} />
          </CollapsiblePanel>
        </div>
      </div>
    </div>
  );
};

// Loading component
const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Loader className="h-12 w-12 text-blue-600 animate-spin mb-4" />
      <h2 className="text-xl font-medium text-gray-700">Loading Coverage Gap Analysis</h2>
      <p className="text-gray-500 mt-2">Please wait while we load your data...</p>
    </div>
  );
};

// Error component
const ErrorScreen = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
      <h2 className="text-xl font-medium text-gray-700">Error Loading Data</h2>
      <p className="text-gray-500 mt-2">{message}</p>
      <button 
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
};

// Main app component with data loading and Wiki integration
const App = () => {
  const { loading, error, data } = useDataLoader();
  const [showWiki, setShowWiki] = useState(false);
  
  const handleWikiClick = () => {
    setShowWiki(true);
  };
  
  const handleCloseWiki = () => {
    setShowWiki(false);
  };

  // Show Wiki when active
  if (showWiki) {
    return <Wiki onClose={handleCloseWiki} />;
  }

  // Show loading screen when loading
  if (loading) return <LoadingScreen />;
  
  // Show error screen on error
  if (error) return <ErrorScreen message={error} />;

  // Normal dashboard view
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navigation onWikiClick={handleWikiClick} />
      <div className="flex-grow">
        <Dashboard 
          client={data.client.clientName}
          policies={data.policies}
          gaps={data.gaps}
          riskProfile={data.client}
          crossSellOpportunities={data.crossSellOpportunities}
        />
      </div>
    </div>
  );
};

export default App;