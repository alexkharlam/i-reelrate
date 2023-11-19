import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import UserList from "./UserList";
import PaginationBlock from "../../components/PaginationBlock";

function AdminPanel() {
  const { makeRequest, data, isLoading: isLoadingUsers } = useApi();
  const totalPages = data?.totalPages || 1;
  const users = data?.users || [];
  const [page, setPage] = useState(1);

  useEffect(() => {
    makeRequest({ url: `/api/admin/users?page=${page}&limit=30` });
  }, [makeRequest, page]);

  function handlePage(numValue) {
    setPage((prev) => (numValue < 0 ? prev - 1 : prev + 1));
  }

  if (users.length === 0) return;

  return (
    <div>
      <h1>Manage users</h1>
      {users.length > 0 && <UserList users={users} />}
      <PaginationBlock
        totalPages={totalPages}
        page={page}
        onHandlePage={handlePage}
        isLoading={isLoadingUsers}
      />
    </div>
  );
}

export default AdminPanel;
