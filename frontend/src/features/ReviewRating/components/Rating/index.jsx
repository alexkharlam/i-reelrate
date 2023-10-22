import getRatingColor from "../../utils/getRatingColor";
import { Star } from "react-feather";

function Rating({ rating, className }) {
    const { value: ratingValue, numRates } = rating;

    const color = getRatingColor(ratingValue);

    const formattedRating =
        ratingValue % 1 === 0 ? ratingValue : ratingValue.toFixed(2);

    return (
        <>
            <div
                className={`flex gap-1 items-center text-md bg-opacity-95 ${className}`}
            >
                <p className='font-bold text-1xl'>{formattedRating}</p>
                <Star fill={color} color={color} size={24} />
            </div>
            <p className=' text-tertiary'>{numRates} rates</p>
        </>
    );
}

export default Rating;
