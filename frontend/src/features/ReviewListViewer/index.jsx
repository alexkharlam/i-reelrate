import ReviewsContainer from "./containers/ReviewsContainer";
import { ReviewsProvider } from "./context/reviewsContext";
import SortInput from "./components/SortInput";
import CategoriesContainer from "./containers/CategoriesContainer";

function ReviewListViewer({ query, enableSorting, enableCategoryFilter }) {
    return (
        <ReviewsProvider query={query}>
            {enableCategoryFilter && <CategoriesContainer />}
            {enableSorting && <SortInput />}
            <ReviewsContainer />
        </ReviewsProvider>
    );
}

export default ReviewListViewer;
