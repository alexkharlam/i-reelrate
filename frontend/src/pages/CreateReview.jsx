import ReviewEditor from "../components/reviewEditor/ReviewEditor";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import LoadingModal from "../components/ui/LoadingModal";
import { useNavigate } from "react-router-dom";

function CreateReview() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    reviewText: "",
    reviewTitle: "",
    subjectTitle: "",
    coverImageUrl: null,
    category: "",
    verdict: 10,
  };

  async function handleSubmit(reviewFormData) {
    setIsSubmitting(true);
    try {
      const response = await axios({
        method: "post",
        url: "/api/reviews",
        data: reviewFormData,
      });
      console.log(response);

      toast.success("Your review successfully created!", { toastId: "J" });
      setIsSubmitting(false);
      navigate(`/reviews/${response.data.review._id}`);
    } catch (err) {
      setIsSubmitting(false);
      toast.error(
        err?.response?.data?.message || "Something went wrong, try again!",
      );
    }
  }

  return (
    <>
      {isSubmitting && <LoadingModal message="Creating review" />}
      {!isSubmitting && (
        <ReviewEditor
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          initialValues={initialValues}
        />
      )}
    </>
  );
}

export default CreateReview;
