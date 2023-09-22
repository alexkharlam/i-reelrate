import { useSelector } from "react-redux";
import AllReviews from "../components/reviewLists/AllReviews";
import Button from "../components/ui/buttons/Button";
import { User } from "react-feather";
import useLoginLogout from "../hooks/useLoginLogout";
import { useTranslation } from "react-i18next";

function MyReviews() {
  const { t } = useTranslation();
  const auth = useSelector((state) => state.auth);
  const { handleLogout } = useLoginLogout();

  return (
    <>
      <div className="mb-4">
        <h3 className="text-1xl mb-2 font-semibold">{auth.user.name}</h3>
        <p className="mb-2">{auth.user.email}</p>
        <Button
          Icon={User}
          text={t("header.logoutButton")}
          onClick={handleLogout}
        />
      </div>
      <h3 className="text-1xl mb-2 font-semibold">{t("reviews.myReviews")}</h3>

      <AllReviews user={true} />
    </>
  );
}

export default MyReviews;
