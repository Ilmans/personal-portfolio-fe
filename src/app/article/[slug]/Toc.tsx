"use client";
import { useEffect, useState } from "react";

interface Heading {
  text: string;
}

interface TableOfContentsProps {
  markdownContent: string;
}

const Toc: React.FC<TableOfContentsProps> = ({ markdownContent }) => {
  const [toc, setToc] = useState<Heading[]>([]);

  useEffect(() => {
    const headings: Heading[] = [];

    const lines = markdownContent.split("\n");
    lines.forEach((line) => {
      if (line.startsWith("## ")) {
        const headingText = line.replace("## ", "");

        headings.push({
          text: headingText,
        });
      }
    });

    setToc(headings);
  }, [markdownContent]);

  const handleHeadingClick = (text: string) => {
    const headingElements = document.querySelectorAll("h2");
    headingElements.forEach((headingElement) => {
      if (headingElement.textContent === text) {
        headingElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  return (
    <div className="p-4 mb-4 border rounded-lg border-zinc-500">
      <div className="flex items-center gap-2 mb-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-zinc-400">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>

        <h2>Table Of Contents</h2>
      </div>
      <ol className="space-y-2">
        {toc.map((heading, index) => (
          <li
            className="text-sm text-teal-300 underline cursor-pointer"
            key={index}>
            <a
              className="flex items-center gap-2"
              onClick={() => handleHeadingClick(heading.text)}>
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Toc;
