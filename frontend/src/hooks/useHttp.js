import axios from "axios";
import { useCallback, useState } from "react";

export default function useHttp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const makeRequest = useCallback(async (url, submitData, options) => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await axios({
                url,
                ...options,
            });

            setIsLoading(false);

            submitData(res.data);
        } catch (err) {
            setIsLoading(false);

            const errorMessage =
                err?.response?.data?.message ||
                err?.message ||
                "Error! Please try again";

            setError(errorMessage);
        }
    }, []);

    return { makeRequest, isLoading, error };
}
