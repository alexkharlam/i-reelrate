function Author({ review }) {
  const { user } = review;

  return (
    <div className="flex gap-2 mb-2.5 text-secondary font-bold items-center">
      <img
        className="w-3 h-3 rounded-full border-[1px] border-gray-400"
        src={user.photo}
        alt={user.name}
      />
      <p className="text-tertiary">{user.name}</p>
    </div>
  );
}

export default Author;
