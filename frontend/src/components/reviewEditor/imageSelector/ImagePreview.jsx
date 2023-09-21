import { X } from "react-feather";

function ImagePreview({ uploadedImg, setUploadedImg }) {
  return (
    <>
      <img
        src={URL.createObjectURL(uploadedImg)}
        alt="Cover preview"
        className="w-full h-full object-cover object-center scale-105"
      />
      <button
        onClick={() => {
          setUploadedImg(null);
        }}
        className="bg-gray-900 m-2 bg-opacity-75 text-white p-1 rounded-full absolute top-[0px] right-[0px] hover:scale-110 transition-all"
      >
        {<X />}
      </button>
    </>
  );
}

export default ImagePreview;
