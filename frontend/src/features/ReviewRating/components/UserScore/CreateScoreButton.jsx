function CreateScoreButton({ openModal }) {
    return (
        <button
            onClick={openModal}
            className='dark:bg-gray-600 dark:bg-opacity-50 dark:hover:bg-opacity-60  text-white rounded-lg py-1 px-3.5 hover:scale-[102%] transition-all duration-200 font-semibold text-sm flex gap-2 justify-between items-center'
        >
            Rate this review
        </button>
    );
}

export default CreateScoreButton;
