import ReviewRating from "./ReviewRating";
import ReviewImg from "./ReviewImg";

function ReviewCover({ review }) {
    return (
        <div className='hover:cursor-pointer w-full md:w-auto h-full relative inline-block'>
            <ReviewImg imgUrl={review.coverImageUrl} />
            <ReviewRating rating={review.rating} />
        </div>
    );
}

export default ReviewCover;
