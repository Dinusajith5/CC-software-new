import { useState, useEffect } from 'react';

// Generic hook for API calls with loading and error states
export const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction();
        setData(result);
      } catch (err) {
        setError(err.message || 'An error occurred');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || 'An error occurred');
      console.error('API Error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

// Hook for services
export const useServices = () => {
  const { servicesApi } = require('../services/api');
  return useApi(servicesApi.getAll);
};

// Hook for clients
export const useClients = () => {
  const { clientsApi } = require('../services/api');
  return useApi(clientsApi.getAll);
};

// Hook for company info
export const useCompanyInfo = () => {
  const { companyApi } = require('../services/api');
  return useApi(companyApi.getInfo);
};