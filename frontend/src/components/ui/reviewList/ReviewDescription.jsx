import DescriptionText from "../typography/DescriptionText";
import { Book, User } from "react-feather";
import { format } from "date-fns";

function ReviewDescription({ review }) {
  const formattedDate = format(new Date(review.createdAt), "dd.MM.yyyy HH:mm");

  return (
    <div className="flex flex-col h-full p-2">
      <h4 className="text-lg font-bold mb-2 group-hover:underline">
        {review.reviewTitle}
      </h4>
      <div className="flex gap-2">
        <DescriptionText Icon={Book} text={review.subjectTitle} />
        <DescriptionText Icon={User} text={review.user.name} />
      </div>
      <DescriptionText text={formattedDate} className="mt-auto" />
    </div>
  );
}

export default ReviewDescription;
