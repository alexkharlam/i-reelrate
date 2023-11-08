function Product({ review }) {
  return (
    <div className="flex gap-1.5 uppercase dark:text-gray-300 text-gray-500 font-bold text-lg mt-2 mb-2">
      <p>{review.category}</p>
      <span> | </span>
      <p>{review.product}</p>
    </div>
  );
}

export default Product;
