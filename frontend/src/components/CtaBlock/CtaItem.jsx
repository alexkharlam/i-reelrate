import { Link } from "react-router-dom";

function CtaItem({ children, to, className }) {
  return (
    <Link
      to={to}
      className={`bg-primary w-full p-3 justify-center text-1xl rounded-sm flex items-center gap-1.5 hover:bg-opacity-80 transition-all duration-150 ${
        className || ""
      }`}
    >
      {children}
    </Link>
  );
}

export default CtaItem;
