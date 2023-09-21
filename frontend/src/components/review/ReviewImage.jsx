function ReviewImage({ reviewData }) {
  if (!reviewData.coverImageUrl) return;

  return (
    <img
      className="w-full object-cover object-center relative mx-auto h-7.5 rounded-sm mb-4"
      src={reviewData.coverImageUrl}
    />
  );
}

export default ReviewImage;
