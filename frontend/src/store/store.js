import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

// const localUser = localStorage.getItem("user");
const localUser = null;

const initialState = {
  auth: {
    isAuthenticated: localUser ? true : false,
    user: localUser ? JSON.parse(localUser) : null,
  },
};

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: initialState,
});
