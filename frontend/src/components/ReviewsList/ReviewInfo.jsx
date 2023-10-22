import { Book, User } from "react-feather";
import InfoElement from "./InfoElement";
import ReviewTitle from "./ReviewTitle";
import formatDate from "../../utils/formatDate";

function ReviewInfo({ review }) {
    const createdAt = formatDate(new Date(review?.createdAt));

    return (
        <div className='flex flex-col h-full pt-2 pb-2 lg:p-2'>
            <ReviewTitle title={review.title} />
            <div className='flex md: gap-1.5 md:flex-row flex-col'>
                <InfoElement Icon={Book} text={review.product} />
                <InfoElement Icon={User} text={review.user?.name} />
            </div>
            <InfoElement text={createdAt} className='mt-auto lg:pt-0 pt-2' />
            <div className='w-full lg:hidden my-2 h-[1px] bg-gray-600'></div>
        </div>
    );
}

export default ReviewInfo;
