import { notFound } from "next/navigation";
import { config } from "../app/helpers";
// import dotenv from "dotenv";


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
  const res = await fetch(`${config.BACKEND_URL}/article/` + slug, {
    cache: "no-store",
  });
  if (res.status === 404) {
    return 404;
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
export const updateArticle = (token: any, article: any) => {
  const url = `${config.BACKEND_URL}/articles`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  return fetch(url, {
    method: "PATCH",
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

export const getProjects = async (page = 1, searchTerms = "") => {
  const res = await fetch(
    `${config.BACKEND_URL}/projects?search=` +
      encodeURIComponent(searchTerms) +
      "&page=" +
      page,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

export const deleteProject = (token, projectId) => {
  const url = `${config.BACKEND_URL}/projects`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  return fetch(url, {
    method: "DELETE",
    headers,
    body: JSON.stringify({ id: projectId }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      throw new Error(err);
    });
};
