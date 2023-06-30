"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import thema from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus"
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import php from "react-syntax-highlighter/dist/cjs/languages/prism/php";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("php", php);

function Article({ article }) {
  return (
    <ReactMarkdown
      className="space-y-8 text-sm dark:text-zinc-300 markdown"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              style={thema}
              PreTag="div"
              className="codeStyle "
              showLineNumbers={true}
              useInlineStyles={true}
              language={match[1]}
              children={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            <code className={className ? className : ""} {...props}>
              {children}
            </code>
          );
        },
      }}>
      {article.data.body}
    </ReactMarkdown>
  );
}

export default Article;
