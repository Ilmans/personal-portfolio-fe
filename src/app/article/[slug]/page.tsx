import React from "react";
import Article from "./Article";
import { formateDateForDisplay } from "../../helpers";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../../components/SocialIcon";
import Toc from "./Toc";
import PopularArticle from "../../../components/PopularArticle";
import Wrapper from "../../../components/Wrapper";
import Back from "./Back";
import { Metadata, ResolvingMetadata } from "next";
import { LoveIcon } from "../../../components/Icon";
import { getArticleBySlug } from "../../../lib/api";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (article !== 404) {
    return {
      title: article.data.title,
      description: article.data.body.slice(20),
    };
  }
  return { title: "Article not found" };
}

async function page({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (article === 404) notFound();

  return (
    <>
      <div className="gap-4 lg:flex">
        <div className="lg:w-4/5">
          <div className="gap-6 lg:flex">
            <div className="hidden w-1/5 lg:block">
              <Back />
            </div>

            <div className="lg:px-8 lg:w-4/5 font-poppins">
              <div className="-space-y-4">
                <p className="pb-4 text-sm text-teal-300 uppercase font-semibol">
                  {article.data.category.name}
                </p>
                <h1 className="text-4xl font-bold text-4">
                  {article.data.title}
                </h1>
              </div>
              <div className="py-4 mb-12 text-xs border-b border-zinc-600">
                By{" "}
                <span className="font-bold">
                  {article.data.author.full_name}
                </span>{" "}
                * Updated : {formateDateForDisplay(article.data.updatedAt)}
              </div>
              {/* Table Of Contents */}
              <div>
                <Toc markdownContent={article.data.body} />
              </div>
              {/*  */}
              <Article markdown={article.data.body} />
              <hr className="mt-12 bg-zinc-500 text-zinc-500" />
              <div className="p-8 mt-12 border rounded-lg border-zinc-400">
                <div className="flex items-center gap-2 text-lg font-semibold font-syne">
                  <h2 className="">Did you enjoy this article?</h2>
                  <LoveIcon className="w-4 h-4" fill="white" />
                </div>
                <div className="flex gap-4">
                  <a className="text-sm text-teal-300 underline ">
                    Buy me a coffee
                  </a>
                  <a className="text-sm text-teal-300 underline">
                    <span>
                      <TwitterIcon className="inline w-4 h-4 mx-1" />
                    </span>
                    Share to twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/5">
          <Wrapper>
            <h2>Popular Articles</h2>
            <PopularArticle />
          </Wrapper>
          <Wrapper className="mt-6 text-sm">
            <h2 className="text-lg">Social Media</h2>
            <button className="flex items-center gap-2 mt-4">
              <InstagramIcon className="w-6 h-6" /> Follow on Instagram
            </button>
            <button className="flex items-center gap-2 mt-4">
              <TwitterIcon className="w-6 h-6" /> Follow on Instagram
            </button>
            <button className="flex items-center gap-2 mt-4 ">
              <FacebookIcon className="w-6 h-6" /> Follow on Facebook
            </button>
          </Wrapper>
        </div>
      </div>
    </>
  );
}

export default page;
