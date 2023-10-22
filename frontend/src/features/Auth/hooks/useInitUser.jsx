import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";

export default function useInitUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function initUser() {
        const params = new URLSearchParams(location.search);
        const userParam = params.get("user");

        if (!userParam) return;

        try {
            const userData = JSON.parse(decodeURIComponent(userParam));
            navigate(window.location.pathname);
            dispatch(setUser(userData));
            localStorage.setItem("user", JSON.stringify(userData));
        } catch (err) {
            console.log("Failed to initialize a user");
        }
    }

    return { initUser };
}
