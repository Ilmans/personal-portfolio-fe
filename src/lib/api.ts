import { notFound } from "next/navigation";
import { config } from "../app/helpers";

export const getArticles = async (page = 1, searchTerms = "") => {
  const res = await fetch(
    `${config.BACKEND_URL}/articles?search=` +
      encodeURIComponent(searchTerms) +
      "&page=" +
      page,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

export const getArticleBySlug = async (slug) => {
  const res = await fetch(`${config.BACKEND_URL}/article/` + slug);
  if (res.status === 404) {
    notFound();
  }
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${config.BACKEND_URL}/categories`, {
    cache: "default",
  });
  return res.json();
};

export const createArticle = (token: any, article: any) => {
  const url = `${config.BACKEND_URL}/articles/create`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(article),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err);
    });
};
export const deleteArticle = (token, articleId) => {
  const url = `${config.BACKEND_URL}/articles`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  return fetch(url, {
    method: "DELETE",
    headers,
    body: JSON.stringify({ articleId: articleId }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err);
    });
};
