import { useContext } from "react";
import { ReviewsContext } from "../context/reviewsContext";
import CenteredText from "../../../components/ui/messages/CenteredText";
import LoadingSpinner from "../../../components/ui/spinners/LoadingSpinner";
import ReviewsList from "../../../components/ReviewsList";

function ReviewsContainer() {
    const { reviews, isLoading, error } = useContext(ReviewsContext);

    if (isLoading) return <LoadingSpinner />;

    if (reviews.length > 0) return <ReviewsList reviews={reviews} />;

    if (error)
        return (
            <CenteredText additionalText={error}>
                For some reason we cannot get reviews. Please try again!
            </CenteredText>
        );

    return <CenteredText>No reviews found!</CenteredText>;
}

export default ReviewsContainer;
