import ReviewItem from "./ReviewItem";

function ReviewsList({ reviews }) {
    return (
        <ul className='flex flex-col gap-2'>
            {reviews.map((review) => (
                <ReviewItem key={review._id} review={review} />
            ))}
        </ul>
    );
}

export default ReviewsList;
