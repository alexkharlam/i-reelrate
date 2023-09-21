import ReactMarkdown from "react-markdown";

function ReviewText({ text }) {
  return (
    <div className="review">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default ReviewText;
