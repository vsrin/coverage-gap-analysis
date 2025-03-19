// App.jsx - Main Application Component
import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Upload, 
  FileText, 
  AlertTriangle, 
  Check, 
  Info,
  BarChart
} from 'lucide-react';

// Sample data for demonstration
const samplePolicies = [
  {
    id: 'POL-12345',
    policyNumber: 'CPP-12345-01',
    namedInsured: 'Acme Manufacturing Co.',
    carrier: 'ABC Insurance',
    effectiveDate: '2024-01-01',
    expirationDate: '2025-01-01',
    coverageType: 'Property',
    status: 'Active',
    premium: 45000,
    limits: {
      buildingLimit: 5000000,
      contentsLimit: 2000000,
      biLimit: 1000000,
      deductible: 25000
    },
    locations: [
      { id: 'LOC1', address: '123 Main St, Chicago, IL', buildingValue: 3500000, contentsValue: 1500000, occupancy: 'Manufacturing' },
      { id: 'LOC2', address: '456 Warehouse Ave, Chicago, IL', buildingValue: 1500000, contentsValue: 500000, occupancy: 'Warehouse' }
    ]
  },
  {
    id: 'POL-67890',
    policyNumber: 'CGL-67890-01',
    namedInsured: 'Acme Manufacturing Co.',
    carrier: 'ABC Insurance',
    effectiveDate: '2024-01-01',
    expirationDate: '2025-01-01',
    coverageType: 'General Liability',
    status: 'Active',
    premium: 28000,
    limits: {
      perOccurrence: 1000000,
      aggregate: 2000000,
      productsCompleted: 2000000,
      personalAdvertising: 1000000,
      deductible: 10000
    }
  }
];

const gapAnalysisResults = [
  {
    id: 'GAP-001',
    severity: 'High',
    category: 'Property',
    description: 'Building values for Location 1 appear to be underinsured by approximately 20% based on current construction costs.',
    impact: 'In the event of a total loss, client may face a $700,000 coverage shortfall.',
    recommendation: 'Increase building limit to $4,200,000 to align with current replacement cost estimates.',
    status: 'Open'
  },
  {
    id: 'GAP-002',
    severity: 'Medium',
    category: 'Property',
    description: 'Business Income limit is insufficient based on financial records showing 18-month recovery period.',
    impact: 'Extended business interruption would exceed current limits by approximately $500,000.',
    recommendation: 'Increase BI limit to $1,500,000 with extended period of indemnity endorsement.',
    status: 'Open'
  },
  {
    id: 'GAP-003',
    severity: 'High',
    category: 'General Liability',
    description: 'Products-completed operations coverage is inadequate for manufacturing risk exposure.',
    impact: 'Product liability claim could exceed policy limits, especially with multiple occurrences.',
    recommendation: 'Increase products-completed operations aggregate limit to $5,000,000.',
    status: 'Open'
  },
  {
    id: 'GAP-004',
    severity: 'Low',
    category: 'Property',
    description: 'Property policy deductible is higher than industry standard for similar risks.',
    impact: 'Higher out-of-pocket expenses for frequent small claims.',
    recommendation: 'Consider reducing property deductible to $10,000 with slight premium adjustment.',
    status: 'Open'
  }
];

const riskProfile = {
  industry: 'Manufacturing',
  subIndustry: 'Metal Products',
  revenueRange: '$10M - $50M',
  employees: 75,
  propertyExposure: 'High',
  productLiabilityExposure: 'High',
  operationsExposure: 'Medium',
  claimsHistory: 'Favorable',
  riskManagementScore: 'Good',
  yearEstablished: 2005
};

// Navigation component
const Navigation = () => {
  return (
    <div className="w-full bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">CoverageGap Analysis Tool</div>
        <div className="flex space-x-4">
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Dashboard</button>
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Policies</button>
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Analysis</button>
          <button className="hover:bg-gray-700 px-3 py-2 rounded">Reports</button>
        </div>
        <div>
          <span className="bg-blue-600 px-3 py-2 rounded">Carrier View</span>
        </div>
      </div>
    </div>
  );
};

// Collapsible panel component
const CollapsiblePanel = ({ title, children, icon, initialState = false }) => {
  const [isOpen, setIsOpen] = useState(initialState);
  
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
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${riskProfile.propertyExposure === 'High' ? 'bg-red-500' : riskProfile.propertyExposure === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
            {riskProfile.propertyExposure}
          </div>
          <div className="text-gray-600">Product Liability:</div>
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${riskProfile.productLiabilityExposure === 'High' ? 'bg-red-500' : riskProfile.productLiabilityExposure === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
            {riskProfile.productLiabilityExposure}
          </div>
          <div className="text-gray-600">Operations Exposure:</div>
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${riskProfile.operationsExposure === 'High' ? 'bg-red-500' : riskProfile.operationsExposure === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
            {riskProfile.operationsExposure}
          </div>
          <div className="text-gray-600">Claims History:</div>
          <div>{riskProfile.claimsHistory}</div>
          <div className="text-gray-600">Risk Management:</div>
          <div>{riskProfile.riskManagementScore}</div>
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
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">Identified Coverage Gaps</h3>
        <div>
          <select className="p-2 border rounded mr-2">
            <option>All Categories</option>
            <option>Property</option>
            <option>General Liability</option>
          </select>
          <select className="p-2 border rounded">
            <option>All Severities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {gaps.map(gap => (
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
        ))}
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
const SummaryStatistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <div className="ml-4">
            <div className="text-gray-500 text-sm">High Severity Gaps</div>
            <div className="text-2xl font-bold">2</div>
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
            <div className="text-2xl font-bold">1</div>
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
            <div className="text-2xl font-bold">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Recommendation details component
const RecommendationDetails = () => {
  return (
    <div className="border rounded-lg p-4 bg-blue-50">
      <h3 className="text-lg font-medium mb-2">Cross-Sell Opportunities</h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full">
            <Check className="h-5 w-5 text-blue-500" />
          </div>
          <div className="ml-3">
            <div className="font-medium">Cyber Liability Coverage</div>
            <p className="text-sm text-gray-600">Client has significant data exposure with no cyber coverage in place. Manufacturing operations with connected equipment present additional risk vectors.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full">
            <Check className="h-5 w-5 text-blue-500" />
          </div>
          <div className="ml-3">
            <div className="font-medium">Equipment Breakdown Endorsement</div>
            <p className="text-sm text-gray-600">Client's manufacturing equipment represents significant value without specialized breakdown coverage beyond standard property policy.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-full">
            <Check className="h-5 w-5 text-blue-500" />
          </div>
          <div className="ml-3">
            <div className="font-medium">Umbrella/Excess Liability</div>
            <p className="text-sm text-gray-600">Given high product liability exposure, recommend $5M umbrella coverage to provide adequate protection above primary policy limits.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Generate Sales Materials
        </button>
      </div>
    </div>
  );
};

// Main dashboard component
const Dashboard = ({ client, policies, gaps, riskProfile }) => {
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
      
      <SummaryStatistics />
      
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
            <RecommendationDetails />
          </CollapsiblePanel>
        </div>
      </div>
    </div>
  );
};

// Main app component
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navigation />
      <div className="flex-grow">
        <Dashboard 
          client="Acme Manufacturing Co."
          policies={samplePolicies}
          gaps={gapAnalysisResults}
          riskProfile={riskProfile}
        />
      </div>
    </div>
  );
};

export default App;