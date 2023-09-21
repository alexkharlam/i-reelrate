import SimpleMdeReact from "react-simplemde-editor";
import { useMemo } from "react";

function MarkdownEditor({ value, setValue }) {
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
    <SimpleMdeReact
      value={value}
      options={autofocusNoSpellcheckerOptions}
      onChange={(val) => setValue(val)}
    />
  );
}

export default MarkdownEditor;
