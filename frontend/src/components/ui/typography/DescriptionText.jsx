function DescriptionText({ Icon, text, className }) {
  return (
    <div
      className={`flex font-semibold text-secondary items-center gap-1 ${className}`}
    >
      {Icon && <Icon size={16} />}
      <p className="text-md">{text}</p>
    </div>
  );
}

export default DescriptionText;
