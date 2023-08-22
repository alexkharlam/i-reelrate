import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <Header />
      <p className="text-center my-3 text-2xl">Hello, world! In development</p>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
