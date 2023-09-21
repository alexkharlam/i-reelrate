function ReviewAuthorIcon({ user }) {
  return (
    <div className="flex gap-2 items-center">
      <img className="w-3 h-3 rounded-full" src={user.photo} alt={user.name} />
      <p className="">{user.name}</p>
    </div>
  );
}

export default ReviewAuthorIcon;
