import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useCreateReview() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const submitReview = useCallback(
        async (reviewFormData) => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios({
                    method: "post",
                    url: "/api/reviews",
                    data: reviewFormData,
                });

                toast.success("Your review successfully created!", {
                    toastId: "created",
                });
                setIsLoading(false);

                navigate(`/reviews/${response.data.review._id}`);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
                setError(
                    err?.response?.data?.message ||
                        "Unknown error. Please try again!"
                );
            }
        },
        [navigate]
    );

    return { submitReview, error, isLoading };
}
