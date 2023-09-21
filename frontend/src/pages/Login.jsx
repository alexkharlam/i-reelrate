import LoginBlock from "../components/ui/LoginBlock";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) return <Navigate to="/" />;

  return <LoginBlock xl={true} />;
}

export default Login;
