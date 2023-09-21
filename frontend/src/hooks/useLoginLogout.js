import { useNavigate } from "react-router-dom";
import useErrorHandling from "./useErrorHandling";

export default function useLoginLogout() {
  const navigate = useNavigate();
  const { catchAsync } = useErrorHandling();

  const handleLogin = () => navigate("/login");
  const handleLogout = catchAsync(async () => {
    localStorage.removeItem("user");

    const res = await fetch("/auth/logout");
    if (res.ok) location.assign("/");
  });

  return { handleLogin, handleLogout };
}
