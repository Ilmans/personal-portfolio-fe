"use client";
import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input";
import { config } from "../../../helpers";
import MarkdownEditor from "./MarkdownEditor";
import Button from "../../../../components/Button";

const getCategories = async () => {
  const res = await fetch(`${config.BACKEND_URL}/categories`, {
    cache: "default",
  });
  return res.json();
};
function Form() {
  const [categories, setCategories] = useState(null);

  const [fatalError, setFatalError] = useState(false);
  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch(() => setFatalError(true));
  }, []);
  return (
    <div className="w-full p-4 border rounded-lg text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
      <div className="form-group">
        <label className="mb-2 text-zinc-300" htmlFor="">
          Title
        </label>
        <Input type="text" />
      </div>
      <div className="mt-4 form-group">
        <label className="my-2 text-zinc-300" htmlFor="">
          Category
        </label>
        <select className="w-full p-2 mt-2 text-sm bg-transparent border rounded-lg outline-none ring-1 ring-zinc-400 dark:ring-0 dark:border-zinc-700 focus:dark:ring-1 focus:dark:ring-teal-300">
          <option value="" disabled>
            Select Category
          </option>
          {categories !== null &&
            categories.map((cat, i) => (
              <option key={i} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>
      </div>

      <div className="mt-4 form-group">
        <label className="my-2 text-zinc-300" htmlFor="">
          Body
        </label>
        <MarkdownEditor />
      </div>
      <div className="mt-4 form-group">
        <label className="my-2 text-zinc-300" htmlFor="">
          Publish
        </label>
        <select className="w-full p-2 mt-2 text-sm bg-transparent border rounded-lg outline-none ring-1 ring-zinc-400 dark:ring-0 dark:border-zinc-700 focus:dark:ring-1 focus:dark:ring-teal-300">
          <option value="1" selected>
            Publish
          </option>
          <option value="0">Draft</option>
        </select>
      </div>
      <div className="mt-4">
        <Button text={"Save"} className="w-full" />
      </div>
    </div>
  );
}

export default Form;
