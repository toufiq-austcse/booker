import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(url, method, data, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function requestAxios() {
      setLoading(true);
      setError(false);
      try {
        let res = await axios[method.toLowerCase()](url, data, {
          headers: headers,
        });
        setLoading(false);
        setResult(res.data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);

      }
      setLoading(false);
    }

    requestAxios();

  }, []);

  return {
    loading,
    error,
    result,
  };

}