import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((module) => module.default),
  { ssr: false }
);

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState("");

  const handleEditorChange = (value: string | undefined) => {
    setMarkdown(value ?? "");
  };

  return (
    <div className="dark font-syne" data-color-mode="dark">
      <div className="wmde-markdown-var"> </div>
      <MDEditor
        className="mt-4"
        height={200}
        value={markdown}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default MarkdownEditor;
