import { createContext, useCallback, useState } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [review, setReview] = useState(null);

    const updateReviewContext = useCallback(function (review) {
        setReview(review);
    }, []);

    return (
        <ReviewContext.Provider value={{ review, updateReviewContext }}>
            {children}
        </ReviewContext.Provider>
    );
};
