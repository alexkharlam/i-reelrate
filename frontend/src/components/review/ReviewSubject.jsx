function ReviewSubject({ reviewData }) {
  return (
    <div className="flex gap-1.5 uppercase dark:text-gray-300 text-gray-500 font-bold text-lg mt-2 mb-2">
      <p>{reviewData.category}</p>
      <span> | </span>
      <p>{reviewData.subjectTitle}</p>
    </div>
  );
}

export default ReviewSubject;
