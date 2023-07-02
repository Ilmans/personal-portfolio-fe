import React, { Fragment } from "react";
import HeadSection from "../../../../components/Dashboard/HeadSection";
import Input from "../../../../components/Input";
import Form from "./Form";

function page() {
  return (
    <Fragment>
      <HeadSection
        right={<></>}
        title="Create New Article"
        desc="Sharing your article to other, great!"
      />
      <div className="mt-8">
       <Form />
      </div>
    </Fragment>
  );
}

export default page;
