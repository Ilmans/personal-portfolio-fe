import React from "react";

import Projects from "./Projects";
import Jumbotron from "../../components/Jumbotron";



function page() {
  
  return (
    <div className="lg:w-5/7 ">
      <Jumbotron
        title={" Things I’ve made trying to put my dent in the universe. "}
        description="  I’ve worked on tons of little projects over the years but these are the
        ones that I’m most proud of. Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved."
      />
      <Projects />
    </div>
  );
}

export default page;
