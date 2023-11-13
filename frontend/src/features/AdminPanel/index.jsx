import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import "react-data-grid/lib/styles.css";
import UserList from "./UserList";
import UserPagination from "./UserPagination";

function AdminPanel() {
  const { makeRequest, data } = useApi();
  const totalPages = data?.totalPages || 1;
  const users = data?.users || [];
  const [page, setPage] = useState(1);

  if (data) console.log(data);

  useEffect(() => {
    makeRequest({ url: `/api/admin/users?page=${page}&limit=30` });
  }, [makeRequest, page]);

  if (users.length === 0) return;

  return (
    <div>
      <h1>Manage users</h1>
      {users.length > 0 && <UserList users={users} />}
      <UserPagination totalPages={totalPages} page={page} onSetPage={setPage} />
    </div>
  );
}

export default AdminPanel;
