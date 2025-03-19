// DataLoad.jsx - Component to load external data files for the demo
import React, { useState, useEffect } from 'react';

// This component can replace the static data in your app for the demo
const useDataLoader = () => {
  const [clientData, setClientData] = useState(null);
  const [policiesData, setPoliciesData] = useState(null);
  const [gapAnalysisData, setGapAnalysisData] = useState(null);
  const [exposuresData, setExposuresData] = useState(null);
  const [recommendationsData, setRecommendationsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Create an array of fetch promises
        const fetchPromises = [
          fetch('/data/client_profile.json').then(res => res.json()),
          fetch('/data/policies.json').then(res => res.json()),
          fetch('/data/gap_analysis.json').then(res => res.json()),
          fetch('/data/exposures.json').then(res => res.json()),
          fetch('/data/recommendations.json').then(res => res.json())
        ];

        // Wait for all promises to resolve
        const [
          clientProfileResult, 
          policiesResult, 
          gapAnalysisResult, 
          exposuresResult,
          recommendationsResult
        ] = await Promise.all(fetchPromises);

        // Set the state with the loaded data
        setClientData(clientProfileResult);
        setPoliciesData(policiesResult);
        setGapAnalysisData(gapAnalysisResult);
        setExposuresData(exposuresResult);
        setRecommendationsData(recommendationsResult);
        
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load data. Please check if JSON files are in the correct location.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    loading,
    error,
    data: {
      client: clientData,
      policies: policiesData?.policies || [],
      gaps: gapAnalysisData?.gaps || [],
      crossSellOpportunities: gapAnalysisData?.crossSellOpportunities || [],
      exposures: exposuresData,
      recommendations: recommendationsData
    }
  };
};

// Usage Example:
// const DataLoadedApp = () => {
//   const { loading, error, data } = useDataLoader();
//
//   if (loading) return <div>Loading data...</div>;
//   if (error) return <div>{error}</div>;
//
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <Navigation />
//       <div className="flex-grow">
//         <Dashboard 
//           client={data.client.clientName}
//           policies={data.policies}
//           gaps={data.gaps}
//           riskProfile={data.client}
//           crossSellOpportunities={data.crossSellOpportunities}
//         />
//       </div>
//     </div>
//   );
// };

export default useDataLoader;