import { useContext } from "react";
import { ReviewContext } from "../../context/reviewContext";

function CoverImage() {
    const { review } = useContext(ReviewContext);

    if (!review.coverImageUrl) return;

    return (
        <img
            className='w-full object-cover object-center relative mx-auto h-7.5 rounded-sm mb-2.5'
            src={review.coverImageUrl}
        />
    );
}

export default CoverImage;
