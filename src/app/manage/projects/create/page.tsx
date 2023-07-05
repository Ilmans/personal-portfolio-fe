import React, { Fragment } from "react";
import HeadSection from "../../../../components/Dashboard/HeadSection";
import FormProject from "./FormProject";

function page() {
  return (
    <Fragment>
      <HeadSection
        right={<></>}
        title="Add New Project/Portfolio"
        desc="Display your project to others!"
      />
      <div className="mt-8">
        <FormProject />
      </div>
    </Fragment>
  );
}

export default page;
