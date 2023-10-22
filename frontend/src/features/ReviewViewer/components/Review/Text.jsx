import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { ReviewContext } from "../../context/reviewContext";

function Text() {
    const { review } = useContext(ReviewContext);

    return (
        <div className='review max-w-3xl'>
            <ReactMarkdown>{review.text}</ReactMarkdown>
        </div>
    );
}

export default Text;
