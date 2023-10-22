import { X } from "react-feather";

function CloseButton({ onClose }) {
    return (
        <button
            className='absolute rounded-full bg-[#ffa8a8] hover:bg-[#ff8787] top-[-2px] right-[-2px] transition-all duration-200 hover:scale-105'
            onClick={onClose}
        >
            <X size={18} />
        </button>
    );
}

export default CloseButton;
