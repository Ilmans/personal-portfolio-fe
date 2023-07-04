import React from "react";
import Jumbotron from "../../components/Jumbotron";
import PagePortfolio from "./PagePortfolio";

function page() {
  return (
    <div className="lg:w-5/7 ">
      <Jumbotron
        title={" Things I’ve made trying to put my dent in the universe. "}
        description="I've worked on a ton of small projects over the years, but well the ones on this list I can highlight."
      />
      <PagePortfolio />
    </div>
  );
}

export default page;
