import ReviewRating from "../../../ReviewRating";
import Divider from "../../../../components/ui/Divider";

import Product from "./Product";
import Author from "./Author";
import CoverImage from "./CoverImage";
import Text from "./Text";
import Verdict from "./Verdict";
import Title from "./Title";

function Review({ id }) {
    return (
        <>
            <Product />
            <Title />
            <CoverImage />
            <div className='flex gap-3.5 sm:gap-0.5 sm:flex-row justify-between items-start flex-col'>
                <ReviewRating id={id} />
                <Author />
            </div>
            <Divider className='my-3' />
            <Text />
            <Verdict />
        </>
    );
}

export default Review;
