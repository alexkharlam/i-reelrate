import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInitUser } from "./features/Auth";
import Container from "./layouts/Container";

function App() {
    const { initUser } = useInitUser();

    useEffect(() => initUser(), []);

    return (
        <>
            <ToastContainer />
            <Container>
                <Outlet />
            </Container>
        </>
    );
}

export default App;
