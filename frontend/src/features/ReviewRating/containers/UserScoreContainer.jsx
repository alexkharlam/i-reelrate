import { useContext, useEffect, useState } from "react";
import { UserScoreContext } from "../context/UserScoreContext";
import CreateScoreButton from "../components/UserScore/CreateScoreButton";
import ScoreInputModal from "../components/ScoreInputModal";
import ChangeScoreButton from "../components/UserScore/ChangeScoreButton";

function UserScoreContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const { userScore, getUserScore } = useContext(UserScoreContext);

  useEffect(() => {
    getUserScore();
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="relative inline-block h-3">
      {userScore && <ChangeScoreButton openModal={handleOpenModal} />}
      {!userScore && <CreateScoreButton openModal={handleOpenModal} />}
      {modalOpen && <ScoreInputModal closeModal={handleCloseModal} />}
    </div>
  );
}

export default UserScoreContainer;
