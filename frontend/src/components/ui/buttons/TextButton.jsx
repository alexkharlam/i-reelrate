function TextButton({ onClick, text, children, className }) {
  return (
    <button
      className={`border-[3px] transition-all duration-100 border-primary-600 hover:bg-primary-600 hover:text-white text-md font-bold px-2 py-1 rounded-sm ${
        className || ""
      }`}
      onClick={onClick}
    >
      {text || ""}
      {children || ""}
    </button>
  );
}

export default TextButton;
