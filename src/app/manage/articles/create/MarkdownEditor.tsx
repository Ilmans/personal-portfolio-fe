import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((module) => module.default),
  { ssr: false }
);

interface articleRequest {
  title: string;
  categoryId: number;
  body: string;
  published: number;
}
interface Props {
  article: articleRequest;
  setArticle: (article: articleRequest) => void;
}

const MarkdownEditor: React.FC<Props> = ({ article, setArticle }: Props) => {
  const [md, setMd] = useState("");
  const handleEditorChange = (value: string | undefined) => {
    setMd(value);
  };

  useEffect(() => {
    setArticle({ ...article, body: md });
  }, [md]);

  return (
    <div className="dark font-syne" data-color-mode="dark">
      <div className="wmde-markdown-var"> </div>
      <MDEditor
        className="mt-4"
        height={400}
        value={md}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default MarkdownEditor;
