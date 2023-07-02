import Link from "next/link";
import React from "react";
import Input from "../Input";

interface Props {
  title: string;
  desc: string;
  right: any;
}
function HeadSection({ title, desc, right = false }: Props) {
  return (
    <div className="flex items-center justify-between ">
      <div className="w-1/2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
      {right && right}
    </div>
  );
}

export default HeadSection;
