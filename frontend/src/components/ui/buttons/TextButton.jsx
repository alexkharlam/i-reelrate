function TextButton({ onClick, text }) {
    return (
        <button
            className='border-[3px] transition-all duration-100 border-primary-600 hover:bg-primary-600 hover:text-white text-md font-bold px-2 py-1 rounded-sm'
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default TextButton;
