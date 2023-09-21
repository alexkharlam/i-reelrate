import LoadingSpinner from "./LoadingSpinner";

function LoadingModal({ message }) {
  return (
    <div className="p-3 rounded-sm fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-600">
      <p className="text-1xl text-center font-bold mb-2">{message}</p>
      <LoadingSpinner />
    </div>
  );
}

export default LoadingModal;
