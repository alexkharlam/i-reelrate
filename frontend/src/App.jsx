import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./layouts/Container";
import { useCheckUser } from "./features/Auth";

function App() {
  const { initUser } = useCheckUser();

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
