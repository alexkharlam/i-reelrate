import { useContext } from "react";
import { ReviewContext } from "../../context/reviewContext";

function Title() {
    const { review } = useContext(ReviewContext);

    return <h1 className='mb-4 text-5xl'>{review.title}</h1>;
}

export default Title;
