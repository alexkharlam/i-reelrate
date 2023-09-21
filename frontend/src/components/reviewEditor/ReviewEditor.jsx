import { useState } from "react";
import ImageSelector from "./imageSelector/ImageSelector";
import TitleInput from "./TitleInput";
import CategoriesCloud from "../ui/CategoriesCloud";
import MarkdownEditor from "./MarkdownEditor";
import Verdict from "./Verdict";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function ReviewEditor({ initialValues, onSubmit, isSubmitting }) {
  const { t } = useTranslation();

  const [mdValue, setMdValue] = useState(initialValues.reviewText);
  const [title, setTitle] = useState(initialValues.reviewTitle);
  const [subjectTitle, setSubjectTitle] = useState(initialValues.subjectTitle);
  const [imgFile, setImgFile] = useState(initialValues.coverImageUrl);
  const [category, setCategory] = useState(initialValues.category);
  const [verdict, setVerdict] = useState(initialValues.verdict);

  function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    if (!mdValue || !title || !subjectTitle || !category || !verdict)
      return toast.error(t("errors.provideFields"));

    const reviewFormData = new FormData();

    reviewFormData.append("category", category);
    reviewFormData.append("file", imgFile);
    reviewFormData.append("reviewText", mdValue);
    reviewFormData.append("subjectTitle", subjectTitle);
    reviewFormData.append("reviewTitle", title);
    reviewFormData.append("verdict", verdict);

    onSubmit(reviewFormData);
  }

  // TODO: Categories (options) should be fetched from the server
  // TODO: Tags should be fetched from the server (autocomplete tags on typing)

  return (
    <form onSubmit={handleSubmit}>
      <h4>1: {t("editReview.coverImage")}</h4>
      <ImageSelector uploadedImg={imgFile} setUploadedImg={setImgFile} />
      <h4>2: {t("editReview.reviewTitle")}</h4>
      <TitleInput value={title} setValue={setTitle} />
      <h4>3: {t("editReview.reviewSubject")}</h4>
      <TitleInput value={subjectTitle} setValue={setSubjectTitle} />
      <h4>4: {t("editReview.category")}</h4>
      <CategoriesCloud currentCategory={category} setCategory={setCategory} />
      <h4>5: {t("editReview.tags")}</h4>
      <input
        type="text"
        className="bg-transparent border-2 border-gray-600 p-2 font-[Montserrat] rounded-sm text-lg mb-4 w-full "
        placeholder="Start typing tag names..."
      />
      <h4>6: {t("editReview.reviewText")}</h4>
      <MarkdownEditor value={mdValue} setValue={setMdValue} />
      <h4>7: {t("editReview.verdict")}</h4>
      <Verdict value={verdict} setValue={setVerdict} />
      <button
        disabled={isSubmitting ? true : false}
        className="py-2 px-4 text-1xl bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg"
        type="submit"
      >
        {t("editReview.submit")}
      </button>
    </form>
  );
}

export default ReviewEditor;
