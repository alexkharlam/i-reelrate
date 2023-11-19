import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useTranslation } from "react-i18next";

function UserInfo() {
  const { t } = useTranslation();
  const { makeRequest, data, isLoading, error } = useApi();
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
    };

    return (
      <ul className="">
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

  if (isLoading) return <LoadingSpinner className="mx-auto my-2" />;

  if (error) return <p className="p-3 text-center">{error}</p>;
}

export default UserInfo;
