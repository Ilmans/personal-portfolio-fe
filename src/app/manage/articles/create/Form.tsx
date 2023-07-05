"use client";
import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input";
import MarkdownEditor from "./MarkdownEditor";
import Button from "../../../../components/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import * as yup from "yup";
import {
  createArticle,
  getCategories,
  updateArticle,
} from "../../../../lib/api";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const validationSchema = yup.object().shape({
  title: yup.string().min(15).max(100).required(),
  categoryId: yup.number().required(),
  body: yup.string().min(100).required(),
});
interface Article {
  title: string;
  categoryId: number;
  body: string;
  published: number;
}

interface Props {
  // if null = create, if not null = update
  dataArticle: any | null;
}
function Form({ dataArticle = null }: Props) {
  console.log(dataArticle);

  const token = useSelector<RootState>((state) => state.auth.value.user.token);
  const [errors, setErrors] = useState<any>({
    body: "",
    title: "",
    categoryId: "",
  });
  const [categories, setCategories] = useState(null);
  const [processing, setProcessing] = useState(false);
  // initial state for create article
  const initialState = {
    title: "",
    categoryId: null,
    body: "",
    published: 1,
  } as Article;

  const [article, setArticle] = useState(
    dataArticle === null ? initialState : dataArticle
  );

  // create article
  const create = (e) => {
    e.preventDefault();
    setErrors({ body: "", title: "", categoryId: "" });
    setProcessing(true);
    validationSchema
      .validate(article, {
        abortEarly: false,
      })
      .then(() => {
        createArticle(token, article)
          .then((res) => {
            if ("errors" in res) alert(res.errors);

            toast.success(
              "Article success created. You will be redirect to articles page in 2 second."
            );
            setTimeout(() => {
              // redirect("/manage/articles");
            }, 1000);

            setProcessing(false);
          })
          .catch((err) => {
            setProcessing(false);
            console.log(err);
          });
      })
      .catch((err) => {
        // Validasi gagal, tangkap kesalahan dan perbarui state errors
        const newErrors = {};
        err.inner.forEach((e) => {
          newErrors[e.path] = e.message;
        });

        setProcessing(false);
        setErrors(newErrors);
      });
  };
  //update article
  const update = (e) => {
    e.preventDefault();
    setErrors({ body: "", title: "", categoryId: "" });
    setProcessing(true);
    validationSchema
      .validate(article, {
        abortEarly: false,
      })
      .then(() => {
        updateArticle(token, article)
          .then((res) => {
            if ("errors" in res) alert(res.errors);
            toast.success("Article success updated. ");

           // redirect("/manage/articles");

            setProcessing(false);
          })
          .catch((err) => {
            setProcessing(false);
            console.log(err);
          });
      })
      .catch((err) => {
        // Validasi gagal, tangkap kesalahan dan perbarui state errors
        const newErrors = {};
        err.inner.forEach((e) => {
          newErrors[e.path] = e.message;
        });

        setProcessing(false);
        setErrors(newErrors);
      });
  };

  //handle change input
  const onChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  // get categories for select input
  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch(() => console.log());
  }, []);

  return (
    <div className="w-full p-4 border rounded-lg text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700">
      <div className="form-group">
        <label className="mb-2 text-zinc-300" htmlFor="">
          Title
        </label>

        <Input
          value={article.title}
          name={"title"}
          onChange={onChange}
          type="text"
        />
        {errors.title && (
          <div className="text-xs text-red-900">{errors.title}</div>
        )}
      </div>
      <div className="mt-4 form-group">
        <label className="my-2 text-zinc-300" htmlFor="">
          Category
        </label>
        <select
          onChange={onChange}
          value={article.categoryId}
          name="categoryId"
          className="w-full p-2 mt-2 text-sm bg-transparent border rounded-lg outline-none ring-1 ring-zinc-400 dark:ring-0 dark:border-zinc-700 focus:dark:ring-1 focus:dark:ring-teal-300">
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
        {errors.categoryId && (
          <div className="text-xs text-red-900">{errors.categoryId}</div>
        )}
      </div>

      <div className="mt-4 form-group">
        <label className="my-2 text-zinc-300" htmlFor="">
          Body
        </label>
        <MarkdownEditor article={article} setArticle={setArticle} />
        {errors.body && (
          <div className="text-xs text-red-900">{errors.body}</div>
        )}
      </div>
      <div className="mt-4 form-group">
        <label className="my-2 text-zinc-300" htmlFor="">
          Publish
        </label>
        <select
          onChange={onChange}
          name="published"
          value={article.published}
          className="w-full p-2 mt-2 text-sm bg-transparent border rounded-lg outline-none ring-1 ring-zinc-400 dark:ring-0 dark:border-zinc-700 focus:dark:ring-1 focus:dark:ring-teal-300">
          <option value={1} selected>
            Publish
          </option>
          <option value={0}>Draft</option>
        </select>
      </div>
      <div className="mt-4">
        <Button
          disabled={processing}
          text={`${processing ? "processing..." : "Save"}`}
          className="w-full"
          onClick={(e) => {
            if (dataArticle === null) {
              create(e);
            } else {
              update(e);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Form;
