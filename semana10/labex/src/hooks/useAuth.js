import { useState, useCallback } from 'react';
import axios from 'axios';

const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, body, header, method) => {
    let response;
    const axiosMethod = method.toLowerCase();

    try {
      setError(null);
      setLoading(true);
      response = await axios[axiosMethod](url, body, header);
    } catch (err) {
      response = null;
      setError(err.message);
    } finally {
      setData(response);
      setLoading(false);
      return { response };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useData;