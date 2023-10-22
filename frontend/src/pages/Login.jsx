import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginBlock } from "../features/Auth";

function Login() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    if (isAuthenticated) return <Navigate to='/' />;

    return <LoginBlock />;
}

export default Login;
