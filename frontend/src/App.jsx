import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
