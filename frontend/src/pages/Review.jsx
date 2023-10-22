import { useParams } from "react-router-dom";
import ReviewViewer from "../features/ReviewViewer";

function Review() {
    const { id } = useParams();

    return <ReviewViewer id={id} />;
}

export default Review;
