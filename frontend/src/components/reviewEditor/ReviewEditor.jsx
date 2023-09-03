import SimpleMdeReact from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

function ReviewEditor() {
  const [value, setValue] = useState("My ReelRate review text");

  function onChange(val) {
    setValue(val);
  }

  return (
    <>
      <SimpleMdeReact value={value} onChange={onChange} />

      <ReactMarkdown>{value}</ReactMarkdown>
    </>
  );
}

export default ReviewEditor;
