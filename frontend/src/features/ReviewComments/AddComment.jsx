import { useContext, useState } from "react";
import Button from "../../components/ui/buttons/TextButton";
import { CommentsContext } from "./CommentsContext";
import { useTranslation } from "react-i18next";

function AddComment() {
  const [value, setValue] = useState("");
  const { t } = useTranslation();
  const { createComment } = useContext(CommentsContext);

  async function handleClick() {
    setValue("");
    createComment(value);
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
      <Button onClick={handleClick} text={t("comments.submitComment")} />
    </>
  );
}

export default AddComment;
