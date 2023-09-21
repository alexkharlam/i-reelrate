function ReviewVerdict({ review }) {
  return (
    <p className="font-bold text-1xl my-3">Verdict: {review.verdict}/10</p>
  );
}

export default ReviewVerdict;
