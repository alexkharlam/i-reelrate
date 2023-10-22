import { createContext, useState } from "react";
import useHttp from "../../../hooks/useHttp";

export const RatingContext = createContext();

export const RatingProvider = ({ reviewId, children }) => {
    const [rating, setRating] = useState(null);
    const { isLoading, makeRequest, error } = useHttp();

    async function getRating() {
        const submitData = (data) => {
            if (data?.rating) setRating(data.rating);
        };

        await makeRequest(`/api/rates/${reviewId}`, submitData);
    }

    return (
        <RatingContext.Provider value={{ rating, isLoading, error, getRating }}>
            {children}
        </RatingContext.Provider>
    );
};
