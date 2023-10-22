function TextIconButton({ Icon, onClick, text }) {
    return (
        <button
            className='gap-1.5 border-[3px] transition-all duration-100 border-primary-600 hover:bg-primary-600 hover:text-white flex text-md font-bold px-2 py-1 rounded-sm items-center'
            onClick={onClick}
        >
            {Icon && <Icon size={20} />}
            {text}
        </button>
    );
}

export default TextIconButton;
