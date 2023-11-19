import { Heart, Home, Plus, Search, User } from "react-feather";
import TextIconLink from "../ui/TextIconLink";
import { useSelector } from "react-redux";

function MobileNavigation() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="z-50 flex justify-around gap-1 items-center fixed bottom-[0px] left-[0px] w-full h-4 bg-gray-1100 bg-opacity-95">
      <TextIconLink StartIcon={Home} to="/" iconSize={32} />
      <TextIconLink StartIcon={Search} to="/search" iconSize={32} />
      {isAuthenticated && (
        <>
          <TextIconLink StartIcon={Plus} to="/reviews/create" iconSize={32} />
          <TextIconLink StartIcon={User} to="/profile/reviews" iconSize={32} />
          <TextIconLink
            StartIcon={Heart}
            to="/profile/favourites"
            iconSize={32}
          />
        </>
      )}
      {!isAuthenticated && (
        <TextIconLink StartIcon={User} to="/login" iconSize={32} />
      )}
    </div>
  );
}

export default MobileNavigation;
