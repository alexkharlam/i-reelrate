import { useState } from "react";
import validCategories from "../../../../config/categories";

export default function useEditorFields() {
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [product, setProduct] = useState("");
    const [category, setCategory] = useState(validCategories[0]);
    const [verdict, setVerdict] = useState(10);

    function resetReview() {
        setText("");
        setFile(null);
        setTitle("");
        setProduct("");
        setCategory("");
        setVerdict(10);
    }

    return {
        review: {
            text,
            setText,
            file,
            setFile,
            title,
            setTitle,
            product,
            setProduct,
            category,
            setCategory,
            verdict,
            setVerdict,
        },
        resetReview,
    };
}
