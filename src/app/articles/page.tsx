"use client";
import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../components/SocialIcon";

import PopularArticle from "../../components/PopularArticle";
import List from "./List";
import SearchBar from "./SearchBar";

const getArticles = async (searchTerms = "") => {
  const res = await fetch(
    "http://localhost:3120/articles?search=" + searchTerms,
    { cache: "no-store" }
  );
  return res.json();
};

const page = async () => {
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   getArticles().then((data) => setArticles(data.data));
  // }, []);

  return (
    <div className="flex gap-4">
      <div className="w-4/5">
        <Jumbotron
          title={
            "Write about my opinion about computer program, code, design, and technique"
          }
          description="All of my long-form thoughts on programming, design, and more, collected in chronological order."
        />
        <SearchBar />

        {/* <List articles={[]} setArticles={() => {}} /> */}
      </div>
      <div className="w-1/5">
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
  );
};

export default page;
