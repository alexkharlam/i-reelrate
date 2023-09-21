import { useTranslation } from "react-i18next";

function LogoutButton() {
  const { t } = useTranslation();

  async function handleLogout() {
    localStorage.removeItem("user");
    try {
      const res = await fetch("/auth/logout");
      if (res.ok) location.assign("/");
    } catch (err) {
      console.log("Error logging out user");
    }
  }
  return (
    <button
      className="px-2 py-1 font-bold bg-primary-700 text-white rounded-sm"
      onClick={handleLogout}
    >
      {t("header.logoutButton")}
    </button>
  );
}

export default LogoutButton;
