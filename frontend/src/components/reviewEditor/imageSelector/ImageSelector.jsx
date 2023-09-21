import { useCallback } from "react";
import ImagePreview from "./ImagePreview";
import ImageDropZone from "./ImageDropZone";

function ImageSelector({ uploadedImg, setUploadedImg }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      setUploadedImg(acceptedFiles[0]);
    },
    [setUploadedImg],
  );

  return (
    <div className="container relative mx-auto mt-3 h-7.5 rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0)] mb-4">
      {!uploadedImg && <ImageDropZone onDrop={onDrop} />}
      {uploadedImg && (
        <ImagePreview
          uploadedImg={uploadedImg}
          setUploadedImg={setUploadedImg}
        />
      )}
    </div>
  );
}

export default ImageSelector;
