import Placeholder from "../components/Rating/Placeholder";
import Rating from "../components/Rating";
import { useContext, useEffect } from "react";
import { RatingContext } from "../context/RatingContext";

function RatingContainer() {
    const { isLoading, rating, getRating } = useContext(RatingContext);

    useEffect(() => {
        getRating();
    }, []);

    return (
        <div className='h-4.5'>
            {isLoading && <Placeholder />}

            {rating && !isLoading && <Rating rating={rating} />}
        </div>
    );
}

export default RatingContainer;
