import { Edit, Heart, Search } from "react-feather";
import CtaItem from "./CtaItem";

function CtaBlock() {
  return (
    <div className="flex w-full gap-2">
      <CtaItem to="/reviews/create">
        <Edit />
        <span>Create new review</span>
      </CtaItem>
      <CtaItem className="bg-[#a61e4d]" to="/profile/favourites">
        <Heart />
        <span>Favourite reviews</span>
      </CtaItem>
      <CtaItem className="bg-[#2b8a3e]" to="/search">
        <Search />
        <span>Search reviews</span>
      </CtaItem>
    </div>
  );
}

export default CtaBlock;
