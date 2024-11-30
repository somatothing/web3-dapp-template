import React, { Suspense, useEffect, useState } from "react";
import metaAggregator from "./metaAggregator";

const lazyLoaderEnhanced = (
  importFunc,
  functionName = null,
  params = null,
  retries = 3,
  fallback = <div>Loading...</div>
) => {
  const LazyComponent = React.lazy(importFunc);

  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async (attempt = 1) => {
        if (!functionName) {
          setLoading(false);
          return;
        }
        try {
          const result = await metaAggregator.execute("../utils/aggregator", functionName, params);
          setData(result);
          setError(null);
        } catch (err) {
          if (attempt < retries) fetchData(attempt + 1);
          else setError("Failed to fetch data after multiple attempts.");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [functionName, params, retries]);

    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} data={data} loading={loading} error={error} />
      </Suspense>
    );
  };
};

export default lazyLoaderEnhanced;
