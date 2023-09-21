import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { useEffect } from "react";
import { setUser } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function checkAuth() {
    const params = new URLSearchParams(location.search);
    const userParam = params.get("user");
    if (!userParam) return;

    const userData = JSON.parse(decodeURIComponent(userParam));
    navigate(window.location.pathname);
    dispatch(setUser(userData));
    localStorage.setItem("user", JSON.stringify(userData));
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
