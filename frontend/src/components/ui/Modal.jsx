import { X } from "react-feather";

function Modal({ children, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed w-full h-full top-[0px] left-[0px] bg-gray-900 bg-opacity-50 z-30 flex items-center justify-center"
    >
      <div className="p-3 relative rounded-sm bg-gray-600 max-w-lg">
        {children}
        <button
          id="closeModalButton"
          className="absolute top-[0px] right-[0px] p-0.5"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
    </div>
  );
}

export default Modal;
