import { useState } from "react";
import useApi from "../../hooks/useApi";

function UserItem({ user }) {
  const { makeRequest, isLoading } = useApi();
  const [blocked, setBlocked] = useState(user.blocked);

  function toggleStatus() {
    const handleSuccess = () => setBlocked((prev) => !prev);

    makeRequest({
      url: `/api/admin/users/${blocked ? "unblock" : "block"}/${user._id}`,
      callback: handleSuccess,
      options: { method: "PATCH" },
    });
  }

  return (
    <tr
      className={`odd:bg-opacity-20 bg-opacity-10 bg-gray-500 ${
        isLoading ? "animate-pulse" : ""
      }`}
    >
      <td className="border border-gray-600 p-2 w-2">{user._id}</td>
      <td className="border border-gray-600 p-2">{user.name}</td>
      <td className="border border-gray-600 p-2">{user.email}</td>
      <td className="border border-gray-600 p-2">{user.role}</td>
      <td
        className={`border font-semibold border-gray-600 p-2 ${
          blocked ? "text-red" : "text-green"
        }`}
      >
        {blocked ? "blocked" : "active"}
      </td>

      <td className="border border-gray-600 p-2">
        <button
          disabled={isLoading}
          onClick={toggleStatus}
          className={` px-1 py-0.5 font-semibold rounded-sm ${
            blocked ? "bg-green" : "bg-red"
          }`}
        >
          {blocked ? "Unblock" : "block"} user
        </button>
      </td>
    </tr>
  );
}

export default UserItem;
