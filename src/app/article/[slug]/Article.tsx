"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import thema from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { ClipBoardIcon } from "../../../components/Icon";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("javascript", javascript);

function Article({ markdown }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    toast.success("Text copied");
  };
  return (
    <ReactMarkdown
      className="space-y-8 text-sm dark:text-zinc-300 markdown"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <div>
              <div className="z-50 flex items-center justify-between p-1 pb-5 -mb-6 text-xs rounded-lg dark:text-zinc-400 dark:bg-zinc-700">
                <p>{match ? match[1] : "Bash"}</p>
                <CopyToClipboard text={children} onCopy={handleCopy}>
                  <ClipBoardIcon className="w-4 h-4 hover:text-white " />
                </CopyToClipboard>
              </div>
              <SyntaxHighlighter
                style={thema}
                PreTag="div"
                className="codeStyle z-1"
                showLineNumbers={true}
                useInlineStyles={true}
                language={match[1]}
                children={String(children).replace(/\n$/, "")}
                {...props}
              />
            </div>
          ) : (
            <code className={className ? className : ""} {...props}>
              {children}
            </code>
          );
        },
      }}>
      {markdown}
    </ReactMarkdown>
  );
}

export default Article;
