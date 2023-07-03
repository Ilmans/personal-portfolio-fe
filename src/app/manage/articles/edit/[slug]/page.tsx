import React, { Fragment } from "react";
import { getArticleBySlug } from "../../../../../lib/api";
import { notFound } from "next/navigation";
import HeadSection from "../../../../../components/Dashboard/HeadSection";
import Form from "../../create/Form";

async function page({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  if (article === 404) notFound();
  return (
    <Fragment>
      <HeadSection
        right={<></>}
        title={"Edit Article"}
        desc={`Now you editing article : ${article.data.title}`}
      />
      <div className="mt-8">
        <Form
          dataArticle={{
            id: article.data.id,
            title: article.data.title,
            body: article.data.body,
            categoryId: article.data.categoryId,
            published: article.data.published ? 1 : 0,
          }}
        />
      </div>
    </Fragment>
  );
}

export default page;
