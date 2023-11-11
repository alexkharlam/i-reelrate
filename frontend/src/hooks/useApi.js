import axios from "axios";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useApi() {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(
    async ({ url, callback, options }) => {
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

        const errorStatus = err.response.status;

        let errorMessage = err.response.data?.message || t("errors.generic");
        if (errorStatus === 500) errorMessage = t("errors.generic");
        if (errorStatus === 403) errorMessage = t("errors.403");
        if (errorStatus === 404) errorMessage = t("errors.404");

        setError(errorMessage);
      }
    },
    [t],
  );

  return { makeRequest, isLoading, error, data };
}
