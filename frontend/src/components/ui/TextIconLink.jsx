import { Link } from "react-router-dom";
import classNames from "classnames";

function TextIconLink({
  className,
  to,
  StartIcon,
  cta = false,
  children,
  iconSize = 20,
}) {
  const linkClass = classNames(
    "flex items-center gap-1.5 text-md font-bold transition-colors duration-100 hover:text-white",
    {
      "px-2 py-1 rounded-sm bg-gradient-to-r text-white to-[#9A6352] font-semibold from-[#FFD43B]":
        cta,
    },
    className,
  );

  return (
    <Link className={linkClass} to={to}>
      <StartIcon size={iconSize} />
      {children && <span>{children}</span>}
    </Link>
  );
}

export default TextIconLink;
