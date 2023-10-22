import { useContext } from "react";
import { ReviewContext } from "../../context/reviewContext";

function Verdict() {
    const { review } = useContext(ReviewContext);

    return (
        <p className='font-bold text-1xl my-3'>Verdict: {review.verdict}/10</p>
    );
}

export default Verdict;
