import ImagePreview from "./ImagePreview";
import ImageDropZone from "./ImageDropZone";
import { useTranslation } from "react-i18next";
import { memo } from "react";

const ImageSelector = memo(function ImageSelector({ file, setFile }) {
    const { t } = useTranslation();

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles.length === 0) return;

        setFile(acceptedFiles[0]);
    };

    return (
        <div>
            <h5>{t("editReview.coverImage")}:</h5>
            <div className='container relative mx-auto h-7.5 rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0)]'>
                {!file && <ImageDropZone onDrop={handleDrop} />}
                {file && <ImagePreview file={file} setFile={setFile} />}
            </div>
        </div>
    );
});

export default ImageSelector;
