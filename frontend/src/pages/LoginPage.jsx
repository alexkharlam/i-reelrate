import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginBlock from "../components/login/LoginBlock";

function LoginPage() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) return <Navigate to="/" />;

  return <LoginBlock xl={true} />;
}

export default LoginPage;
