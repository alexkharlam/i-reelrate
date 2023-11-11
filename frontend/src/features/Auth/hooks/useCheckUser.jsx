import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authSlice";

import useApi from "../../../hooks/useApi";

export default function useCheckUser() {
  const { makeRequest } = useApi();
  const dispatch = useDispatch();

  function initUser() {
    makeRequest({
      url: "/api/user/checkAuth",
      callback: (res) => dispatch(setUser(res.data.user)),
    });
  }

  return { initUser };
}
