import { X } from "react-feather";

function ScoreModal({ children, onClose }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[0px] -translate-y-full flex flex-col items-center">
      <div className="rounded-lg relative bg-gray-600 px-3 py-1.5">
        {children}
        <button
          className="absolute rounded-full bg-[#ffa8a8] hover:bg-[#ff8787] top-[-2px] right-[-2px] transition-all duration-200 hover:scale-105"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>
      <div className="bg-gray-600 w-2 h-1 rounded-b-full rounded" />
    </div>
  );
}

export default ScoreModal;
