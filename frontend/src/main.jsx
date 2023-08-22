import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/errorPage";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage message="Page not found" />}
    >
      <Route index={true} path="/" element={<p>Home screen</p>} />
      <Route index={true} path="/signup" element={<RegisterPage />} />
      <Route index={true} path="/login" element={<LoginPage />} />
      <Route path="/about" element={<p>About screen</p>} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
