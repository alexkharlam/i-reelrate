import useCreateReview from "./hooks/useCreateReview";
import ImageSelector from "./components/ImageSelector";
import TitleInput from "./components/TitleInput";
import MarkdownEditor from "./components/MarkdownEditor";
import ProductInput from "./components/ProductInput";
import CategoryInput from "./components/CategoryInput";
import Verdict from "./components/Verdict";
import createFormData from "./utils/createFormData";
import SubmitButton from "./components/SubmitButton";
import useEditorFields from "./hooks/useEditorFields";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import CenteredText from "../../components/ui/messages/CenteredText";
import ResetButton from "./components/ResetButton";
import Divider from "../../components/ui/Divider";

function ReviewCreator() {
  const { review, resetReview } = useEditorFields();
  const { submitReview, isLoading, error } = useCreateReview();

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoading) return;

    submitReview(createFormData(review));
  }

  return (
    <>
      <h1>Create review</h1>
      <Divider className="mb-3.5" />
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <TitleInput value={review.title} setValue={review.setTitle} />

        <ImageSelector file={review.file} setFile={review.setFile} />
        <ProductInput value={review.product} setValue={review.setProduct} />
        <CategoryInput
          category={review.category}
          setCategory={review.setCategory}
        />
        <MarkdownEditor text={review.text} setText={review.setText} />
        <Verdict value={review.verdict} setValue={review.setVerdict} />
        {error && <CenteredText className="mb-3 text-sm">{error}</CenteredText>}
        {!isLoading && <SubmitButton />}
        {isLoading && <LoadingSpinner />}
        <ResetButton onReset={resetReview} />
      </form>
    </>
  );
}

export default ReviewCreator;
