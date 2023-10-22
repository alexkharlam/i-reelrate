import SimpleMdeReact from "react-simplemde-editor";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

const MarkdownEditor = memo(function MarkdownEditor({ text, setText }) {
    const { t } = useTranslation();

    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            spellChecker: false,
            renderingConfig: {
                singleLineBreaks: false,
            },
            placeholder: "Start typing your review",
        };
    }, []);

    return (
        <div>
            <h5>{t("editReview.text")}</h5>
            <SimpleMdeReact
                value={text}
                options={autofocusNoSpellcheckerOptions}
                onChange={(val) => setText(val)}
            />
        </div>
    );
});

export default MarkdownEditor;
