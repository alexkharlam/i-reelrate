import axios from "axios";
import { useCallback, useState } from "react";

export default function useApi() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(async ({ url, callback, options }) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios({
        url,
        ...options,
      });

      setIsLoading(false);
      setData(res.data);
      if (callback) callback(res);
      else return res;
    } catch (err) {
      setData(null);
      setIsLoading(false);

      const errorMessage =
        err?.response?.data?.message ||
        err?.message ||
        "Error! Please try again";

      setError(errorMessage);
    }
  }, []);

  return { makeRequest, isLoading, error, data };
}
