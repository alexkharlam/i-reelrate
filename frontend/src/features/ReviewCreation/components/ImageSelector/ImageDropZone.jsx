import { useDropzone } from "react-dropzone";

const acceptFiles = {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
    "image/webp": [".webp"],
};

function ImageDropZone({ onDrop }) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: acceptFiles,
    });

    return (
        <div
            className={`h-full flex items-center justify-center relative border-gray-600 border-2 rounded-lg ${
                isDragActive && "!border-primary-600 bg-gray-400 bg-opacity-5"
            }`}
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p className='text-1xl font-bold text-center'>
                    Drop image here
                </p>
            ) : (
                <p className='p-1'>
                    Drag n drop cover image here, or click to select files
                </p>
            )}
        </div>
    );
}

export default ImageDropZone;
