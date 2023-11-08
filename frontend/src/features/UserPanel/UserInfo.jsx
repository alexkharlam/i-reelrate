import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import LoadingSpinner from "../../components/ui/spinners/LoadingSpinner";
import UserRemover from "./UserRemover";
import { useTranslation } from "react-i18next";
import TextButton from "../../components/ui/buttons/TextButton";
import { useLoginLogout } from "../Auth";

function UserInfo() {
  const { t } = useTranslation();
  const { handleLogout } = useLoginLogout();
  const { makeRequest, data } = useApi();
  const user = data?.user || null;

  useEffect(() => {
    makeRequest({ url: `/api/user` });
  }, [makeRequest]);

  if (user) {
    const userViewData = {
      name: user.name,
      email: user.email,
      role: user.role,
      totalReviews: user.reviewsQuantity,
      logout: (
        <TextButton onClick={handleLogout}>
          {t("userPanel.logoutButton")}
        </TextButton>
      ),
      deleteAccountButton: <UserRemover />,
    };

    return (
      <ul className="border-2 rounded-sm mb-3 border-gray-600 overflow-hidden">
        {Object.keys(userViewData).map((key) => (
          <li
            className="flex justify-between p-2.5 bg-opacity-40 bg-gray-600 odd:bg-opacity-25"
            key={key}
          >
            <p>{t(`userPanel.${key}`)}</p>
            <p>{userViewData[key]}</p>
          </li>
        ))}
      </ul>
    );
  }

  return <LoadingSpinner className="mx-auto my-2" />;
}

export default UserInfo;
