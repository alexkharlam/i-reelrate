import { useSelector } from "react-redux";
import ReviewListViewer from "../features/ReviewListViewer";

function TestPage() {
    const { user } = useSelector((state) => state.auth);

    return (
        <>
            <h3 className='mb-3 mt-4'>My reviews</h3>
            <ReviewListViewer
                enableCategoryFilter={true}
                enableSorting={true}
                query={{ user: user._id }}
            />
        </>
    );
}

export default TestPage;
