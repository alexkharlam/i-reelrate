import { useNavigate } from "react-router-dom";

export default function useLoginLogout() {
    const navigate = useNavigate();

    const handleLogin = () => navigate("/login");
    const handleLogout = async () => {
        localStorage.removeItem("user");

        try {
            const res = await fetch("/auth/logout");
            if (res.ok) location.assign("/");
        } catch (err) {
            navigate("/");
        }
    };

    return { handleLogin, handleLogout };
}
