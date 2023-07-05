import React, { Suspense } from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../components/SocialIcon";

import PopularArticle from "../../components/PopularArticle";
import PageArticles from "./PageArticles";

function page() {
  return (
    <div className="gap-4 lg:flex">
      <div className="lg:w-4/5">
        <Jumbotron
          title={
            "Write about my opinion about computer program, code, design, and technique"
          }
          description="All of my long-form thoughts on programming, design, and more, collected in chronological order."
        />
        <PageArticles />
      </div>
      <div className="lg:w-1/5">
        <Wrapper>
          <h2>Popular Articles</h2>
          <Suspense
            fallback={
              <ul>
                {new Array(5).fill("a").map((i) => (
                  <li
                    key={i}
                    className="h-2 my-2 rounded-lg animate-pulse bg-zinc-400 "></li>
                ))}
              </ul>
            }>
            <PopularArticle />
          </Suspense>
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
  );
}

export default page;
