import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-2 py-1 text-gray-100 bg-black">
        <Link to="/" className="text-4xl font-bold text-primary-800">
          <img src="/logo/rrlogo.svg" />
        </Link>
        <nav className="flex gap-2">
          <Link className="px-2 py-1 text-md  rounded-sm" to="/login">
            Sign in
          </Link>
          <Link
            className="px-2 py-1 text-md bg-primary-700 hover:scale-105 transition-transform text-white rounded-sm"
            to="/signup"
          >
            Sign up
          </Link>
        </nav>
      </header>
      <div className="bg-gradient-to-r from-primary-300 to-primary-800 h-[3px]"></div>
    </>
  );
}

export default Header;
