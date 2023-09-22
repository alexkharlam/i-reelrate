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
import CreateReviewPage from "./pages/CreateReviewPage";
import store from "./store/store";
import { Provider } from "react-redux";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ReviewPage from "./pages/ReviewPage";
import SearchPage from "./pages/SearchPage";
import MyReviews from "./pages/MyReviews";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage message="Page not found" />}
    >
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<p>About screen</p>} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/reviews/:id" element={<ReviewPage />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/reviews/create" element={<CreateReviewPage />} />
        <Route path="/profile/reviews" element={<MyReviews />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </Provider>,
);
