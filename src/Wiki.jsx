// Wiki.jsx - Wiki component for Coverage Gap Analysis App
import React, { useState } from 'react';
import { 
  BookOpen, 
  Building, 
  Users, 
  BarChart, 
  Shield, 
  Server, 
  FileText,
  ArrowLeft,
  ChevronRight,
  Search
} from 'lucide-react';

const Wiki = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState('intro');
  const [searchQuery, setSearchQuery] = useState('');

  // Wiki content organized by sections
  const wikiContent = {
    intro: {
      title: "Coverage Gap Analysis Overview",
      content: (
        <div>
          <p className="mb-4">
            Coverage Gap Analysis is a systematic approach to identifying areas where a client's insurance program 
            has insufficient or missing coverage compared to their actual risk exposures. This tool automates this 
            process, providing carriers with opportunities to better serve clients while driving premium growth.
          </p>
          <p className="mb-4">
            The application analyzes policy documents, compares coverage to industry benchmarks, and identifies 
            gaps in protection. Each gap is categorized by severity and matched with appropriate insurance solutions.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded p-4 my-6">
            <h4 className="font-medium text-blue-800 mb-2">Key Benefits:</h4>
            <ul className="list-disc pl-5 space-y-1 text-blue-700">
              <li>Identify revenue opportunities through cross-selling</li>
              <li>Improve client risk profiles through better coverage</li>
              <li>Strengthen client relationships with proactive risk management</li>
              <li>Support data-driven underwriting decisions</li>
            </ul>
          </div>
        </div>
      )
    },
    businessLogic: {
      title: "Business Logic",
      content: (
        <div>
          <p className="mb-4">
            The Coverage Gap Analysis tool employs several sophisticated business logic processes:
          </p>
          
          <h4 className="font-medium text-lg mt-6 mb-2">1. Risk Assessment & Identification</h4>
          <p className="mb-4">
            The system analyzes the client's business profile to determine their specific risk exposures. It considers 
            industry classification, operations, revenue size, locations, and other factors to build a comprehensive 
            risk profile. This forms the baseline for gap analysis.
          </p>
          
          <h4 className="font-medium text-lg mt-6 mb-2">2. Policy Analysis & Coverage Mapping</h4>
          <p className="mb-4">
            Current insurance policies are analyzed to extract key coverage elements: limits, sublimits, 
            exclusions, endorsements, and conditions. These are mapped to the client's risk exposure areas 
            to identify where coverage exists and where it might be missing or insufficient.
          </p>
          
          <h4 className="font-medium text-lg mt-6 mb-2">3. Gap Identification & Severity Rating</h4>
          <p className="mb-4">
            The system compares the client's coverage with their risk profile to identify gaps. Each gap is 
            assigned a severity rating based on:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><span className="font-medium">Financial Impact</span>: The potential financial loss if the gap remains unaddressed</li>
            <li><span className="font-medium">Probability</span>: The likelihood of an event occurring that would trigger the gap</li>
            <li><span className="font-medium">Remediation Complexity</span>: How difficult or costly it would be to address the gap</li>
          </ul>
          
          <h4 className="font-medium text-lg mt-6 mb-2">4. Recommendation Generation</h4>
          <p className="mb-4">
            For each identified gap, the system generates specific insurance solutions. These recommendations 
            include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Specific coverage enhancements or new policies</li>
            <li>Estimated premium impact</li>
            <li>Implementation steps and requirements</li>
            <li>Prioritization based on severity and business impact</li>
          </ul>
          
          <h4 className="font-medium text-lg mt-6 mb-2">5. Cross-Sell Opportunity Mapping</h4>
          <p className="mb-4">
            The system links recommendations to specific insurance products in the carrier's portfolio, 
            creating actionable cross-sell opportunities. Each opportunity includes premium estimates and 
            ROI calculations to support business decision-making.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded p-4 my-6">
            <h4 className="font-medium text-amber-800 mb-2">Implementation Logic:</h4>
            <p className="text-amber-700">
              In the full implementation, these business logic processes would be powered by machine learning algorithms 
              that learn from historical data, policy language, and claims experiences. The prototype demonstrates the 
              user interface and workflow while simulating these complex backend processes.
            </p>
          </div>
        </div>
      )
    },
    industryBenchmarks: {
      title: "Industry Benchmarks",
      content: (
        <div>
          <p className="mb-4">
            Industry benchmarks provide objective standards for evaluating a client's insurance program. These 
            benchmarks are derived from data across thousands of similar businesses and are tailored to specific 
            industry segments.
          </p>
          
          <h4 className="font-medium text-lg mt-6 mb-2">Benchmark Categories</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Category</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">Application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-medium">Coverage Limits</td>
                  <td className="border p-2">Industry-standard liability, property, and specialty limits based on revenue size</td>
                  <td className="border p-2">Identifies inadequate limits compared to peers</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Deductible Levels</td>
                  <td className="border p-2">Typical deductible/retention levels for varying company sizes</td>
                  <td className="border p-2">Evaluates risk transfer efficiency</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Coverage Breadth</td>
                  <td className="border p-2">Common endorsements and extensions for specific industries</td>
                  <td className="border p-2">Identifies missing specialized coverages</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Premium Rates</td>
                  <td className="border p-2">Average premium rates as percentage of revenue or per exposure unit</td>
                  <td className="border p-2">Provides pricing context for recommendations</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Program Structure</td>
                  <td className="border p-2">Common layering and program design for complex risks</td>
                  <td className="border p-2">Optimizes overall insurance architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="font-medium text-lg mt-6 mb-2">Benchmark Sources</h4>
          <p className="mb-4">
            Benchmarks are derived from multiple sources to ensure accuracy and relevance:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Aggregated client data (anonymized and segmented)</li>
            <li>Industry association reports and standards</li>
            <li>Regulatory requirements and minimums</li>
            <li>Claims trend analysis by industry classification</li>
            <li>Insurance market surveys and studies</li>
          </ul>
          
          <div className="bg-green-50 border border-green-200 rounded p-4 my-6">
            <h4 className="font-medium text-green-800 mb-2">Dynamic Benchmarking:</h4>
            <p className="text-green-700">
              In the full implementation, benchmarks would be continually updated based on market trends, claims 
              experience, and emerging risks. The system would provide custom benchmarks specific to the client's 
              industry, size, location, and operations.
            </p>
          </div>
        </div>
      )
    },
    perspectives: {
      title: "Broker & Carrier Perspectives",
      content: (
        <div>
          <p className="mb-4">
            The Coverage Gap Analysis tool serves both carrier and broker perspectives, though with different 
            business objectives and use cases. Understanding these perspectives helps contextualize the application's 
            functionality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h4 className="font-medium text-lg mb-3 flex items-center text-blue-800">
                <Building className="h-5 w-5 mr-2" /> Carrier Perspective
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-blue-700">Premium Growth:</span>
                    <p className="text-blue-600 text-sm">Identify opportunities to increase premium through coverage enhancements and cross-selling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-blue-700">Risk Quality:</span>
                    <p className="text-blue-600 text-sm">Improve overall risk quality by ensuring insureds have appropriate coverage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-blue-700">Underwriting Support:</span>
                    <p className="text-blue-600 text-sm">Provide data-driven insights to inform underwriting decisions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-blue-700">Product Development:</span>
                    <p className="text-blue-600 text-sm">Identify common gaps to inform new product development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-blue-700">Distribution Support:</span>
                    <p className="text-blue-600 text-sm">Provide agents with tools to demonstrate value and close sales</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4 bg-green-50">
              <h4 className="font-medium text-lg mb-3 flex items-center text-green-800">
                <Users className="h-5 w-5 mr-2" /> Broker Perspective
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-700">Client Advocacy:</span>
                    <p className="text-green-600 text-sm">Ensure clients have comprehensive protection based on their unique exposures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-700">Revenue Growth:</span>
                    <p className="text-green-600 text-sm">Increase commission through additional coverage placements and client retention</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-700">Client Engagement:</span>
                    <p className="text-green-600 text-sm">Create meaningful touchpoints with clients through coverage reviews</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-700">Proposal Generation:</span>
                    <p className="text-green-600 text-sm">Create data-driven proposals based on coverage gap findings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-700">E&O Mitigation:</span>
                    <p className="text-green-600 text-sm">Systematic coverage review helps mitigate errors & omissions exposure</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <h4 className="font-medium text-lg mt-8 mb-3">Key Differences in Approach</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Feature</th>
                  <th className="border p-2 text-left">Carrier Approach</th>
                  <th className="border p-2 text-left">Broker Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-medium">Recommendations</td>
                  <td className="border p-2">Focused on carrier's product portfolio</td>
                  <td className="border p-2">Market-agnostic based on client needs</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Analysis Scope</td>
                  <td className="border p-2">Focused on specific lines of business</td>
                  <td className="border p-2">Comprehensive across all coverage lines</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Client Interaction</td>
                  <td className="border p-2">Often intermediated through broker/agent</td>
                  <td className="border p-2">Direct client engagement and consultation</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Pricing Context</td>
                  <td className="border p-2">Specific premium indications</td>
                  <td className="border p-2">Market ranges across multiple carriers</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Implementation</td>
                  <td className="border p-2">Focus on binding with the carrier</td>
                  <td className="border p-2">Marketing process across multiple markets</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    fileRequirements: {
      title: "File Upload Requirements",
      content: (
        <div>
          <p className="mb-4">
            The Coverage Gap Analysis tool requires specific documents to perform an accurate analysis. This 
            section provides detailed information about required files, formats, and content.
          </p>
          
          <h4 className="font-medium text-lg mt-6 mb-2">Required Document Types</h4>
          <div className="space-y-4 mb-6">
            <div className="border rounded-lg p-3 bg-gray-50">
              <h5 className="font-medium flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                Policy Documents
              </h5>
              <p className="text-sm text-gray-600 mt-1">
                Complete insurance policies including declarations, forms, and all endorsements. These provide 
                the baseline coverage information for analysis.
              </p>
              <div className="mt-2 text-xs bg-blue-50 p-2 rounded">
                <span className="font-medium">Formats:</span> PDF, DOCX
              </div>
            </div>
            
            <div className="border rounded-lg p-3 bg-gray-50">
              <h5 className="font-medium flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                Schedule of Values
              </h5>
              <p className="text-sm text-gray-600 mt-1">
                List of all insured locations with values for buildings, contents, and business income. This 
                helps identify property exposure adequacy.
              </p>
              <div className="mt-2 text-xs bg-blue-50 p-2 rounded">
                <span className="font-medium">Formats:</span> XLSX, CSV
              </div>
            </div>
            
            <div className="border rounded-lg p-3 bg-gray-50">
              <h5 className="font-medium flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                Loss Runs
              </h5>
              <p className="text-sm text-gray-600 mt-1">
                5-year claims history showing frequency, severity, and types of losses. This data informs 
                risk prioritization and exposure patterns.
              </p>
              <div className="mt-2 text-xs bg-blue-50 p-2 rounded">
                <span className="font-medium">Formats:</span> PDF, XLSX, CSV
              </div>
            </div>
            
            <div className="border rounded-lg p-3 bg-gray-50">
              <h5 className="font-medium flex items-center">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                Risk Assessment Reports
              </h5>
              <p className="text-sm text-gray-600 mt-1">
                Any existing risk surveys, engineering reports, or risk management documentation that provides 
                insight into the client's operations and exposures.
              </p>
              <div className="mt-2 text-xs bg-blue-50 p-2 rounded">
                <span className="font-medium">Formats:</span> PDF, DOCX
              </div>
            </div>
          </div>
          
          <h4 className="font-medium text-lg mt-8 mb-2">File Processing</h4>
          <p className="mb-4">
            In the full implementation, files undergo sophisticated processing:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <span className="font-medium">Document Classification</span>: AI identifies document type and categorizes it accordingly
            </li>
            <li>
              <span className="font-medium">Data Extraction</span>: OCR and NLP extract key information from policies and other documents
            </li>
            <li>
              <span className="font-medium">Normalization</span>: Extracted data is standardized for analysis
            </li>
            <li>
              <span className="font-medium">Validation</span>: System checks for data completeness and flags any missing information
            </li>
            <li>
              <span className="font-medium">Analysis</span>: Processed data is compared against benchmarks and risk profile
            </li>
          </ol>
          
          <div className="bg-amber-50 border border-amber-200 rounded p-4 my-6">
            <h4 className="font-medium text-amber-800 mb-2">Prototype Limitations:</h4>
            <p className="text-amber-700">
              In this prototype, the file upload functionality demonstrates the user experience but does not perform 
              actual document processing. In a production version, sophisticated document processing algorithms would 
              extract and analyze policy language and coverage details.
            </p>
          </div>
        </div>
      )
    },
    implementation: {
      title: "Implementation Guide",
      content: (
        <div>
          <p className="mb-4">
            This section provides guidance on implementing the Coverage Gap Analysis tool in different environments 
            and use cases. It covers technical considerations, integration options, and customization approaches.
          </p>
          
          <h4 className="font-medium text-lg mt-6 mb-2">Technical Architecture</h4>
          <p className="mb-4">
            The application follows a modern microservices architecture:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded p-3 bg-white">
                <h5 className="font-medium text-center mb-2">Frontend Layer</h5>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>React-based UI components</li>
                  <li>Responsive design for all devices</li>
                  <li>Data visualization components</li>
                  <li>Document upload interface</li>
                </ul>
              </div>
              <div className="border rounded p-3 bg-white">
                <h5 className="font-medium text-center mb-2">API Layer</h5>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>RESTful API design</li>
                  <li>Authentication and authorization</li>
                  <li>Data validation and processing</li>
                  <li>Integration endpoints</li>
                </ul>
              </div>
              <div className="border rounded p-3 bg-white">
                <h5 className="font-medium text-center mb-2">Backend Services</h5>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>Document processing engine</li>
                  <li>Analytics and recommendation engine</li>
                  <li>Data storage and management</li>
                  <li>Reporting services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h4 className="font-medium text-lg mt-8 mb-2">Integration Options</h4>
          <p className="mb-4">
            The system supports multiple integration approaches:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Integration Type</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-medium">Standalone</td>
                  <td className="border p-2">Deployed as a separate application</td>
                  <td className="border p-2">Quick implementation without integration complexities</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">API Integration</td>
                  <td className="border p-2">Connect via API endpoints</td>
                  <td className="border p-2">Integration with existing agency/carrier systems</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Embedded</td>
                  <td className="border p-2">Components embedded in host application</td>
                  <td className="border p-2">Seamless experience within existing platforms</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Data Exchange</td>
                  <td className="border p-2">Asynchronous data sharing</td>
                  <td className="border p-2">Batch processing and reporting</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="font-medium text-lg mt-8 mb-2">Customization Options</h4>
          <p className="mb-4">
            The application supports extensive customization:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <span className="font-medium">Branding</span>: Customize colors, logos, and terminology to match organizational standards
            </li>
            <li>
              <span className="font-medium">Product Mapping</span>: Configure how gaps map to specific insurance products in your portfolio
            </li>
            <li>
              <span className="font-medium">Benchmarks</span>: Adjust industry benchmarks based on your organization's standards and risk appetite
            </li>
            <li>
              <span className="font-medium">Workflow</span>: Modify process flows to match your organization's procedures
            </li>
            <li>
              <span className="font-medium">Reporting</span>: Create custom report templates for different stakeholders
            </li>
          </ul>
          
          <div className="bg-blue-50 border border-blue-200 rounded p-4 my-6">
            <h4 className="font-medium text-blue-800 mb-2">Implementation Process:</h4>
            <ol className="list-decimal pl-5 space-y-1 text-blue-700">
              <li>Requirements Analysis: Define specific business needs and integration points</li>
              <li>Configuration: Set up benchmarks, products, and business rules</li>
              <li>Integration: Connect with existing systems and data sources</li>
              <li>Training: Onboard users and administrators</li>
              <li>Launch: Begin with pilot group before full rollout</li>
              <li>Feedback Loop: Continuously refine based on user feedback and results</li>
            </ol>
          </div>
        </div>
      )
    }
  };

  // Wiki navigation sidebar
  const wikiSections = [
    { id: 'intro', title: 'Overview', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'businessLogic', title: 'Business Logic', icon: <Server className="h-5 w-5" /> },
    { id: 'industryBenchmarks', title: 'Industry Benchmarks', icon: <BarChart className="h-5 w-5" /> },
    { id: 'perspectives', title: 'Broker & Carrier Perspectives', icon: <Users className="h-5 w-5" /> },
    { id: 'fileRequirements', title: 'File Upload Requirements', icon: <FileText className="h-5 w-5" /> },
    { id: 'implementation', title: 'Implementation Guide', icon: <Shield className="h-5 w-5" /> }
  ];

  // Filter sidebar sections based on search
  const filteredSections = wikiSections.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Wiki Header */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={onClose}
            className="flex items-center mr-4 hover:bg-gray-700 p-2 rounded"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>Back</span>
          </button>
          <h1 className="text-xl font-bold">Coverage Gap Analysis Wiki</h1>
        </div>
        <div className="flex items-center bg-gray-700 rounded px-3 py-1 w-64">
          <Search className="h-4 w-4 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search wiki..." 
            className="bg-transparent border-none text-white placeholder-gray-400 focus:outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Wiki Sidebar */}
        <div className="w-64 border-r overflow-y-auto">
          <nav className="p-4">
            <ul className="space-y-1">
              {filteredSections.map(section => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-3 py-2 rounded text-left ${
                      activeSection === section.id 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    <span className={activeSection === section.id ? 'font-medium' : ''}>{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Wiki Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <h2 className="text-2xl font-bold mb-6">{wikiContent[activeSection].title}</h2>
          <div className="prose max-w-none">
            {wikiContent[activeSection].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wiki;