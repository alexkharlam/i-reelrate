import "./LoadingSpinner.css";

function LoadingSpinner({ className, centered = true }) {
  return (
    <div
      className={`spinner w-4 h-4 ${centered ? "mx-auto" : ""} ${
        className || ""
      }`}
    >
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
}

export default LoadingSpinner;
