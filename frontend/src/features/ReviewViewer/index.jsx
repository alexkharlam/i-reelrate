import ReviewContainer from "./containers/ReviewContainer";
import { ReviewProvider } from "./context/reviewContext";

export default function ReviewViewer({ id }) {
    return (
        <ReviewProvider>
            <ReviewContainer id={id} />
        </ReviewProvider>
    );
}
