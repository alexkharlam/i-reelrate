import { Link } from "react-router-dom";

function CtaLink({ text, to }) {
  return (
    <Link
      className="block hover:scale-[101%] mb-3.5 md:p-4 p-3 rounded-lg transition-all duration-300 hover:bg-primary-700 text-center text-1xl font-semibold bg-primary-600 text-white"
      to={to}
    >
      {text}
    </Link>
  );
}

export default CtaLink;
