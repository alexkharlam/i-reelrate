import useApi from "../../hooks/useApi";
import { useLoginLogout } from "../Auth";

export default function useDeleteUser() {
  const { handleLogout } = useLoginLogout();
  const { makeRequest, isLoading, error } = useApi();

  async function deleteUser() {
    const res = await makeRequest({
      url: "/api/user/deleteMe",
      options: { method: "delete" },
    });

    if (res?.status === 204) handleLogout();
  }

  return {
    deleteUser,
    isLoading,
    error,
  };
}
