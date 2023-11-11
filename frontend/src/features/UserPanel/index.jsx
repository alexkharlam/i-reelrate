import UserInfo from "./UserInfo";
import UserRemoveButton from "./UserRemoveButton";
import TextButton from "../../components/ui/buttons/TextButton";
import { useLoginLogout } from "../Auth";
import { useTranslation } from "react-i18next";

function UserPanel() {
  const { t } = useTranslation();
  const { handleLogout } = useLoginLogout();

  return (
    <div className="mb-3.5 border-2 rounded-sm border-gray-600 overflow-hidden">
      <UserInfo />
      <div className="px-2 py-3 flex justify-end gap-3 bg-gray-600 bg-opacity-20">
        <TextButton onClick={handleLogout}>
          {t("userPanel.logoutButton")}
        </TextButton>
        <UserRemoveButton />
      </div>
    </div>
  );
}

export default UserPanel;
