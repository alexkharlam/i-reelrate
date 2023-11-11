import { X } from "react-feather";

function ImagePreview({ file, setFile }) {
    function handleReset() {
        setFile(null);
    }

    return (
        <>
            <img
                src={URL.createObjectURL(file)}
                alt='Cover preview'
                className='w-full h-full object-cover object-center scale-105'
            />
            <button
                onClick={handleReset}
                className='bg-gray-900 m-2 bg-opacity-75 text-white p-1 rounded-full absolute top-[0px] right-[0px] hover:scale-110 transition-all'
            >
                {<X />}
            </button>
        </>
    );
}

export default ImagePreview;
