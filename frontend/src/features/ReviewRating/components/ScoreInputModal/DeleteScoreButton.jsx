function DeleteScoreButton({ onDelete }) {
    return (
        <button
            onClick={onDelete}
            className='text-sm block mx-auto mt-2 text-gray-300 hover:text-gray-200 hover:underline'
        >
            Delete my rate
        </button>
    );
}

export default DeleteScoreButton;
