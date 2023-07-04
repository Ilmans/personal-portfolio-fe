import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((module) => module.default),
  { ssr: false }
);

interface projectRequest {
  name: string;
  stacks: string;
  description: string;
  image: any;
  url: string;
}
interface Props {
  project: projectRequest;
  setProject: (project: projectRequest) => void;
}

const MarkdownForm: React.FC<Props> = ({ project, setProject }: Props) => {
  const [md, setMd] = useState(project.description);
  const handleEditorChange = (value: string | undefined) => {
    setMd(value);
  };

  useEffect(() => {
    setProject({ ...project, description: md });
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

export default MarkdownForm;
