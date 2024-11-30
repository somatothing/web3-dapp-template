import { useState } from "react";
import { getAggregatorInstance } from "../utils/autoReplicator";

/**
 * Hook to fetch data dynamically using auto-replicating aggregator.
 * @param {string} instanceKey - Unique key for the aggregator instance (e.g., userAddress).
 * @returns {Object} - { fetchData, isLoading, error, clearInstance }
 */
const useDataFetcher = (instanceKey) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (functionName, params) => {
    const aggregator = getAggregatorInstance(instanceKey); // Get the correct aggregator instance
    setIsLoading(true);
    setError(null);

    try {
      const result = await aggregator[functionName](params);
      setIsLoading(false);
      return result;
    } catch (err) {
      console.error(`Error in ${functionName}:`, err.message);
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  };

  const clearInstance = () => {
    setError(null);
    getAggregatorInstance(instanceKey); // Clear the instance when needed
  };

  return { fetchData, isLoading, error, clearInstance };
};

export default useDataFetcher;
