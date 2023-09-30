import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export default function useHttp() {
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();

  const makeRequest = useCallback(async (url, submitData, options) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await axios({
        url,
        options: options || null,
      });

      setIsLoading(false);

      submitData(res.data);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);

      toast.error(
        err?.data?.message || err?.message || "Something went wrong!",
      );
    }
  }, []);

  return { makeRequest, isLoading, isError };
}
