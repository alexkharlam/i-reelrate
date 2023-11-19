import { Edit, Heart, Search } from "react-feather";
import LinkItem from "./LinkItem";
import { useTranslation } from "react-i18next";

function MainLinksBlock({ className = "" }) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h3 className="text-2xl font-semibold">{t("ctaLinksBlock.title")}</h3>
      <div className="flex w-full gap-2">
        <LinkItem className="bg-primary" to="/reviews/create">
          <Edit />
          <span>{t("ctaLinksBlock.create")}</span>
        </LinkItem>
        <LinkItem className="bg-[#a61e4d]" to="/profile/favourites">
          <Heart />
          <span>{t("ctaLinksBlock.favourites")}</span>
        </LinkItem>
        <LinkItem className="bg-[#2b8a3e]" to="/search">
          <Search />
          <span>{t("ctaLinksBlock.search")}</span>
        </LinkItem>
      </div>
    </div>
  );
}

export default MainLinksBlock;
