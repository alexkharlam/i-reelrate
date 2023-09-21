function ReviewAuthorIcon({ user }) {
  return (
    <div className="flex gap-2 items-center">
      <img
        className="w-3 h-3 rounded-full border-[1px] border-gray-400"
        src={user.photo}
        alt={user.name}
      />
      <p className="text-gray-500 dark:text-gray-300">{user.name}</p>
    </div>
  );
}

export default ReviewAuthorIcon;
