import formatDate from "../../utils/formatDate";

function CommentItem({ comment }) {
  const createdAt = formatDate(new Date(comment.createdAt));

  return (
    <li className="w-full p-2 bg-gray-600 bg-opacity-20 rounded-sm relative">
      <p className="text-secondary text-sm mb-2">
        {comment.user.name} | {createdAt}
      </p>
      <p className="w-full break-words">{comment.text}</p>
    </li>
  );
}

export default CommentItem;
