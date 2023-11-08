import ReactMarkdown from "react-markdown";

function Text({ review }) {
  return (
    <div className="review max-w-3xl">
      <ReactMarkdown>{review.text}</ReactMarkdown>
    </div>
  );
}

export default Text;
