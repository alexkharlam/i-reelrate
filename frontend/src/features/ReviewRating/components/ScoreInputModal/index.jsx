import { useContext } from "react";
import { RatingContext } from "../../context/RatingContext";
import { UserScoreContext } from "../../context/UserScoreContext";
import LoadingSpinner from "../../../../components/ui/spinners/LoadingSpinner";
import CloseButton from "./CloseButton";
import OptionsList from "./OptionsList";
import DeleteScoreButton from "./DeleteScoreButton";

function ScoreInputModal({ closeModal }) {
    const { getRating } = useContext(RatingContext);

    const { updateUserScore, isLoading, deleteUserScore } =
        useContext(UserScoreContext);

    async function handleScore(value) {
        await updateUserScore(value);

        closeModal();
        await getRating();
    }

    async function handleDeleteScore() {
        await deleteUserScore();
        closeModal();
        await getRating();
    }

    return (
        <div className='absolute left-1/2 -translate-x-1/2 top-[0px] -translate-y-full flex flex-col items-center'>
            <div className='rounded-lg relative bg-gray-600 flex gap-1 px-3 py-1.5'>
                {!isLoading && (
                    <div>
                        <OptionsList onScore={handleScore} />
                        <CloseButton onClose={closeModal} />
                        <DeleteScoreButton onDelete={handleDeleteScore} />
                    </div>
                )}

                {isLoading && <LoadingSpinner className='w-2 h-2' />}
            </div>
            <div className='bg-gray-600 w-2 h-1 rounded-b-full rounded' />
        </div>
    );
}

export default ScoreInputModal;
