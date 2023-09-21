function DescriptionText({ Icon, text, className }) {
  return (
    <div
      className={`flex font-semibold dark:text-gray-300 text-gray-600 items-center gap-1 ${className}`}
    >
      {Icon && <Icon size={16} />}
      <p className="text-md">{text}</p>
    </div>
  );
}

export default DescriptionText;
