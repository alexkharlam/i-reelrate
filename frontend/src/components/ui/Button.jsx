import classNames from "classnames";

function Button({
  className,
  isRed = false,
  onClick,
  disabled = false,
  StartIcon,
  children,
  type = "button",
}) {
  const btnClass = classNames(
    "border-[3px] transition-all duration-100 text-md font-bold px-2 py-1 rounded-sm",
    { "border-primary-600 hover:bg-primary-600 hover:text-white": !isRed },
    { "border-red bg-red hover:bg-opacity-90 text-white": isRed },
    { "flex gap-1 items-center": StartIcon },
    className,
  );

  return (
    <button
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {StartIcon && <StartIcon size={20} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
