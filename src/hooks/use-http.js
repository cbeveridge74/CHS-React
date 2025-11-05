import { useState, useCallback } from "react";

// Data mapping is a function passed into this hook to tell it how to transform the data
const useHttp = (requestConfig, dataMapping) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

// By wrapping sendRequest in useCallback it prevents child components from 
// re-rendering. useCallback will return a memoized version of the callback that 
// only changes if one of the inputs has changed.
  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      dataMapping(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [requestConfig, dataMapping]);
  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
