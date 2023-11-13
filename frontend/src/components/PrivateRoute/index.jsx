import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Outlet />;

  return <p>Please login to your account to access this page</p>;
}

export default PrivateRoute;
