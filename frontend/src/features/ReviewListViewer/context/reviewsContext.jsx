import { createContext, useCallback, useEffect, useState } from "react";
import useHttp from "../../../hooks/useHttp";

export const ReviewsContext = createContext();

export const ReviewsProvider = ({ query, children }) => {
    const { makeRequest, isLoading, error } = useHttp();
    const [reviews, setReviews] = useState([]);

    const initialFilter = {
        sortBy: query?.sortBy || "-createdAt",
        category: query?.category || null,
        limit: query?.limit || null,
        user: query?.user || null,
    };

    const [filter, setFilter] = useState(initialFilter);

    const updateFilter = useCallback((filter) => {
        setFilter((prev) => ({ ...prev, ...filter }));
    }, []);

    useEffect(() => {
        const submitData = (data) => {
            if (data?.reviews) setReviews(data.reviews);
        };

        const { sortBy, category, limit, user } = filter;

        makeRequest(
            `/api/reviews?sort=${sortBy || ""}&category=${
                category || ""
            }&limit=${limit || ""}&user=${user || ""}`,
            submitData
        );
    }, [makeRequest, filter]);

    return (
        <ReviewsContext.Provider
            value={{ reviews, isLoading, error, filter, updateFilter }}
        >
            {children}
        </ReviewsContext.Provider>
    );
};
