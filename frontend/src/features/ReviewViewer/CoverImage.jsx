function CoverImage({ review }) {
  if (!review.coverImageUrl) return;

  return (
    <img
      className="w-full object-cover object-center relative mx-auto h-7.5 rounded-sm mb-2.5"
      src={review.coverImageUrl}
    />
  );
}

export default CoverImage;
