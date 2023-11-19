import { useState } from "react";
import Button from "../../components/ui/Button";
import { useTranslation } from "react-i18next";
import { FilePlus as FilePlusIcon } from "react-feather";

function AddComment({ onAddComment }) {
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  async function handleClick() {
    onAddComment(value);
    setValue("");
  }

  return (
    <>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-transparent resize-none border-2 border-gray-500 p-1.5 text-lg rounded-sm w-full max-w-2xl block mb-2"
        maxLength={100}
        placeholder={t("comments.placeholder")}
      />
      <Button StartIcon={FilePlusIcon} onClick={handleClick}>
        {t("comments.submitComment")}
      </Button>
    </>
  );
}

export default AddComment;
