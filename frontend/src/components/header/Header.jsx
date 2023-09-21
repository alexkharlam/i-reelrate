import LoginButton from "./LoginButton";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";
import HeaderSearch from "./HeaderSearch";

function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="flex justify-between items-center p-2">
      <HeaderSearch />
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <LogoutButton />}
    </header>
  );
}

export default Header;
