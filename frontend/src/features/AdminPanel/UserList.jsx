import UserItem from "./UserItem";

function UserList({ users }) {
  return (
    <table className="table-auto w-full border-collapse border-spacing-7">
      <thead className="">
        <tr className="text-left bg-gray-500">
          <th className="p-2">User id</th>
          <th className="p-2">Name</th>
          <th className="p-2">email</th>
          <th className="p-2">role</th>
          <th className="p-2">status</th>
          <th className="p-2">change status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserItem key={user._id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
