import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";
import "easymde/dist/easymde.min.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "../config/i18n";
import CreateReview from "./pages/CreateReview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage message="Page not found" />}
    >
      <Route index={true} path="/" element={<p>Home screen</p>} />
      <Route path="/about" element={<p>About screen</p>} />
      <Route path="/reviews/create" element={<CreateReview />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
