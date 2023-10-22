import { useContext } from "react";
import { ReviewsContext } from "../../context/reviewsContext";
import SortOptions from "./SortOptions";

function SortInput() {
    const { filter, updateFilter } = useContext(ReviewsContext);

    function handleSort(e) {
        updateFilter({ sortBy: e.target.value });
    }

    return (
        <select
            className='dark:bg-black border-[1px] bg-white border-gray-400 hover:border-gray-300 py-1.5 pl-2 pr-3.5 font-semibold  rounded-sm mb-3'
            id='sort'
            name='sort'
            value={filter.sortBy}
            onChange={handleSort}
        >
            <SortOptions />
        </select>
    );
}

export default SortInput;
