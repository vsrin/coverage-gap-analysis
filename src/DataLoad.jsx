// DataLoad.jsx - Component to load external data files for the demo
import { useState, useEffect } from 'react';

// This hook attempts to load data from JSON files in the public/data directory
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

export default useDataLoader;
