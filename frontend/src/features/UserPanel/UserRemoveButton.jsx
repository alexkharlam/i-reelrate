import { useState } from "react";
import Button from "../../components/ui/Button";
import useDeleteUser from "./useDeleteUser";
import Modal from "../../components/ui/Modal";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useTranslation } from "react-i18next";
import { Trash as TrashIcon } from "react-feather";

function UserRemoveButton() {
  const { t } = useTranslation();
  const { deleteUser, isLoading, error } = useDeleteUser();
  const [confirming, setConfirming] = useState(false);

  function toggleConfirming() {
    setConfirming((prev) => !prev);
  }

  return (
    <>
      <Button StartIcon={TrashIcon} onClick={toggleConfirming} isRed={true}>
        {t("userPanel.deleteAccountButton")}
      </Button>

      {confirming && (
        <Modal onClose={toggleConfirming}>
          <div className="flex flex-col gap-2 mb-3">
            <p className="mb-2">
              <b>{t("userPanel.deleteWarning1")}</b>
              <br />
              <br />
              {t("userPanel.deleteWarning2")}
              <br />
              <br /> {t("userPanel.deleteWarning3")}
            </p>
            <p className="text-[red] self-center mb-1">
              {t("userPanel.deleteWarning4")}
            </p>
          </div>
          {isLoading && <LoadingSpinner className="mx-auto" />}
          {error && <p>Error deleting user. Please try again!</p>}
          <Button
            className="self-center w-full hover:bg-opacity-80 hover:bg-red bg-red border-red hover:border-red"
            onClick={deleteUser}
          >
            {t("userPanel.deleteAccountButton")}
          </Button>
        </Modal>
      )}
    </>
  );
}

export default UserRemoveButton;
