import { Link } from "react-router-dom";

function NavLink({ to, cta, Icon, children }) {
  return (
    <Link
      className={`flex items-center gap-1.5 text-md font-bold transition-colors duration-100 hover:text-white ${
        cta &&
        "px-2 py-1 rounded-sm bg-gradient-to-r text-white to-[#9A6352] font-semibold from-[#FFD43B]"
      }`}
      to={to}
    >
      <Icon />
      <span>{children}</span>
    </Link>
  );
}

export default NavLink;
