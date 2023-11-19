import { useState } from "react";
import ScoreModal from "./ScoreModal";
import CreateScoreButton from "./CreateScoreButton";
import ChangeScoreButton from "./ChangeScoreButton";
import useUserScore from "./useUserScore";

import Stars from "./Stars";
import Button from "../../components/ui/Button";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

function UserRate({ reviewId }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { userScore, updateUserScore, deleteUserScore, isLoading } =
    useUserScore(reviewId);

  const toggleModal = () => setModalOpen((prev) => !prev);

  async function handleScore(value) {
    toggleModal();
    await updateUserScore(value);
  }

  async function handleDeleteScore() {
    deleteUserScore();
    toggleModal();
  }

  return (
    <div className="relative inline-block h-3">
      {userScore && (
        <ChangeScoreButton currentScore={userScore} openModal={toggleModal} />
      )}
      {!userScore && <CreateScoreButton openModal={toggleModal} />}
      {modalOpen && (
        <ScoreModal onClose={toggleModal}>
          {isLoading && <LoadingSpinner className="w-2 h-2" />}
          {!isLoading && (
            <>
              <Stars onScore={handleScore} />
              <Button
                className="block text-sm border-none hover:underline mt-2"
                onClick={handleDeleteScore}
              >
                Delete my score
              </Button>
            </>
          )}
        </ScoreModal>
      )}
    </div>
  );
}

export default UserRate;
