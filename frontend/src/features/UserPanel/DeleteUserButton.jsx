import { useState } from "react";
import Button from "../../components/ui/buttons/TextButton";
import useHttp from "../../hooks/useHttp";
import { useLoginLogout } from "../Auth";
import Modal from "../../components/ui/Modal";
import TextButton from "../../components/ui/buttons/TextButton";

function DeleteUser() {
  const [confirming, setConfirming] = useState(false);
  const { makeRequest } = useHttp();
  const { handleLogout } = useLoginLogout();

  async function deleteUser() {
    await makeRequest({
      url: "/api/user/deleteMe",
      options: { method: "delete" },
    });

    handleLogout();
  }

  return (
    <>
      <Button onClick={() => setConfirming(true)} className="">
        Delete my account
      </Button>

      {confirming && (
        <Modal onClose={() => setConfirming(false)}>
          <div className="flex flex-col gap-2 mb-3">
            <p className="mb-2 text-1xl font-semibold">
              Are you sure you want to delete your account?
            </p>
            <p>
              This action will remove all your reviews, likes, comments and
              rates. Account will be permanently deleted from the database{" "}
            </p>
            <p>You can register again with the same email</p>
            <p className="text-[red] self-center mb-1">
              Note! This is a destructive action
            </p>
            <TextButton className="self-center" onClick={deleteUser}>
              Confirm
            </TextButton>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteUser;
